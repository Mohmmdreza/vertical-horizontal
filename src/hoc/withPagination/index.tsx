import { Box, Pagination, alpha } from "@mui/material";
import { useEffect, useState } from "react";

import { WithPaginationProps } from "./interface";

const defaultPage = 1;

export function withPagination<
  T extends WithPaginationProps = WithPaginationProps
>(WrappedComponent: React.ComponentType<T>) {
  const ComponentWithPagination = (
    props: Omit<T, keyof WithPaginationProps>
  ) => {
    //Pagination
    const [page, setPage] = useState(defaultPage);
    const handleChangePage = (
      event: React.ChangeEvent<unknown> | null,
      newPage: number
    ) => {
      setPage(newPage);
    };

    const renderPagination = (count: number) => {
      return count ? (
        <Pagination
          className="MyPagination"
          sx={{
            display: "flex",
            my: 5,
            mb: 0,
            justifyContent: "center",
            alignItems: "start",
            transition: "0.3s",
            ["& .muirtl-tjm9mo-MuiButtonBase-root-MuiPaginationItem-root.Mui-disabled"]:
              {
                opacity: 0,
              },
            ["& .MuiPagination-ul"]: {
              p: 2,
              borderRadius: "8px",
            },
            [`& .MuiPaginationItem-root`]: {
              borderRadius: "50px",
            },
            [`& .Mui-selected`]: {
              bgcolor: (t) => `${t.palette.primary.main} !important`,
              color: (t) => `${t.palette.common.white} !important`,
              fontWeight: "bold",
            },
          }}
          count={count}
          color="primary"
          onChange={handleChangePage}
          page={page}
        />
      ) : null;
    };

    useEffect(() => {
      setPage(defaultPage);
    }, []);

    return (
      <Box sx={{ width: "100%" }}>
        <WrappedComponent
          {...(props as T)}
          page={page}
          renderPagination={renderPagination}
        />
      </Box>
    );
  };

  return ComponentWithPagination;
}
