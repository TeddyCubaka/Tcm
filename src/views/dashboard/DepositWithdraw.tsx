// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider, { DividerProps } from '@mui/material/Divider'

interface DataType {
  logo: string
  title: string
  amount: string
  subtitle: string
  logoWidth: number
  logoHeight: number
}

const depositData = [
  {
    logoWidth: 50,
    logoHeight: 40,
    amount: '+$4,650',
    subtitle: 'Sell UI Kit',
    title: 'Gumroad Account',
    logo: '/images/cards/bus.png'
  },
  {
    logoWidth: 50,
    logoHeight: 40,
    amount: '+$92,705',
    title: 'Mastercard',
    subtitle: 'Wallet deposit',
    logo:  '/images/cards/bus.png'
  },
  {
    logoWidth: 50,
    logoHeight: 40,
    amount: '+$957',
    title: 'Stripe Account',
    subtitle: 'iOS Application',
    logo:  '/images/cards/bus.png'
  },
  {
    logoWidth: 50,
    logoHeight: 40,
    amount: '+$6,837',
    title: 'American Bank',
    subtitle: 'Bank Transfer',
    logo:  '/images/cards/bus.png'
  },
  {
    logoWidth: 50,
    logoHeight: 40,
    amount: '+$446',
    title: 'Bank Account',
    subtitle: 'Wallet deposit',
    logo:  '/images/cards/bus.png'
  }
]

const withdrawData = [
  {
    logoWidth: 50,
    logoHeight: 40,
    amount: '-$145',
    title: 'Google Adsense',
    subtitle: 'Paypal deposit',
    logo:  '/images/cards/bus.png'
  },
  {
    logoWidth: 50,
    logoHeight: 40,
    amount: '-$1870',
    title: 'Github Enterprise',
    logo:  '/images/cards/bus.png',
    subtitle: 'Security & compliance'
  },
  {
    logoWidth: 50,
    logoHeight: 40,
    amount: '-$450',
    title: 'Upgrade Slack Plan',
    subtitle: 'Debit card deposit',
    logo:  '/images/cards/bus.png'
  },
  {
    logoWidth: 50,
    logoHeight: 40,
    amount: '-$540',
    title: 'Digital Ocean',
    subtitle: 'Cloud Hosting',
    logo: '/images/cards/bus.png'
  },
  {
    logoWidth: 50,
    logoHeight: 40,
    amount: '-$21',
    title: 'AWS Account',
    logo:  '/images/cards/bus.png',
    subtitle: 'Choosing a Cloud Platform'
  }
]

// Styled Divider component
const Divider = styled(MuiDivider)<DividerProps>(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const DepositWithdraw = () => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Parking et frais'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography variant='caption'>voir plus</Typography>}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          {depositData.map((item: DataType, index: number) => {
            return (
              <Box
                key={item.title}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== depositData.length - 1 ? 6 : 0 }}
              >
                <Box sx={{ minWidth: 38, display: 'flex', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.title} width={item.logoWidth} height={item.logoHeight} />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>

      <Divider flexItem />

      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Retrait'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography variant='caption'>voir plus</Typography>}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          {withdrawData.map((item: DataType, index: number) => {
            return (
              <Box
                key={item.title}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== depositData.length - 1 ? 6 : 0 }}
              >
                <Box sx={{ minWidth: 36, display: 'flex', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.title} width={item.logoWidth} height={item.logoHeight} />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'error.main' }}>
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>
    </Card>
  )
}

export default DepositWithdraw
