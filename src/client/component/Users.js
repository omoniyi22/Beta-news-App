import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUser } from "./../Actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
}));

export default function Users() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const isLoading = useSelector((state) => state.user.isLoading);
  const totalPages = useSelector((state) => state.user.totalPages);
  const currentPage = useSelector((state) => state.user.currentPage);
  const itemsPerPage = useSelector((state) => state.user.itemsPerPage);
  const previous = useSelector((state) => state.user.previous);
  const next = useSelector((state) => state.user.next);
  const history = useHistory();
  const location = useLocation();
  const { search } = location;
  const params = new URLSearchParams(search);
  const page = params.has("page") ? parseInt(params.get("page")) : 1;
  const rowsPerPage = params.has("rowsPerPage")
    ? parseInt(params.get("rowsPerPage"))
    : 10;

  const handleChangePage = (event, newPage) => {
    params.set("page", newPage + 1);
    // history.push("/settings/users?" + params.toString());
  };

  const handleChangeRowsPerPage = (event) => {
    params.delete("page");
    params.set("rowsPerPage", +event.target.value);
    history.push("/settings/users?" + params.toString());
  };

  const [searchValue, setSearchValue] = useState('')

  const onChange = (event) => {
    setSearchValue((event.target.value).trim());
  };

  const onSearch = () => {
    setSearchValue(searchValue);
    params.delete('page');
    params.delete('rowsPerPage');
    history.push('/settings/users?' + searchValue.toString());
    dispatch(getUsers(rowsPerPage ? rowsPerPage : '', page ? page : '', searchValue));
  };

  useEffect(() => {
    dispatch(getUsers(rowsPerPage, page, ""));
  }, [page, rowsPerPage, dispatch]);

  return (
    <div>
      <div>
        <h2>Users</h2>
        <Paper component="form" >
          <InputBase
            className={classes.input}
            placeholder="Search..."
            inputProps={{ "aria-label": "search..." }}
            onChange={onChange}
            onKeyPress={
              (event) => {
                if (event.key === 'Enter') {
                  event.preventDefault()

                  setSearchValue(searchValue);
                  params.delete('page');
                  params.delete('rowsPerPage');
                  history.push('/settings/users?' + searchValue.toString());
                  dispatch(getUsers(rowsPerPage ? rowsPerPage : '', page ? page : '', searchValue));
                }
              }
            }
          />
          <IconButton
            type="button"
            className={classes.iconButton}
            aria-label="search"
            onClick={onSearch}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>


      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : users && users.length > 0 ? (
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Actions</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.first_name}</TableCell>
                    <TableCell>{user.last_name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        size="small"
                        className={classes.buttonPrimary}
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        className={classes.buttonError}
                        startIcon={<CancelIcon />}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={totalPages}
            rowsPerPage={itemsPerPage}
            page={currentPage - 1}
            backIconButtonProps={{
              disabled: previous === null,
            }}
            nextIconButtonProps={{
              disabled: next === null,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
            <Typography variant="body2">No Users Available...</Typography>
          )}
    </div>
  );
}
