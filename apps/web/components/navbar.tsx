import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";

import { useSelector } from "react-redux";
import { selectPages } from "../stores/redux/pages/selectors";

export const Navbar: React.FC = () => {
  const pages = useSelector(selectPages);

  return (
    <Stack direction="row" justifyContent="center" columnGap={1}>
      {pages?.map(({ attributes, id }) => {
        const href = attributes?.slug === "home" ? "" : attributes?.slug;

        return (
          <Link key={id} href={`/${href}`}>
            <Button>{attributes?.name}</Button>
          </Link>
        );
      })}
    </Stack>
  );
};
