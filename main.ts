// Line tracker for reromicro
function lineTracker () {
    reromicro.ReadLineSensors()
    if (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.RunMotor(Motors.Left, 20)
        reromicro.RunMotor(Motors.Right, 35)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.RunMotor(Motors.Left, 35)
        reromicro.RunMotor(Motors.Right, 20)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.MoveForward(35)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.RunMotor(Motors.Left, 0)
        reromicro.RunMotor(Motors.Right, 35)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.RunMotor(Motors.Left, 35)
        reromicro.RunMotor(Motors.Right, 0)
    } else {
        reromicro.Brake()
    }
}
// Helper function for detect the obstacle
function __detectObstacle__ () {
    if (reromicro.ReadUltrasonic() <= 20) {
        reromicro.Brake()
    }
}
while (true) {
    __detectObstacle__()
    lineTracker()
}
