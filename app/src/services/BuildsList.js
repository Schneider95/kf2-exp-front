module = angular.module('kf2App');

module.factory('BuildsList', ['BackEndRequestService', function (BackEndRequestService) {
    var buildList = {
      commando: {
        1 :  ["Night Vision"], // j'avais sullement night vision et ca indiquait 1
        2 :  ["Call out"], // j'avais seulement call out et ca indiquait 2
        
        5 :  ["Night Vision", "Large mags"],
        6 :  ["Call out", "Large mags"],
        9 :  ["Night Vision", "Backup"],
        10 :  ["Call out", "Backup"],
        
        21:  ["Night Vision", "Large mags", "Single Fire"],
        22:  ["Call out", "Large mags", "Single Fire"],
        25:  ["Night Vision", "Backup", "Single Fire"],
        26:  ["Call out", "Backup", "Single Fire"],
        37:  ["Night Vision", "Large mags", "Tactical Reload"],
        38:  ["Call out", "Large mags", "Tactical Reload"],
        41:  ["Night Vision", "Backup", "Tactical Reload"],
        42:  ["Call out", "Backup", "Tactical Reload"],
        
        85:  ["Night Vision", "Large mags", "Single Fire", "Impact"],
        86:  ["Call out", "Large mags", "Single Fire", "Impact"],
        89:  ["Night Vision", "Backup", "Single Fire", "Impact"],
        90:  ["Call out", "Backup", "Single Fire", "Impact"],
        101:  ["Night Vision", "Large mags", "Tactical Reload", "Impact"],
        102:  ["Call out", "Large mags", "Tactical Reload", "Impact"],
        105:  ["Night Vision", "Backup", "Tactical Reload", "Impact"],
        106:  ["Call out", "Backup", "Tactical Reload", "Impact"],
        149:  ["Night Vision", "Large mags", "Single Fire", "Autofire"],
        150:  ["Call out", "Large mags", "Single Fire", "Autofire"],
        153:  ["Night Vision", "Backup", "Single Fire", "Autofire"],
        154:  ["Call out", "Backup", "Single Fire", "Autofire"],
        165:  ["Night Vision", "Large mags", "Tactical Reload", "Autofire"],
        166:  ["Call out", "Large mags", "Tactical Reload", "Autofire"],
        169:  ["Night Vision", "Backup", "Tactical Reload", "Autofire"],
        170:  ["Call out", "Backup", "Tactical Reload", "Autofire"],
        
        341:  ["Night Vision", "Large mags", "Single Fire", "Impact", "Zed Time Rapid Fire"],
        342:  ["Call out", "Large mags", "Single Fire", "Impact", "Zed Time Rapid Fire"],
        345:  ["Night Vision", "Backup", "Single Fire", "Impact", "Zed Time Rapid Fire"],
        346:  ["Call out", "Backup", "Single Fire", "Impact", "Zed Time Rapid Fire"],
        357:  ["Night Vision", "Large mags", "Tactical Reload", "Impact", "Zed Time Rapid Fire"],
        358:  ["Call out", "Large mags", "Tactical Reload", "Impact", "Zed Time Rapid Fire"],
        361:  ["Night Vision", "Backup", "Tactical Reload", "Impact", "Zed Time Rapid Fire"],
        362:  ["Call out", "Backup", "Tactical Reload", "Impact", "Zed Time Rapid Fire"],
        405:  ["Night Vision", "Large mags", "Single Fire", "Autofire", "Zed Time Rapid Fire"],
        406:  ["Call out", "Large mags", "Single Fire", "Autofire", "Zed Time Rapid Fire"],
        409:  ["Night Vision", "Backup", "Single Fire", "Autofire", "Zed Time Rapid Fire"],
        410:  ["Call out", "Backup", "Single Fire", "Autofire", "Zed Time Rapid Fire"],
        421:  ["Night Vision", "Large mags", "Tactical Reload", "Autofire", "Zed Time Rapid Fire"],
        422:  ["Call out", "Large mags", "Tactical Reload", "Autofire", "Zed Time Rapid Fire"],
        425:  ["Night Vision", "Backup", "Tactical Reload", "Autofire", "Zed Time Rapid Fire"],
        426:  ["Call out", "Backup", "Tactical Reload", "Autofire", "Zed Time Rapid Fire"],
        597:  ["Night Vision", "Large mags", "Single Fire", "Impact", "Zed Time Professionnal"],
        598:  ["Call out", "Large mags", "Single Fire", "Impact", "Zed Time Professionnal"],
        601:  ["Night Vision", "Backup", "Single Fire", "Impact", "Zed Time Professionnal"],
        602:  ["Call out", "Backup", "Single Fire", "Impact", "Zed Time Professionnal"],
        613:  ["Night Vision", "Large mags", "Tactical Reload", "Impact", "Zed Time Professionnal"],
        614:  ["Call out", "Large mags", "Tactical Reload", "Impact", "Zed Time Professionnal"],
        617:  ["Night Vision", "Backup", "Tactical Reload", "Impact", "Zed Time Professionnal"],
        618:  ["Call out", "Backup", "Tactical Reload", "Impact", "Zed Time Professionnal"],
        661:  ["Night Vision", "Large mags", "Single Fire", "Autofire", "Zed Time Professionnal"],
        662:  ["Call out", "Large mags", "Single Fire", "Autofire", "Zed Time Professionnal"],
        665:  ["Night Vision", "Backup", "Single Fire", "Autofire", "Zed Time Professionnal"],
        666:  ["Call out", "Backup", "Single Fire", "Autofire", "Zed Time Professionnal"],
        677:  ["Night Vision", "Large mags", "Tactical Reload", "Autofire", "Zed Time Professionnal"],
        678:  ["Call out", "Large mags", "Tactical Reload", "Autofire", "Zed Time Professionnal"],
        681:  ["Night Vision", "Backup", "Tactical Reload", "Autofire", "Zed Time Professionnal"],
        682:  ["Call out", "Backup", "Tactical Reload", "Autofire", "Zed Time Professionnal"],
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
        
        89 : ["Healing Surge", "Armament", "Regeneration", "Vaccination"],
        153 : ["Healing Surge", "Armament", "Regeneration", "Acidic compound"],
        
        601 : ["Healing Surge", "Armament", "Regeneration", "Vaccination", "Zed Time Sedative"],
          
        /*
        
        8 :  ["Healing Surge", "Combatant", "Lacerate"],
        9 :  ["Healing Surge", "Armament", "Regeneration"],
        10 : ["Healing Surge", "Armament", "Lacerate"],
        11 : ["Enforcer", "Combatant", "Regeneration"],
        12 : ["Enforcer", "Combatant", "Lacerate"],
        13 : ["Enforcer", "Armament", "Regeneration"],
        14 : ["Enforcer", "Armament", "Lacerate"],
                        
        15 : ["Healing Surge", "Combatant", "Regeneration", "Vaccination"],
        16 : ["Healing Surge", "Combatant", "Regeneration", "Acidic compound"],
        17 : ["Healing Surge", "Combatant", "Lacerate", "Vaccination"],
        18 : ["Healing Surge", "Combatant", "Lacerate", "Acidic compound"],
        19 : ["Healing Surge", "Armament", "Regeneration", "Vaccination"],
        20 : ["Healing Surge", "Armament", "Regeneration", "Acidic compound"],
        21 : ["Healing Surge", "Armament", "Lacerate", "Vaccination"],
        22 : ["Healing Surge", "Armament", "Lacerate", "Acidic compound"],
        23 : ["Enforcer", "Combatant", "Regeneration", "Vaccination"],
        24 : ["Enforcer", "Combatant", "Regeneration", "Acidic compound"],
        25 : ["Enforcer", "Combatant", "Lacerate", "Vaccination"],
        26 : ["Enforcer", "Combatant", "Lacerate", "Acidic compound"],
        27 : ["Enforcer", "Armament", "Regeneration", "Vaccination"],
        28 : ["Enforcer", "Armament", "Regeneration", "Acidic compound"],
        29 : ["Enforcer", "Armament", "Lacerate", "Vaccination"],
        30 : ["Enforcer", "Armament", "Lacerate", "Acidic compound"],
        
        31 : ["Healing Surge", "Combatant", "Regeneration", "Vaccination", "Zed Time Airborne Agent"],
        32 : ["Healing Surge", "Combatant", "Regeneration", "Vaccination", "Zed Time Sedative"],
        33 : ["Healing Surge", "Combatant", "Regeneration", "Acidic compound", "Zed Time Airborne Agent"],
        34 : ["Healing Surge", "Combatant", "Regeneration", "Acidic compound", "Zed Time Sedative"],
        35 : ["Healing Surge", "Combatant", "Lacerate", "Vaccination", "Zed Time Airborne Agent"],
        36 : ["Healing Surge", "Combatant", "Lacerate", "Vaccination", "Zed Time Sedative"],
        37 : ["Healing Surge", "Combatant", "Lacerate", "Acidic compound", "Zed Time Airborne Agent"],
        38 : ["Healing Surge", "Combatant", "Lacerate", "Acidic compound", "Zed Time Sedative"],
        39 : ["Healing Surge", "Armament", "Regeneration", "Vaccination", "Zed Time Airborne Agent"],
        40 : ["Healing Surge", "Armament", "Regeneration", "Vaccination", "Zed Time Sedative"],
        41 : ["Healing Surge", "Armament", "Regeneration", "Acidic compound", "Zed Time Airborne Agent"],
        42 : ["Healing Surge", "Armament", "Regeneration", "Acidic compound", "Zed Time Sedative"],
        43 : ["Healing Surge", "Armament", "Lacerate", "Vaccination", "Zed Time Airborne Agent"],
        44 : ["Healing Surge", "Armament", "Lacerate", "Vaccination", "Zed Time Sedative"],
        45 : ["Healing Surge", "Armament", "Lacerate", "Acidic compound", "Zed Time Airborne Agent"],
        46 : ["Healing Surge", "Armament", "Lacerate", "Acidic compound", "Zed Time Sedative"],
        47 : ["Enforcer", "Combatant", "Regeneration", "Vaccination", "Zed Time Airborne Agent"],
        48 : ["Enforcer", "Combatant", "Regeneration", "Vaccination", "Zed Time Sedative"],
        49 : ["Enforcer", "Combatant", "Regeneration", "Acidic compound", "Zed Time Airborne Agent"],
        50 : ["Enforcer", "Combatant", "Regeneration", "Acidic compound", "Zed Time Sedative"],
        51 : ["Enforcer", "Combatant", "Lacerate", "Vaccination", "Zed Time Airborne Agent"],
        52 : ["Enforcer", "Combatant", "Lacerate", "Vaccination", "Zed Time Sedative"],
        53 : ["Enforcer", "Combatant", "Lacerate", "Acidic compound", "Zed Time Airborne Agent"],
        54 : ["Enforcer", "Combatant", "Lacerate", "Acidic compound", "Zed Time Sedative"],
        55 : ["Enforcer", "Armament", "Regeneration", "Vaccination", "Zed Time Airborne Agent"],
        56 : ["Enforcer", "Armament", "Regeneration", "Vaccination", "Zed Time Sedative"],
        57 : ["Enforcer", "Armament", "Regeneration", "Acidic compound", "Zed Time Airborne Agent"],
        58 : ["Enforcer", "Armament", "Regeneration", "Acidic compound", "Zed Time Sedative"],
        59 : ["Enforcer", "Armament", "Lacerate", "Vaccination", "Zed Time Airborne Agent"],
        60 : ["Enforcer", "Armament", "Lacerate", "Vaccination", "Zed Time Sedative"],
        61 : ["Enforcer", "Armament", "Lacerate", "Acidic compound", "Zed Time Airborne Agent"],
        62 : ["Enforcer", "Armament", "Lacerate", "Acidic compound", "Zed Time Sedative"],
        */
      },
      berzerk: {
        1 :  ["Bulk Ammo"],
        2 :  ["Night Vision"],
        
        5 :  ["Bulk Ammo", "Frenzy"],
        9 :  ["Bulk Ammo", "Fake Out"],
        6 :  ["Night Vision", "Frenzy"],
        10 :  ["Night Vision", "Fake Out"],
        
        21 : ["Bulk Ammo", "Frenzy", "Weapon Handling"],
        22 : ["Night Vision", "Frenzy", "Weapon Handling"],
        25 : ["Bulk Ammo", "Fake Out", "Weapon Handling"],
        26 : ["Night Vision", "Fake Out", "Weapon Handling"],
        37 : ["Bulk Ammo", "Frenzy", "Formidable"],
        38 : ["Night Vision", "Frenzy", "Formidable"],
        41 : ["Bulk Ammo", "Fake Out", "Formidable"],
        42 : ["Night Vision", "Fake Out", "Formidable"],
                       
        85 : ["Bulk Ammo", "Frenzy", "Weapon Handling", "Take Cover"],
        86 : ["Night Vision", "Frenzy", "Weapon Handling", "Take Cover"],
        89 : ["Bulk Ammo", "Fake Out", "Weapon Handling", "Take Cover"],
        90 : ["Night Vision", "Fake Out", "Weapon Handling", "Take Cover"],
        101 : ["Bulk Ammo", "Frenzy", "Formidable", "Take Cover"],
        102 : ["Night Vision", "Frenzy", "Formidable", "Take Cover"],
        105 : ["Bulk Ammo", "Fake Out", "Formidable", "Take Cover"],
        106 : ["Night Vision", "Fake Out", "Formidable", "Take Cover"],
        149 : ["Bulk Ammo", "Frenzy", "Weapon Handling", "Intimidate"],
        150 : ["Night Vision", "Frenzy", "Weapon Handling", "Intimidate"],
        153 : ["Bulk Ammo", "Fake Out", "Weapon Handling", "Intimidate"],
        154 : ["Night Vision", "Fake Out", "Weapon Handling", "Intimidate"],
        165 : ["Bulk Ammo", "Frenzy", "Formidable", "Intimidate"],
        166 : ["Night Vision", "Frenzy", "Formidable", "Intimidate"],
        169 : ["Bulk Ammo", "Fake Out", "Formidable", "Intimidate"],
        170 : ["Night Vision", "Fake Out", "Formidable", "Intimidate"],
        
        341 : ["Bulk Ammo", "Frenzy", "Weapon Handling", "Take Cover", "Zed Time Menace"],
        342 : ["Night Vision", "Frenzy", "Weapon Handling", "Take Cover", "Zed Time Menace"],
        345 : ["Bulk Ammo", "Fake Out", "Weapon Handling", "Take Cover", "Zed Time Menace"],
        346 : ["Night Vision", "Fake Out", "Weapon Handling", "Take Cover", "Zed Time Menace"],
        357 : ["Bulk Ammo", "Frenzy", "Formidable", "Take Cover", "Zed Time Menace"],
        358 : ["Night Vision", "Frenzy", "Formidable", "Take Cover", "Zed Time Menace"],
        361 : ["Bulk Ammo", "Fake Out", "Formidable", "Take Cover", "Zed Time Menace"],
        362 : ["Night Vision", "Fake Out", "Formidable", "Take Cover", "Zed Time Menace"],         
        405 : ["Bulk Ammo", "Frenzy", "Weapon Handling", "Intimidate", "Zed Time Menace"],
        406 : ["Night Vision", "Frenzy", "Weapon Handling", "Intimidate", "Zed Time Menace"],
        409 : ["Bulk Ammo", "Fake Out", "Weapon Handling", "Intimidate", "Zed Time Menace"],
        410 : ["Night Vision", "Fake Out", "Weapon Handling", "Intimidate", "Zed Time Menace"],
        421 : ["Bulk Ammo", "Frenzy", "Formidable", "Intimidate", "Zed Time Menace"],
        422 : ["Night Vision", "Frenzy", "Formidable", "Intimidate", "Zed Time Menace"],
        425 : ["Bulk Ammo", "Fake Out", "Formidable", "Intimidate", "Zed Time Menace"],
        426 : ["Night Vision", "Fake Out", "Formidable", "Intimidate", "Zed Time Menace"],
        597 : ["Bulk Ammo", "Frenzy", "Weapon Handling", "Take Cover", "Zed Time Attack Strength"],
        598 : ["Night Vision", "Frenzy", "Weapon Handling", "Take Cover", "Zed Time Attack Strength"],
        601 : ["Bulk Ammo", "Fake Out", "Weapon Handling", "Take Cover", "Zed Time Attack Strength"],
        602 : ["Night Vision", "Fake Out", "Weapon Handling", "Take Cover", "Zed Time Attack Strength"],
        613 : ["Bulk Ammo", "Frenzy", "Formidable", "Take Cover", "Zed Time Attack Strength"],
        614 : ["Night Vision", "Frenzy", "Formidable", "Take Cover", "Zed Time Attack Strength"],
        617 : ["Bulk Ammo", "Fake Out", "Formidable", "Take Cover", "Zed Time Attack Strength"],
        618 : ["Night Vision", "Fake Out", "Formidable", "Take Cover", "Zed Time Attack Strength"],
        661 : ["Bulk Ammo", "Frenzy", "Weapon Handling", "Intimidate", "Zed Time Attack Strength"],
        662 : ["Night Vision", "Frenzy", "Weapon Handling", "Intimidate", "Zed Time Attack Strength"], 
        666 : ["Night Vision", "Fake Out", "Weapon Handling", "Intimidate", "Zed Time Attack Strength"],
        675 : ["Bulk Ammo", "Fake Out", "Weapon Handling", "Intimidate", "Zed Time Attack Strength"],
        677 : ["Bulk Ammo", "Frenzy", "Formidable", "Intimidate", "Zed Time Attack Strength"],
        678 : ["Night Vision", "Frenzy", "Formidable", "Intimidate", "Zed Time Attack Strength"],
        681 : ["Bulk Ammo", "Fake Out", "Formidable", "Intimidate", "Zed Time Attack Strength"],
        682 : ["Night Vision", "Fake Out", "Formidable", "Intimidate", "Zed Time Attack Strength"],        
      }
    };

    return buildList;
  }]);