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
	"img": "type_weapon.jpg"
  }/*/,
  "ring": {
    "text": {
      "en": {
        "title": "ring"
      },
      "ru": {
        "title": "кольцо",
        "gender": "it"
      }
    },
	"img": "type_ring.jpg"
  },
  "wondrous item": {
    "text": {
      "en": {
        "title": "wondrous item"
      },
      "ru": {
        "title": "чудо-вещь",
        "gender": "she"
      }
    },
	"img": "type_wondrous_item.jpg"
  },
  "wand": {
    "text": {
      "en": {
        "title": "wand"
      },
      "ru": {
        "title": "волшебная палочка",
        "gender": "she"
      }
    },
	"img": "type_wand.jpg"
  },
  "rod": {
    "text": {
      "en": {
        "title": "rod"
      },
      "ru": {
        "title": "жезл",
        "gender": "he"
      }
    },
	"img": "type_rod.jpg"
  },
  "staff": {
    "text": {
      "en": {
        "title": "staff"
      },
      "ru": {
        "title": "посох",
        "gender": "he"
      }
    },
	"img": "type_staff.jpg"
  },
  "scroll": {
    "text": {
      "en": {
        "title": "scroll"
      },
      "ru": {
        "title": "свиток",
        "gender": "he"
      }
    },
	"img": "type_scroll.jpg"
  },
  "potion": {
    "text": {
      "en": {
        "title": "potion"
      },
      "ru": {
        "title": "зелье",
        "gender": "it"
      }
    },
	"img": "type_potion.jpg"
  },
  "vehicle": {
    "text": {
      "en": {
        "title": "vehicle"
      },
      "ru": {
        "title": "транспорт",
        "gender": "he"
      }
    },
	"img": "type_vehicle.jpg"
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
	}	
]
