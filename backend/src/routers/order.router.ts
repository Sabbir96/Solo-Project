import { Router } from "express";
import asynchandler from "express-async-handler";
import { OrderModel } from "../models/order.model";
import { OrderStatus } from "../constants/order_status";
import auth from "../middlewares/auth.mid";

const router = Router();

router.use(auth);

router.post(
  "/create",
  asynchandler(async (req: any, res: any) => {
    const requestOrder = req.body;

    if (requestOrder.items.length <= 0) {
      res.status(400).send({ message: "Cart is empty" });
      return;
    }

    await OrderModel.deleteOne({
      user: req.user.id,
      status: OrderStatus.NEW,
    });

    const newOrder = new OrderModel({ ...requestOrder, user: req.user.id });
    await newOrder.save();
    res.status(201).send(newOrder);
  })
);

router.get(
  "/newOrderForCurrentUser",
  asynchandler(async (req: any, res) => {
    const order = await OrderModel.findOne({
      user: req.user.id,
      status: OrderStatus.NEW,
    });

    if (order) {
      res.status(200).send(order);
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  })
);

export default router;
