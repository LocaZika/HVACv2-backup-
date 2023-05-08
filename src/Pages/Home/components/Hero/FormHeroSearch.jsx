import { Button, FormGroup, Grid } from "@mui/material";
import { SelectForm } from "Components";

const heroSearch = [
  {
    title: 'year',
    values: [2020, 2019, 2018, 2017, 2016, 2015]
  },
  {
    title: 'brand',
    values:['audi', 'lamborghini', 'bugatti', 'BWM']
  },
  {
    title: 'model',
    values: ['q3', 'q4', 'aventador']
  },
  {
    title: 'miles',
    values: [27, 25, 15, 10]
  },
]
export default function FormHeroSearch() {
  return (
    <FormGroup>
      <Grid container className="hero__tab-panel__form">
        <Grid
          item
          className="hero__tab-panel__form--listitem"
          container
        >
          <SelectForm select={heroSearch} submitText="Search" />
        </Grid>
      </Grid>
    </FormGroup>
  )
}
