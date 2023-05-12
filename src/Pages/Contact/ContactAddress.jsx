import { Grid } from "@mui/material"

const address = [
  {
    name: 'california showroom',
    address: '625 gloria union, california, united stated',
    email: 'hvac.california@gmail.com',
    tel: '(+84) 123 456 789'
  },
  {
    name: 'new york showroom',
    address: '8235 south ave. jamestown, new york',
    email: 'hvac.newyork@gmail.com',
    tel: '(+84) 123 456 789'
  },
  {
    name: 'florida showroom',
    address: '497 beaver ridge st. daytona beach, florida',
    email: 'hvac.florida@gmail.com',
    tel: '(+84) 123 456 789'
  },
]
export default function ContactAddress() {
  return (
      <Grid container padding={'100px 0 70px 0'}>
        {
          address.map(({name, address, email, tel}, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <div className="contact__address-item">
                <h4>{name}</h4>
                <p>
                  {address}<br />
                  {email}
                </p>
                <span>{tel}</span>
              </div>
            </Grid>
          ))
        }
      </Grid>
  )
}
