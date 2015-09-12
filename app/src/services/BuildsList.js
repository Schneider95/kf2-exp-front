module = angular.module('kf2App');

module.factory('BuildsList', ['BackEndRequestService', function (BackEndRequestService) {
    var buildList = {
      commando: {
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
        
        341:  ["Large mags", "Impact", "Leadership", "Single Fire", "Zed Time Rapid Fire"],
        342:  ["Backup", "Impact", "Leadership", "Single Fire", "Zed Time Rapid Fire"],
        345:  ["Large mags", "Tactical Reload", "Leadership", "Single Fire", "Zed Time Rapid Fire"],
        346:  ["Backup", "Tactical Reload", "Leadership", "Single Fire", "Zed Time Rapid Fire"],
        357:  ["Large mags", "Impact", "Call Out", "Single Fire", "Zed Time Rapid Fire"],
        358:  ["Backup", "Impact", "Call Out", "Single Fire", "Zed Time Rapid Fire"],
        361:  ["Large mags", "Tactical Reload", "Call Out", "Single Fire", "Zed Time Rapid Fire"],
        362:  ["Backup", "Tactical Reload", "Call Out", "Single Fire", "Zed Time Rapid Fire"],
        405:  ["Large mags", "Impact", "Leadership", "Autofire", "Zed Time Rapid Fire"],
        406:  ["Backup", "Impact", "Leadership", "Autofire", "Zed Time Rapid Fire"],
        409:  ["Large mags", "Tactical Reload", "Leadership", "Autofire", "Zed Time Rapid Fire"],
        410:  ["Backup", "Tactical Reload", "Leadership", "Autofire", "Zed Time Rapid Fire"],
        421:  ["Large mags", "Impact", "Call Out", "Autofire", "Zed Time Rapid Fire"],
        422:  ["Backup", "Impact", "Call Out", "Autofire", "Zed Time Rapid Fire"],
        425:  ["Large mags", "Tactical Reload", "Call Out", "Autofire", "Zed Time Rapid Fire"],
        426:  ["Backup", "Tactical Reload", "Call Out", "Autofire", "Zed Time Rapid Fire"],
        597:  ["Large mags", "Impact", "Leadership", "Single Fire", "Zed Time Professionnal"],
        598:  ["Backup", "Impact", "Leadership", "Single Fire", "Zed Time Professionnal"],
        601:  ["Large mags", "Tactical Reload", "Leadership", "Single Fire", "Zed Time Professionnal"],
        602:  ["Backup", "Tactical Reload", "Leadership", "Single Fire", "Zed Time Professionnal"],
        613:  ["Large mags", "Impact", "Call Out", "Single Fire", "Zed Time Professionnal"],
        614:  ["Backup", "Impact", "Call Out", "Single Fire", "Zed Time Professionnal"],
        617:  ["Large mags", "Tactical Reload", "Call Out", "Single Fire", "Zed Time Professionnal"],
        618:  ["Backup", "Tactical Reload", "Call Out", "Single Fire", "Zed Time Professionnal"],
        661:  ["Large mags", "Impact", "Leadership", "Autofire", "Zed Time Professionnal"],
        662:  ["Backup", "Impact", "Leadership", "Autofire", "Zed Time Professionnal"],
        665:  ["Large mags", "Tactical Reload", "Leadership", "Autofire", "Zed Time Professionnal"],
        666:  ["Backup", "Tactical Reload", "Leadership", "Autofire", "Zed Time Professionnal"],
        677:  ["Large mags", "Impact", "Call Out", "Autofire", "Zed Time Professionnal"],
        678:  ["Backup", "Impact", "Call Out", "Autofire", "Zed Time Professionnal"],
        681:  ["Large mags", "Tactical Reload", "Call Out", "Autofire", "Zed Time Professionnal"],
        682:  ["Backup", "Tactical Reload", "Call Out", "Autofire", "Zed Time Professionnal"],
      },
      support: {
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

        341 : ["Ammo", "Fortitude", "Bombard", "Strength", "Zed Time Safeguard"],
        342 : ["Supplier", "Fortitude", "Bombard", "Strength", "Zed Time Safeguard"],
        345 : ["Ammo", "Regeneration", "Bombard", "Strength", "Zed Time Safeguard"],
        346 : ["Supplier", "Regeneration", "Bombard", "Strength", "Zed Time Safeguard"],
        357 : ["Ammo", "Fortitude", "Tactical Reload", "Strength", "Zed Time Safeguard"],
        358 : ["Supplier", "Fortitude", "Tactical Reload", "Strength", "Zed Time Safeguard"],
        361 : ["Ammo", "Regeneration", "Tactical Reload", "Strength", "Zed Time Safeguard"],
        362 : ["Supplier", "Regeneration", "Tactical Reload", "Strength", "Zed Time Safeguard"],
        405 : ["Ammo", "Fortitude", "Bombard", "Tenacity", "Zed Time Safeguard"],
        406 : ["Supplier", "Fortitude", "Bombard", "Tenacity", "Zed Time Safeguard"],
        409 : ["Ammo", "Regeneration", "Bombard", "Tenacity", "Zed Time Safeguard"],
        410 : ["Supplier", "Regeneration", "Bombard", "Tenacity", "Zed Time Safeguard"],
        421 : ["Ammo", "Fortitude", "Tactical Reload", "Tenacity", "Zed Time Safeguard"],
        422 : ["Supplier", "Fortitude", "Tactical Reload", "Tenacity", "Zed Time Safeguard"],
        425 : ["Ammo", "Regeneration", "Tactical Reload", "Tenacity", "Zed Time Safeguard"],
        426 : ["Supplier", "Regeneration", "Tactical Reload", "Tenacity", "Zed Time Safeguard"],

        597 : ["Ammo", "Fortitude", "Bombard", "Strength", "Zed Time Barrage"],
        598 : ["Supplier", "Fortitude", "Bombard", "Strength", "Zed Time Barrage"],
        601 : ["Ammo", "Regeneration", "Bombard", "Strength", "Zed Time Barrage"],
        602 : ["Supplier", "Regeneration", "Bombard", "Strength", "Zed Time Barrage"],
        613 : ["Ammo", "Fortitude", "Tactical Reload", "Strength", "Zed Time Barrage"],
        614 : ["Supplier", "Fortitude", "Tactical Reload", "Strength", "Zed Time Barrage"],
        617 : ["Ammo", "Regeneration", "Tactical Reload", "Strength", "Zed Time Barrage"],
        618 : ["Supplier", "Regeneration", "Tactical Reload", "Strength", "Zed Time Barrage"],
        661 : ["Ammo", "Fortitude", "Bombard", "Tenacity", "Zed Time Barrage"],
        662 : ["Supplier", "Fortitude", "Bombard", "Tenacity", "Zed Time Barrage"],
        665 : ["Ammo", "Regeneration", "Bombard", "Tenacity", "Zed Time Barrage"],
        666 : ["Supplier", "Regeneration", "Bombard", "Tenacity", "Zed Time Barrage"],
        677 : ["Ammo", "Fortitude", "Tactical Reload", "Tenacity", "Zed Time Barrage"],
        678 : ["Supplier", "Fortitude", "Tactical Reload", "Tenacity", "Zed Time Barrage"],
        681 : ["Ammo", "Regeneration", "Tactical Reload", "Tenacity", "Zed Time Barrage"],
        682 : ["Supplier", "Regeneration", "Tactical Reload", "Tenacity", "Zed Time Barrage"]
      },     
      medic: {
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
        
        341 : ["Healing Surge", "Combatant", "Regeneration", "Vaccination", "Zed Time Sedative"],
        342 : ["Enforcer", "Combatant", "Regeneration", "Vaccination", "Zed Time Sedative"],
        345 : ["Healing Surge", "Armament", "Regeneration", "Vaccination", "Zed Time Sedative"],
        346 : ["Enforcer", "Armament", "Regeneration", "Vaccination", "Zed Time Sedative"],
        357 : ["Healing Surge", "Combatant", "Lacerate", "Vaccination", "Zed Time Sedative"],
        358 : ["Enforcer", "Combatant", "Lacerate", "Vaccination", "Zed Time Sedative"],
        361 : ["Healing Surge", "Armament", "Lacerate", "Vaccination", "Zed Time Sedative"],
        362 : ["Enforcer", "Armament", "Lacerate", "Vaccination", "Zed Time Sedative"],
        405 : ["Healing Surge", "Combatant", "Regeneration", "Acidic compound", "Zed Time Sedative"],
        406 : ["Enforcer", "Combatant", "Regeneration", "Acidic compound", "Zed Time Sedative"],
        409 : ["Healing Surge", "Armament", "Regeneration", "Acidic compound", "Zed Time Sedative"],
        410 : ["Enforcer", "Armament", "Regeneration", "Acidic compound", "Zed Time Sedative"],
        421 : ["Healing Surge", "Combatant", "Lacerate", "Acidic compound", "Zed Time Sedative"],
        422 : ["Enforcer", "Combatant", "Lacerate", "Acidic compound", "Zed Time Sedative"],
        425 : ["Healing Surge", "Armament", "Lacerate", "Acidic compound", "Zed Time Sedative"],
        
        426 : ["Enforcer", "Armament", "Lacerate", "Acidic compound", "Zed Time Sedative"],
        597 : ["Healing Surge", "Combatant", "Regeneration", "Vaccination", "Zed Time Airborne Agent"],
        598 : ["Enforcer", "Combatant", "Regeneration", "Vaccination", "Zed Time Airborne Agent"],
        601 : ["Healing Surge", "Armament", "Regeneration", "Vaccination", "Zed Time Airborne Agent"],
        602 : ["Enforcer", "Armament", "Regeneration", "Vaccination", "Zed Time Airborne Agent"],
        613 : ["Healing Surge", "Combatant", "Lacerate", "Vaccination", "Zed Time Airborne Agent"],
        614 : ["Enforcer", "Combatant", "Lacerate", "Vaccination", "Zed Time Airborne Agent"],
        617 : ["Healing Surge", "Armament", "Lacerate", "Vaccination", "Zed Time Airborne Agent"],
        618 : ["Enforcer", "Armament", "Lacerate", "Vaccination", "Zed Time Airborne Agent"],
        661 : ["Healing Surge", "Combatant", "Regeneration", "Acidic compound", "Zed Time Airborne Agent"],
        662 : ["Enforcer", "Combatant", "Regeneration", "Acidic compound", "Zed Time Airborne Agent"],
        665 : ["Healing Surge", "Armament", "Regeneration", "Acidic compound", "Zed Time Airborne Agent"],
        666 : ["Enforcer", "Armament", "Regeneration", "Acidic compound", "Zed Time Airborne Agent"],
        677 : ["Healing Surge", "Combatant", "Lacerate", "Acidic compound", "Zed Time Airborne Agent"],
        678 : ["Enforcer", "Combatant", "Lacerate", "Acidic compound", "Zed Time Airborne Agent"],
        681 : ["Healing Surge", "Armament", "Lacerate", "Acidic compound", "Zed Time Airborne Agent"],
        682 : ["Enforcer", "Armament", "Lacerate", "Acidic compound", "Zed Time Airborne Agent"],
      },
      berzerk: {
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
        
        341 : ["Poison Resistance", "Vampire", "Furious Defender", "Parry", "Zed Time Spartan"],
        342 : ["Sonic Resistance", "Vampire", "Furious Defender", "Parry", "Zed Time Spartan"],
        345 : ["Poison Resistance", "Fortitude", "Furious Defender", "Parry", "Zed Time Spartan"],
        346 : ["Sonic Resistance", "Fortitude", "Furious Defender", "Parry", "Zed Time Spartan"],
        357 : ["Poison Resistance", "Vampire", "Block", "Parry", "Zed Time Spartan"],
        358 : ["Sonic Resistance", "Vampire", "Block", "Parry", "Zed Time Spartan"],
        361 : ["Poison Resistance", "Fortitude", "Block", "Parry", "Zed Time Spartan"],
        362 : ["Sonic Resistance", "Fortitude", "Block", "Parry", "Zed Time Spartan"],         
        405 : ["Poison Resistance", "Vampire", "Furious Defender", "Smash", "Zed Time Spartan"],
        406 : ["Sonic Resistance", "Vampire", "Furious Defender", "Smash", "Zed Time Spartan"],
        409 : ["Poison Resistance", "Fortitude", "Furious Defender", "Smash", "Zed Time Spartan"],
        410 : ["Sonic Resistance", "Fortitude", "Furious Defender", "Smash", "Zed Time Spartan"],
        421 : ["Poison Resistance", "Vampire", "Block", "Smash", "Zed Time Spartan"],
        422 : ["Sonic Resistance", "Vampire", "Block", "Smash", "Zed Time Spartan"],
        425 : ["Poison Resistance", "Fortitude", "Block", "Smash", "Zed Time Spartan"],
        426 : ["Sonic Resistance", "Fortitude", "Block", "Smash", "Zed Time Spartan"],
        597 : ["Poison Resistance", "Vampire", "Furious Defender", "Parry", "Zed Time Menace"],
        598 : ["Sonic Resistance", "Vampire", "Furious Defender", "Parry", "Zed Time Menace"],
        601 : ["Poison Resistance", "Fortitude", "Furious Defender", "Parry", "Zed Time Menace"],
        602 : ["Sonic Resistance", "Fortitude", "Furious Defender", "Parry", "Zed Time Menace"],
        613 : ["Poison Resistance", "Vampire", "Block", "Parry", "Zed Time Menace"],
        614 : ["Sonic Resistance", "Vampire", "Block", "Parry", "Zed Time Menace"],
        617 : ["Poison Resistance", "Fortitude", "Block", "Parry", "Zed Time Menace"],
        618 : ["Sonic Resistance", "Fortitude", "Block", "Parry", "Zed Time Menace"],
        661 : ["Poison Resistance", "Vampire", "Furious Defender", "Smash", "Zed Time Menace"],
        662 : ["Sonic Resistance", "Vampire", "Furious Defender", "Smash", "Zed Time Menace"], 
        666 : ["Sonic Resistance", "Fortitude", "Furious Defender", "Smash", "Zed Time Menace"],
        675 : ["Poison Resistance", "Fortitude", "Furious Defender", "Smash", "Zed Time Menace"],
        677 : ["Poison Resistance", "Vampire", "Block", "Smash", "Zed Time Menace"],
        678 : ["Sonic Resistance", "Vampire", "Block", "Smash", "Zed Time Menace"],
        681 : ["Poison Resistance", "Fortitude", "Block", "Smash", "Zed Time Menace"],
        682 : ["Sonic Resistance", "Fortitude", "Block", "Smash", "Zed Time Menace"],          
      },
      demolitions : {
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
      },
      firebug : {
        1 : ["Fully Stocked"],
        2 : ["Flaritov"],
        
        5 : ["Fully Stocked", "Fuse"],
        6 : ["Flaritov", "Fuse"],
        9 : ["Fully Stocked", "Heat Wave"],
        10 : ["Flaritov", "Heat Wave"],
      }
    };

    return buildList;
  }]);