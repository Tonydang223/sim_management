import { Routes, Route } from "react-router-dom";
import RootLayout from "@layouts/RootLayout";
import Home from "@pages/Home";
import Employee from "@pages/Employees";
import Customer from "@pages/Customers";
import Group from "@pages/Groups";
import Subscription from "@pages/Subscription";
import CellPhonePlan from "@pages/CellPhonePlan";
import Role from "@pages/Roles";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="group" element={<Group />} />
          <Route path="employee" element={<Employee />} />
          <Route path="customer" element={<Customer />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="cellphone_plan" element={<CellPhonePlan />} />
          <Route path="role" element={<Role />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
