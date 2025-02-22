import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoadingBar from "react-top-loading-bar";
import { Button } from "@/components/ui/button";
import { Plus, Pencil } from "lucide-react";

import {
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
} from "@/features/employeesApi";
import EmployeeForm from "./employee-form";
import { showToast } from "@/lib/utils";

const EmployeeDialog = ({
  mOpen = false,
  mEditingEmployee = null,
  onClose,
}) => {
  const [open, setOpen] = useState(mOpen);
  const [employee, setEmployee] = useState(mEditingEmployee);
  const [progress, setProgress] = useState(0);

  const [addEmployee] = useAddEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();

  useEffect(() => {
    setOpen(mOpen);
    setEmployee(mEditingEmployee);
  }, [mOpen, mEditingEmployee]);

  const handleSubmit = async (data) => {
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
      if (employee) {
        await updateEmployee({ id: employee.id, ...data }).unwrap();

        showToast("Employee updated successfully!");
      } else {
        await addEmployee({
          ...data,
          profile: "https://randomuser.me/api/portraits/men/9.jpg",
        }).unwrap();
        showToast("Employee added successfully!");
      }
      setProgress(100);
    } catch (error) {
      console.error("Error:", error);
      setProgress(0);
    } finally {
      clearInterval(interval);
      setOpen(false);
      onClose?.();
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {!employee && (
            <Button>
              <Plus size={16} className="mr-2" />
              Add Employee
            </Button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {employee ? "Edit Employee" : "Add Employee"}
            </DialogTitle>
          </DialogHeader>
          <EmployeeForm
            defaultValues={employee}
            onSubmit={handleSubmit}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
      <LoadingBar
        color="#22c55e"
        height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
};

export default EmployeeDialog;
