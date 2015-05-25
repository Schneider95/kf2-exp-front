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
        
        37 : ["Ammo", "Fortitude", "Tactical Reload"], // hichem avait ses trois skills et cela indiquait 37
        
        102 : ["Ammo", "Fortitude", "Tactical Reload", "Strength"],
        150 : ["Ammo", "Fortitude", "Tactical Reload", "Tenacity"],
        149 : ["Ammo", "Fortitude", "Bombard", "Tenacity"],
        
        
        /*
        3 :  ["Ammo", "Fortitude"],
        4 :  ["Ammo", "Regeneration"],
        5 :  ["Supplier", "Fortitude"],
        6 :  ["Supplier", "Regeneration"],
        
        7 :  ["Ammo", "Fortitude", "Bombard"],
        9 :  ["Ammo", "Regeneration", "Bombard"],
        10 : ["Ammo", "Regeneration", "Tactical Reload"],
        11 : ["Supplier", "Fortitude", "Bombard"],
        12 : ["Supplier", "Fortitude", "Tactical Reload"],
        13 : ["Supplier", "Regeneration", "Bombard"],
        14 : ["Supplier", "Regeneration", "Tactical Reload"],
                        
        15 : ["Ammo", "Fortitude", "Bombard", "Strength"],
        16 : ["Ammo", "Fortitude", "Bombard", "Tenacity"],
        17 : ["Ammo", "Fortitude", "Tactical Reload", "Strength"],
        18 : ["Ammo", "Fortitude", "Tactical Reload", "Tenacity"],
        19 : ["Ammo", "Regeneration", "Bombard", "Strength"],
        20 : ["Ammo", "Regeneration", "Bombard", "Tenacity"],
        21 : ["Ammo", "Regeneration", "Tactical Reload", "Strength"],
        22 : ["Ammo", "Regeneration", "Tactical Reload", "Tenacity"],
        23 : ["Supplier", "Fortitude", "Bombard", "Strength"],
        24 : ["Supplier", "Fortitude", "Bombard", "Tenacity"],
        25 : ["Supplier", "Fortitude", "Tactical Reload", "Strength"],
        26 : ["Supplier", "Fortitude", "Tactical Reload", "Tenacity"],
        27 : ["Supplier", "Regeneration", "Bombard", "Strength"],
        28 : ["Supplier", "Regeneration", "Bombard", "Tenacity"],
        29 : ["Supplier", "Regeneration", "Tactical Reload", "Strength"],
        30 : ["Supplier", "Regeneration", "Tactical Reload", "Tenacity"],
        
        31 : ["Ammo", "Fortitude", "Bombard", "Strength", "Zed Time Safeguard"],
        32 : ["Ammo", "Fortitude", "Bombard", "Strength", "Zed Time Barrage"],
        33 : ["Ammo", "Fortitude", "Bombard", "Tenacity", "Zed Time Safeguard"],
        34 : ["Ammo", "Fortitude", "Bombard", "Tenacity", "Zed Time Barrage"],
        35 : ["Ammo", "Fortitude", "Tactical Reload", "Strength", "Zed Time Safeguard"],
        36 : ["Ammo", "Fortitude", "Tactical Reload", "Strength", "Zed Time Barrage"],
        37 : ["Ammo", "Fortitude", "Tactical Reload", "Tenacity", "Zed Time Safeguard"],
        38 : ["Ammo", "Fortitude", "Tactical Reload", "Tenacity", "Zed Time Barrage"],
        39 : ["Ammo", "Regeneration", "Bombard", "Strength", "Zed Time Safeguard"],
        40 : ["Ammo", "Regeneration", "Bombard", "Strength", "Zed Time Barrage"],
        41 : ["Ammo", "Regeneration", "Bombard", "Tenacity", "Zed Time Safeguard"],
        42 : ["Ammo", "Regeneration", "Bombard", "Tenacity", "Zed Time Barrage"],
        43 : ["Ammo", "Regeneration", "Tactical Reload", "Strength", "Zed Time Safeguard"],
        44 : ["Ammo", "Regeneration", "Tactical Reload", "Strength", "Zed Time Barrage"],
        45 : ["Ammo", "Regeneration", "Tactical Reload", "Tenacity", "Zed Time Safeguard"],
        46 : ["Ammo", "Regeneration", "Tactical Reload", "Tenacity", "Zed Time Barrage"],
        47 : ["Supplier", "Fortitude", "Bombard", "Strength", "Zed Time Safeguard"],
        48 : ["Supplier", "Fortitude", "Bombard", "Strength", "Zed Time Barrage"],
        49 : ["Supplier", "Fortitude", "Bombard", "Tenacity", "Zed Time Safeguard"],
        50 : ["Supplier", "Fortitude", "Bombard", "Tenacity", "Zed Time Barrage"],
        51 : ["Supplier", "Fortitude", "Tactical Reload", "Strength", "Zed Time Safeguard"],
        52 : ["Supplier", "Fortitude", "Tactical Reload", "Strength", "Zed Time Barrage"],
        53 : ["Supplier", "Fortitude", "Tactical Reload", "Tenacity", "Zed Time Safeguard"],
        54 : ["Supplier", "Fortitude", "Tactical Reload", "Tenacity", "Zed Time Barrage"],
        55 : ["Supplier", "Regeneration", "Bombard", "Strength", "Zed Time Safeguard"],
        56 : ["Supplier", "Regeneration", "Bombard", "Strength", "Zed Time Barrage"],
        57 : ["Supplier", "Regeneration", "Bombard", "Tenacity", "Zed Time Safeguard"],
        58 : ["Supplier", "Regeneration", "Bombard", "Tenacity", "Zed Time Barrage"],
        59 : ["Supplier", "Regeneration", "Tactical Reload", "Strength", "Zed Time Safeguard"],
        60 : ["Supplier", "Regeneration", "Tactical Reload", "Strength", "Zed Time Barrage"],
        61 : ["Supplier", "Regeneration", "Tactical Reload", "Tenacity", "Zed Time Safeguard"],
        62 : ["Supplier", "Regeneration", "Tactical Reload", "Tenacity", "Zed Time Barrage"]
        */
      },
      medic: {
        1 :  ["Healing Surge"],
        2 :  ["Enforcer"],
        5 :  ["Healing Surge", "Combatant"], // nems avait pris les deux skills de gauche
        21 :  ["Healing Surge", "Combatant", "Regeneration"], // nems avait pris ces trois skills  et ca indiquait 21
        25 : ["Healing Surge", "Combatant", "Lacerate"],
        89 : ["Healing Surge", "Armament", "Regeneration", "Vaccination"],
        153 : ["Healing Surge", "Armament", "Regeneration", "Acidic compound"],
        601 : ["Healing Surge", "Armament", "Regeneration", "Vaccination", "Zed Time Sedative"],
          
        /*
        
        
        
        4 :  ["Healing Surge", "Armament"],
        //5 :  ["Enforcer", "Combatant"],
        6 :  ["Enforcer", "Armament"],
        

        
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
        //21 : ["Healing Surge", "Armament", "Lacerate", "Vaccination"],
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