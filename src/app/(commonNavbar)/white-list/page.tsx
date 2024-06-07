"use client";
import { Box, Button, Container, Typography } from "@mui/material";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

interface Column {
  id: "images" | "items" | "price" | "actions";
  label: string;
  minWidth?: number;
  align?: "center" | "left" | "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "images", label: "Images", minWidth: 170 },
  { id: "items", label: "Items", minWidth: 170 },
  { id: "price", label: "Price", minWidth: 170 },

  {
    id: "actions",
    label: "Actions",
    minWidth: 170,
    align: "left",
  },
];

const WhiteListPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // redux store data
  const { products } = useAppSelector((state) => state.whiteListProducts);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <Box>
        <Typography
          variant="h4"
          component={"h5"}
          textAlign={"center"}
          my={6}
          fontWeight={700}
        >
          Your White Listed Products
        </Typography>
        {products && products.length > 0 ? (
          <Box>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((product) => {
                        return (
                          <TableRow hover tabIndex={-1} key={product._id}>
                            <>
                              <TableCell>
                                <Image
                                  src={product.image}
                                  alt="product image"
                                  width={40}
                                  height={40}
                                />
                              </TableCell>
                              <TableCell>
                                <Typography>{product.name}</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography>{product.price}</Typography>
                              </TableCell>
                              <TableCell>
                                <Box
                                  sx={{
                                    display: "flex",
                                  }}
                                >
                                  <Typography
                                    href={`/shop/${product._id}`}
                                    component={Link}
                                  >
                                    <Button>
                                      <VisibilitySharpIcon />
                                    </Button>
                                  </Typography>
                                  <Typography component={Button} ml={2}>
                                    <DeleteSharpIcon />
                                  </Typography>
                                </Box>
                              </TableCell>
                            </>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 20, 50]}
                component="div"
                count={products.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Box>
        ) : (
          <Box>
            <Typography
              variant="h4"
              component={"h5"}
              textAlign={"center"}
              my={6}
              color={"red"}
              fontWeight={500}
            >
              There Are No Products In the White List
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default WhiteListPage;
