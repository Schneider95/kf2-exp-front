module = angular.module('kf2App');

module.factory('BuildsList', ['BackEndRequestService', function (BackEndRequestService) {
    var buildList = {
      Berserker: {
        statIndex: '1_11',
        
        1 :  ["Poison Resistance"],
        2 :  ["Sonic Resistance"],
        
        5 :  ["Poison Resistance", "Vampire"],
        9 :  ["Poison Resistance", "Fortitude"],
        6 :  ["Sonic Resistance", "Vampire"],
        10 :  ["Sonic Resistance", "Fortitude"],
        
        21 : ["Poison Resistance", "Vampire", "Furious Defender"],
        22 : ["Sonic Resistance", "Vampire", "Furious Defender"],
        25 : ["Poison Resistance", "Fortitude", "Furious Defender"],
        26 : ["Sonic Resistance", "Fortitude", "Furious Defender"],
        37 : ["Poison Resistance", "Vampire", "Block"],
        38 : ["Sonic Resistance", "Vampire", "Block"],
        41 : ["Poison Resistance", "Fortitude", "Block"],
        42 : ["Sonic Resistance", "Fortitude", "Block"],
                       
        85 : ["Poison Resistance", "Vampire", "Furious Defender", "Parry"],
        86 : ["Sonic Resistance", "Vampire", "Furious Defender", "Parry"],
        89 : ["Poison Resistance", "Fortitude", "Furious Defender", "Parry"],
        90 : ["Sonic Resistance", "Fortitude", "Furious Defender", "Parry"],
        101 : ["Poison Resistance", "Vampire", "Block", "Parry"],
        102 : ["Sonic Resistance", "Vampire", "Block", "Parry"],
        105 : ["Poison Resistance", "Fortitude", "Block", "Parry"],
        106 : ["Sonic Resistance", "Fortitude", "Block", "Parry"],
        149 : ["Poison Resistance", "Vampire", "Furious Defender", "Smash"],
        150 : ["Sonic Resistance", "Vampire", "Furious Defender", "Smash"],
        153 : ["Poison Resistance", "Fortitude", "Furious Defender", "Smash"],
        154 : ["Sonic Resistance", "Fortitude", "Furious Defender", "Smash"],
        165 : ["Poison Resistance", "Vampire", "Block", "Smash"],
        166 : ["Sonic Resistance", "Vampire", "Block", "Smash"],
        169 : ["Poison Resistance", "Fortitude", "Block", "Smash"],
        170 : ["Sonic Resistance", "Fortitude", "Block", "Smash"],
        
        341 : ["Poison Resistance", "Vampire", "Furious Defender", "Parry", "Spartan"],
        342 : ["Sonic Resistance", "Vampire", "Furious Defender", "Parry", "Spartan"],
        345 : ["Poison Resistance", "Fortitude", "Furious Defender", "Parry", "Spartan"],
        346 : ["Sonic Resistance", "Fortitude", "Furious Defender", "Parry", "Spartan"],
        357 : ["Poison Resistance", "Vampire", "Block", "Parry", "Spartan"],
        358 : ["Sonic Resistance", "Vampire", "Block", "Parry", "Spartan"],
        361 : ["Poison Resistance", "Fortitude", "Block", "Parry", "Spartan"],
        362 : ["Sonic Resistance", "Fortitude", "Block", "Parry", "Spartan"],         
        405 : ["Poison Resistance", "Vampire", "Furious Defender", "Smash", "Spartan"],
        406 : ["Sonic Resistance", "Vampire", "Furious Defender", "Smash", "Spartan"],
        409 : ["Poison Resistance", "Fortitude", "Furious Defender", "Smash", "Spartan"],
        410 : ["Sonic Resistance", "Fortitude", "Furious Defender", "Smash", "Spartan"],
        421 : ["Poison Resistance", "Vampire", "Block", "Smash", "Spartan"],
        422 : ["Sonic Resistance", "Vampire", "Block", "Smash", "Spartan"],
        425 : ["Poison Resistance", "Fortitude", "Block", "Smash", "Spartan"],
        426 : ["Sonic Resistance", "Fortitude", "Block", "Smash", "Spartan"],
        597 : ["Poison Resistance", "Vampire", "Furious Defender", "Parry", "Menace"],
        598 : ["Sonic Resistance", "Vampire", "Furious Defender", "Parry", "Menace"],
        601 : ["Poison Resistance", "Fortitude", "Furious Defender", "Parry", "Menace"],
        602 : ["Sonic Resistance", "Fortitude", "Furious Defender", "Parry", "Menace"],
        613 : ["Poison Resistance", "Vampire", "Block", "Parry", "Menace"],
        614 : ["Sonic Resistance", "Vampire", "Block", "Parry", "Menace"],
        617 : ["Poison Resistance", "Fortitude", "Block", "Parry", "Menace"],
        618 : ["Sonic Resistance", "Fortitude", "Block", "Parry", "Menace"],
        661 : ["Poison Resistance", "Vampire", "Furious Defender", "Smash", "Menace"],
        662 : ["Sonic Resistance", "Vampire", "Furious Defender", "Smash", "Menace"], 
        666 : ["Sonic Resistance", "Fortitude", "Furious Defender", "Smash", "Menace"],
        675 : ["Poison Resistance", "Fortitude", "Furious Defender", "Smash", "Menace"],
        677 : ["Poison Resistance", "Vampire", "Block", "Smash", "Menace"],
        678 : ["Sonic Resistance", "Vampire", "Block", "Smash", "Menace"],
        681 : ["Poison Resistance", "Fortitude", "Block", "Smash", "Menace"],
        682 : ["Sonic Resistance", "Fortitude", "Block", "Smash", "Menace"],          
      },
      Commando: {
        statIndex: '1_2',
        
        1 :  ["Large mags"],
        2 :  ["Backup"],
        
        5 :  ["Large mags", "Impact"],
        6 :  ["Backup", "Impact"],
        9 :  ["Large mags", "Tactical Reload"],
        10 :  ["Backup", "Tactical Reload"],
        
        21:  ["Large mags", "Impact", "Leadership"],
        22:  ["Backup", "Impact", "Leadership"],
        25:  ["Large mags", "Tactical Reload", "Leadership"],
        26:  ["Backup", "Tactical Reload", "Leadership"],
        37:  ["Large mags", "Impact", "Call Out"],
        38:  ["Backup", "Impact", "Call Out"],
        41:  ["Large mags", "Tactical Reload", "Call Out"],
        42:  ["Backup", "Tactical Reload", "Call Out"],
        
        85:  ["Large mags", "Impact", "Leadership", "Single Fire"],
        86:  ["Backup", "Impact", "Leadership", "Single Fire"],
        89:  ["Large mags", "Tactical Reload", "Leadership", "Single Fire"],
        90:  ["Backup", "Tactical Reload", "Leadership", "Single Fire"],
        101:  ["Large mags", "Impact", "Call Out", "Single Fire"],
        102:  ["Backup", "Impact", "Call Out", "Single Fire"],
        105:  ["Large mags", "Tactical Reload", "Call Out", "Single Fire"],
        106:  ["Backup", "Tactical Reload", "Call Out", "Single Fire"],
        149:  ["Large mags", "Impact", "Leadership", "Autofire"],
        150:  ["Backup", "Impact", "Leadership", "Autofire"],
        153:  ["Large mags", "Tactical Reload", "Leadership", "Autofire"],
        154:  ["Backup", "Tactical Reload", "Leadership", "Autofire"],
        165:  ["Large mags", "Impact", "Call Out", "Autofire"],
        166:  ["Backup", "Impact", "Call Out", "Autofire"],
        169:  ["Large mags", "Tactical Reload", "Call Out", "Autofire"],
        170:  ["Backup", "Tactical Reload", "Call Out", "Autofire"],
        
        341:  ["Large mags", "Impact", "Leadership", "Single Fire", "Rapid Fire"],
        342:  ["Backup", "Impact", "Leadership", "Single Fire", "Rapid Fire"],
        345:  ["Large mags", "Tactical Reload", "Leadership", "Single Fire", "Rapid Fire"],
        346:  ["Backup", "Tactical Reload", "Leadership", "Single Fire", "Rapid Fire"],
        357:  ["Large mags", "Impact", "Call Out", "Single Fire", "Rapid Fire"],
        358:  ["Backup", "Impact", "Call Out", "Single Fire", "Rapid Fire"],
        361:  ["Large mags", "Tactical Reload", "Call Out", "Single Fire", "Rapid Fire"],
        362:  ["Backup", "Tactical Reload", "Call Out", "Single Fire", "Rapid Fire"],
        405:  ["Large mags", "Impact", "Leadership", "Autofire", "Rapid Fire"],
        406:  ["Backup", "Impact", "Leadership", "Autofire", "Rapid Fire"],
        409:  ["Large mags", "Tactical Reload", "Leadership", "Autofire", "Rapid Fire"],
        410:  ["Backup", "Tactical Reload", "Leadership", "Autofire", "Rapid Fire"],
        421:  ["Large mags", "Impact", "Call Out", "Autofire", "Rapid Fire"],
        422:  ["Backup", "Impact", "Call Out", "Autofire", "Rapid Fire"],
        425:  ["Large mags", "Tactical Reload", "Call Out", "Autofire", "Rapid Fire"],
        426:  ["Backup", "Tactical Reload", "Call Out", "Autofire", "Rapid Fire"],
        597:  ["Large mags", "Impact", "Leadership", "Single Fire", "Professionnal"],
        598:  ["Backup", "Impact", "Leadership", "Single Fire", "Professionnal"],
        601:  ["Large mags", "Tactical Reload", "Leadership", "Single Fire", "Professionnal"],
        602:  ["Backup", "Tactical Reload", "Leadership", "Single Fire", "Professionnal"],
        613:  ["Large mags", "Impact", "Call Out", "Single Fire", "Professionnal"],
        614:  ["Backup", "Impact", "Call Out", "Single Fire", "Professionnal"],
        617:  ["Large mags", "Tactical Reload", "Call Out", "Single Fire", "Professionnal"],
        618:  ["Backup", "Tactical Reload", "Call Out", "Single Fire", "Professionnal"],
        661:  ["Large mags", "Impact", "Leadership", "Autofire", "Professionnal"],
        662:  ["Backup", "Impact", "Leadership", "Autofire", "Professionnal"],
        665:  ["Large mags", "Tactical Reload", "Leadership", "Autofire", "Professionnal"],
        666:  ["Backup", "Tactical Reload", "Leadership", "Autofire", "Professionnal"],
        677:  ["Large mags", "Impact", "Call Out", "Autofire", "Professionnal"],
        678:  ["Backup", "Impact", "Call Out", "Autofire", "Professionnal"],
        681:  ["Large mags", "Tactical Reload", "Call Out", "Autofire", "Professionnal"],
        682:  ["Backup", "Tactical Reload", "Call Out", "Autofire", "Professionnal"],
      },
         Demolition : {
        statIndex: '1_61',
        
        1 : ["Grenade Supplier"],
        2 : ["Contact"],
          
        5 : ["Grenade Supplier", "Resistance"],
        6 : ["Contact", "Resistance"],
        9 : ["Grenade Supplier", "Sacrifice"],
        10 : ["Contact", "Sacrifice"],
        
        21 : ["Grenade Supplier", "Resistance", "Door Traps"],
        22 : ["Contact", "Resistance", "Door Traps"],
        25 : ["Grenade Supplier", "Sacrifice", "Door Traps"],
        26 : ["Contact", "Sacrifice", "Door Traps"],
        37 : ["Grenade Supplier", "Resistance", "Siren Resistance"],
        38 : ["Contact", "Resistance", "Siren Resistance"],
        41 : ["Grenade Supplier", "Sacrifice", "Siren Resistance"],
        42 : ["Contact", "Sacrifice", "Siren Resistance"],
        
        85 : ["Grenade Supplier", "Resistance", "Door Traps", "Off Perk"],
        86 : ["Contact", "Resistance", "Door Traps", "Off Perk"],
        89 : ["Grenade Supplier", "Sacrifice", "Door Traps", "Off Perk"],
        90 : ["Contact", "Sacrifice", "Door Traps", "Off Perk"],
        101 : ["Grenade Supplier", "Resistance", "Siren Resistance", "Off Perk"],
        102 : ["Contact", "Resistance", "Siren Resistance", "Off Perk"],
        105 : ["Grenade Supplier", "Sacrifice", "Siren Resistance", "Off Perk"],
        106 : ["Contact", "Sacrifice", "Siren Resistance", "Off Perk"],
        149 : ["Grenade Supplier", "Resistance", "Door Traps", "On Perk"],
        150 : ["Contact", "Resistance", "Door Traps", "On Perk"],
        153 : ["Grenade Supplier", "Sacrifice", "Door Traps", "On Perk"],
        154 : ["Contact", "Sacrifice", "Door Traps", "On Perk"],
        165 : ["Grenade Supplier", "Resistance", "Siren Resistance", "On Perk"],
        166 : ["Contact", "Resistance", "Siren Resistance", "On Perk"],
        169 : ["Grenade Supplier", "Sacrifice", "Siren Resistance", "On Perk"],
        170 : ["Contact", "Sacrifice", "Siren Resistance", "On Perk"],
        
        341 : ["Grenade Supplier", "Resistance", "Door Traps", "Off Perk", "Nuke"],
        342 : ["Contact", "Resistance", "Door Traps", "Off Perk", "Nuke"],
        345 : ["Grenade Supplier", "Sacrifice", "Door Traps", "Off Perk", "Nuke"],
        346 : ["Contact", "Sacrifice", "Door Traps", "Off Perk", "Nuke"],
        357 : ["Grenade Supplier", "Resistance", "Siren Resistance", "Off Perk", "Nuke"],
        358 : ["Contact", "Resistance", "Siren Resistance", "Off Perk", "Nuke"],
        361 : ["Grenade Supplier", "Sacrifice", "Siren Resistance", "Off Perk", "Nuke"],
        362 : ["Contact", "Sacrifice", "Siren Resistance", "Off Perk", "Nuke"],
        405 : ["Grenade Supplier", "Resistance", "Door Traps", "On Perk", "Nuke"],
        406 : ["Contact", "Resistance", "Door Traps", "On Perk", "Nuke"],
        409 : ["Grenade Supplier", "Sacrifice", "Door Traps", "On Perk", "Nuke"],
        410 : ["Contact", "Sacrifice", "Door Traps", "On Perk", "Nuke"],
        421 : ["Grenade Supplier", "Resistance", "Siren Resistance", "On Perk", "Nuke"],
        422 : ["Contact", "Resistance", "Siren Resistance", "On Perk", "Nuke"],
        425 : ["Grenade Supplier", "Sacrifice", "Siren Resistance", "On Perk", "Nuke"],
        426 : ["Contact", "Sacrifice", "Siren Resistance", "On Perk", "Nuke"],
        597 : ["Grenade Supplier", "Resistance", "Door Traps", "Off Perk", "Concussive Force"],
        598 : ["Contact", "Resistance", "Door Traps", "Off Perk", "Concussive Force"],
        601 : ["Grenade Supplier", "Sacrifice", "Door Traps", "Off Perk", "Concussive Force"],
        602 : ["Contact", "Sacrifice", "Door Traps", "Off Perk", "Concussive Force"],
        613 : ["Grenade Supplier", "Resistance", "Siren Resistance", "Off Perk", "Concussive Force"],
        614 : ["Contact", "Resistance", "Siren Resistance", "Off Perk", "Concussive Force"],
        617 : ["Grenade Supplier", "Sacrifice", "Siren Resistance", "Off Perk", "Concussive Force"],
        618 : ["Contact", "Sacrifice", "Siren Resistance", "Off Perk", "Concussive Force"],
        661 : ["Grenade Supplier", "Resistance", "Door Traps", "On Perk", "Concussive Force"],
        662 : ["Contact", "Resistance", "Door Traps", "On Perk", "Concussive Force"],
        666 : ["Grenade Supplier", "Sacrifice", "Door Traps", "On Perk", "Concussive Force"],
        675 : ["Contact", "Sacrifice", "Door Traps", "On Perk", "Concussive Force"],
        677 : ["Grenade Supplier", "Resistance", "Siren Resistance", "On Perk", "Concussive Force"],
        678 : ["Contact", "Resistance", "Siren Resistance", "On Perk", "Concussive Force"],
        681 : ["Grenade Supplier", "Sacrifice", "Siren Resistance", "On Perk", "Concussive Force"],
        682 : ["Contact", "Sacrifice", "Siren Resistance", "On Perk", "Concussive Force"],
        
      },
      Firebug : {
        statIndex: '1_31',
        
        1 : ["Fully Stocked"],
        2 : ["Flaritov"],
        
        5 : ["Fully Stocked", "Fuse"],
        6 : ["Flaritov", "Fuse"],
        9 : ["Fully Stocked", "Heat Wave"],
        10 : ["Flaritov", "Heat Wave"],
        
        21 : ["Fully Stocked", "Fuse", "Zed Shrapnel"],
        22 : ["Flaritov", "Fuse", "Zed Shrapnel"],
        25 : ["Fully Stocked", "Heat Wave", "Zed Shrapnel"],
        26 : ["Flaritov", "Heat Wave", "Zed Shrapnel"],
        37 : ["Fully Stocked", "Fuse", "Zed Napalm"],
        38 : ["Flaritov", "Fuse", "Zed Napalm"],
        41 : ["Fully Stocked", "Heat Wave", "Zed Napalm"],
        42 : ["Flaritov", "Heat Wave", "Zed Napalm"],
        
        85 : ["Fully Stocked", "Fuse", "Zed Shrapnel", "Range"],
        86 : ["Flaritov", "Fuse", "Zed Shrapnel", "Range"],
        89 : ["Fully Stocked", "Heat Wave", "Zed Shrapnel", "Range"],
        90 : ["Flaritov", "Heat Wave", "Zed Shrapnel", "Range"],
        101 : ["Fully Stocked", "Fuse", "Zed Napalm", "Range"],
        102 : ["Flaritov", "Fuse", "Zed Napalm", "Range"],
        105 : ["Fully Stocked", "Heat Wave", "Zed Napalm", "Range"],
        106 : ["Flaritov", "Heat Wave", "Zed Napalm", "Range"],
        149 : ["Fully Stocked", "Fuse", "Zed Shrapnel", "Splash Damage"],
        150 : ["Flaritov", "Fuse", "Zed Shrapnel", "Splash Damage"],
        153 : ["Fully Stocked", "Heat Wave", "Zed Shrapnel", "Splash Damage"],
        154 : ["Flaritov", "Heat Wave", "Zed Shrapnel", "Splash Damage"],
        166 : ["Fully Stocked", "Fuse", "Zed Napalm", "Splash Damage"],
        166 : ["Flaritov", "Fuse", "Zed Napalm", "Splash Damage"],
        169 : ["Fully Stocked", "Heat Wave", "Zed Napalm", "Splash Damage"],
        170 : ["Flaritov", "Heat Wave", "Zed Napalm", "Splash Damage"],
        
        341 : ["Fully Stocked", "Fuse", "Zed Shrapnel", "Range", "Combustion"],
        342 : ["Flaritov", "Fuse", "Zed Shrapnel", "Range", "Combustion"],
        345 : ["Fully Stocked", "Heat Wave", "Zed Shrapnel", "Range", "Combustion"],
        346 : ["Flaritov", "Heat Wave", "Zed Shrapnel", "Range", "Combustion"],
        357 : ["Fully Stocked", "Fuse", "Zed Napalm", "Range", "Combustion"],
        358 : ["Flaritov", "Fuse", "Zed Napalm", "Range", "Combustion"],
        361 : ["Fully Stocked", "Heat Wave", "Zed Napalm", "Range", "Combustion"],
        362 : ["Flaritov", "Heat Wave", "Zed Napalm", "Range", "Combustion"],
        405 : ["Fully Stocked", "Fuse", "Zed Shrapnel", "Splash Damage", "Combustion"],
        406 : ["Flaritov", "Fuse", "Zed Shrapnel", "Splash Damage", "Combustion"],
        409 : ["Fully Stocked", "Heat Wave", "Zed Shrapnel", "Splash Damage", "Combustion"],
        410 : ["Flaritov", "Heat Wave", "Zed Shrapnel", "Splash Damage", "Combustion"],
        421 : ["Fully Stocked", "Fuse", "Zed Napalm", "Splash Damage", "Combustion"],
        422 : ["Flaritov", "Fuse", "Zed Napalm", "Splash Damage", "Combustion"],
        425 : ["Fully Stocked", "Heat Wave", "Zed Napalm", "Splash Damage", "Combustion"],
        426 : ["Flaritov", "Heat Wave", "Zed Napalm", "Splash Damage", "Combustion"],
        597 : ["Fully Stocked", "Fuse", "Zed Shrapnel", "Range", "Scorch"],
        598 : ["Flaritov", "Fuse", "Zed Shrapnel", "Range", "Scorch"],
        601 : ["Fully Stocked", "Heat Wave", "Zed Shrapnel", "Range", "Scorch"],
        602 : ["Flaritov", "Heat Wave", "Zed Shrapnel", "Range", "Scorch"],
        613 : ["Fully Stocked", "Fuse", "Zed Napalm", "Range", "Scorch"],
        614 : ["Flaritov", "Fuse", "Zed Napalm", "Range", "Scorch"],
        617 : ["Fully Stocked", "Heat Wave", "Zed Napalm", "Range", "Scorch"],
        618 : ["Flaritov", "Heat Wave", "Zed Napalm", "Range", "Scorch"],
        661 : ["Fully Stocked", "Fuse", "Zed Shrapnel", "Splash Damage", "Scorch"],
        662 : ["Flaritov", "Fuse", "Zed Shrapnel", "Splash Damage", "Scorch"],
        666 : ["Fully Stocked", "Heat Wave", "Zed Shrapnel", "Splash Damage", "Scorch"],
        675 : ["Flaritov", "Heat Wave", "Zed Shrapnel", "Splash Damage", "Scorch"],
        677 : ["Fully Stocked", "Fuse", "Zed Napalm", "Splash Damage", "Scorch"],
        678 : ["Flaritov", "Fuse", "Zed Napalm", "Splash Damage", "Scorch"],
        681 : ["Fully Stocked", "Heat Wave", "Zed Napalm", "Splash Damage", "Scorch"],
        682 : ["Flaritov", "Heat Wave", "Zed Napalm", "Splash Damage", "Scorch"],
      },
      Gunslinger : {
        statIndex: '1_81',
        
        1 : ["Shoot ‘n Scoot"],
        2 : ["Quick Draw"],
        
        5 : ["Shoot ‘n Scoot", "Rhythm Method"],
        6 : ["Quick Draw", "Rhythm Method"],
        9 : ["Shoot ‘n Scoot", "Bone Breaking"],
        10 : ["Quick Draw", "Bone Breaking"],
        
        21 : ["Shoot ‘n Scoot", "Rhythm Method", "Speed Load’n"],
        22 : ["Quick Draw", "Rhythm Method", "Speed Load’n"],
        25 : ["Shoot ‘n Scoot", "Bone Breaking", "Speed Load’n"],
        26 : ["Quick Draw", "Bone Breaking", "Speed Load’n"],
        37 : ["Shoot ‘n Scoot", "Rhythm Method", "Penetration"],
        38 : ["Quick Draw", "Rhythm Method", "Penetration"],
        41 : ["Shoot ‘n Scoot", "Bone Breaking", "Penetration"],
        42 : ["Quick Draw", "Bone Breaking", "Penetration"],
        
        85 : ["Shoot ‘n Scoot", "Rhythm Method", "Speed Load’n", "Center Mass"],
        86 : ["Quick Draw", "Rhythm Method", "Speed Load’n", "Center Mass"],
        89 : ["Shoot ‘n Scoot", "Bone Breaking", "Speed Load’n", "Center Mass"],
        90 : ["Quick Draw", "Bone Breaking", "Speed Load’n", "Center Mass"],
        101 : ["Shoot ‘n Scoot", "Rhythm Method", "Penetration", "Center Mass"],
        102 : ["Quick Draw", "Rhythm Method", "Penetration", "Center Mass"],
        105 : ["Shoot ‘n Scoot", "Bone Breaking", "Penetration", "Center Mass"],
        106 : ["Quick Draw", "Bone Breaking", "Penetration", "Center Mass"],
        149 : ["Shoot ‘n Scoot", "Rhythm Method", "Speed Load’n", "Knock-down"],
        150 : ["Quick Draw", "Rhythm Method", "Speed Load’n", "Knock-down"],
        153 : ["Shoot ‘n Scoot", "Bone Breaking", "Speed Load’n", "Knock-down"],
        154 : ["Quick Draw", "Bone Breaking", "Speed Load’n", "Knock-down"],
        166 : ["Shoot ‘n Scoot", "Rhythm Method", "Penetration", "Knock-down"],
        166 : ["Quick Draw", "Rhythm Method", "Penetration", "Knock-down"],
        169 : ["Shoot ‘n Scoot", "Bone Breaking", "Penetration", "Knock-down"],
        170 : ["Quick Draw", "Bone Breaking", "Penetration", "Knock-down"],
        
        341 : ["Shoot ‘n Scoot", "Rhythm Method", "Speed Load’n", "Center Mass", "Fan Fire"],
        342 : ["Quick Draw", "Rhythm Method", "Speed Load’n", "Center Mass", "Fan Fire"],
        345 : ["Shoot ‘n Scoot", "Bone Breaking", "Speed Load’n", "Center Mass", "Fan Fire"],
        346 : ["Quick Draw", "Bone Breaking", "Speed Load’n", "Center Mass", "Fan Fire"],
        357 : ["Shoot ‘n Scoot", "Rhythm Method", "Penetration", "Center Mass", "Fan Fire"],
        358 : ["Quick Draw", "Rhythm Method", "Penetration", "Center Mass", "Fan Fire"],
        361 : ["Shoot ‘n Scoot", "Bone Breaking", "Penetration", "Center Mass", "Fan Fire"],
        362 : ["Quick Draw", "Bone Breaking", "Penetration", "Center Mass", "Fan Fire"],
        405 : ["Shoot ‘n Scoot", "Rhythm Method", "Speed Load’n", "Knock-down", "Fan Fire"],
        406 : ["Quick Draw", "Rhythm Method", "Speed Load’n", "Knock-down", "Fan Fire"],
        409 : ["Shoot ‘n Scoot", "Bone Breaking", "Speed Load’n", "Knock-down", "Fan Fire"],
        410 : ["Quick Draw", "Bone Breaking", "Speed Load’n", "Knock-down", "Fan Fire"],
        421 : ["Shoot ‘n Scoot", "Rhythm Method", "Penetration", "Knock-down", "Fan Fire"],
        422 : ["Quick Draw", "Rhythm Method", "Penetration", "Knock-down", "Fan Fire"],
        425 : ["Shoot ‘n Scoot", "Bone Breaking", "Penetration", "Knock-down", "Fan Fire"],
        426 : ["Quick Draw", "Bone Breaking", "Penetration", "Knock-down", "Fan Fire"],
        597 : ["Shoot ‘n Scoot", "Rhythm Method", "Speed Load’n", "Center Mass", "Uber Ammo"],
        598 : ["Quick Draw", "Rhythm Method", "Speed Load’n", "Center Mass", "Uber Ammo"],
        601 : ["Shoot ‘n Scoot", "Bone Breaking", "Speed Load’n", "Center Mass", "Uber Ammo"],
        602 : ["Quick Draw", "Bone Breaking", "Speed Load’n", "Center Mass", "Uber Ammo"],
        613 : ["Shoot ‘n Scoot", "Rhythm Method", "Penetration", "Center Mass", "Uber Ammo"],
        614 : ["Quick Draw", "Rhythm Method", "Penetration", "Center Mass", "Uber Ammo"],
        617 : ["Shoot ‘n Scoot", "Bone Breaking", "Penetration", "Center Mass", "Uber Ammo"],
        618 : ["Quick Draw", "Bone Breaking", "Penetration", "Center Mass", "Uber Ammo"],
        661 : ["Shoot ‘n Scoot", "Rhythm Method", "Speed Load’n", "Knock-down", "Uber Ammo"],
        662 : ["Quick Draw", "Rhythm Method", "Speed Load’n", "Knock-down", "Uber Ammo"],
        666 : ["Shoot ‘n Scoot", "Bone Breaking", "Speed Load’n", "Knock-down", "Uber Ammo"],
        675 : ["Quick Draw", "Bone Breaking", "Speed Load’n", "Knock-down", "Uber Ammo"],
        677 : ["Shoot ‘n Scoot", "Rhythm Method", "Penetration", "Knock-down", "Uber Ammo"],
        678 : ["Quick Draw", "Rhythm Method", "Penetration", "Knock-down", "Uber Ammo"],
        681 : ["Shoot ‘n Scoot", "Bone Breaking", "Penetration", "Knock-down", "Uber Ammo"],
        682 : ["Quick Draw", "Bone Breaking", "Penetration", "Knock-down", "Uber Ammo"],
      },
      Medic: {
        statIndex: '1_41',
        
        1 : ["Healing Surge"],
        2 : ["Enforcer"],
        
        5 : ["Healing Surge", "Combatant"],
        6 : ["Enforcer", "Combatant"],
        9 : ["Healing Surge", "Armament"],
        10 : ["Enforcer", "Armament"],
        
        21 : ["Healing Surge", "Combatant", "Regeneration"],
        22 : ["Enforcer", "Combatant", "Regeneration"],
        25 : ["Healing Surge", "Armament", "Regeneration"],
        26 : ["Enforcer", "Armament", "Regeneration"],
        37 : ["Healing Surge", "Combatant", "Lacerate"],
        38 : ["Enforcer", "Combatant", "Lacerate"],
        41 : ["Healing Surge", "Armament", "Lacerate"],
        42 : ["Enforcer", "Armament", "Lacerate"],
        
        85 : ["Healing Surge", "Combatant", "Regeneration", "Vaccination"],
        86 : ["Enforcer", "Combatant", "Regeneration", "Vaccination"],
        89 : ["Healing Surge", "Armament", "Regeneration", "Vaccination"],
        90 : ["Enforcer", "Armament", "Regeneration", "Vaccination"],
        101 : ["Healing Surge", "Combatant", "Lacerate", "Vaccination"],
        102 : ["Enforcer", "Combatant", "Lacerate", "Vaccination"],
        105 : ["Healing Surge", "Armament", "Lacerate", "Vaccination"],
        106 : ["Enforcer", "Armament", "Lacerate", "Vaccination"],
        149 : ["Healing Surge", "Combatant", "Regeneration", "Acidic compound"],
        150 : ["Enforcer", "Combatant", "Regeneration", "Acidic compound"],
        153 : ["Healing Surge", "Armament", "Regeneration", "Acidic compound"],
        154 : ["Enforcer", "Armament", "Regeneration", "Acidic compound"],
        165 : ["Healing Surge", "Combatant", "Lacerate", "Acidic compound"],
        166 : ["Enforcer", "Combatant", "Lacerate", "Acidic compound"],
        169 : ["Healing Surge", "Armament", "Lacerate", "Acidic compound"],
        170 : ["Enforcer", "Armament", "Lacerate", "Acidic compound"],
        
        341 : ["Healing Surge", "Combatant", "Regeneration", "Vaccination", "Sedative"],
        342 : ["Enforcer", "Combatant", "Regeneration", "Vaccination", "Sedative"],
        345 : ["Healing Surge", "Armament", "Regeneration", "Vaccination", "Sedative"],
        346 : ["Enforcer", "Armament", "Regeneration", "Vaccination", "Sedative"],
        357 : ["Healing Surge", "Combatant", "Lacerate", "Vaccination", "Sedative"],
        358 : ["Enforcer", "Combatant", "Lacerate", "Vaccination", "Sedative"],
        361 : ["Healing Surge", "Armament", "Lacerate", "Vaccination", "Sedative"],
        362 : ["Enforcer", "Armament", "Lacerate", "Vaccination", "Sedative"],
        405 : ["Healing Surge", "Combatant", "Regeneration", "Acidic compound", "Sedative"],
        406 : ["Enforcer", "Combatant", "Regeneration", "Acidic compound", "Sedative"],
        409 : ["Healing Surge", "Armament", "Regeneration", "Acidic compound", "Sedative"],
        410 : ["Enforcer", "Armament", "Regeneration", "Acidic compound", "Sedative"],
        421 : ["Healing Surge", "Combatant", "Lacerate", "Acidic compound", "Sedative"],
        422 : ["Enforcer", "Combatant", "Lacerate", "Acidic compound", "Sedative"],
        425 : ["Healing Surge", "Armament", "Lacerate", "Acidic compound", "Sedative"],
        
        426 : ["Enforcer", "Armament", "Lacerate", "Acidic compound", "Sedative"],
        597 : ["Healing Surge", "Combatant", "Regeneration", "Vaccination", "Airborne Agent"],
        598 : ["Enforcer", "Combatant", "Regeneration", "Vaccination", "Airborne Agent"],
        601 : ["Healing Surge", "Armament", "Regeneration", "Vaccination", "Airborne Agent"],
        602 : ["Enforcer", "Armament", "Regeneration", "Vaccination", "Airborne Agent"],
        613 : ["Healing Surge", "Combatant", "Lacerate", "Vaccination", "Airborne Agent"],
        614 : ["Enforcer", "Combatant", "Lacerate", "Vaccination", "Airborne Agent"],
        617 : ["Healing Surge", "Armament", "Lacerate", "Vaccination", "Airborne Agent"],
        618 : ["Enforcer", "Armament", "Lacerate", "Vaccination", "Airborne Agent"],
        661 : ["Healing Surge", "Combatant", "Regeneration", "Acidic compound", "Airborne Agent"],
        662 : ["Enforcer", "Combatant", "Regeneration", "Acidic compound", "Airborne Agent"],
        665 : ["Healing Surge", "Armament", "Regeneration", "Acidic compound", "Airborne Agent"],
        666 : ["Enforcer", "Armament", "Regeneration", "Acidic compound", "Airborne Agent"],
        677 : ["Healing Surge", "Combatant", "Lacerate", "Acidic compound", "Airborne Agent"],
        678 : ["Enforcer", "Combatant", "Lacerate", "Acidic compound", "Airborne Agent"],
        681 : ["Healing Surge", "Armament", "Lacerate", "Acidic compound", "Airborne Agent"],
        682 : ["Enforcer", "Armament", "Lacerate", "Acidic compound", "Airborne Agent"],
      },
      Support: {
        statIndex: '1_21',
        
        1 :  ["Ammo"],
        2 :  ["Supplier"],
        
        5 :  ["Ammo", "Fortitude"],
        9 :  ["Ammo", "Regeneration"],
        6 :  ["Supplier", "Fortitude"],
        10 :  ["Supplier", "Regeneration"],
        
        21 : ["Ammo", "Fortitude", "Bombard"],
        22 : ["Supplier", "Fortitude", "Bombard"],
        25 : ["Ammo", "Regeneration", "Bombard"],
        26 : ["Supplier", "Regeneration", "Bombard"],
        37 : ["Ammo", "Fortitude", "Tactical Reload"],
        38 : ["Supplier", "Fortitude", "Tactical Reload"],
        41 : ["Ammo", "Regeneration", "Tactical Reload"],
        42 : ["Supplier", "Regeneration", "Tactical Reload"],

        85 : ["Ammo", "Fortitude", "Bombard", "Strength"],
        86 : ["Supplier", "Fortitude", "Bombard", "Strength"],
        89 : ["Ammo", "Regeneration", "Bombard", "Strength"],
        90 : ["Supplier", "Regeneration", "Bombard", "Strength"],
        101 : ["Ammo", "Fortitude", "Tactical Reload", "Strength"],
        102 : ["Supplier", "Fortitude", "Tactical Reload", "Strength"],
        105 : ["Ammo", "Regeneration", "Tactical Reload", "Strength"],
        106 : ["Supplier", "Regeneration", "Tactical Reload", "Strength"],
        149 : ["Ammo", "Fortitude", "Bombard", "Tenacity"],
        150 : ["Supplier", "Fortitude", "Bombard", "Tenacity"],
        153 : ["Ammo", "Regeneration", "Bombard", "Tenacity"],
        154 : ["Supplier", "Regeneration", "Bombard", "Tenacity"],
        165 : ["Ammo", "Fortitude", "Tactical Reload", "Tenacity"],
        166 : ["Supplier", "Fortitude", "Tactical Reload", "Tenacity"],
        169 : ["Ammo", "Regeneration", "Tactical Reload", "Tenacity"],
        170 : ["Supplier", "Regeneration", "Tactical Reload", "Tenacity"],

        341 : ["Ammo", "Fortitude", "Bombard", "Strength", "Safeguard"],
        342 : ["Supplier", "Fortitude", "Bombard", "Strength", "Safeguard"],
        345 : ["Ammo", "Regeneration", "Bombard", "Strength", "Safeguard"],
        346 : ["Supplier", "Regeneration", "Bombard", "Strength", "Safeguard"],
        357 : ["Ammo", "Fortitude", "Tactical Reload", "Strength", "Safeguard"],
        358 : ["Supplier", "Fortitude", "Tactical Reload", "Strength", "Safeguard"],
        361 : ["Ammo", "Regeneration", "Tactical Reload", "Strength", "Safeguard"],
        362 : ["Supplier", "Regeneration", "Tactical Reload", "Strength", "Safeguard"],
        405 : ["Ammo", "Fortitude", "Bombard", "Tenacity", "Safeguard"],
        406 : ["Supplier", "Fortitude", "Bombard", "Tenacity", "Safeguard"],
        409 : ["Ammo", "Regeneration", "Bombard", "Tenacity", "Safeguard"],
        410 : ["Supplier", "Regeneration", "Bombard", "Tenacity", "Safeguard"],
        421 : ["Ammo", "Fortitude", "Tactical Reload", "Tenacity", "Safeguard"],
        422 : ["Supplier", "Fortitude", "Tactical Reload", "Tenacity", "Safeguard"],
        425 : ["Ammo", "Regeneration", "Tactical Reload", "Tenacity", "Safeguard"],
        426 : ["Supplier", "Regeneration", "Tactical Reload", "Tenacity", "Safeguard"],
        597 : ["Ammo", "Fortitude", "Bombard", "Strength", "Barrage"],
        598 : ["Supplier", "Fortitude", "Bombard", "Strength", "Barrage"],
        601 : ["Ammo", "Regeneration", "Bombard", "Strength", "Barrage"],
        602 : ["Supplier", "Regeneration", "Bombard", "Strength", "Barrage"],
        613 : ["Ammo", "Fortitude", "Tactical Reload", "Strength", "Barrage"],
        614 : ["Supplier", "Fortitude", "Tactical Reload", "Strength", "Barrage"],
        617 : ["Ammo", "Regeneration", "Tactical Reload", "Strength", "Barrage"],
        618 : ["Supplier", "Regeneration", "Tactical Reload", "Strength", "Barrage"],
        661 : ["Ammo", "Fortitude", "Bombard", "Tenacity", "Barrage"],
        662 : ["Supplier", "Fortitude", "Bombard", "Tenacity", "Barrage"],
        665 : ["Ammo", "Regeneration", "Bombard", "Tenacity", "Barrage"],
        666 : ["Supplier", "Regeneration", "Bombard", "Tenacity", "Barrage"],
        677 : ["Ammo", "Fortitude", "Tactical Reload", "Tenacity", "Barrage"],
        678 : ["Supplier", "Fortitude", "Tactical Reload", "Tenacity", "Barrage"],
        681 : ["Ammo", "Regeneration", "Tactical Reload", "Tenacity", "Barrage"],
        682 : ["Supplier", "Regeneration", "Tactical Reload", "Tenacity", "Barrage"]
      },  
      
    };

    return buildList;
  }]);