class AlertsController {

  public messages = [];
  constructor(

  ) {
  }
  close (i) {
    this.messages.splice(i, 1);
  }
}

AlertsController.$inject = [];

export default AlertsController;
