import { Request, Response, Router } from "express";
import { Order } from "../models/order.model";
const SSLCommerzPayment = require("sslcommerz-lts");
// const store_id = "<your_store_id>";
// const store_passwd = "<your_store_password>";
const is_live = false; //true for live, false for sandbox

//sslcommerz init

const router = Router();

router.post("/init", async (req: Request, res: Response) => {
  const { name, address, _id, totalPrice } = req.body;
  // console.log(req.body);

  const data = {
    total_amount: totalPrice,
    currency: "BDT",
    tran_id: _id, // use unique tran_id for each api call
    success_url: "http://localhost:3000/api/payments/ssl-payment-success",
    fail_url: "http://localhost:3000/api/payments/ssl-payment-fail",
    cancel_url: "http://localhost:3000/api/payments/ssl-payment-cancel",
    ipn_url: "http://localhost:3000/api/ssl-payment-ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: name,
    cus_email: "customer@example.com",
    cus_add1: address,
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  const sslcz = new SSLCommerzPayment(
    process.env.STORE_ID,
    process.env.PASSWORD,
    is_live
  );
  sslcz.init(data).then((apiResponse: { GatewayPageURL: any }) => {
    // Redirect the user to payment gateway
    console.log(apiResponse);
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ redirect: GatewayPageURL });
    console.log("Redirecting to: ", GatewayPageURL);
  });
});

router.post("/ssl-payment-success", async (req: Request, res: Response) => {
  res.redirect("http://localhost:4200/payment-success");
});

router.post("/ssl-payment-fail", async (req: Request, res: Response) => {
  res.redirect("http://localhost:4200/payment-fail");
});

router.post("/ssl-payment-cancel", async (req: Request, res: Response) => {
  res.redirect("http://localhost:4200/payment-cancel");
});

router.post("/ssl-payment-ipn", async (req: Request, res: Response) => {
  return res.status(200).json({
    data: req.body,
  });
});

export default router;
