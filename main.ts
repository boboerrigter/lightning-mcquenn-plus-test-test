basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
    } else {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 60)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
        }
    }
})
