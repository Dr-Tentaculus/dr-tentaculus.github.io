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
			"simple"
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
			"text": "",
			"coast": "25 gp",
			"source": "PHB",
			"img": "Acid.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Кислота (Флакон)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Alchemist's fire (flask)",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "50 gp",
			"source": "PHB",
			"img": "Alchemists_fire.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Алхимический огонь (фляжка)",			
			"text": "",
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
			"text": "",
			"coast": "50 gp",
			"source": "PHB",
			"img": "Antitoxin.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Противоядие (флакон)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Crystal",
			"type": "Arcane Focus",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Crystal.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Кристалл",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Orb",
			"type": "Arcane Focus",
			"rarity": 0,
			"text": "",
			"coast": "20 gp",
			"source": "PHB",
			"img": "Orb.jpg",
			"weight": "3"
		},
		"ru": {
			"name": "Сфера",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Rod",
			"type": "Arcane Focus",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Rod.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Жезл",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Staff",
			"type": "Arcane Focus",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Staff.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Посох",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Wand",
			"type": "Arcane Focus",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Wand.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Волшебная палочка",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Backpack",
			"type": "Container",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Backpack.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Рюкзак",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Ball bearings (bag of 1000)",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Ball_bearings.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Металлические шарики (сумка с 1000 шт.)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Barrei",
			"type": "container",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Barrei.jpg",
			"weight": "70"
		},
		"ru": {
			"name": "Бочка",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Basket",
			"type": "container",
			"rarity": 0,
			"text": "",
			"coast": "4 sp",
			"source": "PHB",
			"img": "Basket.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Корзина",			
			"text": "",
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
			"text": "",
			"coast": "1 sp",
			"source": "PHB",
			"img": "Block_and_tackle.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Блок и лебедка",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Book",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "25 gp",
			"source": "PHB",
			"img": "Book.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Книга",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Bucket",
			"type": "container",
			"rarity": 0,
			"text": "",
			"coast": "5 cp",
			"source": "PHB",
			"img": "Bucket.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Ведро",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Caltrops (bag of 20)",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Caltrops.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Калтропы (сумка 20 шт.)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Candle",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "1 cp",
			"source": "PHB",
			"img": "Candle.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Свеча",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Case, crossbow bolt",
			"type": "container",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Case_crossbow.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Колчан для болтов",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Case, map or scroll",
			"type": "container",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Case_scrolls.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Футляр для документов",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Chain (10 feet)",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Chain.jpg",
			"weight": "10"
		},
		"ru": {
			"name": "Цепь (10 футов)",			
			"text": "",
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
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Chest.jpg",
			"weight": "25"
		},
		"ru": {
			"name": "Мел (1 кусок)",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Climber's kit",
			"type": "kit",
			"rarity": 0,
			"text": "",
			"coast": "25 gp",
			"source": "PHB",
			"img": "Climbers_kit.jpg",
			"weight": "12"
		},
		"ru": {
			"name": "Комплект для лазания",			
			"text": "",
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
			"text": "",
			"coast": "25 gp",
			"source": "PHB",
			"img": "Component_pouch.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Мешочек с компонентами",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Crowbar",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Crowbar.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Ломик",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Sprig of mistletoe",
			"type": "Druidic focus",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Sprig_of_mistletoe.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Веточка омелы",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Totem",
			"type": "Druidic focus",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Totem.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Тотем",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Wooden staff",
			"type": "Druidic focus",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Wooden_staff.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Деревянный посох",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Yew wand",
			"type": "Druidic focus",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Yew_wand.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Тисовая палочка",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Fishing tackle",
			"type": "kit",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Fishing_tackle.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Комплект для рыбалки",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Flask or tankard",
			"type": "container",
			"rarity": 0,
			"text": "",
			"coast": "2 cp",
			"source": "PHB",
			"img": "Flask_or_tankard.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Фляга или большая кружка",			
			"text": "",
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
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Healers_kit.jpg",
			"weight": "10"
		},
		"ru": {
			"name": "Комплект целителя",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Amulet",
			"type": "holly simbol",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Amulet.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Амулет",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Emblem",
			"type": "holly simbol",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Emblem.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Эмблема",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Reliquary",
			"type": "holly simbol",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Reliquary.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Реликварий",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Holy water (flask)",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "25 gp",
			"source": "PHB",
			"img": "Holy_water.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Святая вода (фляга)",			
			"text": "",
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
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Hunting_trap.jpg",
			"weight": "25"
		},
		"ru": {
			"name": "Охотничий капкан",			
			"text": "",
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
			"text": "",
			"coast": "2 cp",
			"source": "PHB",
			"img": "Jug.jpg",
			"weight": "4"
		},
		"ru": {
			"name": "Кувшин или графин",			
			"text": "",
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
			"text": "",
			"coast": "5 sp",
			"source": "PHB",
			"img": "Lamp.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Лампа",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Lantern, bullseye",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Lantern_bullseye.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Фонарь, направленный",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Lantern, hooded",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Lantern_hooded.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Фонарь, закрытый",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Lock",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Lock.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Замóк",
			"nic": "Замок",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Magnifying glass",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "100 gp",
			"source": "PHB",
			"img": "Magnifying_glass.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Увеличительное стекло",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Manacles",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Manacles.jpg",
			"weight": "6"
		},
		"ru": {
			"name": "Кандалы",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Mess kit",
			"type": "kit",
			"rarity": 0,
			"text": "",
			"coast": "2 sp",
			"source": "PHB",
			"img": "Mess_kit.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Столовый набор",			
			"text": "",
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
			"text": "",
			"coast": "1 sp",
			"source": "PHB",
			"img": "Oil.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Масло (фляга)",			
			"text": "",
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
			"text": "",
			"coast": "100 gp",
			"source": "PHB",
			"img": "Poison_basic.jpg",
			"weight": ""
		},
		"ru": {
			"name": "Яд, простой (флакон)",			
			"text": "",
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
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Pot.jpg",
			"weight": "10"
		},
		"ru": {
			"name": "Горшок, железный",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Potion of healing",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "50 gp",
			"source": "PHB",
			"img": "POTION_OF_HEALING.jpg",
			"weight": "1/2"
		},
		"ru": {
			"name": "Зелье лечения",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Pouch",
			"type": "container",
			"rarity": 0,
			"text": "",
			"coast": "5 sp",
			"source": "PHB",
			"img": "Pouch.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Кошель",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Quiver",
			"type": "container",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Quiver.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Колчан",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Ram, portable",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "4 gp",
			"source": "PHB",
			"img": "Ram.jpg",
			"weight": "35"
		},
		"ru": {
			"name": "Таран, переносной",	
			"nic": "Таран, портативный",			
			"text": "",
		}
	}, {
		"en": {
			"name": "Rations (1 day)",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "5 sp",
			"source": "PHB",
			"img": "Rations.jpg",
			"weight": "2"
		},
		"ru": {
			"name": "Рационы (1 день)",			
			"text": "",
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
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Rope_hempen.jpg",
			"weight": "10"
		},
		"ru": {
			"name": "Верѐвка пеньковая (50 футов)",
			"text": "",
		}
	}, {
		"en": {
			"name": "Rope, silk (50 feet)",
			"type": "gear",
			"rarity": 0,
			"text": "",
			"coast": "10 gp",
			"source": "PHB",
			"img": "Rope_silk.jpg",
			"weight": "5"
		},
		"ru": {
			"name": "Верѐвка, шѐлковая (50 футов)",
			"text": "",
		}
	}, {
		"en": {
			"name": "Sack",
			"type": "container",
			"rarity": 0,
			"text": "",
			"coast": "1 cp",
			"source": "PHB",
			"img": "Sack.jpg",
			"weight": "1/2"
		},
		"ru": {
			"name": "Мешок",
			"text": ""
		}
	}, {
		"en": {
			"name": "Scale, merchant's",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "5 gp",
			"source": "PHB",
			"img": "Scale.jpg",
			"weight": "3"
		},
		"ru": {
			"name": "Весы, торговые",
			"text": ""
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
			"text": "",
			"coast": "50 gp",
			"source": "PHB",
			"img": "Spellbook.jpg",
			"weight": "3"
		},
		"ru": {
			"name": "Книга заклинаний",
			"text": ""
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
			"text": "",
			"coast": "1000 gp",
			"source": "PHB",
			"img": "Spyglass.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Подзорная труба",
			"text": ""
		}
	}, {
		"en": {
			"name": "Tent, two-person",
			"type": "camp",
			"rarity": 0,
			"text": "",
			"coast": "2 gp",
			"source": "PHB",
			"img": "Tent.jpg",
			"weight": "20"
		},
		"ru": {
			"name": "Палатка, двуместная",
			"nic": "Тент двуместный",
			"text": ""
		}
	}, {
		"en": {
			"name": "Tinderbox",
			"type": "tool",
			"rarity": 0,
			"text": "",
			"coast": "5 sp",
			"source": "PHB",
			"img": "Tinderbox.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Трутница",
			"text": ""
		}
	}, {
		"en": {
			"name": "Torch",
			"type": "consumables",
			"rarity": 0,
			"text": "",
			"coast": "1 cp",
			"source": "PHB",
			"img": "Torch.jpg",
			"weight": "1"
		},
		"ru": {
			"name": "Факел",
			"text": ""
		}
	}, {
		"en": {
			"name": "Vial",
			"type": "container",
			"rarity": 0,
			"text": "",
			"coast": "1 gp",
			"source": "PHB",
			"img": "Vial.jpg",
			"weight": "0"
		},
		"ru": {
			"name": "Флакон",
			"text": ""
		}
	}, {
		"en": {
			"name": "Waterskin",
			"type": "container",
			"rarity": 0,
			"text": "",
			"coast": "2 sp",
			"source": "PHB",
			"img": "Waterskin.jpg",
			"weight": "1-5"
		},
		"ru": {
			"name": "Бурдюк",
			"text": ""
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
