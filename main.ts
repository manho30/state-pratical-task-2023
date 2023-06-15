/**
 * @author manho <manho30@outlook.my>
 */
// Line tracker for reromicro
function lineTracker () {
    reromicro.ReadLineSensors()
    if (reromicro.LineSensorDetectsLine(LineSensors.Left) && (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
        reromicro.MoveForward(35)
        basic.pause(100)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.RunMotor(Motors.Left, 0)
        reromicro.RunMotor(Motors.Right, 35)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.RunMotor(Motors.Left, 35)
        reromicro.RunMotor(Motors.Right, 0)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.MoveForward(35)
    }
}
// Helper function for detect the obstacle
function __detectObstacle__ () {
    if (reromicro.ReadUltrasonic() <= 20) {
        reromicro.Brake()
        basic.pause(100)
    }
}
while (true) {
    __detectObstacle__()
    lineTracker()
}
