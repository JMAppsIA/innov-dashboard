import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import { Blank, Login, Register } from "./pages";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation("global");

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<MainLayout />}>
          <Route exact path="app" element={<Home id={`app`} translation={t}/>} />
          <Route exact path="ecommerce" element={<Blank id={`ecommerce`} />} />
          <Route exact path="analytics" element={<Blank id={`analytics`} />} />
          <Route exact path="banking" element={<Blank id={`banking`} />} />
          <Route exact path="booking" element={<Blank id={`booking`} />} />
          <Route exact path="calendar" element={<Blank id={`calendar`} />} />
          <Route exact path="inbox" element={<Blank id={`inbox`} />} />
          <Route exact path="settings" element={<Blank id={`settings`} />} />
          <Route exact path="mail" element={<Blank id={`mail`} />} />
          <Route exact path="chat" element={<Blank id={`chat`} />} />
          <Route exact path="calendar" element={<Blank id={`calendar`} />} />
          <Route exact path="kanban" element={<Blank id={`kanban`} />} />
          <Route exact path="user">
            <Route exact path="cards" element={<Blank id={`cards`} />} />
            <Route exact path="list" element={<Blank id={`list`} />} />
            <Route exact path="create" element={<Blank id={`create`} />} />
            <Route exact path="edit" element={<Blank id={`edit`} />} />
            <Route exact path="account" element={<Blank id={`account`} />} />
            <Route exact path="profile" element={<Blank id={`profile`} />} />
          </Route>
          <Route exact path="e-commerce">
            <Route exact path="shop" element={<Blank id={`shop`} />} />
            <Route exact path="product" element={<Blank id={`product`} />} />
            <Route exact path="list" element={<Blank id={`list`} />} />
            <Route exact path="create" element={<Blank id={`create`} />} />
            <Route exact path="edit" element={<Blank id={`edit`} />} />
            <Route exact path="checkout" element={<Blank id={`checkout`} />} />
          </Route>
          <Route exact path="invoice">
            <Route exact path="list" element={<Blank id={`list`} />} />
            <Route exact path="create" element={<Blank id={`create`} />} />
            <Route exact path="edit" element={<Blank id={`edit`} />} />
            <Route exact path="details" element={<Blank id={`details`} />} />
          </Route>
        </Route>
        <Route exact path="/auth/">
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
