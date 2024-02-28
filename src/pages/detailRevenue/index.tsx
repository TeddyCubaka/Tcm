// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Link from 'next/link'
import Button from '@mui/material/Button'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

interface RowType {
  CanalDeVente : number
  name: string
  date: string
  Produit: string
  ChiffreDAffaires : string
  status: string
  designation: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const rows: RowType[] = [
  {
    CanalDeVente : 27,
    status: 'succes',
    date: '09/27/2018',
    name: 'Sally Quinn',
    ChiffreDAffaires : '$19586.23',
    Produit: 'Carburant',
    designation: 'Human Resources Assistant'
  },
  {
    CanalDeVente : 61,
    date: '09/23/2016',
    ChiffreDAffaires : '$23896.35',
    status: 'valider',
    name: 'Margaret Bowers',
    Produit: 'Huile moteur',
    designation: 'Nuclear Power Engineer'
  },
  {
    CanalDeVente : 59,
    date: '10/15/2017',
    name: 'Minnie Roy',
    status: 'echec',
    ChiffreDAffaires : '$18991.67',
    Produit: 'Clès',
    designation: 'Environmental Specialist'
  },
  {
    CanalDeVente : 30,
    date: '06/12/2018',
    status: 'valider',
    ChiffreDAffaires : '$19252.12',
    name: 'Ralph Leonard',
    Produit: 'Frais',
    designation: 'Sales Representative'
  },
  {
    CanalDeVente : 66,
    status: 'valider',
    date: '03/24/2018',
    ChiffreDAffaires : '$13076.28',
    name: 'Annie Martin',
    designation: 'Operator',
    Produit: 'Huile moteur'
  },
  {
    CanalDeVente : 33,
    date: '08/25/2017',
    ChiffreDAffaires : '$10909.52',
    name: 'Adeline Day',
    status: 'pause ',
    Produit: 'Depanneur',
    designation: 'Senior Cost Accountant'
  },
  {
    CanalDeVente : 61,
    status: 'encours ',
    date: '06/01/2017',
    ChiffreDAffaires : '$17803.80',
    name: 'Lora Jackson',
    designation: 'Geologist',
    Produit: 'Pneu'
  },
  {
    CanalDeVente : 22,
    date: '12/03/2017',
    ChiffreDAffaires : '$12336.17',
    name: 'Rodney Sharp',
    status: 'encours',
    designation: 'Cost Accountant',
    Produit: 'payCanalDeVente '
  }
]

const statusObj: StatusObj = {
  encours: { color: 'info' },
  echec: { color: 'error' },
  pause: { color: 'primary' },
  succes: { color: 'warning' },
  valider: { color: 'success' }
}

const TotalReservationTable = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
  <Link href={'/'} passHref >
        <Button size='small' variant='contained' >
          Retour
        </Button>
        </Link>

        <Typography> Detail sur les chiffre affaires! 🥳
</Typography>
      </div>


    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Produit</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Chiffre d'affaires </TableCell>
              <TableCell>Canal de vente </TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.Produit}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.ChiffreDAffaires }</TableCell>
                <TableCell>{row.CanalDeVente }</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status]?.color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
     </div>
  )
}

export default TotalReservationTable
