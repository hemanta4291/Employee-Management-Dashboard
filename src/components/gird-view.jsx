import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import { fLname, showToast } from "@/lib/utils";
import EmployeeDialog from "./employee-dialog";
import { useDeleteEmployeeMutation } from "@/features/employeesApi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import LoadingBar from "react-top-loading-bar";

const GirdView = ({ data }) => {
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const [open, setOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [progress, setProgress] = useState(0);

  const editEmployee = (employee) => {
    setEditingEmployee(employee);
    setOpen(true);
  };

  const deleteEmployeeHandle = async (id) => {
    setProgress(10);

    let progressValue = 10;
    const interval = setInterval(() => {
      progressValue += 10;
      setProgress(progressValue);
      if (progressValue >= 90) {
        clearInterval(interval);
      }
    }, 200);

    try {
      await deleteEmployee(id).unwrap();
      setProgress(100);
      showToast("Employee deleted successfully!", "error");
    } catch (error) {
      console.error("Error:", error);
      setProgress(0);
    } finally {
      clearInterval(interval);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((employee, index) => (
        <div className="inset-shadow-md transition-all duration-300 rounded bg-white dark:bg-gray-900 p-4 relative hover:shadow-2xl dark:hover:shadow-gray-700">
          <Avatar className="w-[150px] h-[150px]">
            <AvatarImage src={employee.profile} alt="@shadcn" />
            <AvatarFallback>{fLname(employee.name)}</AvatarFallback>
          </Avatar>
          <div className="absolute right-4 top-4 flex flex-col gap-2">
            <Button
              className="w-7 h-7 p-0 bg-white text-gray-950 border border-gray-400 hover:text-white transition-all duration-300"
              onClick={() => editEmployee(employee)}>
              <Edit size="18" />
            </Button>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button className="w-7 h-7 p-0 bg-white text-red-600 border border-gray-400 hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300">
                  <Trash size="18" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => deleteEmployeeHandle(employee.id)}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <h3 className="text-xl font-bold py-6">{employee.name}</h3>
          <div className="">
            <p className="text-sm text-gray-900 dark:text-gray-50 pb-2">
              {" "}
              <span className="font-semibold">Email Address</span> :
              {employee.email}
            </p>
            <p className="text-sm text-gray-900 dark:text-gray-50 pb-2">
              {" "}
              <span className="font-semibold">Contact Number</span> :{" "}
              {employee.phone}
            </p>
            <p className="text-sm text-gray-900 dark:text-gray-50">
              {" "}
              <span className="font-semibold">Address</span> :{" "}
              {employee.address}
            </p>
          </div>
        </div>
      ))}
      {open && (
        <EmployeeDialog
          mOpen={open}
          mEditingEmployee={editingEmployee}
          onClose={() => setOpen(false)}
        />
      )}

      <LoadingBar
        color="#ef4444"
        height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  );
};

export default GirdView;
