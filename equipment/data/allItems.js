var oSources = {
  /**/"PHB": {
    "text": {
      "en": {
        "title": "Palyers Handbook"
      },
      "ru": {
        "title": "Книга игрока"
      }
    }
  }/*/,
  "DMG": {
    "text": {
      "en": {
        "title": "Dungeon Master Guide"
      },
      "ru": {
        "title": "Книга мастера"
      }
    }
  },
  "ToA": {
    "text": {
      "en": {
        "title": "Tomb of Annihilation"
      },
      "ru": {
        "title": "Гробница Аннигиляции"
      }
    }
  },
  "XGTE": {
    "text": {
      "en": {
        "title": "Xanathar's Guide to Everything"
      },
      "ru": {
        "title": "Справочник Занатара Обо Всем"
      }
    }
  }
	/**/
}
var oTypes = {
  "armor": {
    "text": {
      "en": {
        "title": "armor"
      },
      "ru": {
        "title": "броня",
        "gender": "she"
      }
    },
		"subTypes": [
			"light",
			"medium",
			"heavy",
			"shield"
		],
	"img": "type_armor.jpg"
  },
  "weapon": {
    "text": {
      "en": {
        "title": "weapon"
      },
      "ru": {
        "title": "оружие",
        "gender": "it"
      }
    },
		"subTypes": [
			"simple",
			"melee",
			"ranged",
			"martial"
		],
	"img": "type_weapon.jpg"
  },
	"ammunition": {
    "text": {
      "en": {
        "title": "ammunition"
      },
      "ru": {
        "title": "боеприпас",
        "gender": "they"
      }
    },
	"img": "type_ammunition.jpg"
  },
	"consumables": {
    "text": {
      "en": {
        "title": "consumables"
      },
      "ru": {
        "title": "расходник",
        "gender": "he"
      }
    },
	"img": "type_consumables.jpg"
  },
  "kit": {
    "text": {
      "en": {
        "title": "kit"
      },
      "ru": {
        "title": "набор",
        "gender": "he"
      }
    },
	"img": "type_kit.jpg"
  },
	"tool": {
    "text": {
      "en": {
        "title": "tool"
      },
      "ru": {
        "title": "инструмент",
        "gender": "he"
      }
    },
	"img": "type_tool.jpg"
  },
  "gear": {
    "text": {
      "en": {
        "title": "gear"
      },
      "ru": {
        "title": "приспособление",
        "gender": "it"
      }
    },
	"img": "type_gear.jpg"
  },
  "container": {
    "text": {
      "en": {
        "title": "container"
      },
      "ru": {
        "title": "ёмкость",
        "gender": "he"
      }
    },
	"img": "type_container.jpg"
  },  
  "arcane focus": {
    "text": {
      "en": {
        "title": "arcane focus"
      },
      "ru": {
        "title": "фокусирвка магическая",
        "gender": "she"
      }
    },
	"img": "type_focus.jpg"
  },
	"druidic focus": {
    "text": {
      "en": {
        "title": "druidic focus"
      },
      "ru": {
        "title": "фокусировка друидская",
        "gender": "she"
      }
    },
	"img": "type_focus.jpg"
  },
	 "holly simbol": {
    "text": {
      "en": {
        "title": "holly simbol"
      },
      "ru": {
        "title": "святой символ",
        "gender": "he"
      }
    },
	"img": "type_focus.jpg"
  },
  "clothes": {
    "text": {
      "en": {
        "title": "clothes"
      },
      "ru": {
        "title": "одежда",
        "gender": "she"
      }
    },
	"img": "type_clothes.jpg"
  },
  "camp": {
    "text": {
      "en": {
        "title": "camp"
      },
      "ru": {
        "title": "лагерь",
        "gender": "he"
      }
    },
	"img": "type_camp.jpg"
  },
	
	/*/
  "smth": {
    "text": {
      "en": {
        "title": "Other"
      },
      "ru": {
        "title": "прочее",
        "gender": "it"
      }
    },
	"img": "type_smth.jpg"
  }
	/**/
}

var oTypeAdditions = {
	"light": {
    "text": {
      "en": {
        "title": "light"
      },
      "ru": {
        "he": "легкий",
        "she": "легкая",
        "it": "легкое",
        "title": "легкая"
      }
    }
  },
	"medium": {
    "text": {
      "en": {
        "title": "medium"
      },
      "ru": {
        "he": "средний",
        "she": "средняя",
        "it": "среднее",
        "title": "средняя"
      }
    }
  },
	"heavy": {
    "text": {
      "en": {
        "title": "heavy"
      },
      "ru": {
        "he": "тяжелый",
        "she": "тяжелая",
        "it": "тяжелое",
        "title": "тяжелая"
      }
    }
  },
	"simple": {
    "text": {
      "en": {
        "title": "simple"
      },
      "ru": {
        "he": "простой",
        "she": "простая",
        "it": "простое",
        "title": "простое"
      }
    }
  },
	"shield": {
    "text": {
      "en": {
        "title": "shield"
      },
      "ru": {
        "he": "щит",
        "she": "щит",
        "it": "щит",
        "title": "щит"
      }
    }
  },
	"melee": {
    "text": {
      "en": {
        "title": "melee"
      },
      "ru": {
        "he": "рукопашный",
        "she": "рукопашная",
        "it": "рукопашное",
        "title": "рукопашное"
      }
    }
  },
	"ranged": {
    "text": {
      "en": {
        "title": "ranged"
      },
      "ru": {
        "he": "дальнобойный",
        "she": "дальнобойная",
        "it": "дальнобойное",
        "title": "дальнобойное"
      }
    }
  },
	"martial": {
    "text": {
      "en": {
        "title": "martial"
      },
      "ru": {
        "he": "воинский",
        "she": "воинское",
        "it": "воинское",
        "title": "воинское"
      }
    }
  },
}

var oDamageType = {
	"piercing": {
    "text": {
      "en": {
        "title": "piercing"
      },
      "ru": {
        "he": "колющий",
        "she": "колющая",
        "it": "колющее",
        "title": "колющий"
      }
    }
  },
	"bludgeoning": {
    "text": {
      "en": {
        "title": "bludgeoning"
      },
      "ru": {
        "he": "дробящий",
        "she": "дробящая",
        "it": "дробящее",
        "title": "дробящий"
      }
    }
  },
	"slashing": {
    "text": {
      "en": {
        "title": "slashing"
      },
      "ru": {
        "he": "рубящий",
        "she": "рубящая",
        "it": "рубящее",
        "title": "рубящий"
      }
    }
  }
}

var oAC = {
	"dex modifier": {
    "text": {
      "en": {
        "title": "dex modifier"
      },
      "ru": {
        "he": "модификатор ловкости",
        "she": "модификатор ловкости",
        "it": "модификатор ловкости",
        "title": "модификатор ловкости"
      }
    }
  },
	"max": {
    "text": {
      "en": {
        "title": "max"
      },
      "ru": {
        "he": "макс.",
        "she": "макс.",
        "it": "макс.",
        "title": "макс."
      }
    }
  },
}


var oWeaponProps = {
	"light": {
    "text": {
      "en": {
        "title": "light"
      },
      "ru": {
        "he": "легкий",
        "she": "легкая",
        "it": "легкое",
        "title": "легкое"
      }
    }
  },
	"heavy": {
    "text": {
      "en": {
        "title": "heavy"
      },
      "ru": {
        "he": "тяжелый",
        "she": "тяжелая",
        "it": "тяжелое",
        "title": "тяжелое"
      }
    }
  },
	"versatile": {
    "text": {
      "en": {
        "title": "versatile"
      },
      "ru": {
        "he": "универсальный",
        "she": "универсальная",
        "it": "универсальное",
        "title": "универсальное"
      }
    }
  },	
	"thrown": {
    "text": {
      "en": {
        "title": "thrown"
      },
      "ru": {
        "he": "метательный",
        "she": "метательная",
        "it": "метательное",
        "title": "метательное"
      }
    }
  },
	"range": {
    "text": {
      "en": {
        "title": "range"
      },
      "ru": {
        "he": "дистанция",
        "she": "дистанция",
        "it": "дистанция",
        "title": "дистанция"
      }
    }
  },
	"two-handed": {
    "text": {
      "en": {
        "title": "two-handed"
      },
      "ru": {
        "he": "двуручный",
        "she": "двуручная",
        "it": "двуручное",
        "title": "двуручное"
      }
    }
  },	
	"finesse": {
    "text": {
      "en": {
        "title": "finesse"
      },
      "ru": {
        "he": "фехтовальный",
        "she": "фехтовальная",
        "it": "фехтовальное",
        "title": "фехтовальное"
      }
    }
  },
	"reach": {
    "text": {
      "en": {
        "title": "reach"
      },
      "ru": {
        "he": "досягаемость",
        "she": "досягаемость",
        "it": "досягаемость",
        "title": "досягаемость"
      }
    }
  },	
	"ammunition": {
    "text": {
      "en": {
        "title": "ammunition"
      },
      "ru": {
        "he": "боеприпас",
        "she": "боеприпас",
        "it": "боеприпас",
        "title": "боеприпас"
      }
    }
  },	
	"loading": {
    "text": {
      "en": {
        "title": "loading"
      },
      "ru": {
        "he": "перезарядка",
        "she": "перезарядка",
        "it": "перезарядка",
        "title": "перезарядка"
      }
    }
  },	
	"special": {
    "text": {
      "en": {
        "title": "special"
      },
      "ru": {
        "he": "особое",
        "she": "особое",
        "it": "особое",
        "title": "особое"
      }
    }
  },	

}


var allItems = [
		{
		"en": {
			"name": "Padded",
			"type": "Armor",
			"typeAdditions": "(light)",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "PADDED.jpg",
			"ac": "11 + Dex modifier",
			"stealthDis": true,
			"weight": "8"
		},
		"ru": {
			"name": "Стеганная броня",
			"text": "",
		}
	}, {
		"en": {
			"name": "Leather",
			"type": "Armor",
			"typeAdditions": "(light)",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "LEATHER.jpg",
			"ac": "11 + Dex modifier",
			"weight": "10"
		},
		"ru": {
			"name": "Кожанная броня",
			"text": "",
		}
	}, {
		"en": {
			"name": "Studded leather",
			"type": "Armor",
			"typeAdditions": "(light)",
			"rarity": 0,
			"text": "",
			"coast": "45 gp",
			"source": "PHB",
			"img": "STUDDED_LEATHER.jpg",
			"ac": "12 + Dex modifier",
			"weight": "13"
		},
		"ru": {
			"name": "Клепанная кожанная броня",
			"text": "",
		}
	}, {
		"en": {
			"name": "Hide",
			"type": "Armor",
			"typeAdditions": "(medium)",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "HIDE.jpg",
			"ac": "12 + Dex modifier (max 2)",
			"weight": "12"
		},
		"ru": {
			"name": "Броня из шкур",
			"text": "",
		}
	}, {
		"en": {
			"name": "Chain shirt",
			"type": "Armor",
			"typeAdditions": "(medium)",
			"rarity": 0,
			"text": "",
			"coast": "50 gp",
			"source": "PHB",
			"img": "CHAIN_SHIRT.jpg",
			"ac": "13 + Dex modifier (max 2)",
			"weight": "20"
		},
		"ru": {
			"name": "Кольчужная рубаха",
			"text": "",
		}
	}, {
		"en": {
			"name": "Scale mail",
			"type": "Armor",
			"typeAdditions": "(medium)",
			"rarity": 0,
			"text": "",
			"coast": "50 gp",
			"source": "PHB",
			"img": "SCALEMAIL.jpg",
			"ac": "14 + Dex modifier (max 2)",
			"stealthDis": true,
			"weight": "45"
		},
		"ru": {
			"name": "Чешуйчатая броня",
			"text": "",
		}
	}, {
		"en": {
			"name": "Breastplate",
			"type": "Armor",
			"typeAdditions": "(medium)",
			"rarity": 0,
			"text": "",
			"coast": "400 gp",
			"source": "PHB",
			"img": "BREASTPLATE.jpg",
			"ac": "14 + Dex modifier (max 2)",
			"weight": "20"
		},
		"ru": {
			"name": "Кираса",
			"text": "",
		}
	}, {
		"en": {
			"name": "Half plate",
			"type": "Armor",
			"typeAdditions": "(medium)",
			"rarity": 0,
			"text": "",
			"coast": "750 gp",
			"source": "PHB",
			"img": "HALF_PLATE.jpg",
			"ac": "15 + Dex modifier (max 2)",
			"stealthDis": true,
			"weight": "40"
		},
		"ru": {
			"name": "Полулаты",
			"text": "",
		}
	}, {
		"en": {
			"name": "Ring mail",
			"type": "Armor",
			"typeAdditions": "(heavy)",
			"rarity": 0,
			"text": "",
			"coast": "30 gp",
			"source": "PHB",
			"img": "RINGMALE.jpg",
			"ac": "14",
			"stealthDis": true,
			"weight": "40"
		},
		"ru": {
			"name": "Колечная броня",
			"text": "",
		}
	}, {
		"en": {
			"name": "Chain mail",
			"type": "Armor",
			"typeAdditions": "(heavy)",
			"rarity": 0,
			"text": "",
			"coast": "75 gp",
			"source": "PHB",
			"img": "CHAINMALE.jpg",
			"ac": "16",
			"stealthDis": true,
			"weight": "55"
		},
		"ru": {
			"name": "Кольчужная броня",
			"text": "",
		}
	}, {
		"en": {
			"name": "Splint",
			"type": "Armor",
			"typeAdditions": "(heavy)",
			"rarity": 0,
			"text": "",
			"coast": "200 gp",
			"source": "PHB",
			"img": "SPLINTMALE.jpg",
			"ac": "17",
			"stealthDis": true,
			"weight": "60"
		},
		"ru": {
			"name": "Наборная броня",
			"text": "",
		}
	}, {
		"en": {
			"name": "Plate",
			"type": "Armor",
			"typeAdditions": "(heavy)",
			"rarity": 0,
			"text": "",
			"coast": "1500 gp",
			"source": "PHB",
			"img": "PLATE.jpg",
			"ac": "18",
			"stealthDis": true,
			"weight": "65"
		},
		"ru": {
			"name": "Латы",
			"text": "",
		}
	}, {
		"en": {
			"name": "Shield",
			"type": "Armor",
			"typeAdditions": "(shield)",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "SHIELD.jpg",
			"ac": "+2",
			"weight": "6"
		},
		"ru": {
			"name": "Щит",
			"text": "",
		}
	}, {
		"en": {
			"name": "Club",
			"type": "weapon",
			"typeAdditions": "(Simple Melee)",
			"rarity": 0,
			"text": "",
			"coast": "1 sp",
			"source": "PHB",
			"img": "CLUB.jpg",
			"weight": "2",
			"damageVal": "1d4",
			"damageType": "bludgeoning",
			"props": ["Light"]
		},
		"ru": {
			"name": "Дубинка",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Dagger",
			"type": "weapon",
			"typeAdditions": "(Simple Melee)",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "DAGGER.jpg",
			"weight": "1",
			"damageVal": "1d4",
			"damageType": "piercing",
			"props": ["Finesse", "light", "thrown (range 20/60)"]
		},
		"ru": {
			"name": "Кинжал",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Greatclub",
			"type": "weapon",
			"typeAdditions": "(Simple Melee)",
			"rarity": 0,
			"text": "",
			"coast": "2 sp",
			"source": "PHB",
			"img": "GREATCLUB.jpg",
			"weight": "10",
			"damageVal": "1d8",
			"damageType": "bludgeoning",
			"props": ["Two-handed"]
		},
		"ru": {
			"name": "Палица",
			"nic": "Дубина",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Handaxe",
			"type": "weapon",
			"typeAdditions": "(Simple Melee)",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "HANDAXE.jpg",
			"weight": "2",
			"damageVal": "1d6",
			"damageType": "slashing",
			"props": ["Light", "thrown (range 20/60)"]
		},
		"ru": {
			"name": "Ручной топор",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Javelin",
			"type": "weapon",
			"typeAdditions": "(Simple Melee)",
			"rarity": 0,
			"text": "",
			"coast": "5 sp",
			"source": "PHB",
			"img": "JAVELIN.jpg",
			"weight": "2",
			"damageVal": "1d6",
			"damageType": "piercing",
			"props": ["Thrown (range 30/120)"]
		},
		"ru": {
			"name": "Метательное копьё",
			"nic": "Метательное копье, Дрот",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Light hammer",
			"type": "weapon",
			"typeAdditions": "(Simple Melee)",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "LIGHT_HAMMER.jpg",
			"weight": "2",
			"damageVal": "1d4",
			"damageType": "bludgeoning",
			"props": ["Light", "thrown (range 20/60)"]
		},
		"ru": {
			"name": "Лёгкий молот",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Mace",
			"type": "weapon",
			"typeAdditions": "(Simple Melee)",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "MACE.jpg",
			"weight": "4",
			"damageVal": "1d6",
			"damageType": "bludgeoning"
		},
		"ru": {
			"name": "Булава",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Quarterstaff",
			"type": "weapon",
			"typeAdditions": "(Simple Melee)",
			"rarity": 0,
			"text": "",
			"coast": "2 sp",
			"source": "PHB",
			"img": "QUARTERSTAFF.jpg",
			"weight": "4",
			"damageVal": "1d6",
			"damageType": "bludgeoning",
			"props": ["Versatile (1d8)"]
		},
		"ru": {
			"name": "Боевой посох",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Sickle",
			"type": "weapon",
			"typeAdditions": "(Simple Melee)",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "SICKLE.jpg",
			"weight": "2",
			"damageVal": "1d4",
			"damageType": "slashing",
			"props": ["Light"]
		},
		"ru": {
			"name": "Серп",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Spear",
			"type": "weapon",
			"typeAdditions": "(Simple Melee)",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "SPEAR.jpg",
			"weight": "32",
			"damageVal": "1d6",
			"damageType": "piercing",
			"props": ["Thrown (range 20/60)", "versatile (1d8)"]
		},
		"ru": {
			"name": "Копьё",
			"nic": "копье",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Unarmed strike",
			"type": "weapon",
			"typeAdditions": "(Simple Melee)",
			"rarity": 0,
			"text": "",
			"coast": "Бисплатна!!",
			"source": "PHB",
			"img": "UNARMED_STRIKE.jpg",
			"damageVal": "1",
			"damageType": "bludgeoning"
		},
		"ru": {
			"name": "Безоружный удар",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Crossbow, light",
			"type": "weapon",
			"typeAdditions": "(Simple Ranged)",
			"rarity": 0,
			"text": "",
			"coast": "25 gp",
			"source": "PHB",
			"img": "CROSSBOW_LIGHT.jpg",
			"weight": "5",
			"damageVal": "1d8",
			"damageType": "piercing",
			"props": ["Ammunition (range 80/320)", "loading", "two-handed"]
		},
		"ru": {
			"name": "Арбалет, легкий",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Dart",
			"type": "weapon",
			"typeAdditions": "(Simple Ranged)",
			"rarity": 0,
			"text": "",
			"coast": "5 sp",
			"source": "PHB",
			"img": "DART.jpg",
			"weight": "1/4",
			"damageVal": "1d4",
			"damageType": "piercing",
			"props": ["Finesse", "thrown (range 20/60)"]
		},
		"ru": {
			"name": "Дротик",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Shortbow",
			"type": "weapon",
			"typeAdditions": "(Simple Ranged)",
			"rarity": 0,
			"text": "",
			"coast": "25 gp",
			"source": "PHB",
			"img": "SHORTBOW.jpg",
			"weight": "2",
			"damageVal": "1d6",
			"damageType": "piercing",
			"props": ["Ammunition (range 80/320)", "two-handed"]
		},
		"ru": {
			"name": "Короткий лук",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Sling",
			"type": "weapon",
			"typeAdditions": "(Simple Ranged)",
			"rarity": 0,
			"text": "",
			"coast": "1 sp",
			"source": "PHB",
			"img": "SLING.jpg",
			"weight": "0",
			"damageVal": "1d4",
			"damageType": "bludgeoning",
			"props": ["Ammunition (range 30/120)"]
		},
		"ru": {
			"name": "Праща",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Battleaxe",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "BATTLEAXE.jpg",
			"weight": "4",
			"damageVal": "1d8",
			"damageType": "slashing",
			"props": ["Versatile (1d10)"]
		},
		"ru": {
			"name": "Боевой топор",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Flail",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "FLAIL.jpg",
			"weight": "2",
			"damageVal": "1d8",
			"damageType": "bludgeoning"
		},
		"ru": {
			"name": "Цеп",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Glaive",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "20 gp",
			"source": "PHB",
			"img": "GLAIVE.jpg",
			"weight": "6",
			"damageVal": "1d10",
			"damageType": "slashing",
			"props": ["Heavy", "reach", "two-handed"]
		},
		"ru": {
			"name": "Глефа",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Greataxe",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "30 gp",
			"source": "PHB",
			"img": "GREATAXE.jpg",
			"weight": "7",
			"damageVal": "1d12",
			"damageType": "slashing",
			"props": ["Heavy", "two-handed"]
		},
		"ru": {
			"name": "Секира",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Greatsword",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "50 gp",
			"source": "PHB",
			"img": "GREATSWORD.jpg",
			"weight": "6",
			"damageVal": "2d6",
			"damageType": "slashing",
			"props": ["Heavy", "two-handed"]
		},
		"ru": {
			"name": "Двуручный меч",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Halberd",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "20 gp",
			"source": "PHB",
			"img": "HALBERD.jpg",
			"weight": "6",
			"damageVal": "1d10",
			"damageType": "slashing",
			"props": ["Heavy", "reach", "two-handed"]
		},
		"ru": {
			"name": "Алебарда",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Lance",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "LANCE.jpg",
			"weight": "6",
			"damageVal": "1d12",
			"damageType": "piercing",
			"props": ["Reach", "special"]
		},
		"ru": {
			"name": "Длинное копьё",			
			"nic": "длинное копье",
			"text": "",
		}
	}, {
		"en": {
			"name": "Longsword",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "15 gp",
			"source": "PHB",
			"img": "LONGSWORD.jpg",
			"weight": "3",
			"damageVal": "1d8",
			"damageType": "slashing",
			"props": ["Versatile (1dl0)"]
		},
		"ru": {
			"name": "Длинный меч",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Morningstar",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "15 gp",
			"source": "PHB",
			"img": "MORNINGSTAR.jpg",
			"weight": "4",
			"damageVal": "1d8",
			"damageType": "piercing"
		},
		"ru": {
			"name": "Моргенштерн",	
			"nic": "Утренняя звезда",		
			"text": "",
		}
	}, {
		"en": {
			"name": "Maul",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "MAUL.jpg",
			"weight": "10",
			"damageVal": "2d6",
			"damageType": "bludgeoning",
			"props": ["Heavy", "two-handed"]
		},
		"ru": {
			"name": "Молот",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Pike",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "PIKE.jpg",
			"weight": "18",
			"damageVal": "1d10",
			"damageType": "piercing",
			"props": ["Heavy", "reach", "two-handed"]
		},
		"ru": {
			"name": "Пика",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Rapier",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "25 gp",
			"source": "PHB",
			"img": "RAPIER.jpg",
			"weight": "2",
			"damageVal": "1d8",
			"damageType": "piercing",
			"props": ["Finesse"]
		},
		"ru": {
			"name": "Рапира",
			"nic": "Шпага",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Scimitar",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "25 gp",
			"source": "PHB",
			"img": "SCIMITAR.jpg",
			"weight": "3",
			"damageVal": "1d6",
			"damageType": "slashing",
			"props": ["Finesse", "light"]
		},
		"ru": {
			"name": "Скимитар",
			"nic": "ятаган",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Shortsword",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "SHORTSWORD.jpg",
			"weight": "2",
			"damageVal": "1d6",
			"damageType": "piercing",
			"props": ["Finesse", "light"]
		},
		"ru": {
			"name": "Короткий меч",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Trident",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "TRIDENT.jpg",
			"weight": "4",
			"damageVal": "1d6",
			"damageType": "piercing",
			"props": ["Thrown (range 20/60)", "versatile (1d8)"]
		},
		"ru": {
			"name": "Трезубец",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "War pick",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "WAR_PICK.jpg",
			"weight": "2",
			"damageVal": "1d8",
			"damageType": "piercing"
		},
		"ru": {
			"name": "Боевая кирка",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Whip",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "WHIP.jpg",
			"weight": "3",
			"damageVal": "1d4",
			"damageType": "slashing",
			"props": ["Finesse", "reach"]
		},
		"ru": {
			"name": "Кнут",
			"nic": "Хлыст, бич",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Warhammer",
			"type": "weapon",
			"typeAdditions": "(Martial Melee)",
			"rarity": 0,
			"text": "",
			"coast": "15 gp",
			"source": "PHB",
			"img": "WARHAMMER.jpg",
			"weight": "2",
			"damageVal": "1d8",
			"damageType": "bludgeoning",
			"props": ["Versatile (1d10)"]
		},
		"ru": {
			"name": "Боевой молот",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Blowgun",
			"type": "weapon",
			"typeAdditions": "(Martial Ranged)",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "BLOWGUN.jpg",
			"weight": "1",
			"damageVal": "1",
			"damageType": "piercing",
			"props": ["Ammunition (range 25/100)", "loading"]
		},
		"ru": {
			"name": "Духовая трубка",
			"nic": "Духовое ружье, Духовое ружьё",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Crossbow, hand",
			"type": "weapon",
			"typeAdditions": "(Martial Ranged)",
			"rarity": 0,
			"text": "",
			"coast": "75 gp",
			"source": "PHB",
			"img": "CROSSBOW_HAND.jpg",
			"weight": "3",
			"damageVal": "1d6",
			"damageType": "piercing",
			"props": ["Ammunition (range 30/120)", "light", "loading"]
		},
		"ru": {
			"name": "Арбалет, ручной",
			"nic": "ручной арбалет",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Crossbow, heavy",
			"type": "weapon",
			"typeAdditions": "(Martial Ranged)",
			"rarity": 0,
			"text": "",
			"coast": "50 gp",
			"source": "PHB",
			"img": "CROSSBOW_HEAVY.jpg",
			"weight": "18",
			"damageVal": "1d10",
			"damageType": "piercing",
			"props": ["Ammunition (range 100/400)", "heavy", "loading", "two-handed"]
		},
		"ru": {
			"name": "Арбалет, тяжёлый",
			"nic": "Тяжелый арбалет, Тяжёлый арбалет",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Longbow",
			"type": "weapon",
			"typeAdditions": "(Martial Ranged)",
			"rarity": 0,
			"text": "",
			"coast": "50 gp",
			"source": "PHB",
			"img": "LONGBOW.jpg",
			"weight": "2",
			"damageVal": "1d8",
			"damageType": "piercing",
			"props": ["Ammunition (range 150/600)", "heavy", "two-handed"]
		},
		"ru": {
			"name": "Длинный лук",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Net",
			"type": "weapon",
			"typeAdditions": "(Martial Ranged)",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "NET.jpg",
			"weight": "3",
			"props": ["Special", "thrown (range 5/15)"]
		},
		"ru": {
			"name": "Сеть",
			
			"text": "",
		}
	}, {
		"en": {
			"name": "Abacus",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Abacus.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Счеты",	
			"nic": "Абак",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Acid (vial)",
			"type": "consumables",
			"rarity": 0,
			"text": "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw  the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage.",
			"coast": "25 gp",
			"source": "PHB",
			"img": "Acid.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Кислота (Флакон)",			
			"text": "Вы можете действием выплеснуть содержимое этого сосуда на существо, находящееся в пределах 5 футов от вас, или метнуть сосуд на расстояние до 20 футов, чтобы он разбился от удара. В любом случае совершите дальнобойную атаку против существа или предмета, считая кислоту импровизированным оружием. При попадании цель получает урон кислотой 2к6.",
		}
	}, {
		"en": {
			"name": "Alchemist's fire (flask)",
			"type": "consumables",
			"rarity": 0,
			"text": "This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's tire as an improvised weapon. On a hit, the target takes Id4 tire damage at the start of each of its turns. Acreature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the liames.",
			"coast": "50 gp",
			"source": "PHB",
			"img": "Alchemists_fire.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Алхимический огонь (фляжка)",			
			"text": "Эта вязкая и клейкая жидкость воспламеняется при контакте с воздухом. Вы можете действием метнуть фляжку на расстояние до 20 футов, разбив её от удара. Совершите дальнобойную атаку по существу или предмету, считая алхимический огонь импровизированным оружием. При попадании цель получает урон огнём 1к4 в начале каждого своего хода. Существо может окончить этот урон, потратив действие на тушение пламени, и совершив проверку Ловкости со Сл 10.",
		}
	}, {
		"en": {
			"name": "Arrows (20)",
			"type": "Ammunition",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Arrows.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Стрелы (20)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Blowgun needles (50)",
			"type": "Ammunition",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Blowgun_needles.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Иглы для трубки (50)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Crossbow bolts (20)",
			"type": "Ammunition",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Crossbow_bolts.jpg",
			"weight": "1.5"
		},
		"ru": {
			"name": "Арбалетные болты (20)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Sling bullets (20)",
			"type": "Ammunition",
			"rarity": 0,
			"text": "",
			"coast": "4 cp",
			"source": "PHB",
			"img": "Sling_bullets.jpg",
			"weight": "1.5"
		},
		"ru": {
			"name": "Снаряды для пращи (20)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Antitoxin (vial)",
			"type": "consumables",
			"rarity": 0,
			"text": "Acreature that drinks this viaI of liquid gains advantage on saving throws against poison for 1 hour. lt confers no benetit to undead or constructs.",
			"coast": "50 gp",
			"source": "PHB",
			"img": "Antitoxin.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Противоядие (флакон)",			
			"text": "Существо, выпившее жидкость из этого флакона, в течение часа совершает спасброски от яда с преимуществом. Оно не предоставляет преимущества нежити и конструктам.",
		}
	}, {
		"en": {
			"name": "Crystal",
			"type": "Arcane Focus",
			"rarity": 0,
			"text": "An arcane focus is a special iteman orb, a crystal, a rod, a specially constructed staff, a wand.like length ofwood, or some similar itemdesigned to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in chapter 10.",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Crystal.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Кристалл",			
			"text": "Магическая фокусировка это особый предмет — сфера, кристалл, жезл, особый посох, короткая деревянная палочка или похожий предмет — созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.",
		}
	}, {
		"en": {
			"name": "Orb",
			"type": "Arcane Focus",
			"rarity": 0,
			"text": "An arcane focus is a special iteman orb, a crystal, a rod, a specially constructed staff, a wand.like length ofwood, or some similar itemdesigned to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in chapter 10.",
			"coast": "20 gp",
			"source": "PHB",
			"img": "Orb.jpg",
			"weight": "3"
		},
		"ru": {
			"name": "Сфера",			
			"text": "Магическая фокусировка это особый предмет — сфера, кристалл, жезл, особый посох, короткая деревянная палочка или похожий предмет — созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.",
		}
	}, {
		"en": {
			"name": "Rod",
			"type": "Arcane Focus",
			"rarity": 0,
			"text": "An arcane focus is a special iteman orb, a crystal, a rod, a specially constructed staff, a wand.like length ofwood, or some similar itemdesigned to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in chapter 10.",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Rod.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Жезл",			
			"text": "Магическая фокусировка это особый предмет — сфера, кристалл, жезл, особый посох, короткая деревянная палочка или похожий предмет — созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.",
		}
	}, {
		"en": {
			"name": "Staff",
			"type": "Arcane Focus",
			"rarity": 0,
			"text": "An arcane focus is a special iteman orb, a crystal, a rod, a specially constructed staff, a wand.like length ofwood, or some similar itemdesigned to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in chapter 10.",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Staff.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Посох",			
			"text": "Магическая фокусировка это особый предмет — сфера, кристалл, жезл, особый посох, короткая деревянная палочка или похожий предмет — созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.",
		}
	}, {
		"en": {
			"name": "Wand",
			"type": "Arcane Focus",
			"rarity": 0,
			"text": "An arcane focus is a special iteman orb, a crystal, a rod, a specially constructed staff, a wand.like length ofwood, or some similar itemdesigned to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in chapter 10.",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Wand.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Волшебная палочка",			
			"text": "Магическая фокусировка это особый предмет — сфера, кристалл, жезл, особый посох, короткая деревянная палочка или похожий предмет — созданный для проведения тайных заклинаний. Волшебники, колдуны и чародеи могут использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.",
		}
	}, {
		"en": {
			"name": "Backpack",
			"type": "Container",
			"rarity": 0,
			"text": "Capacily: 1 cubic f001/30 pounds of gear<br>You can al50 strap items, such as a bedroll ar a coil af rape, to lhe oulside of a backpack.",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Backpack.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Рюкзак",			
			"text": "Вместимость: 1 кубический фут/30 фунтов (15 килограмм)<br>Вы также можете привязывать такие предметы как спальники и верёвки снаружи рюкзака.",
		}
	}, {
		"en": {
			"name": "Ball bearings (bag of 1000)",
			"type": "consumables",
			"rarity": 0,
			"text": "As an action, you can spill these tiny metal balls from their pouch to cover a levei area 10 feet square. Acreature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fali prone. A creature moving through the area at half speed doesn't need to make the saving throw.",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Ball_bearings.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Металлические шарики (сумка с 1000 шт.)",			
			"text": "Вы можете действием рассыпать из этого мешка крохотные металлические шарики, покрыв площадь 10 × 10 футов. Существа, перемещающиеся по этой области, должны преуспеть в спасброске Ловкости со Сл 10, иначе они падают ничком. Существо, перемещающееся по этой области с уменьшенной вдвое скоростью, не обязано совершать спасбросок.",
		}
	}, {
		"en": {
			"name": "Barrei",
			"type": "container",
			"rarity": 0,
			"text": "Capacity: 40 gallons liquid, 4 cubic feel solid",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Barrei.jpg",
			"weight": "70"
		},
		"ru": {
			"name": "Бочка",			
			"text": "Вмевтимость: 40 галлонов (150 литров), 4 кубических фута",
		}
	}, {
		"en": {
			"name": "Basket",
			"type": "container",
			"rarity": 0,
			"text": "Capacity: 2 cubic feel/40 pounds of gear",
			"coast": "4 sp",
			"source": "PHB",
			"img": "Basket.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Корзина",			
			"text": "Вместимость: 2 кубических фута/40 фунтов (20 килограмм)",
		}
	}, {
		"en": {
			"name": "Bedroll",
			"type": "camp",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Bedroll.jpg",
			"weight": "7"
		},
		"ru": {
			"name": "Спальник",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Bell",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Bell.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Колокольчик",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Blanket",
			"type": "camp",
			"rarity": 0,
			"text": "",
			"coast": "5 sp",
			"source": "PHB",
			"img": "Blanket.jpg",
			"weight": "3"
		},
		"ru": {
			"name": "Одеяло",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Block and tackle",
			"type": "gear",
			"rarity": 0,
			"text": "Aset of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift.",
			"coast": "1 sp",
			"source": "PHB",
			"img": "Block_and_tackle.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Блок и лебедка",			
			"text": "Набор блоков и тросов с крюками для подвешивания предметов. Блок и лебёдка позволяют вам поднять в четыре раза больше, чем обычно.",
		}
	}, {
		"en": {
			"name": "Book",
			"type": "consumables",
			"rarity": 0,
			"text": "A book might contain poetry, historical accounts, information pertaining to a particular tield of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a <a href='https://tentaculus.ru/equipment/#q=spellbook'>spellbook</a>.",
			"coast": "25 gp",
			"source": "PHB",
			"img": "Book.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Книга",			
			"text": "В книге могут быть стихи, документальные сведения, информация о чём-либо, диаграммы и заметки о гномьих приспособлениях, или что угодно другое, представленное текстом и картинками. <a href='https://tentaculus.ru/equipment/#q=spellbook'>Книга с заклинаниями</a> — другое дело.",
		}
	}, {
		"en": {
			"name": "Bottle, glass",
			"type": "consumables",
			"rarity": 0,
			"text": "Capacity: 1.5 pints liquid",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Bottle.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Бутылка, стеклянная",		
			"nic": "Баклажка",			
			"text": "Вместимость: 1,5 пинты (0,75 литра)",
		}
	}, {
		"en": {
			"name": "Bucket",
			"type": "container",
			"rarity": 0,
			"text": "Capacity: 3 gallons liquid, 1/2 cubic fool solid",
			"coast": "5 cp",
			"source": "PHB",
			"img": "Bucket.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Ведро",			
			"text": "Вместимость: 3 галлона (11 литров), 0,5 кубических футов",
		}
	}, {
		"en": {
			"name": "Caltrops (bag of 20)",
			"type": "consumables",
			"rarity": 0,
			"text": "As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving and take I piercing damage. Until the creature regains at least I hit point, its walking speed is reduced by 10 feet. Acreature moving through the area at half speed doesn't need to make the saving throw.",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Caltrops.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Калтропы (сумка 20 шт.)",			
			"text": "Вы можете действием рассыпать сумку калтропов по площади в 5 × 5 футов. Все существа, входящие в эту область, должны преуспеть в спасброске Ловкости со Сл 15, иначе они останавливаются и получают колющий урон 1. Пока это существо не восстановит как минимум 1 хит, его скорость ходьбы уменьшена на 10 футов. Существо, перемещающееся по этой области с уменьшенной вдвое скоростью, не обязано совершать спасбросок.",
		}
	}, {
		"en": {
			"name": "Candle",
			"type": "consumables",
			"rarity": 0,
			"text": "For I hour, a candle sheds bright light in a 5.foot radius and dim light for an additional 5 feet.",
			"coast": "1 cp",
			"source": "PHB",
			"img": "Candle.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Свеча",			
			"text": "В течение 1 часа свеча испускает яркий свет в пределах радиуса 5 футов и тусклый свет в пределах ещё 5 футов.",
		}
	}, {
		"en": {
			"name": "Case, crossbow bolt",
			"type": "container",
			"rarity": 0,
			"text": "This wooden case can hold up to twenty crossbow bolts.",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Case_crossbow.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Футляр для болтов",			
			"text": "В этот деревянный контейнер помещаются 20 арбалетных болтов.",
		}
	}, {
		"en": {
			"name": "Case, map or scroll",
			"type": "container",
			"rarity": 0,
			"text": "This cylindricalleather case can hold up to ten rolled-up sheets of paper or tive rolled-up sheets of parchment.",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Case_scrolls.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Футляр для документов",			
			"text": "В этом цилиндрическом кожаном тубусе может храниться до десяти скрученных листов бумаги или пять скрученных листов пергамента.",
		}
	}, {
		"en": {
			"name": "Chain (10 feet)",
			"type": "gear",
			"rarity": 0,
			"text": "Achain has 10 hit points. lt can be burst with a successful DC 20 Strength check.",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Chain.jpg",
			"weight": "10"
		},
		"ru": {
			"name": "Цепь (10 футов)",			
			"text": "У цепи 10 хитов. Её можно порвать успешной проверкой Силы со Сл 20.",
		}
	}, {
		"en": {
			"name": "Chalk (1 piece)",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "1 cp",
			"source": "PHB",
			"img": "Chalk.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Мел (1 кусок)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Chest",
			"type": "container",
			"rarity": 0,
			"text": "Capacity: 12 cubic feel/300 pounds of gear",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Chest.jpg",
			"weight": "25"
		},
		"ru": {
			"name": "Сундук",			
			"text": "Вместимость: 12 кубических футов/300 фунтов (150 килограмм)",
		}
	}, {
		"en": {
			"name": "Climber's kit",
			"type": "kit",
			"rarity": 0,
			"text": "Aclimber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fali more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor.",
			"coast": "25 gp",
			"source": "PHB",
			"img": "Climbers_kit.jpg",
			"weight": "12"
		},
		"ru": {
			"name": "Комплект для лазания",		
			"nic": "Набор альпиниста",			
			"text": "В набор для лазания входят шлямбуры, накладные подошвы, перчатки и страховочная привязь. Вы можете действием использовать набор для лазания, чтобы закрепиться на высоте; если вы делаете это, вы не можете упасть более чем на 25 футов от того места, где закрепились, но и не можете подняться выше 25 футов от этого места, не открепившись.",
		}
	}, {
		"en": {
			"name": "Clothes, common",
			"type": "Clothes",
			"rarity": 0,
			"text": "",
			"coast": "5 sp",
			"source": "PHB",
			"img": "Clothes_common.jpg",
			"weight": "3"
		},
		"ru": {
			"name": "Одежда, обычная",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Clothes, costume",
			"type": "Clothes",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Clothes_costume.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Одежда, костюм",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Clothes, fine",
			"type": "Clothes",
			"rarity": 0,
			"text": "",
			"coast": "15 gp",
			"source": "PHB",
			"img": "Clothes_fine.jpg",
			"weight": "6"
		},
		"ru": {
			"name": "Одежда, отличная",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Clothes, traveler's",
			"type": "Clothes",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Clothes_travelers.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Одежда, дорожная",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Component pouch",
			"type": "tool",
			"rarity": 0,
			"text": "A component pouch is a small, watertight leather belt pouch that has compartments to hold ali the material components and other special items you need to cast your spells, except for those components that have a specitic cost (as indicated in a spell's description).",
			"coast": "25 gp",
			"source": "PHB",
			"img": "Component_pouch.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Мешочек с компонентами",			
			"text": "Мешочек с компонентами это маленький водонепроницаемый кожаный поясной кошель с отделениями для хранения материальных компонентов и других особых предметов, нужных для накладывания заклинаний, если только у этих компонентов не указана стоимость (смотрите описание заклинания).",
		}
	}, {
		"en": {
			"name": "Crowbar",
			"type": "tool",
			"rarity": 0,
			"text": "Using a crowbar granls advantage to Strength checks where the crowbar's leverage can be applied.",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Crowbar.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Ломик",	
			"nic": "Монтировка, гвоздодер",			
			"text": "Использование ломика позволяет совершать проверки Силы с преимуществом, если рычаг должен помочь.",
		}
	}, {
		"en": {
			"name": "Sprig of mistletoe",
			"type": "Druidic focus",
			"rarity": 0,
			"text": "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animaIs. Adruid can use such an object as a spellcasting focus, as described in chapter 10.",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Sprig_of_mistletoe.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Веточка омелы",			
			"text": "Фокусировкой друида может быть веточка омелы или падуба, палочка или скипетр из тиса или другого дерева, посох, созданный из живого дерева, или тотем с перьями, мехом, костями и зубами священных животных. Друид может использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.",
		}
	}, {
		"en": {
			"name": "Totem",
			"type": "Druidic focus",
			"rarity": 0,
			"text": "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animaIs. Adruid can use such an object as a spellcasting focus, as described in chapter 10.",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Totem.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Тотем",			
			"text": "Фокусировкой друида может быть веточка омелы или падуба, палочка или скипетр из тиса или другого дерева, посох, созданный из живого дерева, или тотем с перьями, мехом, костями и зубами священных животных. Друид может использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.",
		}
	}, {
		"en": {
			"name": "Wooden staff",
			"type": "Druidic focus",
			"rarity": 0,
			"text": "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animaIs. Adruid can use such an object as a spellcasting focus, as described in chapter 10.",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Wooden_staff.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Деревянный посох",			
			"text": "Фокусировкой друида может быть веточка омелы или падуба, палочка или скипетр из тиса или другого дерева, посох, созданный из живого дерева, или тотем с перьями, мехом, костями и зубами священных животных. Друид может использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.",
		}
	}, {
		"en": {
			"name": "Yew wand",
			"type": "Druidic focus",
			"rarity": 0,
			"text": "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animaIs. Adruid can use such an object as a spellcasting focus, as described in chapter 10.",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Yew_wand.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Тисовая палочка",			
			"text": "Фокусировкой друида может быть веточка омелы или падуба, палочка или скипетр из тиса или другого дерева, посох, созданный из живого дерева, или тотем с перьями, мехом, костями и зубами священных животных. Друид может использовать эти предметы в качестве фокусировки для заклинаний, как описано в главе 10.",
		}
	}, {
		"en": {
			"name": "Fishing tackle",
			"type": "kit",
			"rarity": 0,
			"text": "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Fishing_tackle.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Комплект для рыбалки",	
			"nic": "Удочка, невод",			
			"text": "В этот набор входит удилище, шёлковая леска, пробковый поплавок, стальные крючки, свинцовые грузила, приманки из ниток и мелкоячеистая сеть.",
		}
	}, {
		"en": {
			"name": "Flask or tankard",
			"type": "container",
			"rarity": 0,
			"text": "Capacity: 1 pint liquid",
			"coast": "2 cp",
			"source": "PHB",
			"img": "Flask_or_tankard.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Фляга или большая кружка",			
			"text": "Вместимость: 1 пинта (0,5 литра)",
		}
	}, {
		"en": {
			"name": "Grappling hook",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Grappling_hook.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Крюк-кошка",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Hammer",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Hammer.jpg",
			"weight": "3"
		},
		"ru": {
			"name": "Молоток",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Hammer, sledge",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Hammer_sledge.jpg",
			"weight": "10"
		},
		"ru": {
			"name": "Молот кузнечный",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Healer's kit",
			"type": "kit",
			"rarity": 0,
			"text": "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has O hit points, without needing to make a Wisdom (Medicine) check.",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Healers_kit.jpg",
			"weight": "10"
		},
		"ru": {
			"name": "Комплект целителя",	
			"nic": "Аптечка, лечилка",			
			"text": "Это кожаный кошель с бинтами, мазями и шинами. Набор годится для десяти использований. Вы можете действием потратить одно использование набора для стабилизации существа, у которого 0 хитов, не совершая проверку Мудрости (Медицина).",
		}
	}, {
		"en": {
			"name": "Amulet",
			"type": "holly simbol",
			"rarity": 0,
			"text": "A holy symbol is a representation of a god or pantheon. lt might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. Acleric or paladin can use a holy symbol as a spellcasting focus, as described in chapter lO. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Amulet.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Амулет",			
			"text": "Священный символ изображает божество или целый пантеон. Это может быть амулет, изображающий символ божества, символ, выгравированный или выложенный камнями в качестве эмблемы на щите, или крохотная коробочка, в которой хранится священная реликвия. В приложении Б приводится список символов, используемый для самых распространённых богов мультивселенной. Жрец или паладин может использовать священный символ в качестве фокусировки для заклинаний, как описано в главе 10. Для такого использования символа заклинатель должен держать его в руке, носить у всех на виду или нести на щите.",
		}
	}, {
		"en": {
			"name": "Emblem",
			"type": "holly simbol",
			"rarity": 0,
			"text": "A holy symbol is a representation of a god or pantheon. lt might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. Acleric or paladin can use a holy symbol as a spellcasting focus, as described in chapter lO. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Emblem.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Эмблема",			
			"text": "Священный символ изображает божество или целый пантеон. Это может быть амулет, изображающий символ божества, символ, выгравированный или выложенный камнями в качестве эмблемы на щите, или крохотная коробочка, в которой хранится священная реликвия. В приложении Б приводится список символов, используемый для самых распространённых богов мультивселенной. Жрец или паладин может использовать священный символ в качестве фокусировки для заклинаний, как описано в главе 10. Для такого использования символа заклинатель должен держать его в руке, носить у всех на виду или нести на щите.",
		}
	}, {
		"en": {
			"name": "Reliquary",
			"type": "holly simbol",
			"rarity": 0,
			"text": "A holy symbol is a representation of a god or pantheon. lt might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. Acleric or paladin can use a holy symbol as a spellcasting focus, as described in chapter lO. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Reliquary.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Реликварий",			
			"text": "Священный символ изображает божество или целый пантеон. Это может быть амулет, изображающий символ божества, символ, выгравированный или выложенный камнями в качестве эмблемы на щите, или крохотная коробочка, в которой хранится священная реликвия. В приложении Б приводится список символов, используемый для самых распространённых богов мультивселенной. Жрец или паладин может использовать священный символ в качестве фокусировки для заклинаний, как описано в главе 10. Для такого использования символа заклинатель должен держать его в руке, носить у всех на виду или нести на щите.",
		}
	}, {
		"en": {
			"name": "Holy water (flask)",
			"type": "consumables",
			"rarity": 0,
			"text": "As an action, you can splash the contents of this lIask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a tiend or undead, it takes 2d6 radiant damage.",
			"coast": "25 gp",
			"source": "PHB",
			"img": "Holy_water.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Святая вода (фляга)",			
			"text": "Вы можете действием облить содержимым этой фляги существо, находящееся в пределах 5 футов, или кинуть флягу на 20 футов, ломая при ударе. Совершите дальнобойную атаку по целевому существу, считая святую воду импровизированным оружием. Если цель — изверг или нежить, она получает урон излучением 2к6.<br>Жрец или паладин может создать святую воду, исполнив особый ритуал. Этот ритуал исполняется 1 час, использует толчёное серебро на 25 зм и требует, чтобы заклинатель потратил ячейку заклинаний 1 уровня.",
		}
	}, {
		"en": {
			"name": "Hourglass",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "25 gp",
			"source": "PHB",
			"img": "Hourglass.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Песочные часы",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Hunting trap",
			"type": "gear",
			"rarity": 0,
			"text": "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on apressure plate in the center. The trap is affixed bya heavy chain to an immobi!e object, such as a tree ar a <a href='https://tentaculus.ru/equipment/#q=spike'>spike</a> driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw ar take Id4 piercing damage and stop moving. Thereafter, unti! the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). Acreature can use its action to make a DC 13 5trength check, freeing itself ar another creature within its reach on a success. Each fai!ed check deals 1 piercing damage to the trapped creature.",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Hunting_trap.jpg",
			"weight": "25"
		},
		"ru": {
			"name": "Охотничий капкан",
			"nic": "Охотничья ловушка",			
			"text": "Если вы действием установите эту ловушку, она образует стальное кольцо с зазубренными краями, которая захлопывается, когда в её центр наступает существо. Капкан привязывается толстой цепью к неподвижному предмету, такому как дерево или <a href='https://tentaculus.ru/equipment/#q=spike'>колышек</a>, вбитый в землю. Существо, наступившее в центр, должно преуспеть в спасброске Ловкости со Сл 13, иначе оно получает колющий урон 1к4 и прекращает перемещение. Впоследствии, пока существо не высвободится из ловушки, его перемещения ограничены длиной цепи (обычно 1 метр). Любое существо может действием совершить проверку Силы со Сл 13, чтобы высвободить себя или другое существо, находящееся в пределах досягаемости. Каждая проваленная проверка причиняет пойманному существу колющий урон 1.",
		}
	}, {
		"en": {
			"name": "Ink (1 ounce bottle)",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Ink.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Чернила (бутылочка 30 грамм)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Ink pen",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "2 cp",
			"source": "PHB",
			"img": "Ink_pen.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Писчее перо",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Jug or pitcher",
			"type": "container",
			"rarity": 0,
			"text": "Capacity: 1 gallon liquid",
			"coast": "2 cp",
			"source": "PHB",
			"img": "Jug.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Кувшин или графин",			
			"text": "Вместимость: 1 галлон (3,75 литра)",
		}
	}, {
		"en": {
			"name": "Ladder (10-foot)",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "1 sp",
			"source": "PHB",
			"img": "Ladder.jpg",
			"weight": "25"
		},
		"ru": {
			"name": "Лестница (10 футов)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Lamp",
			"type": "tool",
			"rarity": 0,
			"text": "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, il burns for 6 hours on a <a href='https://tentaculus.ru/equipment/#q=oil'>flask (1 pint) of oil</a>.",
			"coast": "5 sp",
			"source": "PHB",
			"img": "Lamp.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Лампа",			
			"text": "Лампа испускает яркий свет в пределах 15 футов и тусклый свет в пределах ещё 30 футов. Зажжённая лампа горит 6 часов от одной <a href='https://tentaculus.ru/equipment/#q=oil'>фляги (1 пинта [0,5 литра]) масла</a>.",
		}
	}, {
		"en": {
			"name": "Lantern, bullseye",
			"type": "tool",
			"rarity": 0,
			"text": "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a <a href='https://tentaculus.ru/equipment/#q=oil'>flask (1 pint) of oil</a>.",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Lantern_bullseye.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Фонарь, направленный",			
			"text": "Направленный фонарь испускает яркий свет 60-футовым конусом и тусклый свет в пределах ещё 60 футов. Зажжённый фонарь горит 6 часов от одной <a href='https://tentaculus.ru/equipment/#q=oil'>фляги (1 пинта [0,5 литра]) масла</a>.",
		}
	}, {
		"en": {
			"name": "Lantern, hooded",
			"type": "tool",
			"rarity": 0,
			"text": "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a <a href='https://tentaculus.ru/equipment/#q=oil'>flask (1 pinl) of oil</a>. As an action, you can lower the hood, reducing the light lo dim light in a 5-foot radius.",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Lantern_hooded.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Фонарь, закрытый",			
			"text": "Закрытый фонарь испускает яркий свет в пределах 30 футов и тусклый свет в пределах ещё 30 футов. Зажжённый фонарь горит 6 часов от <a href='https://tentaculus.ru/equipment/#q=oil'>одной фляги (1 пинта [0,5 литра]) масла</a>. Вы можете действием опустить козырёк, уменьшив освещение до тусклого света в пределах 5 футов.",
		}
	}, {
		"en": {
			"name": "Lock",
			"type": "gear",
			"rarity": 0,
			"text": "A key is provided with the lock. Without the key, a creature proticient with thieves' toois can pick this lock with a successful DC 15 Dexterity check. Vour DM may decide that better locks are available for higher prices.",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Lock.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Замóк",
			"nic": "Замок",			
			"text": "Вместе с замком идёт и ключ. Без ключа существо, владеющее воровскими инструментами, может вскрыть замок успешной проверкой Ловкости со Сл 15. Мастер может решить, что есть более качественные замки, стоящие больше.",
		}
	}, {
		"en": {
			"name": "Magnifying glass",
			"type": "tool",
			"rarity": 0,
			"text": "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting tires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise ar inspect an item that is small ar highly detailed.",
			"coast": "100 gp",
			"source": "PHB",
			"img": "Magnifying_glass.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Увеличительное стекло",	
			"nic": "Лупа, Линза",			
			"text": "Эта линза позволяет разглядывать маленькие предметы. Линзу также можно использовать для замены кремня и кресала. Разжигание огня увеличительным стеклом требует света, яркого как свет солнца, трута для розжига и примерно 5 минут. Увеличительное стекло позволяет совершать с преимуществом проверки характеристик, сделанных для оценки или исследования мелких и высокодетализированных предметов.",
		}
	}, {
		"en": {
			"name": "Manacles",
			"type": "gear",
			"rarity": 0,
			"text": "These metal restraints can bind a 5mall ar Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 5trength check. Each set of manacles comes with one key. Without the key, a creature pro/icient with thieves' tools can pick the manacles' lock with a successful DC 15 Dexterity check. Manacles have 15 hit points.",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Manacles.jpg",
			"weight": "6"
		},
		"ru": {
			"name": "Кандалы",			
			"nic": "Наручники, оковы",			
			"text": "Эти металлические оковы удерживают существ Маленького и Среднего размера. Для того чтобы сбежать из кандалов, требуется успешная проверка Ловкости со Сл 20. Для того чтобы их сломать, требуется проверка Силы со Сл 20. Каждый набор кандалов идёт с одним ключом. Без ключа существо, владеющее воровскими инструментами, может вскрыть замок кандалов успешной проверкой Ловкости со Сл 15. У кандалов 15 хитов",
		}
	}, {
		"en": {
			"name": "Mess kit",
			"type": "kit",
			"rarity": 0,
			"text": "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.",
			"coast": "2 sp",
			"source": "PHB",
			"img": "Mess_kit.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Столовый набор",	
			"nic": "Посуда",			
			"text": "В этой небольшой коробке находится чашка и простые столовые приборы. Коробка раскрывается, и одна сторона может использоваться как сковорода, а другая — как тарелка или неглубокая миска.",
		}
	}, {
		"en": {
			"name": "Mirror, steel",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Mirror_steel.jpg",
			"weight": "1/2"
		},
		"ru": {
			"name": "Зеркало, стальное",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Oil (flask)",
			"type": "consumables",
			"rarity": 0,
			"text": "Oil usually comes in a clay flask that holds 1pintoAs an action, you can splash the oi! in this flaskanta a creature within 5 feet of you ar throw it up to20 feet, shattering it on impacto Make a ranged attackagainst a target creature ar object, treating the oil asan improvised weapon. On a hit, the target is coveredin oil. If the larget takes any /ire damage before the oildries (after 1 minute), the target takes an additional 5 fire damagc from the burning oil. Vou can also pour a flask of oi! on the ground to cover a 5-foot-square area, provided that the surface is leveI. Ir lit. the oi! burns for 2 rounds and deals 5 tire damage to any creature that enters the area ar ends its turn in the area, A creature can take this damage only once per turno",
			"coast": "1 sp",
			"source": "PHB",
			"img": "Oil.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Масло (фляга)",			
			"text": "Обычно масло продаётся в глиняных флягах по 1 пинте (0,5 литра). Вы можете действием облить маслом из фляги существо, находящееся в пределах 5 футов, или кинуть её на 20 футов, ломая при ударе. Совершите дальнобойную атаку по целевому существу или предмету, считая масло импровизированным оружием. При попадании цель покрывается маслом. Если цель получает урон огнём, пока масло не высохло (1 минута), она получает дополнительный урон огнём 5 от горящего масла. Вы можете также вылить фляжку масла на землю, покрыв площадь 5 × 5 футов, при условии, что пол ровный. Если теперь масло поджечь, оно горит 2 раунда и причиняет урон огнём 5 всем существам, входящим в эту область или оканчивающим в ней ход. Существо может получить этот урон только один раз за ход.",
		}
	}, {
		"en": {
			"name": "Parchment (one sheet)",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "1 sp",
			"source": "PHB",
			"img": "Parchment.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Пергамент (1 лист)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Paper (one sheet)",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "2 sp",
			"source": "PHB",
			"img": "Paper.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Бумага (1 лист)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Perfume (vial)",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Perfume.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Духи́ (флакон)",	
			"nic": "Парфюм, духи",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Piek, miner's",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Piek_miners.jpg",
			"weight": "10"
		},
		"ru": {
			"name": "Кирка, горняцкая",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Piton",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "5 cp",
			"source": "PHB",
			"img": "Piton.jpg",
			"weight": "1/4"
		},
		"ru": {
			"name": "Шлямбур",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Poison, basic (vial)",
			"type": "consumables",
			"rarity": 0,
			"text": "Vou can use the poison in Ihis via IlOcoat one slashing or piercing weapon or up to threepieces of ammunition. Applying the poison takesan action. A creature hit by the poisoned weapon orammunition must make a DC 10 Constitution savingthrow or take 1d4 poison damage. Once applied, thepoison retains potency for I minute before drying.",
			"coast": "100 gp",
			"source": "PHB",
			"img": "Poison_basic.jpg",
			"weight": ""
		},
		"ru": {
			"name": "Яд, простой (флакон)",			
			"text": "Вы можете покрыть ядом из этого флакона одно рубящее или колющее оружие или три боеприпаса. Наносится яд одним действием. Существо, по которому попадёт отравленное оружие или боеприпас, должно совершить спасбросок Телосложения со Сл 10, получая в случае провала урон ядом 1к4. Нанесённый яд эффективен 1 минуту, после чего высыхает.",
		}
	}, {
		"en": {
			"name": "Pole (10-foot)",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "5 cp",
			"source": "PHB",
			"img": "Pole.jpg",
			"weight": "7"
		},
		"ru": {
			"name": "Шест (10 футов)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Pot, iron",
			"type": "tool",
			"rarity": 0,
			"text": "Capacity: 1 gallon liquid",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Pot.jpg",
			"weight": "10"
		},
		"ru": {
			"name": "Горшок, железный",			
			"text": "Вместимость: 1 галлон (3,75 литра)",
		}
	}, {
		"en": {
			"name": "Potion of healing",
			"type": "consumables",
			"rarity": 0,
			"text": "character who drinks the magical red fiuid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action.",
			"coast": "50 gp",
			"source": "PHB",
			"img": "POTION_OF_HEALING.jpg",
			"weight": "1/2"
		},
		"ru": {
			"name": "Зелье лечения",	
			"nic": "Зелье исцеления",			
			"text": "Существо, выпившее магическую красную жидкость из этого флакона, восстанавливает 2к4 + 2 хита. Зелье выпивается или заливается в рот другому действием.",
		}
	}, {
		"en": {
			"name": "Pouch",
			"type": "container",
			"rarity": 0,
			"text": "A c1oth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a <a href='https://tentaculus.ru/equipment/#q=component_pouch'>component pouch</a>.<br>Capacity: 1/5 cubic foot/6 pounds of gear",
			"coast": "5 sp",
			"source": "PHB",
			"img": "Pouch.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Кошель",	
			"nic": "Мешочек",			
			"text": "В кожаном или тканевом кошеле поместится 20 снарядов для пращи или 50 иголок для духовой трубки, а также другие вещи. Кошель с отделениями для хранения компонентов заклинаний называется <a href='https://tentaculus.ru/equipment/#q=component_pouch'>мешочком с компонентами</a>.<br>0,2 кубических фута/6 фунтов (3 килограмма)",
		}
	}, {
		"en": {
			"name": "Quiver",
			"type": "container",
			"rarity": 0,
			"text": "Quiver can hold up to 20 arrows.",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Quiver.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Колчан",			
			"text": "В колчан помещается 20 стрел.",
		}
	}, {
		"en": {
			"name": "Ram, portable",
			"type": "gear",
			"rarity": 0,
			"text": "Vou can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.",
			"coast": "4 gp",
			"source": "PHB",
			"img": "Ram.jpg",
			"weight": "35"
		},
		"ru": {
			"name": "Таран, переносной",	
			"nic": "Таран, портативный",			
			"text": "Вы можете вышибать портативным тараном двери. Вы получаете бонус +4 к проверкам Силы. Если другой персонаж помогает вам использовать таран, вы совершаете проверку с преимуществом.",
		}
	}, {
		"en": {
			"name": "Rations (1 day)",
			"type": "consumables",
			"rarity": 0,
			"text": "Rations consist of dry foods suitable for extended travei, including jerky, dried fruit, hardlack, and nuts.",
			"coast": "5 sp",
			"source": "PHB",
			"img": "Rations.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Рационы (1 день)",	
			"nic": "Еда, продукты, консервы, пища",			
			"text": "Рационы состоят из обезвоженной пищи, подходящей для путешествий, включая вяленое мясо, сухофрукты, галеты и орехи.",
		}
	}, {
		"en": {
			"name": "Robes",
			"type": "clothes",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Robes.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Ряса",	
			"nic": "Роба, мантия",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Rope, hempen (50 feet)",
			"type": "gear",
			"rarity": 0,
			"text": "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strenglh check.",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Rope_hempen.jpg",
			"weight": "10"
		},
		"ru": {
			"name": "Верёвка пеньковая (50 футов)",
			"nic": "Веревка пеньковая (50 футов)",
			"text": "У верёвки, сделанной из пеньки или шёлка, 2 хита, и её можно порвать проверкой Силы со Сл 17.",
		}
	}, {
		"en": {
			"name": "Rope, silk (50 feet)",
			"type": "gear",
			"rarity": 0,
			"text": "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strenglh check.",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Rope_silk.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Верёвка, шёлковая (50 футов)",
			"nic": "Веревка, шёлковая (50 футов)",
			"text": "У верёвки, сделанной из пеньки или шёлка, 2 хита, и её можно порвать проверкой Силы со Сл 17.",
		}
	}, {
		"en": {
			"name": "Sack",
			"type": "container",
			"rarity": 0,
			"text": "Capacity: 1 cubic f001/30 pounds of gear",
			"coast": "1 cp",
			"source": "PHB",
			"img": "Sack.jpg",
			"weight": "1/2"
		},
		"ru": {
			"name": "Мешок",
			"text": "Вместимость: 1 кубический фут/30 фунтов (15 килограмм)"
		}
	}, {
		"en": {
			"name": "Scale, merchant's",
			"type": "tool",
			"rarity": 0,
			"text": "A scale includes a small balance,pans, and a suitable assortment of weights up to 2pounds. With it, you can measure the exact weight ofsmall objects, such as raw precious metais or tradegoods, to help determine their worth.",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Scale.jpg",
			"weight": "3"
		},
		"ru": {
			"name": "Весы, торговые",
			"text": "В набор входят рычажные весы, чашки и набор грузиков на 2 фунта. С их помощью можно точно измерять вес небольших предметов, таких как драгоценные металлы или товары."
		}
	}, {
		"en": {
			"name": "Sealing wax",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "5 sp",
			"source": "PHB",
			"img": "Sealing_wax.jpg",
			"weight": ""
		},
		"ru": {
			"name": "Сургуч",
			"nic": "Воск для печати",
			"text": ""
		}
	}, {
		"en": {
			"name": "Shovel",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Shovel.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Лопата",
			"text": ""
		}
	}, {
		"en": {
			"name": "Signal whistle",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "5 cp",
			"source": "PHB",
			"img": "Signal_whistle.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Сигнальный свисток",
			"text": ""
		}
	}, {
		"en": {
			"name": "Signet ring",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Signet_ring.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Кольцо-печатка",
			"text": ""
		}
	}, {
		"en": {
			"name": "Soap",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "2 cp",
			"source": "PHB",
			"img": "Soap.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Мыло",
			"text": ""
		}
	}, {
		"en": {
			"name": "Spellbook",
			"type": "tool",
			"rarity": 0,
			"text": "Essential for wizards, a spellbook is a lealher.bound tome wilh 100 blank vellum pages suitable for recording spells.",
			"coast": "50 gp",
			"source": "PHB",
			"img": "Spellbook.jpg",
			"weight": "3"
		},
		"ru": {
			"name": "Книга заклинаний",
			"text": "Книги заклинаний очень важны для волшебников. Это переплетённые кожей тома, содержащие 100 пустых пергаментных страниц, на которых можно записывать заклинания."
		}
	}, {
		"en": {
			"name": "Spikes, iron (10)",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Spikes.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Шипы, железные (10)",
			"text": ""
		}
	}, {
		"en": {
			"name": "Spyglass",
			"type": "gear",
			"rarity": 0,
			"text": "Objeets viewed through a spyglass are magnitied to twice their size.",
			"coast": "1000 gp",
			"source": "PHB",
			"img": "Spyglass.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Подзорная труба",
			"text": "Предметы, на которые смотрят в подзорную трубу, увеличиваются в два раза"
		}
	}, {
		"en": {
			"name": "Tent, two-person",
			"type": "camp",
			"rarity": 0,
			"text": "A simple and portable canvas shelter, a tent sleeps two.",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Tent.jpg",
			"weight": "20"
		},
		"ru": {
			"name": "Палатка, двуместная",
			"nic": "Тент двуместный",
			"text": "В палатке, простом парусиновом жилище, могут спать двое."
		}
	}, {
		"en": {
			"name": "Tinderbox",
			"type": "tool",
			"rarity": 0,
			"text": "This small container holds fiint, tire steel,and tinder (usually dry c10th soaked in Iight oil) used lokindle a tire. Using it to Iight a torch-or anything elsewith abundant, exposed fuel-takes an action. Lightingany olher tire takes 1 minute.",
			"coast": "5 sp",
			"source": "PHB",
			"img": "Tinderbox.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Трутница",
			"text": "В этом небольшом контейнере находится кремень, кресало и трут (обычно это сухая тряпка, вымоченная в масле), используемые для разжигания огня. Использование его для разжигания факела — или чего-нибудь другого, легковоспламеняющегося — требует одного действия. Разжигание другого огня требует 1 минуты."
		}
	}, {
		"en": {
			"name": "Torch",
			"type": "consumables",
			"rarity": 0,
			"text": "A torch burns for 1 hour, providing bright Iight in a 20.foot radius and dim light for an additional 20 fee!. If you make a melee attack with a burning torch and hit, it deals 1 tire damage.",
			"coast": "1 cp",
			"source": "PHB",
			"img": "Torch.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Факел",
			"text": "Факел горит 1 час, испуская яркий свет в пределах 20 футов и тусклый свет в пределах ещё 20 футов. Если вы совершаете рукопашную атаку горящим факелом и попадаете, он причиняет урон огнём 1."
		}
	}, {
		"en": {
			"name": "Vial",
			"type": "container",
			"rarity": 0,
			"text": "Capacity: 4 ounces liquid",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Vial.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Флакон",
			"nic": "пузырек, пузырёк, мензурка",
			"text": "Вместимость: 4 унции (100 грамм)"
		}
	}, {
		"en": {
			"name": "Waterskin",
			"type": "container",
			"rarity": 0,
			"text": "Capacity: pinls liquid<br>(Weight is for full waterscin)",
			"coast": "2 sp",
			"source": "PHB",
			"img": "Waterskin.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Бурдюк",
			"text": "Вместимость: 4 пинты (2 литра)<br>(Вес указан для заполненного бурдюка)"
		}
	}, {
		"en": {
			"name": "Whetstone",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "1 cp",
			"source": "PHB",
			"img": "Whetstone.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Точильный камень",
			"text": ""
		}
	}
]
