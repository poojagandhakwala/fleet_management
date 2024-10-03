import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ViewFleet from "./ViewFleet";
import EyeIcon from "@mui/icons-material/RemoveRedEye";
import { toast } from "react-toastify";

const Fleets = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [name, setName] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [selectedFleet, setSelectedFleet] = useState(null);
  const navigate = useNavigate();

  const columns = [
    "Fleet Name",
    "Type",
    "Billing",
    "Location",
    "Support Email",
    "Created Date",
    "Action",
  ];

  const ActionIcons = ({ fleet, onDelete }) => {
    const fleetData = {
      name: fleet?.name,
      type: fleet.type,
      billing: fleet?.billing,
      email: fleet?.email,
      location: fleet?.location,
    };

    return (
      <div className="flex pr-0.5">
        <EyeIcon
          className="cursor-pointer p-0.5 rounded-lg mr1"
          onClick={() => {
            setSelectedFleet(fleet);
          }}
        />
        <EditIcon
          className="cursor-pointer p-0.5 rounded-lg mr1"
          onClick={() =>
            navigate("edit-fleet", { state: { fleet: fleetData } })
          }
        />
        <DeleteIcon
          className="cursor-pointer p-0.5 rounded-lg "
          onClick={onDelete}
        />
      </div>
    );
  };

  const handleDelete = () => {
    const trimmedName = name.trim(); // Remove extra spaces from the name

    axios
      .delete(`https://fleet-management-server.vercel.app/fleets/${encodeURIComponent(trimmedName)}`)
      .then((res) => {
        if (res.status === 404) {
          toast.warn("Fleet not found!");
        } else {
          toast.success("Fleet deleted Successfully!");
        }
        setDeleteIndex(null)
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          toast.warn("Fleet not found!");
        } else {
          toast.error("An error occurred while deleting the fleet.");
        }
      });
  };
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchData = async () => {
    try {
      // const response = await axios.get('https://run.mocky.io/v3/0b206f36-520b-4b7a-886e-74b483e792aa')
      const response = await axios.get("https://fleet-management-server.vercel.app/fleets");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filteredRows = data?.filter((item) => {
    if (search !== "") {
      return item?.name
        ?.toString()
        .toLowerCase()
        .includes(search.toLowerCase());
    } else {
      return item;
    }
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col w-full mx-3 h-full">
        <div className="py-2 text-white flex justify-between">
          <h5 className="text-lg font-bold text-start">Fleet</h5>
          <div className="flex items-center">
            <HelpOutlineIcon className="mx-2" />
            <NotificationsIcon className="mx-2" />
            <p className="mx-2 bg-red-400 border border-white rounded-full px-2 py-1.5 text-center">
              CE
            </p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl text-sm p-3 h-full ">
          <div className="bg-gray-200 w-full flex justify-between rounded-xl px-2 py-1">
            <div className="relative w-72">
              <input
                type="text"
                placeholder="Search by Name"
                className="w-full bg-white rounded-xl px-3 py-2 placeholder:text-gray-900"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <a href="/add-fleet">
              <button className="bg-gray-700 text-white hover:border-[#283246] flex items-center justify-between w-32 px-4 py-2 rounded-xl">
                <AddIcon />
                <p>Add Fleet</p>
              </button>
            </a>
          </div>
          <Paper sx={{ width: "100%" }} className="!rounded-xl my-2 mt-7">
            <TableContainer className="h-full">
              <Table stickyHeader aria-label="sticky table !rounded-xl">
                <TableHead className="!rounded-xl">
                  <TableRow className="!rounded-xl">
                    {columns.map((column, index) => (
                      <TableCell
                        key={index}
                        align="left"
                        className="!bg-gray-200 first:!rounded-tl-xl last:!rounded-tr-xl !py-2"
                      >
                        {column}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {loading && (
                    <TableRow>
                      <TableCell colSpan={7} className="!text-center">
                        Loading...
                      </TableCell>
                    </TableRow>
                  )}

                  {filteredRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={index}
                        >
                          <TableCell align="left" className="!py-3">
                            {row?.name}
                          </TableCell>
                          <TableCell align="left" className="!py-1">
                            {row?.type}
                          </TableCell>
                          <TableCell align="left" className="!py-1">
                            {row?.type === "Public" ? (
                              <li className=" w-fit text-green-600 border border-green-600 bg-green-100 bg-opacity-50 px-2 rounded-full">
                                Public Billing Plan
                              </li>
                            ) : (
                              <li className=" w-fit text-red-600 border border-red-600 bg-red-100 bg-opacity-50 px-2 rounded-full">
                                Private Billing Plan
                              </li>
                            )}
                          </TableCell>
                          <TableCell align="left" className="!py-1">
                            {row?.location}
                          </TableCell>
                          <TableCell align="left" className="!py-1">
                            {row?.email}
                          </TableCell>
                          <TableCell align="left" className="!py-1">
                            {row?.createdDate}
                          </TableCell>
                          <TableCell align="left" className="!py-1">
                            <ActionIcons
                              fleet={row}
                              onDelete={() => {setName(row?.name);setDeleteIndex(index)}}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}

                  {!filteredRows.length > 0 && !loading && (
                    <TableRow>
                      <TableCell colSpan={7} className="!text-center">
                        No items found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          {!loading && (
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={filteredRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </div>

        {selectedFleet && (
          <ViewFleet
            fleet={selectedFleet}
            setSelectedFleet={setSelectedFleet}
          />
        )}

        {/* Popup */}
        {deleteIndex !== null && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white flex flex-col h-60 w-[28rem] items-center justify-center text-center rounded-xl py-3 px-6">
              <div className="flex w-full justify-between pb-2">
                <CloseIcon
                  className="absolute right-3 cursor-pointer"
                  onClick={() => setDeleteIndex(null)}
                />
                <h4 className="text-lg font-semibold">Delete</h4>
              </div>
              <div className="text-white bg-[#283246] mt-3 p-1 rounded-xl items-center">
                <DeleteIcon className="!text-4xl" />
              </div>
              <p className="text-[#283246] text-base font-semibold my-2">
                Are you sure you want to Delete?
              </p>
              <div className="mt-3 flex gap-4 pb-4">
                <button
                  className="bg-gradient-to-r from-gray-600 to-[#283246] text-white w-40 py-2 rounded-lg shadow-md"
                  onClick={() => handleDelete()}
                >
                  Delete
                </button>
                <button
                  className="border border-[#283246] rounded-xl text-[#283246] w-40 shadow-md"
                  onClick={() => setDeleteIndex(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fleets;
