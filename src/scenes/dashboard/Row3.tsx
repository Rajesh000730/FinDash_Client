import BoxHeader from '@/Components/BoxHeader';
import DashboardBox from '@/Components/DashboardBox'
import FlexBetween from '@/Components/FlexBetween';
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

function Row3() {
  const {data: transactionData} = useGetTransactionsQuery()
  const {data: productData} = useGetProductsQuery()
  const {data: kpiData} =useGetKpisQuery()
  const {palette} = useTheme()
 const pieColors = [palette.primary[800],palette.primary[500],]
  
 const pieChartData = useMemo(() => {
  if (kpiData) {
    const totalExpenses = kpiData[0].totalExpenses;
    return Object.entries(kpiData[0].expensesByCategory).map(
      ([key, value]) => {
        return [
          {
            name: key,
            value: value,
          },
          {
            name: `${key} of Total`,
            value: totalExpenses - value,
          },
        ];
      }
    );
  }
}, [kpiData]);

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
      
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params:GridCellParams) => `$${params.value}`
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params:GridCellParams) => `$${params.value}`
    }
  ]

  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
      
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
      renderCell: (params:GridCellParams) => `${params.value}`
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params:GridCellParams) => `${params.value}`
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.35,
      renderCell: (params:GridCellParams) => `${(params.value as Array<string>).length}`
    }
  ]
  return (
   <>
    <DashboardBox  gridArea={"g"} maxHeight={350}>
      <BoxHeader 
        title='List of Products'
        sideText={`${productData?.length} products `}
      />
      <Box mt="0.5rem" p="0 0.5rem" height={"75%"}
      sx={{
        "& .MuiDataGrid-root":{
          color:  palette.grey[300],
          border: "none"
         },
         "& .MuiDataGrid-cell":{
          borderBottom:  `1px solid ${palette.grey[800]} !important`,
          border: "none"
         },
         "& .MuiDataGrid-columnHeaders":{
          borderBottom:  `1px solid ${palette.grey[800]} !important`,
          border: "none"
         },
         "& .MuiDataGrid-columnSeparator":{
          visibility:"hidden"
         },
        
      }}
      >
      <DataGrid 
      columnHeaderHeight={25}
      rowHeight={35}
      hideFooter={true}
      rows={productData || []}
      columns={productColumns}

      />
      </Box>
    </DashboardBox>
    <DashboardBox  gridArea={"h"} maxHeight={350}>
      <BoxHeader 
        title='Recent Orders'
        sideText={`${transactionData?.length} latest transactions `}
      />
      <Box mt="1rem" p="0 0.5rem" height={"80%"}
      sx={{
        "& .MuiDataGrid-root":{
          color:  palette.grey[300],
          border: "none"
         },
         "& .MuiDataGrid-cell":{
          borderBottom:  `1px solid ${palette.grey[800]} !important`,
          border: "none"
         },
         "& .MuiDataGrid-columnHeaders":{
          borderBottom:  `1px solid ${palette.grey[800]} !important`,
          border: "none"
         },
         "& .MuiDataGrid-columnSeparator":{
          visibility:"hidden"
         },
        
      }}
      >
      <DataGrid 
      columnHeaderHeight={25}
      rowHeight={35}
      hideFooter={true}
      rows={transactionData || []}
      columns={transactionColumns}

      />
      </Box>
    </DashboardBox>
    <DashboardBox  gridArea={"i"} maxHeight={400}>
      <BoxHeader title='Expense Breakdown by Category' sideText='4%'/>
      <FlexBetween mt={"0.5rem"} gap={"0.5rem"} p={"0 1rem"} textAlign={"center"} maxHeight={350}>
        {pieChartData?.map((data)=>{
          return (
            <Box  maxHeight={400}>
          <PieChart
              width={110}
              height={120}
              margin={{
                bottom:50
              }}
            >
              <Pie
                stroke="none"
                data={data}
                innerRadius={18}
                outerRadius={35}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                ))}
              </Pie>
            </PieChart>
            <Typography  variant='h6'>{data[0].name}</Typography>
          </Box>
          )
        })}
        
      </FlexBetween>
    </DashboardBox>
    <DashboardBox  gridArea={"j"}>
        <BoxHeader  
        title='"Overall Summary and Explanation Data'
        sideText='+15%'
        />
        <Box
        height={"15px"}
        margin={"1.25rem 1rem 0.4rem 1rem"}
        bgcolor={palette.primary[800]}
        borderRadius={"1rem"}
        >
          <Box
        height={"15px"}
        margin={"1.25rem 1rem 0.4rem 1rem"}
        bgcolor={palette.primary[800]}
        borderRadius={"1rem"}
        width={"40%"}
        ></Box>
          <Typography margin="0 1rem" variant='h6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae facilis eligendi fuga et. Ea, sequi doloremque voluptates dicta eaque blanditiis odit natus eius! Voluptas repudiandae facilis quidem ipsum tenetur vero atque aspernatur beatae eveniet excepturi. Saepe ex provident excepturi at unde doloremque debitis commodi tenetur quia alias optio veritatis suscipit id nobis sint, magni voluptates ab obcaecati sit ut asperiores! Voluptatum laudantium, quo blanditiis dolore doloremque qui, minus natus unde iste voluptate quas sit officiis consectetur suscipit soluta eos deserunt. Cumque, quibusdam corporis distinctio sit sequi nulla consectetur quam atque veritatis id nam soluta itaque ex vitae esse dolorum?
          </Typography>
        </Box>
    </DashboardBox>

   </>
  )
}

export default Row3