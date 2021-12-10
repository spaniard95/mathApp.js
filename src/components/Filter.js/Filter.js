import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const categoriesLi = [
  ["Υποχρεωτικά", "ΠΚΘΜ", "ΠΚΕΜ", "ΚΘΜ", "ΚΕΜ", "ΔΔΜ", "ΔΦ", "ΔΟΕ", "ΔΠΤ"],
  ["Περασμένα", "Bookmarked"],
];

const Filter = ({ filterSlice, clickCheck, filterIndex }) => {
  return (
    <div>
      <Typography variant="subtitle1" sx={{ marginTop: 2 }} align="left">
        {filterSlice.title}
      </Typography>
      <List
        sx={{
          width: "25%",
          maxWidth: 300,
          height: 300,
          align: "left", //doesnt work
        }}
      >
        {filterSlice.checks.map((category, index) => {
          // const labelId = `checkbox-list-label-${index}`;
          return (
            <ListItem
              key={index}
              disableGutters
              sx={{
                height: 5,
                margin: 2,
                boxSizing: "border-box",
              }}
            >
              <ListItemButton
                role={undefined}
                onClick={() => clickCheck(filterIndex, index)}
                sx={{
                  "&:hover": {
                    color: "rgb(0, 172, 172)",
                    backgroundColor: "transparent",
                  },
                }}
                dense
                disableRipple
              >
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <Checkbox
                    edge="start"
                    checked={category}
                    tabIndex={-1}
                    sx={{
                      color: "rgb(10, 172, 172)",
                      "&.Mui-checked": {
                        color: "rgb(0, 172, 172)",
                      },
                      // pl: 10, //??????how to bring text closer to checkbox ?????????
                      // pr: 0,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={categoriesLi[filterIndex][index]}
                  sx={{ align: "left" }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Filter;
