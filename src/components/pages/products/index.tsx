import ProductCard from "@/components/shared/product-card"
import { Button, FormControlLabel, Grid, Switch } from "@mui/material"
import { Stack, Container } from "@mui/system"
import * as React from "react"
import { productCardData } from "./data"
import { useSelector, useDispatch } from "react-redux"
import { changeType } from "@/store/slices/componentTypeSlice"

interface IProductsProps {}

const Products: React.FunctionComponent<IProductsProps> = (props) => {
  const dispatch = useDispatch()
  const componentType = useSelector((state: any) => state.componentType.type)
  const handleChangeType = () => {
    dispatch(changeType())
  }

  const isVertical = Boolean(componentType === "vertical")

  return (
    <Stack my={4}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Grid container spacing={3} flexDirection="row-reverse">
            {productCardData.map((item) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={isVertical ? 3 : 4}
                  key={item.id}
                >
                  <ProductCard item={item} type={componentType} />
                </Grid>
              )
            })}
          </Grid>
          <Stack alignItems="center">
            <Button variant="contained" onClick={handleChangeType}>
              {isVertical ? "Show horizontal" : " Show vertical"}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Products
