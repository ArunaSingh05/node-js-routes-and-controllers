export default class ByeController {
  public static async sayBye(req, res) {
    res.status(200).send({ message: "Bye" });
  }
}