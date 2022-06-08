export default class HelloController {
  public static async sayHello(req, res) {
    res.status(200).send({ message: "Hello" });
  }
}