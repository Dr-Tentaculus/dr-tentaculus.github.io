var oSources = {
  /*/"PHB": {
    "text": {
      "en": {
        "title": "Palyers Handbook"
      },
      "ru": {
        "title": "Книга игрока"
      }
    }
  },/**/
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
  },
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
}
var oRarity = {
  /*0: {
    "text": {
      "en": {
        "title": "vary"
      },
      "ru": {
        "he": "разной редкости",
        "she": "разной редкости",
        "it": "разной редкости",
        "title": "разной редкости"
      }
    }
  },*/
  1: {
    "text": {
      "en": {
        "title": "Common"
      },
      "ru": {
        "he": "обычный",
        "she": "обычная",
        "it": "обычное",
        "title": "обычная"
      }
    },
    "coast": "50-100 gp"
  },
  2: {
    "text": {
      "en": {
        "title": "uncommon"
      },
      "ru": {
        "he": "необычный",
        "it": "необычное",
        "title": "необычная"
      }
    },
    "coast": "101-500 gp"
  },
  3: {
    "text": {
      "en": {
        "title": "Rare"
      },
      "ru": {
        "he": "редкий",
        "she": "редкая",
        "it": "редкое",
        "title": "редкая"
      }
    },
    "coast": "501-5,000 gp"
  },
  4: {
    "text": {
      "en": {
        "title": "very Rare"
      },
      "ru": {
        "he": "очень редкий",
        "she": "очень редкая",
        "it": "очень редкое",
        "title": "очень редкая"
      }
    },
    "coast": "5,001-50,000 gp"
  },
  5: {
    "text": {
      "en": {
        "title": "legendary"
      },
      "ru": {
        "he": "легендарный",
        "she": "легендарная",
        "it": "легендарное",
        "title": "легендарная"
      }
    },
    "coast": "50,001+ gp"
  }, 
  6: {
    "text": {
      "en": {
        "title": "artifact"
      },
      "ru": {
        "he": "артефакт",
        "she": "артефакт",
        "it": "артефакт",
        "title": "артефакт"
      }
    },
    "coast": ""
  }
}

var oItemsAddInfo = {
  "requires attunement": {
    "text": {
      "en": "requires attunement",
      "ru": "требуется настройка"
    }
  }
}

var aMinorBeneficial=
	{
		"en": [
			"While attuned to the artifact, you gain proficiency in one skill of the DM 's choice.",
			"While attuned to the artifact, you gain proficiency in one skill of the DM 's choice.",
			"While attuned to the artifact, you are immune to disease.",
			"While attuned to the artifact, you can't be charmed or frightened.",
			"While attuned to the artifact, you have resistance against one damage type of the DM's choice.",
			"While attuned to the artifact, you can use an action to cast one cantrip (chosen by the DM) from it.",
			"While attuned to the artifact, you can use an action to cast one 1st-level spell (chosen by the DM) from it. Afte r you cast the spell, roll a d6. On a roll of l-5, you can 't cast it again until the next dawn.",
			"While attuned to the artifact, you can use an action to cast one 2st-level spell (chosen by the DM) from it. Afte r you cast the spell, roll a d6. On a roll of l-5, you can 't cast it again until the next dawn.",
			"While attuned to the artifact, you can use an action to cast one 3st-level spell (chosen by the DM) from it. Afte r you cast the spell, roll a d6. On a roll of l-5, you can 't cast it again until the next dawn.",
			"While attuned to the artifact, you gain a +l bonus to Armor Class."
		],
		"ru": [
			"Пока вы настроены на артефакт, вы получаете владение одним навыком на выбор Мастера.",
			"Пока вы настроены на артефакт, вы получаете владение одним навыком на выбор Мастера.",
			"Пока вы настроены на артефакт, вы обладаете иммунитетом к болезням.",
			"Пока вы настроены на артефакт, вы не можете быть очарованы и испуганы.",
			"Пока вы настроены на артефакт, вы получаете сопротивление к одному виду урона на выбор Мастера.",
			"Пока вы настроены на артефакт, вы можете действием накладывать им один <a href='https://tentaculus.ru/spells/index.html#le=0'>заговор</a> (выбранный Мастером).",
			"Пока вы настроены на артефакт, вы можете действием наложить им одно заклинание <a href='https://tentaculus.ru/spells/index.html#ls=1&le=1'>1 уровня</a> (выбранное Мастером). Наложив заклинание, бросьте к6. При результате 1–5 вы не можете повторить это до следующего рассвета.",
			"Пока вы настроены на артефакт, вы можете действием наложить им одно заклинание <a href='https://tentaculus.ru/spells/index.html#ls=2&le=2'>2 уровня</a (выбранное Мастером). Наложив заклинание, бросьте к6. При результате 1–5 вы не можете повторить это до следующего рассвета.",
			"Пока вы настроены на артефакт, вы можете действием наложить им одно заклинание <a href='https://tentaculus.ru/spells/index.html#ls=3&le=3'>3 уровня</a (выбранное Мастером). Наложив заклинание, бросьте к6. При результате 1–5 вы не можете повторить это до следующего рассвета.",
			"Пока вы настроены на артефакт, вы получаете бонус +1 к Классу Доспеха."
		]
		
	};
var aMajorBeneficial=
	{
		"en": [
			"While attuned to the artifact, one of your ability scores (DM's choi ce) increases by 2, to a maximum of 24.",
			"While attuned to the artifact, one of your ability scores (DM's choi ce) increases by 2, to a maximum of 24.",
			"While attuned to the artifact, you regain ld6 hit points at the start of yo ur turn if you have at least l hit point.",
			"When you hit with a weapon attack while attuned to th e artifact, the target takes an extra ld6 damage of the weapon's type.",
			"While attuned to the artifact, your walking speed increases by 10 feet.",
			"While attuned to the artifact, you ca n use an action to cast one 4th-level spell (chosen by the DM) from it. After you cast the spell, roll a d6. On a roll of l - 5, you can't cast it again until the next dawn.",
			"While attuned to the artifact, you ca n use an action to cast one 5th-level spell (chosen by the DM) from it. After you cast the spell, roll a d6. On a roll of l - 5, you can't cast it again until the next dawn.",
			"While attuned to the artifact, you ca n use an action to cast one 6th-level spell (chosen by the DM) from it. After you cast the spell, roll a d6. On a roll of l - 5, you can't cast it again until the next dawn.",
			"While attuned to the artifact, you ca n use an action to cast one 7th-level spell (chosen by the DM) from it. After you cast the spell, roll a d6. On a roll of l - 5, you can't cast it again until the next dawn.",
			"While attuned to the a rti fa ct, you can't be blinded, deafened, petrified, or stunned."
		],
		"ru": [
			"Пока вы настроены на артефакт, одна из ваших характеристик (на выбор Мастера) увеличивается на 2, с максимумом 24.",
			"Пока вы настроены на артефакт, одна из ваших характеристик (на выбор Мастера) увеличивается на 2, с максимумом 24.",
			"Пока вы настроены на артефакт, вы восстанавливаете 1к6 хитов в начале каждого своего хода, если у вас есть хотя бы 1 хит.",
			"Если вы попадаете атакой оружием, будучи настроенным на этот артефакт, цель получает дополнительный урон 1к6, чей вид соответствует оружию.",
			"Пока вы настроены на артефакт, ваша скорость ходьбы увеличивается на 10 футов.",
			"Пока вы настроены на артефакт, вы можете действием наложить им одно заклинание <a href='https://tentaculus.ru/spells/index.html#ls=4&le=4'>4 уровня</a> (выбранное Мастером). Наложив заклинание, бросьте к6. При результате 1–5 вы не можете повторить это до следующего рассвета.",
			"Пока вы настроены на артефакт, вы можете действием наложить им одно заклинание <a href='https://tentaculus.ru/spells/index.html#ls=5&le=5'>5 уровня</a> (выбранное Мастером). Наложив заклинание, бросьте к6. При результате 1–5 вы не можете повторить это до следующего рассвета.",
			"Пока вы настроены на артефакт, вы можете действием наложить им одно заклинание <a href='https://tentaculus.ru/spells/index.html#ls=6&le=6'>6 уровня</a> (выбранное Мастером). Наложив заклинание, бросьте к6. При результате 1–5 вы не можете повторить это до следующего рассвета.",
			"Пока вы настроены на артефакт, вы можете действием наложить им одно заклинание <a href='https://tentaculus.ru/spells/index.html#ls=7&le=7'>7 уровня</a> (выбранное Мастером). Наложив заклинание, бросьте к6. При результате 1–5 вы не можете повторить это до следующего рассвета.",
			"Пока вы настроены на артефакт, вы не можете быть оглохшим, окаменевшим, ослеплённым и ошеломлённым."
		]
		
	};
var aMinorDetrimenal=
	{
		"en": [
			"While attuned to the artifact, you have disadvantage on saving throws against spells.",
			"The first time you touch a gem or piece of jewelry while attuned to this artifact, the value of the gem or jewelry is reduced by half.",
			"While attuned to the artifact, you are blinded when you are more than 10 feet away from it.",
			"While attuned to the artifact, you have disadvantage on saving throws against poison.",
			"While attuned to the artifact, you emit a sour stench noticeable from up to 10 feet away.",
			"While attuned to the artifact, you emit a sour stench noticeable from up to 10 feet away.",
			"While attuned to the artifact, all holy water within 10 feet of you is destroyed.",
			"While attuned to the artifact, you are physically ill and have disadvantage on any ability check or saving throw that uses Strength or Constitution.",
			"While attuned to the artifact, your weight increases by 1d4 x 10 pounds.",
			"While attuned to the artifact, your appearance changes as the DM decides .",
			"While attuned to the artifact, you are deafened when you are more than 10 feet away from it.",
			"While attuned to the artifact, your weight drops by 1d4 x 5 pounds.",
			"While attuned to the artifact, you can't smell.",
			"While attuned to the artifact, non magical flames are extinguished within 30 feet of you.",
			"While you are attuned to the artifact, other creatures can't take short or long rests while within 300 feet of you.",
			"While you are attuned to the artifact, other creatures can't take short or long rests while within 300 feet of you.",
			"While attuned to the artifact, you deal 1d6 necrotic damage to any plant you touch that isn't a creature.",
			"While you are attuned to the artifact, animals within 30 feet of you are hostile toward you.",
			"While attuned to the artifact, you must eat and drink six times the normal amount each day.",
			"While you are attuned to the artifact, your flaw is amplified in a way determined by the DM."
		],
		"ru": [
			"Пока вы настроены на артефакт, вы совершаете с помехой спасброски от заклинаний.",
			"Когда вы впервые касаетесь драгоценного камня или ювелирного изделия, будучи настроенным на этот артефакт, ценность этого камня или изделия уменьшается вдвое.",
			"Пока вы настроены на артефакт, вы ослеплены, пока находитесь более чем в 10 футах от него.",
			"Пока вы настроены на артефакт, вы совершаете с помехой спасброски от яда.",
			"Пока вы настроены на артефакт, вы испускаете отвратительный запах, ощутимый с 10 футов.",
			"Пока вы настроены на артефакт, вы испускаете отвратительный запах, ощутимый с 10 футов.",
			"Пока вы настроены на артефакт, вся святая вода в пределах 10 футов от вас уничтожается.",
			"Пока вы настроены на артефакт, ваше тело болеет физически и вы совершаете с помехой проверки характеристик и спасброски, использующие Силу или Телосложение.",
			"Пока вы настроены на артефакт, ваш вес увеличивается на 1к4 × 10 фунтов.",
			"Пока вы настроены на артефакт, ваша внешность меняется так, как решит Мастер.",
			"Пока вы настроены на артефакт, вы глухи, пока находитесь более чем в 10 футах от него.",
			"Пока вы настроены на артефакт, ваш вес уменьшается на 1к4 × 5 фунтов.",
			"Пока вы настроены на артефакт, вы теряете обоняние.",
			"Пока вы настроены на артефакт, немагическое пламя гаснет в пределах 30 футов от вас.",
			"Пока вы настроены на артефакт, другие существа не могут совершать короткий и продолжительный отдых, находясь в пределах 300 футов от вас.",
			"Пока вы настроены на артефакт, другие существа не могут совершать короткий и продолжительный отдых, находясь в пределах 300 футов от вас.",
			"Пока вы настроены на артефакт, вы причиняете урон некротической энергией 1к6 всем растениям, не являющимся существами, которых вы касаетесь.",
			"Пока вы настроены на артефакт, животные в пределах 30 футов от вас враждебны по отношению к вам.",
			"Пока вы настроены на артефакт, вы должны есть и пить в шесть раз больше, чем обычно.",
			"Пока вы настроены на артефакт, ваша слабость (flaw) усиливается так, как решит Мастер."
		]
		
	};
var aMajorDetrimental=
	{
		"en": [
			"While you are attuned to the artifact, your body rots over the course of four days, after which the rotting stops. You lose your hair by the end of day 1, finger tips and toe tips by the end of day 2, lips and nose by the end of day 3, and ears by the end of day 4. A a href='https://tentaculus.ru/spells/index.html#q=regenerate'>regenerate</a> spell restores lost body parts",
			"While you are attuned to the artifact, you determine your alignment daily at dawn by rolling a d6 twice. On the first roll, a 1-2 indicates lawful, 3-4 neutral, and 5-6 chaotic. On the second roll, a 1-2 indicates good, 3-4 neutral, and 5-6 evil.",
			"When you first attune to the artifact, it gives you a quest determined by the DM. You must complete this quest as if affected by the <a href='https://tentaculus.ru/spells/index.html#q=geas&view=text'>geas</a> spell. Once you complete the quest, you are no longer affected by this property.",
			"The artifact houses a bodiless life force that is hostile toward you. Each time you use an action to use one of the artifact's properties , there is a 50 percent chance that the life force tries to leave the artifact and enter your body. If you fail a DC 20 Charisma saving throw, it succeeds, and you become an NPC under the DM's control until the intruding life force is banished using magic such as the <a href='https://tentaculus.ru/spells/index.html#q=dispel_evil_and_good&view=text'>dispel evil and good</a> spell.",
			"Creatures with a challenge rating of O, as well as plants that aren't creatures, drop to 0 hit points when within 10 feet of the artifact.",
			"The artifact imprisons a <a href='https://tentaculus.ru/monsters/index.html#q=death_slaad'>death slaad</a>. Each time you use one of the artifact's properties as an action, the slaad has a 10 percent chance of escaping, where upon it appears within 15 feet of you and attacks you.",
			"While you are attuned to the artifact, creatures of a particular type other than humanoid (as chosen by the DM) are always hostile toward you.",
			"The artifact dilutes magic potions within 10 feet of it, rendering them non magical.",
			"The artifact erases magic scrolls within 10 feet of it, rendering them nonmagical.",
			"Before using one of the artifact's properties as an action, you must use a bonus action to draw blood, either from yourself or from a willing or incapacitated creature within your reach, using a piercing or slashing melee weapon. The subject takes 1d4 damage of the appropriate type.",
			"When you become attuned to the artifact, you gain a form of long-term madness (see DMG chapter 8, 'Running the Game').",
			"When you become attuned to the artifact, you gain a form of long-term madness (see DMG chapter 8, 'Running the Game').",
			"You take 4d10 psychic damage when you become attuned to the artifact.",
			"You take 8d10 psychic damage when you become attuned to the ar tifact.",
			"Before you can become attuned to the artifact, you must kill a creature of your alignment.",
			"When you become attuned to the artifact, one of your ability scores is reduced by 2 at random. A greater restoration spell restores he ability to normal.",
			"Each time you become attuned to the artifact, you age 3d10 years. You must succeed on a DC 10 Constitution saving throw or die from the shock. If you die, you are instantly transformed into a <a href='https://tentaculus.ru/monsters/index.html#q=wight'>wight</a> under the DM's control that is sworn to protect the artifact.",
			"While attuned to the artifact, you lose the ability to speak.",
			"While attuned to the artifact, you have vulnerability to all damage.",
			"When you become attuned to the artifact, there is a 10 percent chance that you attract the attention of a god that sends an avatar to wrest the artifact from you. The avatar has the same alignment as its creator and the statistics of an <a href='https://tentaculus.ru/monsters/index.html#q=empyrean'>empyrean</a>. Once it obtains the artifact, the avatar vanishes."
		],
		"ru": [
			"Пока вы настроены на артефакт, ваше тело в течение четырёх дней гниёт. В 1 день вы теряете волосы, во 2 день ногти на руках и ногах, в 3 день губы и нос, а в конце 4 дня — уши. Заклинание <a href='https://tentaculus.ru/spells/index.html#q=regenerate'>регенерация</a> восстанавливает утерянные части тела.",
			"Пока вы настроены на артефакт, вы каждое утро определяете своё мировоззрение, бросая два раза к6. Для первого броска 1–2 означает законное, 3–4 — нейтральное, а 5–6 — хаотичное. Для второго броска 1–2 означает доброе, 3–4 — нейтральное, а 5–6 — злое.",
			"Когда вы впервые настраиваетесь на артефакт, он даёт вам задание, формулируемое Мастером. Вы должны выполнить это задание, как если бы находились под действием заклинания <a href='https://tentaculus.ru/spells/index.html#q=geas&view=text'>обет</a>. Выполнив задание, вы можете игнорировать это свойство.",
			"Артефакт является вместилищем бесплотной жизненной силы, враждебной к вам. Каждый раз, когда вы действием используете одно из свойств артефакта, существует 50-процентный шанс, что эта жизненная сила попытается покинуть артефакт и завладеть вашим телом. Если вы провалите спасбросок Харизмы со Сл 20, она преуспеет, и вы станете ПМ под управлением Мастера, пока эту сущность не изгонят такой магией как заклинание <a href='https://tentaculus.ru/spells/index.html#q=dispel_evil_and_good&view=text'>рассеивание добра и зла</a>.",
			"Хиты существ с показателем опасности 0, а также растений, не являющиеся существами, опускаются до 0, когда оказываются в пределах 10 футов от артефакта.",
			"Артефакт является местом заточения <a href='https://tentaculus.ru/monsters/index.html#q=death_slaad'>смертельного слаада</a>. Каждый раз, когда вы действием используете одно из свойств артефакта, у слаада есть 10-процентный шанс сбежать, в случае чего он появляется в пределах 15 футов и нападает на вас.",
			"Пока вы настроены на артефакт, существа определённого вида кроме «гуманоид» (определяется Мастером) всегда враждебны по отношению к вам.",
			"Артефакт портит магические зелья в пределах 10 футов от себя, делая их немагическими.",
			"Артефакт стирает магические свитки в пределах 10 футов от себя, делая их немагическими.",
			"Прежде чем использовать действием одно из свойств артефакта, вы должны бонусным действием пустить кровь себе, согласному существу или недееспособному существу, используя колющее или рубящее рукопашное оружие. Субъект получает урон 1к4 соответствующего вида.",
			"Когда вы настраиваетесь на артефакт, вы получаете долговременное безумие (смотрите в  Руководстве Мастера, глава 8).",
			"Когда вы настраиваетесь на артефакт, вы получаете долговременное безумие (смотрите в  Руководстве Мастера, глава 8).",
			"Вы получаете урон психической энергией 4к10, когда настраиваетесь на артефакт.",
			"Вы получаете урон психической энергией 8к10, когда настраиваетесь на артефакт.",
			"Прежде чем настроиться на артефакт, вы должны убить существо со своим мировоззрением.",
			"Когда вы настраиваетесь на артефакт, одна из ваших характеристик, выбранная случайным образом, уменьшается на 2. Заклинание высшее восстановление восстанавливает характеристику.",
			"Каждый раз, когда вы настраиваетесь на артефакт, вы стареете на 3к10 лет. Вы должны преуспеть в спасброске Телосложения со Сл 10 или умрёте от потрясения. Если умрёте, вы мгновенно превращаетесь в <a href='https://tentaculus.ru/monsters/index.html#q=wight'>упыря</a> под управлением Мастера, которое обязано защищать артефакт.",
			"Пока вы настроены на артефакт, вы теряете способность разговаривать.",
			"Пока вы настроены на артефакт, вы обладаете уязвимостью ко всем видам урона.",
			"Когда вы настраиваетесь на артефакт, существует 10-процентный шанс, что вы привлечёте внимание божества, которое отправит своего аватара чтобы забрать у вас артефакт. Мировоззрение аватара совпадает с мировоззрением его создателя, и он обладает характеристиками <a href='https://tentaculus.ru/monsters/index.html#q=empyrean'>империана</a>. Заполучив артефакт, аватар исчезает."
		]
		
	};

var allItems = [
  {
    "en": {
      "name": "AMMUNITION +1",
      "type": "Weapon",
      "typeAdditions": "(any ammunition)",
      "rarity": 1,
      "text": "You have a bonus +1 to attack and damage rolls made with this piece of magic ammunition. Once it hit a target, the ammunition is no longer magical.",
      "source": "DMG",
      "img": "AMMUNITION.jpg"
    },
    "ru": {
      "name": "Боеприпасы +1",
      "text": "Вы получаете бонус +1 к броскам атаки и урона, совершённым при использовании этих магических боеприпасов. Попав в цель, боеприпас перестаёт быть магическим.",
      "typeAdditions": "(любой боеприпас)"
    }
  },
  {
    "en": {
      "name": "AMMUNITION +2",
      "type": "Weapon",
      "typeAdditions": "(any ammunition)",
      "rarity": 2,
      "text": "You have a bonus +2 to attack and damage rolls made with this piece of magic ammunition.  Once it hit a target, the ammunition is no longer magical.",
      "source": "DMG",
      "img": "AMMUNITION.jpg"
    },
    "ru": {
      "name": "Боеприпасы +2",
      "text": "Вы получаете бонус +2 к броскам атаки и урона, совершённым при использовании этих магических боеприпасов. Попав в цель, боеприпас перестаёт быть магическим.",
      "typeAdditions": "(любой боеприпас)"
    }
  },
  {
    "en": {
      "name": "AMMUNITION +3",
      "type": "Weapon",
      "typeAdditions": "(any ammunition)",
      "rarity": 3,
      "text": "You have a bonus +3 to attack and damage rolls made with this piece of magic ammunition. Once it hit a target, the ammunition is no longer magical.",
      "source": "DMG",
      "img": "AMMUNITION.jpg"
    },
    "ru": {
      "name": "Боеприпасы +3",
      "text": "Вы получаете бонус +3 к броскам атаки и урона, совершённым при использовании этих магических боеприпасов.  Попав в цель, боеприпас перестаёт быть магическим.",
      "typeAdditions": "(любой боеприпас)"
    }
  },
  {
    "en": {
      "name": "ADAMANTINE ARMOR",
      "type": "Armor",
      "typeAdditions": "(medium or heavy, but not hide)",
      "rarity": 2,
      "text": "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
      "source": "DMG",
      "img": "ADAMANTINE_ARMOR.jpg"
    },
    "ru": {
      "name": "Адамантиновый доспех",
      "text": "Это доспехи усилены адамантином, одним из самых прочных из существующих веществ. Пока вы носите эти доспехи, все критические попадания по вам считаются обычными попаданиями.",
      "typeAdditions": "(средняя или тяжелая, но не скрытая)"
    }
  },
  {
    "en": {
      "name": "ALCHEMY JUG",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. <br>Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty. <br>You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named. <br>Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.<br><table><tr><th>Liquid</th><th>MaxAmount</th></tr><tr><td>Acid</td><td>8ounces</td></tr><tr><td>Basicpoison</td><td>1/2ounce</td></tr><tr><td>Beer</td><td>4gallons</td></tr><tr><td>Honey</td><td>1gallon</td></tr><tr><td>Mayonnaise</td><td>2gallons</td></tr><tr><td>Oil</td><td>1quart</td></tr><tr><td>Vinegar</td><td>2gallons</td></tr><tr><td>Water,fresh</td><td>8gallons</td></tr><tr><td>Water,salt</td><td>12gallons</td></tr><tr><td>Wine</td><td>1gallon</td></tr></table>",
      "source": "DMG",
      "img": "ALCHEMY_JUG.jpg"
    },
    "ru": {
      "name": "Алхимический сосуд",
      "text": "Этот керамический кувшин, кажется способным вместить 1 галлон жидкости и весит 12 фунтов вне зависимости от того, полный он или пустой. Если его потрясти, то можно услышать звуки плескающийся жидкости, даже если кувшин пуст.<br> Вы можете действием назвать одну жидкость из приведённой ниже таблицы, отчего кувшин начнёт её производить. После этого вы можете ещё одним действием откупорить кувшин и вылить эту жидкость из сосуда со скоростью до 2 галлонов в минуту. Максимальное количество жидкости, которое может произвести кувшин, зависит от вида жидкости, названной вами.<br> После того, как кувшин начинает производить выбранную жидкость, он не может производить другую, или произвести названную жидкость в объёме больше её максимума, пока не наступит следующий рассвет.<br><table><tr><td>Жидкость</td><td>Макс. объём</td></tr><tr><td>Вино</td><td>1 галлон</td></tr><tr><td>Вода, пресная</td><td>8 галлонов</td></tr><tr><td>Вода, солёная</td><td>12 галлонов</td></tr><tr><td>Кислота</td><td>8 унций</td></tr><tr><td>Майонез</td><td>2 галлона</td></tr><tr><td>Масло</td><td>1 кварта</td></tr><tr><td>Мёд</td><td>1 галлон</td></tr><tr><td>Пиво</td><td>4 галлона</td></tr><tr><td>Уксус</td><td>2 галлона</td></tr><tr><td>Яд</td><td>1/2 унции</td></tr></table>"
    }
  },
  {
    "en": {
      "name": "AMULET OF HEALTH",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher.",
      "source": "DMG",
      "img": "AMULET_OF_HEALTH.jpg"
    },
    "ru": {
      "name": "Амулет здоровья",
      "text": "Пока вы носите этот амулет, ваше значение Телосложения равно 19. Если ваше Телосложение без него уже 19 или выше, то амулет не оказывает на вас никакого действия.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "AMULET OF PROOF AGAINST DETECTION AND LOCATION",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While wearing this amulet, you are hidden from divination magic. You can't be targeted by such magic or perceived through magical scrying sensors.",
      "source": "DMG",
      "img": "AMULET_OF_PROOF_AGAINST_DETECTION_AND_LOCATION.jpg"
    },
    "ru": {
      "name": "Амулет защиты от обнаружения и поиска",
      "text": "Пока вы носите этот амулет, вы скрыты от магии школы Прорицания. Вы не можете быть целью подобной магии, и вас не воспринимают магические сенсоры слежения.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "AMULET OF THE PLANES",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the <a href='https://tentaculus.ru/spells/#q=plane_shift'>plane shift</a> spell. On a failure, you and each creature and object within 15 feet of you travel to a random destination. <br>Roll a dlOO. On a 1- 60, you travel to a random location on the plane you named. On a 61- 100, you travel to a randomly determined plane of existence.",
      "source": "DMG",
      "img": "AMULET_OF_THE_PLANES.jpg"
    },
    "ru": {
      "name": "Амулет планов",
      "text": "Пока вы носите этот амулет, вы можете действием назвать хорошо знакомое вам место на другом плане. <br>После этого необходимо совершить проверку Интеллекта со Сл 15. При успехе вы накладываете заклинание <a href='https://tentaculus.ru/spells/#q=plane_shift'>уход в иной мир</a>. При провале вы и все существа и предметы в пределах 15 футов от вас переноситесь в случайном направлении. Бросьте к100. При результате 1–60 вы переноситесь в случайное место на названном вами плане. При результате 61–100 вы переноситесь в случайное место на вашем текущем плане существования.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ANIMATED SHIELD",
      "type": "Armor",
      "typeAdditions": "(shield)",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. <br>The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free.",
      "source": "DMG",
      "img": "ANIMATED_SHIELD.jpg"
    },
    "ru": {
      "name": "Живой щит",
      "attunement": "(требуется настройка)",
      "text": "Если вы держите этот щит, вы можете бонусным действием произнести командное слово, чтобы он ожил. <br>Щит поднимается в воздух и парит в вашем пространстве, защищая так, как если бы вы его использовали, но ваши руки при этом свободны. Щит остаётся живым 1 минуту, пока вы не окончите эффект бонусным действием или пока вы не станете недееспособным или не умрёте, после чего щит падает на землю или в вашу руку, если она свободна.",
      "typeAdditions": "(щит)"
    }
  },
  {
    "en": {
      "name": "APPARATUS OF KWALISH",
      "type": "Wondrous item",
      "rarity": 5,
      "text": "This item first appears to be a Large sealed iron barrel weighing 500 pounds. The barrel has a hidden catch, which can be found with a successful DC 20 Intelligence (Investigation) check. Releasing the catch unlocks a hatch at one end of the barrel, allowing two Medium or smaller creatures to crawl inside. Ten levers are set in a row at the far end, each in a neutral position, able to move either up or down. When certain levers are used, the apparatus transforms to resemble a giant lobster. <br>The apparatus of Kwalish is a Large object with the following statistics:<br><b>Armor Class:</b> 20<br><b>Armor Class:</b> 20<br><b>Hit Points:</b> 200<br><b>Speed:</b> 30 ft., swim 30 ft. (or 0 ft. for both if the legs and tail aren't extended)<br><b>Damage Immunities:</b> poison, psychic<br>To be used as a vehicle, the apparatus requires one pilot. While the apparatus's hatch is closed, the compartment is airtight and watertight. The compartment holds enough air for 10 hours of breathing, divided by the number of breathing creatures inside. <br>The apparatus floats on water. It can also go underwater to a depth of 900 feet. Below that, the vehicle takes 2d6 bludgeoning damage per minute from pressure. <br>A creature in the compartment can use an action to move as many as two of the apparatus's levers up or down. After each use, a lever goes back to its neutral position. Each lever, from left to right, functions as shown in the Apparatus of Kwalish Levers table.<br><b>APPARATUS OF KWALISH LEVERS</b> <table> <tr> <th>Lever </th> <th>Up </th> <th>Down </th> </tr> <tr> <td>1 </td> <td>Legs and tail extend,allowing the apparatus towalk and swim. </td> <td>Legs and tail retract,reducing the apparatu s'sspeed to 0 and makingit unable to benefit frombonuses to speed. </td> </tr> <tr> <td>2 </td> <td>Forward window shutteropens. </td> <td>Forward window shuttercloses. </td> </tr> <tr> <td>3 </td> <td>Side window shuttersopen (two per side). </td> <td>Side window shuttersclose (two per side) . </td> </tr> <tr> <td>4 </td> <td>Two claws extend fromthe front sides of theapparatus. </td> <td>The claws retract. </td> </tr> <tr> <td>5 </td> <td>Each extended clawmakes the followingmelee weapon attack:+8 to hit, reach 5 ft.,one target. Hit: 7 (2d6)bludgeoning damage. </td> <td>Each extended clawmakes the followingmelee weapon attack:+8 to hit, reach 5 ft. , onetarget. Hit: The target isgrappled (escape DC 15). </td> </tr> <tr> <td>6 </td> <td>The apparatus walks orswims forward. </td> <td>The apparatus walks orswims backward. </td> </tr> <tr> <td>7 </td> <td>The apparatus turns 90 degrees left. </td> <td>The apparatus turns 90degrees right. </td> </tr> <tr> <td>8 </td> <td>Eyelike fixtures emitbright light in a 30-footradius and dim light foran additional 30 feet. </td> <td>The light turns off. </td> </tr> <tr> <td>9 </td> <td>The apparatus sinks asmuch as 20 feet in liquid. </td> <td>The apparatus rises up to 20 feet in liquid. </td> </tr> <tr> <td>10 </td> <td>The rear hatch unseals and opens. </td> <td>The rear hatch closes and seals. </td> </tr> </table>",
      "source": "DMG",
      "img": "APPARATUS_OF_KWALISH.jpg"
    },
    "ru": {
      "name": "Аппарат Квалиша",
      "text": "На первый взгляд этот предмет выглядит как Большая запечатанная железная бочка, весящая 500 фунтов. У бочки есть потайной затвор, который можно найти успешной проверкой Интеллекта (Анализ) со <br>Сл 20. Этот затвор отпирает люк на одном конце бочки, позволяющий забраться внутрь двум существам <br>Среднего или меньшего размера. У дальнего конца торчат в ряд десять рычагов, все в нейтральной позиции, но их можно перевести или в верхнее или в нижнее положение. Если использовать определённые рычаги, аппарат трансформируется и станет напоминать гигантского лобстера. <br>Аппарат Квалиша это Большой предмет со следующей статистикой: <br>Класс Доспеха: 20 <br>Хиты: 200 <br>Скорость: 30 фт., плавая 30 фт. (или 0 фт. если не выдвинуты ноги и хвост) <br>Иммунитет к урону: психическая энергия, яд <br>Для того чтобы использовать аппарат в качестве транспортного средства, требуется один водитель. <br>Пока люк заперт, аппарат водо- и воздухонепроницаем. Воздуха внутри хватит одному дышащему существу на 10 часов. <br>Аппарат держится на плаву. Он может погружаться на глубину до 900 футов. Глубже этой отметки аппарат получает дробящий урон 2к6 в минуту от давления. <br>Существо в аппарате может действием переместить от одного до двух рычагов вверх или вниз. После каждого использования рычаги сами возвращаются в нейтральное положение. Назначение десяти рычагов показано в таблице. <br><table><tr><td>Рычаг</td><td>Вверх</td><td>Вниз</td></tr><tr><td>1</td><td>Ноги и хвост выдвигаются, позволяя аппарату ходить и плавать.</td><td>Ноги и хвост втягиваются, уменьшая скорость аппарата до 0 и лишая его способности получать преимущества от бонусов к скорости.</td></tr><tr><td>2</td><td>Заслонка переднего иллюминатора открывается.</td><td>Заслонка переднего иллюминатора закрывается.</td></tr><tr><td>3</td><td>Заслонки боковых иллюминаторов (по два на каждом борту) открываются.</td><td>Заслонки боковых иллюминаторов (по два на каждом борту) закрываются.</td></tr><tr><td>4</td><td>Из передней части аппарата выдвигаются два когтя.</td><td>Когти убираются.</td></tr><tr><td>5</td><td>Каждый выдвинутый коготь совершает рукопашную атаку оружием: +8 к попаданию, досягаемость 5 фт., одна цель. Попадание: Дробящий урон 7 (2к6).</td><td>Каждый выдвинутый коготь совершает рукопашную атаку оружием: +8 к попаданию, досягаемость 5 фт., одна цель. Попадание: цель становится схваченной (Сл высвобождения 15).</td></tr><tr><td>6</td><td>Аппарат идёт или плывёт вперёд.</td><td>Аппарат идёт или плывёт назад.</td></tr><tr><td>7</td><td>Аппарат поворачивает на 90 градусов налево.</td><td>Аппарат поворачивает на 90 градусов направо.</td></tr><tr><td>8</td><td>Похожие на глаза приспособления испускают яркий свет в пределах 30-футового радиуса и тусклый свет в пределах ещё 30 футов.</td><td>Свет тухнет.</td></tr><tr><td>9</td><td>Аппарат погружается в жидкость на глубину до 20 футов.</td><td>Аппарат всплывает в жидкости не более чем на 20 футов.</td></tr><tr><td>10</td><td>Задний люк отпирается и открывается.</td><td>Задний люк закрывается и запирается.</td></tr></table>"
    }
  },
  {
    "en": {
      "name": "ARMOR +1",
      "type": "Armor",
      "typeAdditions": "(light, medium, or heavy)",
      "rarity": 2,
      "text": "You have a bonus to AC +1 while wearing this armor.",
      "source": "DMG",
      "img": "ARMOR.jpg"
    },
    "ru": {
      "name": "Доспех +1",
      "text": "Вы получаете бонус к КД +1, пока носите этот доспех.",
      "typeAdditions": "(легкая, средняя, или тяжелая)"
    }
  },
  {
    "en": {
      "name": "ARMOR +2",
      "type": "Armor",
      "typeAdditions": "(light, medium, or heavy)",
      "rarity": 3,
      "text": "You have a bonus to AC +2 while wearing this armor.",
      "source": "DMG",
      "img": "ARMOR.jpg"
    },
    "ru": {
      "name": "Доспех +2",
      "text": "Вы получаете бонус к КД +2, пока носите этот доспех.",
      "typeAdditions": "(легкая, средняя, или тяжелая)"
    }
  },
  {
    "en": {
      "name": "ARMOR +3",
      "type": "Armor",
      "typeAdditions": "(light, medium, or heavy)",
      "rarity": 4,
      "text": "You have a bonus to AC +3 while wearing this armor.",
      "source": "DMG",
      "img": "ARMOR.jpg"
    },
    "ru": {
      "name": "Доспех +3",
      "text": "Вы получаете бонус к КД +3, пока носите этот доспех.",
      "typeAdditions": "(легкая, средняя, или тяжелая)"
    }
  },
  {
    "en": {
      "name": "ARMOR OF INVULNERABILITY",
      "type": "Armor",
      "typeAdditions": "(plate)",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. <br>Once this special action is used, it can't be used again until the next dawn.",
      "source": "DMG",
      "img": "ARMOR_OF_INVULNERABILITY.jpg"
    },
    "ru": {
      "name": "Доспех неуязвимости",
      "text": "Вы получаете сопротивление к немагическому урону, пока носите этот доспех. Кроме того, вы можете действием получить иммунитет к немагическому урону на 10 минут или пока вы не снимете этот доспех. <br>Вы не можете повторно использовать это особое действие до следующего рассвета.",
      "typeAdditions": "(латы)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ARMOR OF RESISTANCE",
      "type": "Armor",
      "typeAdditions": "(light, medium, or heavy)",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly from the options below.<br> <table> <tr> <th>dlO </th> <th>Damage Type </th> </tr> <tr> <td>1 </td> <td>Acid </td> </tr> <tr> <td>2 </td> <td>Cold </td> </tr> <tr> <td>3 </td> <td>Fire </td> </tr> <tr> <td>4 </td> <td>Force </td> </tr> <tr> <td>5 </td> <td>Lightning </td> </tr> <tr> <td>6 </td> <td>Necrotic </td> </tr> <tr> <td>7 </td> <td>Poison </td> </tr> <tr> <td>8 </td> <td>Psychic </td> </tr> <tr> <td>9 </td> <td>Radiant </td> </tr> <tr> <td>10 </td> <td>Thunder </td> </tr> </table> ",
      "source": "DMG",
      "img": "ARMOR_OF_RESISTANCE.jpg"
    },
    "ru": {
      "name": "Доспех сопротивления",
      "text": "Вы получаете сопротивление к одному из видов урона, пока носите этот доспех. Мастер выбирает вид урона сам или случайным образом, из представленных ниже вариантов.<br><table><tr><td>к10</td><td>Вид урона</td></tr><tr><td>1</td><td>Звук</td></tr><tr><td>2</td><td>Излучение</td></tr><tr><td>3</td><td>Кислота</td></tr><tr><td>4</td><td>Некротическая энергия</td></tr><tr><td>5</td><td>Огонь</td></tr><tr><td>6</td><td>Психическая энергия</td></tr><tr><td>7</td><td>Силовое</td></tr><tr><td>8</td><td>Холод</td></tr><tr><td>9</td><td>Электричество</td></tr><tr><td>10</td><td>Яд</td></tr></table>",
      "typeAdditions": "(легкая, средняя, или тяжелая)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ARMOR OF VULNERABILITY",
      "type": "Armor",
      "typeAdditions": "(plate)",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "While wearing this armor, you have resistance to one of the following damage types: bludgeoning, piercing, or slashing. The DM chooses the type or determines it randomly. <br><b>Curse.</b> This armor is cursed, a fact that is revealed only when an <a href='https://tentaculus.ru/spells/#q=identify'>identify</a> spell is cast on the armor or you attune to it. Attuning to the armor curses you until you are targeted by the remove curse spell or similar magic: removing the armor fails to end the curse. While cursed you have vulnerability to two of the three damage type associated with the armor (not the one to which it grants resistance).",
      "source": "DMG",
      "img": "ARMOR_OF_VULNERABILITY.jpg"
    },
    "ru": {
      "name": "Доспех уязвимости",
      "text": "Когда вы надеваете этот доспех, вы получаете сопротивление к одному из следующих видов урона: дробящий, колющий или рубящий. Мастер определяет вид урона самостоятельно или случайным образом. <br><b>Проклятье.</b> Этот доспех проклят, но это становится понятно только когда на него используется заклинание <a href='https://tentaculus.ru/spells/#q=identify'>опознание</a> или когда вы настраиваетесь на него. Настройка на доспех проклинает вас до тех пор, пока вы не станете целью заклинания снятие проклятья или похожей магии. Снятие доспеха не прекращает проклятье. Пока вы прокляты, вы получаете уязвимость к двум оставшимся видам урона, исключая тот, к которому доспех даёт сопротивление.",
      "typeAdditions": "(латы)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ARROW-CATCHING SHIELD",
      "type": "Armor",
      "typeAdditions": "(shield)",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield's normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.",
      "source": "DMG",
      "img": "ARROW-CATCHING_SHIELD.jpg"
    },
    "ru": {
      "name": "Ловящий стрелы щит",
      "text": "Вы получаете бонус +2 к КД от дальнобойных атак, пока носите этот щит. Этот бонус идёт в дополнение к обычному бонусу щита к КД. Кроме того, каждый раз, когда кто-нибудь совершает дальнобойную атаку по цели, находящейся в пределах 5 футов от вас, вы можете реакцией вместо этого сделать целью атаки себя.",
      "typeAdditions": "(щит)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ARROW OF SLAYING",
      "type": "Weapon",
      "typeAdditions": "(arrow)",
      "rarity": 4,
      "text": "An arrow of slaying is a magic weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both arrows of dragon slaying and arrows of blue dragon slaying. If a creature belonging to the type, race, or group associated with an arrow of slaying takes damage from the arrow, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one. <br>Once an arrow of slaying deals its extra damage to a creature, it becomes a nonmagical arrow. <br>Other types of magic ammunition of this kind exist, such as bolts of slaying meant for a crossbow, though arrows are most common.",
      "source": "DMG",
      "img": "ARROW_OF_SLAYING.jpg"
    },
    "ru": {
      "name": "Стрела убийства",
      "text": "Стрела убийства это магическое оружие, предназначенное для убийства существ определённого вида. <br>Область применения может быть как широкой, так и более конкретной; например, существуют и стрелы убийства драконов и стрелы убийства синих драконов. Если существо, принадлежащее к виду, расе или группе, связанной со стрелой убийства, получает неё урон, оно должно совершить спасбросок Телосложения со Сл 17, получая дополнительный колющий урон 6к10 при провале или половину этого урона при успехе. <br>После того как стрела убийства причиняет существу дополнительный урон, она становится немагической стрелой. <br>Есть и другие разновидности боеприпасов с такой же магией, такие как арбалетные болты убийства, хотя стрелы встречаются чаще всего.",
      "typeAdditions": "(стрела)"
    }
  },
  {
    "en": {
      "name": "BAG OF BEANS",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "Inside this heavy cloth bag are 3d4 dry beans. The bag weighs 1/2 pound plus 1/4 pound for each bean it contains. <br>If you dump the bag's contents out on the ground, they explode in a 10-foot radius, extending from the beans. <br>Each creature in the area, including you, must make a <br>DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren't being worn or carried. <br>If you remove a bean from the bag, plant it in dirt or sand, and then water it, the bean produces an effect 1 minute later from the ground where it was planted. <br>The DM can choose an effect from the following table, determine it randomly, or create an effect.<br> <table> <tr> <th>dlO0 </th> <th>Effect </th> </tr> <tr> <td>01 </td> <td>5d4 toadstools sp ro ut. If a c reature eats a toadstool, roll any d ie. On an odd roll , the eater must succeed on a DC 15 Constitution saving throw or take Sd6 poi son damage and become poisoned for 1 hour. On an even ro ll, the eater gains Sd6 temporary hit points for 1 hour. </td> </tr> <tr> <td>02-10 </td> <td>A geyser erupts and spouts water, beer, berry juice, tea, vinegar, wine, or oil (DM's choice) 30 feet into the air for 1 d12 rounds. </td> </tr> <tr> <td>11-20 </td> <td>A <a href='https://tentaculus.ru/monsters/?q=treant'>treant</a> sprouts (see the Monster Manual for statistics) . There 's a 50 percent chance that the treant is chaotic evil and attacks. </td> </tr> <tr> <td>21-30 </td> <td>An animate, immobile stone statue in your likeness rises. It makes verbal threats against you. If you leave it and others come near, it describes you as the most heinous of villains and directs the newcomers to find and attack you. If you are on the same plane of existence as the statue, it knows where you are. The statue becomes inanimate after 24 hours. </td> </tr> <tr> <td>31-40 </td> <td>A campfire with blue Aames springs forth and burns for 24 hours (or until it is ext inguished). </td> </tr> <tr> <td>41-50 </td> <td>1d6 + 6 <a href='https://tentaculus.ru/monsters/?q=shrieker'>shriekers</a> sprout (see the Monster Manual for statistics). </td> </tr> <tr> <td>51-60 </td> <td>1d4 + 8 bright pink toads crawl forth. Whenever a toad is touched , it transforms into a Large or smaller monster of the DM's choice. The monster rema ins for 1 minute, then disappears in a putT of bright pink smoke. </td> </tr> <tr> <td>61-70 </td> <td>A hungry <a href='https://tentaculus.ru/monsters/?q=bulette'>bulette</a> (see the Monster Manual for statistics) burrows up and attacks. </td> </tr> <tr> <td>71-80 </td> <td>A fruit tree grows. It has 1d10 + 20 fruit , 1 d8 of which act as randomly determined magic potions, whi le one acts as an ingested poison of the DM 's choice. The tree vanis hes after 1 hour. Picked fruit remains , reta ining any magic fo r 30 days. </td> </tr> <tr> <td>81-90 </td> <td>A nest of1d4 + 3 eggs springs up. Any creature that eats an egg must make a DC 20 Constitution saving throw. On a successful save, a creature permanently increases its lowest ability score by 1, randomly choosing among equally low scores. On a failed save, the creature takes 10d6 force damage from an internal magical explosion. </td> </tr> <tr> <td>91-99 </td> <td>A pyramid with a 60-foot-square base bursts upward . Inside is a sarcophagus conta ining a <a href='https://tentaculus.ru/monsters/?q=mummy_lord'>mummy lord</a> (see the Monster Manual for statistics). The pyramid is treated as the mummy lord's lair, and its sarcophagus contains treasure of the DM's choice. </td> </tr> <tr> <td>00 </td> <td>AA giant beanstalk sprouts, growing to a height of the DM's choice. The top leads where the DM chooses, such as to a great view, a cloud giant's castle, or a different plane of existence. </td> </tr> </table> ",
      "source": "DMG",
      "img": "BAG_OF_BEANS.jpg"
    },
    "ru": {
      "name": "Сумка с бобами",
      "text": "Внутри этой тяжёлой тканой сумки находятся 3к4 сухих боба. Сумка весит 1/2 фунта, плюс 1/4 фунта за каждый боб, находящийся внутри. <br>Если вы высыпаете содержимое сумки на землю, то они взрываются с радиусом 10 футов. Все существа в этой зоне, включая вас, должно совершить спасбросок Ловкости со Сл 15, получая урон огнём 5к4 при провале или половину этого урона, если спасбросок был успешен. Этот огонь также поджигает легковоспламеняющиеся объекты в зоне поражения, которые никто не несёт и не носит. <br>Если вы извлечёте боб из сумки, посадите его в землю или песок и затем польёте его, то боб спустя 1 минуту после того, как вы посадили его, произведёт некоторый эффект. Мастер может сам выбрать эффект из таблицы, может определить эффект случайным образом, или же придумать свой вариант.<br><table><tr><td>к100</td><td>Эффект</td></tr><tr><td>01</td><td>Вырастают 5к4 поганок. Если существо съедает поганку, то необходимо бросить любую кость для определения эффекта. При выпадении нечётного числа существо должно преуспеть в спасброске Телосложения со Сл 15, иначе оно получит урон ядом 5к6 и становится отравленным на 1 час. Если же выпадет чётное число, то существо получает 5к6 временных хитов на 1 час.</td></tr><tr><td>2–10</td><td>Появляется гейзер, фонтанирующий на высоту 30 футов потоками воды, пива, ягодного сока, чая, уксуса или масла (по выбору Мастера) в течение 1к12 раундов.</td></tr><tr><td>11–20</td><td>Появляется трент (характеристики смотрите в Бестиарии). Существует 50-процентный шанс, что появившийся трент будет обладать хаотично-злым мировоззрением и нападёт.</td></tr><tr><td>21–30</td><td>Появляется ожившая, но неподвижная каменная статуя, похожая на вас и выкрикивающая в ваш адрес угрозы. Если вы уходите от неё, а кто-то другой приближается к ней, статуя описывает вас как самого гнусного злодея и побуждает новоприбывших найти и атаковать вас. Если вы находитесь с ней на одном плане существования, то статуя знает ваше местоположение. По прошествии 24 часов статуя перестаёт быть ожившей.</td></tr><tr><td>31–40</td><td>Появляется походный костёр с синими языками пламени ,который горит в течение 24 часов (или пока не будет погашен).</td></tr><tr><td>41–50</td><td>Вырастают 1к6 + 6 визгунов (характеристики смотрите в Бестиарии).</td></tr><tr><td>51–60</td><td>Наружу выползают 1к4 + 8 ярко-розовых жаб. Всякий раз, когда кто-либо прикасается к жабе, та превращается в чудовище (размером вплоть до Большого) по выбору Мастера. Это чудовище существует в течение минуты, после чего исчезает в клубах ярко-розового дыма.</td></tr><tr><td>61–70</td><td>Из норы выползает голодная панцирница (характеристики смотрите в Бестиарии) и немедленно нападает.</td></tr><tr><td>71–80</td><td>Вырастает фруктовое дерево. На дереве растёт 1к10 + 20 фруктов, 1к8 из которых действуют как магические зелья (определяются случайным образом), в то время, как один из фруктов, будучи съеденным, действует как пищевой яд на выбор Мастера. Дерево исчезает спустя 1 час. Сорванные фрукты остаются, сохраняя свои магические свойства в течение 30 дней.</td></tr><tr><td>81–90</td><td>Появляется гнездо, содержащее 1к4 + 3 яиц. Существа, съедающие одно из этих яиц, должно совершить спасбросок Телосложения со Сл 20. При успехе существо навсегда увеличивает на единицу значение своей самой низкой характеристики. Если две или более характеристики имеют минимальное значение, то случайно выбирается какая-либо одна. При провале существо получает урон силовым полем 10к6 от внутреннего взрыва магической природы.</td></tr><tr><td>91–99</td><td>Вверх возносится пирамида с квадратным основанием 60 × 60 футов. Внутри неё находится саркофаг с покоящейся в нём лорд-мумией (характеристики смотрите в Бестиарии). Эта пирамида считается логовом лорд-мумии, а в саркофаге находится сокровище на усмотрение Мастера.</td></tr><tr><td>00</td><td>Вырастает гигантский бобовый стебель такой высоты, какой будет угодно Мастеру. Мастер также решает, что ждёт добравшегося до его вершины персонажа: ему откроется величественный вид, он окажется в замке облачного великана или же вершина стебля приведёт его на другой план существования.</td></tr></table>"
    }
  },
  {
    "en": {
      "name": "BAG OF DEVOURING",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "This bag superficially resembles a bag of holding but is a feeding orifice for a gigantic extradimensional creature. <br>Turning the bag inside out closes the orifice. <br>The extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a 50 percent chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful <br>DC 20 Strength check (provided it isn't pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed. <br>Inanimate objects can be stored in the bag, which can hold a cubic foot of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The DM determines the time and plane. <br>If the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane.",
      "source": "DMG",
      "img": "BAG_OF_DEVOURING.jpg"
    },
    "ru": {
      "name": "Сумка пожирания",
      "text": "На первый взгляд эта сумка напоминает сумку хранения, но на самом деле это ротовое отверстие гигантского межпространственного существа. Если сумку вывернуть наизнанку, ротовое отверстие закроется. <br>Существо, связанное с сумкой, может чувствовать всё, что помещают в сумку. Материя животного или растительного происхождения, помещённая в сумку, пожирается и исчезает навсегда. Если в сумку будет помещена часть живого существа, как в случае, когда кто-нибудь засовывает в неё руку, существует 50-процентный шанс, что существо затянет в сумку. Существо в сумке может действием попытаться высвободиться, совершая проверку Силы со Сл 15. Другое существо может действием залезть рукой в сумку, чтобы вытянуть оттуда другое существо, совершая проверку Силы со Сл 20 (при условии, что его самого не затянет туда). Все существа, начинающие ход в сумке, пожираются, а их тела уничтожаются. <br>Неживые предметы могут храниться в сумке, которая вмещает один кубический фут такой материи. <br>Однако, один раз в день сумка пожирает все хранящиеся в ней предметы, выплёвывая их на другом плане существования. Мастер сам определяет время и план. <br>Если сумку проткнут или разорвут, она уничтожается, а всё её содержимое переносится в случайным образом выбранное место на Астральном Плане."
    }
  },
  {
    "en": {
      "name": "BAG OF HOLDING",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. <br>The bag weighs 15 pounds, regardless of its contents. <br>Retrieving an item from the bag requires an action. <br>If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the <br>Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate. <br>Placing a bag of holding inside an extradimensional space created by a Heward's handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
      "source": "DMG",
      "img": "BAG_OF_HOLDING.jpg"
    },
    "ru": {
      "name": "Сумка хранения",
      "text": "Эта сумка внутри гораздо больше, чем можно было предположить, исходя из её внешних размеров (приблизительно 2 фута в диаметре и 4 фута глубины). Сумка может вместить до 500 фунтов, не превышающих в объёме 64 кубических фута. <br>При этом сумка всегда весит 15 фунтов, вне зависимости от её содержания. Извлечение чего-либо из сумки совершается действием. <br>Если сумка перегружена, проткнута, или порвана, она рвётся окончательно, уничтожается, и её содержимое разбрасывается по Астральному Плану. Если сумка оказывается вывернутой наизнанку, то её содержимое вываливается наружу невредимым, но прежде, чем её можно будет снова использовать, сумку необходимо вывернуть обратно. Дышащие существа, помещённые внутрь мешка, способны оставаться в живых в течение времени, равного десяти минутам, поделённым на количество существ (минимум 1 минута), после чего они начинают задыхаться. <br>Помещение сумки хранения в межпространство, созданное с помощью удобного рюкзака Хеварда, переносной дыры или подобного предмета, оба предмета мгновенно уничтожаются и открываются врата, ведущие на Астральный План. Врата появляются в месте, где один предмет пытались поместить в другой. Все существа в пределах 10 футов от врат затягиваются внутрь и помещаются в случайным образом определённое место на Астральном Плане. После этого врата закрываются. Врата односторонние, и повторно не открываются."
    }
  },
  {
    "en": {
      "name": "BAG OF TRICKS",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This ordinary bag, made from gray, rust, or tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs 1/2 pound. <br>You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table that corresponds to the bag's color. See the Monster Manual for the creature's statistics. <br>The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature. <br>Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.<br><b>GRAY BAG OF TRICKS</b><br> <table> <tr> <th>d8 </th> <th>Creature </th> </tr> <tr> <td>1 </td> <td><a href='https://tentaculus.ru/monsters/?q=weasel'>Weasel</a> </td> </tr> <tr> <td>2 </td> <td><a href='https://tentaculus.ru/monsters/?q=giant_rat'>Giant rat</a> </td> </tr> <tr> <td>3 </td> <td><a href='https://tentaculus.ru/monsters/?q=Badger'>Badger</a> </td> </tr> <tr> <td>4 </td> <td><a href='https://tentaculus.ru/monsters/?q=Boar'>Boar</a> </td> </tr> <tr> <td>5 </td> <td><a href='https://tentaculus.ru/monsters/?q=Panther'>Panther</a> </td> </tr> <tr> <td>6 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_badger'>Giant badger</a> </td> </tr> <tr> <td>7 </td> <td><a href='https://tentaculus.ru/monsters/?q=Dire_wolf'>Dire wolf</a> </td> </tr> <tr> <td>8 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_elk'>Giant elk</a> </td> </tr> </table> <br><b>RUST BAG OF TRICKS</b><br> <table> <tr> <th>d8 </th> <th>Creature </th> </tr> <tr> <td>1 </td> <td><a href='https://tentaculus.ru/monsters/?q=Rat'>Rat</a> </td> </tr> <tr> <td>2 </td> <td><a href='https://tentaculus.ru/monsters/?q=Owl'>Owl</a> </td> </tr> <tr> <td>3 </td> <td><a href='https://tentaculus.ru/monsters/?q=Mastiff'>Mastiff</a> </td> </tr> <tr> <td>4 </td> <td><a href='https://tentaculus.ru/monsters/?q=Goat'>Goat</a> </td> </tr> <tr> <td>5 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_goat'>Giant goat</a> </td> </tr> <tr> <td>6 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_boar'>Giant boar</a> </td> </tr> <tr> <td>7 </td> <td><a href='https://tentaculus.ru/monsters/?q=Lion'>Lion</a> </td> </tr> <tr> <td>8 </td> <td><a href='https://tentaculus.ru/monsters/?q=Brown_bear'>Brown bear</a> </td> </tr> </table> <br><b>TAN BAG OF TRICKS</b><br> <table> <tr> <th>d8 </th> <th>Creature </th> </tr> <tr> <td>1 </td> <td><a href='https://tentaculus.ru/monsters/?q=Jackal'>Jackal</a> </td> </tr> <tr> <td>2 </td> <td><a href='https://tentaculus.ru/monsters/?q=Ape'>Ape</a> </td> </tr> <tr> <td>3 </td> <td><a href='https://tentaculus.ru/monsters/?q=Baboon'>Baboon</a> </td> </tr> <tr> <td>4 </td> <td><a href='https://tentaculus.ru/monsters/?q=Axe beak'>Axe beak</a> </td> </tr> <tr> <td>5 </td> <td><a href='https://tentaculus.ru/monsters/?q=Black_bear'>Black bear</a> </td> </tr> <tr> <td>6 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_weasel'>Giant weasel</a> </td> </tr> <tr> <td>7 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_hyena'>Giant hyena</a> </td> </tr> <tr> <td>8 </td> <td><a href='https://tentaculus.ru/monsters/?q=Tiger'>Tiger</a> </td> </tr> </table> ",
      "source": "DMG",
      "img": "BAG_OF_TRICKS.jpg"
    },
    "ru": {
      "name": "Сумка фокусов",
      "text": "Эта обычная с виду сумка, изготовленная из серой, рыжей или коричневой ткани, выглядит пустой. Однако если засунуть в неё руку, можно нащупать маленький пушистый предмет. Весит сумка половину фунта. <br>Вы можете действием вынуть из сумки пушистый предмет и бросить его на 20 футов. Когда предмет приземляется, он превращается в существо, которое вы выбираете броском к8, консультируясь с приведённой таблицей, соответствующей цвету сумки. Характеристики существ смотрите в Бестиарии. Существо исчезает на следующем рассвете или когда его хиты будут уменьшены до 0. <br>Существо дружественно к вам и вашим спутникам, и действует в ваш ход. Вы можете бонусным действием отдать команду, как существу перемещаться, и какое действие ему совершать в следующем ходу, или можете отдать общий приказ, такой как «атакуй врагов». Если приказов нет, существо действует сообразно своей природе. <br>Как только из сумки достанут три пушистых предмета, её нельзя будет использовать до следующего рассвета.<br><b>Серая сумка фокусов</b><br> <table> <tr> <th>d8 </th> <th>Существо </th> </tr> <tr> <td>1 </td> <td><a href='https://tentaculus.ru/monsters/?q=weasel'>Куница</a> </td> </tr> <tr> <td>2 </td> <td><a href='https://tentaculus.ru/monsters/?q=giant_rat'>Гигантская крыса</a> </td> </tr> <tr> <td>3 </td> <td><a href='https://tentaculus.ru/monsters/?q=Badger'>Барсук</a> </td> </tr> <tr> <td>4 </td> <td><a href='https://tentaculus.ru/monsters/?q=Boar'>Кабан</a> </td> </tr> <tr> <td>5 </td> <td><a href='https://tentaculus.ru/monsters/?q=Panther'>Пантера</a> </td> </tr> <tr> <td>6 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_badger'>Гигантский барсук</a> </td> </tr> <tr> <td>7 </td> <td><a href='https://tentaculus.ru/monsters/?q=Dire_wolf'>Лютый волк</a> </td> </tr> <tr> <td>8 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_elk'>Гигантский лось</a> </td> </tr> </table> <br><b>Рыжая сумка фокусов</b><br> <table> <tr> <th>d8 </th> <th>Существо </th> </tr> <tr> <td>1 </td> <td><a href='https://tentaculus.ru/monsters/?q=Rat'>Крыса</a> </td> </tr> <tr> <td>2 </td> <td><a href='https://tentaculus.ru/monsters/?q=Owl'>Сова</a> </td> </tr> <tr> <td>3 </td> <td><a href='https://tentaculus.ru/monsters/?q=Mastiff'>Мастиф</a> </td> </tr> <tr> <td>4 </td> <td><a href='https://tentaculus.ru/monsters/?q=Goat'>Козёл</a> </td> </tr> <tr> <td>5 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_goat'>Гигантский козёл</a> </td> </tr> <tr> <td>6 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_boar'>Гигантский кабан</a> </td> </tr> <tr> <td>7 </td> <td><a href='https://tentaculus.ru/monsters/?q=Lion'>Лев</a> </td> </tr> <tr> <td>8 </td> <td><a href='https://tentaculus.ru/monsters/?q=Brown_bear'>Бурый медведь</a> </td> </tr> </table> <br><b>Коричневая сумка фокусов</b><br> <table> <tr> <th>d8 </th> <th>Существо </th> </tr> <tr> <td>1 </td> <td><a href='https://tentaculus.ru/monsters/?q=Jackal'>Шакал</a> </td> </tr> <tr> <td>2 </td> <td><a href='https://tentaculus.ru/monsters/?q=Ape'>Человекообразная обезьяна</a> </td> </tr> <tr> <td>3 </td> <td><a href='https://tentaculus.ru/monsters/?q=Baboon'>Бабуин</a> </td> </tr> <tr> <td>4 </td> <td><a href='https://tentaculus.ru/monsters/?q=Axe beak'>Топороклюв</a> </td> </tr> <tr> <td>5 </td> <td><a href='https://tentaculus.ru/monsters/?q=Black_bear'>Чёрный медведь</a> </td> </tr> <tr> <td>6 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_weasel'>Гигантская куница</a> </td> </tr> <tr> <td>7 </td> <td><a href='https://tentaculus.ru/monsters/?q=Giant_hyena'>Гигантская гиена</a> </td> </tr> <tr> <td>8 </td> <td><a href='https://tentaculus.ru/monsters/?q=Tiger'>Тигр</a> </td> </tr> </table>"
    }
  },
  {
    "en": {
      "name": "BELT OF DWARVENKIND",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "While wearing this belt, you gain the following benefits: <br>Your Constitution score increases by 2, to a maximum of 20. <br>You have advantage on Charisma (Persuasion) checks made to interact with dwarves. <br>In addition, while attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you're capable of growing one, or a visibly thicker beard if you already have one. <br>If you aren't a dwarf, you gain the following additional benefits while wearing the belt: <br>You have advantage on saving throws against poison, and you have resistance against poison damage. <br>You have darkvision out to a range of 60 feet. <br>You can speak, read, and write Dwarvish.",
      "source": "DMG",
      "img": "BELT_OF_DWARVENKIND.jpg"
    },
    "ru": {
      "name": "Пояс дварфов",
      "text": "Пока вы носите этот пояс, вы получаете следующие преимущества:<br>• Ваше Телосложение увеличивается на 2, с максимумом 20.<br>• Вы совершаете с преимуществом проверки Харизмы (Убеждение) при взаимодействии с дварфами. <br>Кроме того, пока вы настроены на этот пояс, у вас каждый день есть 50-процентный шанс отрастить бороду, если она у вас вообще растёт, или же ваша борода станет гораздо гуще, если она уже есть. <br>Если вы — не дварф, вы получаете следующие дополнительные преимущества, пока носите этот пояс.<br>• Вы совершаете с преимуществом спасброски от яда и получаете сопротивление к урону ядом.<br>• Вы получаете тёмное зрение в пределах 60 футов.<br>• Вы можете говорить, читать и писать на Дварфском языке.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BELT OF hill GIANT STRENGTH",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "While wearing this belt, your Strength score became 21 . If your Strength is already equal to or greater than the belt's score, the item has no effect on you. ",
      "source": "DMG",
      "img": "BELT_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Пояс силы холмового великана",
      "text": "Пока вы носите этот пояс, значение вашей Силы становится равным 21. Если ваша Сила без него и так уже равна или превышает силу пояса, тогда пояс не оказывает на вас никакого эффекта. ",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BELT OF stone GIANT STRENGTH",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "While wearing this belt, your Strength score changes to 23. If your Strength is already equal to or greater than the belt's score, the item has no effect on you. ",
      "source": "DMG",
      "img": "BELT_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Пояс силы каменного великана",
      "text": "Пока вы носите этот пояс, значение вашей Силы становится равным 23. Если ваша Сила без него и так уже равна или превышает силу пояса, тогда пояс не оказывает на вас никакого эффекта. ",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BELT OF frost GIANT STRENGTH",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "While wearing this belt, your Strength score changes to 23. If your Strength is already equal to or greater than the belt's score, the item has no effect on you. ",
      "source": "DMG",
      "img": "BELT_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Пояс силы ледяного великана",
      "text": "Пока вы носите этот пояс, значение вашей Силы становится равным 23. Если ваша Сила без него и так уже равна или превышает силу пояса, тогда пояс не оказывает на вас никакого эффекта. ",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BELT OF fire GIANT STRENGTH",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "While wearing this belt, your Strength score changes to 25. If your Strength is already equal to or greater than the belt's score, the item has no effect on you. ",
      "source": "DMG",
      "img": "BELT_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Пояс силы огненного великана",
      "text": "Пока вы носите этот пояс, значение вашей Силы становится равным 25. Если ваша Сила без него и так уже равна или превышает силу пояса, тогда пояс не оказывает на вас никакого эффекта. ",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BELT OF cloud GIANT STRENGTH",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "While wearing this belt, your Strength score changes to 27. If your Strength is already equal to or greater than the belt's score, the item has no effect on you. ",
      "source": "DMG",
      "img": "BELT_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Пояс силы облачного великана",
      "text": "Пока вы носите этот пояс, значение вашей Силы становится равным 27. Если ваша Сила без него и так уже равна или превышает силу пояса, тогда пояс не оказывает на вас никакого эффекта.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BELT OF storm GIANT STRENGTH",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "While wearing this belt, your Strength score changes to 29. If your Strength is already equal to or greater than the belt's score, the item has no effect on you. ",
      "source": "DMG",
      "img": "BELT_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Пояс силы грозового великана",
      "text": "Пока вы носите этот пояс, значение вашей Силы становится равным 29. Если ваша Сила без него и так уже равна или превышает силу пояса, тогда пояс не оказывает на вас никакого эффекта.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BERSERKER AXE",
      "type": "Weapon",
      "typeAdditions": "(any axe)",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained. <br><b>Curse.</b> This axe is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear. <br>Whenever a hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 <br>Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures within 60 feet of you that you can see or hear.",
      "source": "DMG",
      "img": "BERSERKER_AXE.jpg"
    },
    "ru": {
      "name": "Топор берсерка",
      "text": "Вы получаете бонус +1 к броскам атаки и урона, совершённым этим магическим оружием. Кроме того, пока вы настроены на это оружие, максимум ваших хитов увеличивается на 1 за каждый полученный уровень. <br>Проклятье. Этот топор проклят, и это проклятье простирается и на того, кто настраивается на него. Пока вы остаётесь прокляты, вы не хотите расставаться с топором, и всегда держите его под рукой. <br>Вы также совершаете с помехой броски атаки другим оружием, кроме случаев, когда в пределах 60 футов нет врагов, которых вы можете видеть или слышать. <br>Каждый раз, когда враждебное существо причиняет вам урон, а топор при этом находится при вас, вы должны преуспеть в спасброске Мудрости со Сл 15, иначе станете берсерком. Будучи берсерком, вы обязаны своим действием в каждом раунде атаковать этим топором ближайшее существо. Если вы можете совершать дополнительные атаки частью действия Атака, вы совершаете эти атаки, переходя к следующему ближайшему существу, после того как расправитесь с текущей целью. Если у вас есть несколько возможных целей, вы атакуете того, кого выберете случайным образом. Вы остаётесь берсерком, пока не получится так, что в начале вашего хода в пределах 60 футов от вас не останется существ, которых вы можете видеть или слышать.",
      "typeAdditions": "(любой топор)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BOOTS OF ELVENKIND",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
      "source": "DMG",
      "img": "BOOTS_OF_ELVENKIND.jpg"
    },
    "ru": {
      "name": "Эльфийские сапоги",
      "text": "Пока вы носите эти сапоги, ваши шаги не издают звука, вне зависимости от поверхности, по которой вы идёте. Вы также совершаете с преимуществом проверки Ловкости (Скрытность), которые полагаются на бесшумное передвижение."
    }
  },
  {
    "en": {
      "name": "BOOTS OF LEVITATION",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "While you wear these boots, you can use an action to cast the <a href='https://tentaculus.ru/spells/#q=levitate'>levitate</a> spell on yourself at will.",
      "source": "DMG",
      "img": "BOOTS_OF_LEVITATION.jpg"
    },
    "ru": {
      "name": "Сапоги левитации",
      "text": "Если вы носите эти сапоги, вы можете неограниченно действием накладывать на себя заклинание <a href='https://tentaculus.ru/spells/#q=levitate'>левитация</a>.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BOOTS OF SPEED",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "While you wear these boots, you can use a bonus action and click the boots' heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect. <br>When the boots' property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest.",
      "source": "DMG",
      "img": "BOOTS_OF_SPEED.jpg"
    },
    "ru": {
      "name": "Сапоги скорости",
      "text": "Пока вы носите эти сапоги, вы можете бонусным действием щёлкнуть каблуками. Если вы делаете это, то сапоги удваивают вашу скорость ходьбы, а все существа, совершающие по вам провоцированные атаки, совершают броски атаки с помехой. Если вы щёлкнете каблуками повторно, вы прекращаете действие эффекта. <br>Если свойства этих сапог использовались в общей сложности 10 минут, магия перестаёт работать, пока вы не закончите продолжительный отдых.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BOOTS OF STRIDING AND SPRINGING",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining movement would allow.",
      "source": "DMG",
      "img": "BOOTS_OF_STRIDING_AND_SPRINGING.jpg"
    },
    "ru": {
      "name": "Сапоги ходьбы и прыжков",
      "text": "Пока вы носите эти сапоги, ваша скорость ходьбы становится равной 30 футов, если она была ниже, и ваша скорость не уменьшается, когда вы перегружены или носите тяжёлый доспех. Кроме того, вы можете совершать прыжки в три раза дальше, чем обычно, но вы всё равно не можете прыгнуть дальше, чем осталось у вас перемещения.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BOOTS OF THE WINTERLANDS",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits: <br>• You have resistance to cold damage. <br>• You ignore difficult terrain created by ice or snow. <br>You can tolerate temperatures as low as -50 degrees <br>Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.",
      "source": "DMG",
      "img": "BOOTS_OF_THE_WINTERLANDS.jpg"
    },
    "ru": {
      "name": "Заполярные сапоги",
      "attunement": "(требуют настройки)",
      "text": "Эти меховые сапоги очень плотные и тёплые. Пока вы их носите, вы получаете следующие преимущества:<br> • Вы получаете сопротивление к урону холодом.<br> • Вы игнорируете труднопроходимую местность, созданную льдом или снегом.<br> • Вы нормально выносите такую низкую температуру как −50 °F (−45 °C), без дополнительной тёплой одежды. Если вы одеты очень тепло, то можете переносить температуру до −100 °F (−73 °C)."
    }
  },
  {
    "en": {
      "name": "BOWL OF COMMANDING WATER ELEMENTALS",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "While this bowl is filled with water, you can use an action to speak the bowl's command word and summon a <a href='https://tentaculus.ru/monsters/#q=water_elemental'>ater elemental</a>, as if you had cast the <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>conjure elemental</a> spell. The bowl can't be used this way again until the next dawn. <br>The bowl is about 1 foot in diameter and half as deep. <br>It weighs 3 pounds and holds about 3 gallons.",
      "source": "DMG",
      "img": "BOWL_OF_COMMANDING_WATER_ELEMENTALS.jpg"
    },
    "ru": {
      "name": "Чаша командования водяными элементалями",
      "text": "Если эта чаша наполнена водой, вы можете действием произнести командное слово и призвать <a href='https://tentaculus.ru/monsters/#q=water_elemental'>водяного элементаля</a>, как если бы наложили заклинание <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>призыв элементаля</a>. Чашу нельзя использовать повторно, пока не наступит следующий рассвет. <br>Чаша диаметром примерно 1 фут, а в высоту она в два раза меньше. Она весит 3 фунта и вмещает 3 галлона."
    }
  },
  {
    "en": {
      "name": "BRACERS OF ARCHERY",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
      "source": "DMG",
      "img": "BRACERS_OF_ARCHERY.jpg"
    },
    "ru": {
      "name": "Наручи стрельбы из лука",
      "text": "Пока вы носите эти наручи, вы получаете навык владения длинным и коротким луком и бонус +2 к броскам урона дальнобойными атаки этим оружием.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BRACERS OF DEFENSE",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
      "source": "DMG",
      "img": "BRACERS_OF_DEFENSE.jpg"
    },
    "ru": {
      "name": "Наручи защиты",
      "text": "Пока вы носите эти наручи, вы получаете бонус +2 к <br>КД, если не носите доспех и не используете щит.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BRAZIER OF COMMANDING FIRE ELEMENTALS",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "While a fire burns in this brass brazier, you can use an action to speak the brazier's command word and summon a <a href='https://tentaculus.ru/monsters/#q=fire_elemental'>fire elemental</a>, as if you had cast the <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>conjure elemental</a> spell. The brazier can't be used this way again until the next dawn. <br>The brazier weighs 5 pounds.",
      "source": "DMG",
      "img": "BRAZIER_OF_COMMANDING_FIRE_ELEMENTALS.jpg"
    },
    "ru": {
      "name": "Жаровня командования огненными элементалями",
      "text": "Если в этой латунной жаровне горит огонь, вы можете действием произнести командное слово и призвать <a href='https://tentaculus.ru/monsters/#q=fire_elemental'>огненного элементаля</a>, как если бы наложили заклинание <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>призыв элементаля</a>. Жаровню нельзя использовать повторно, пока не наступит следующий рассвет. <br>Весит жаровня 5 фунтов."
    }
  },
  {
    "en": {
      "name": "BROOCH OF SHIELDING",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the <a href='https://tentaculus.ru/spells/#q=magic_missile'>magic missile</a> spell.",
      "source": "DMG",
      "img": "BROOCH_OF_SHIELDING.jpg"
    },
    "ru": {
      "name": "Брошь защиты",
      "text": "Пока вы носите эту брошь, вы обладаете сопротивлением к урону силовым полем и иммунитетом к урону от заклинания <a href='https://tentaculus.ru/spells/#q=magic_missile'>волшебная стрела</a>.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "BROOM OF FLYING",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land. <br>You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.",
      "source": "DMG",
      "img": "BROOM_OF_FLYING.jpg"
    },
    "ru": {
      "name": "Помело полёта",
      "text": "Это деревянное помело весит 3 фунта и действует как обычная метла, пока вы не сядете на неё верхом и не произнесёте командное слово. После этого она начинает парить и может подняться в воздух. У неё скорость полёта 50 футов. Она может поднимать до 400 фунтов, но при весе 200 фунтов её скорость уже уменьшается до 30 футов. Помело перестаёт парить, когда вы приземляетесь. <br>Вы можете отправить помело в другое место, находящееся в пределах 1 мили, если произнесёте командное слово и назовёте место, знакомое вам. Помело вернётся к вам, когда вы произнесёте второе командное слово, при условии, что помело всё ещё находится в пределах 1 мили."
    }
  },
  {
    "en": {
      "name": "CANDLE OF INVOCATION",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "This slender taper is dedicated to a deity and shares that deity's alignment. The candle's alignment can be detected with the <a href='https://tentaculus.ru/spells/?q=detect_evil#q=detect_evil_and_good'>detect evil and good spell</a>. The <br>DM chooses the god and associated alignment or determines the alignment randomly.<br> <table> <tr> <th>d20 </th> <th>Alignment </th> </tr> <tr> <td>1-2 </td> <td>Chaotic evil </td> </tr> <tr> <td>3-4 </td> <td>Chaotic neutral </td> </tr> <tr> <td>5-7 </td> <td>Chaotic good </td> </tr> <tr> <td>8-9 </td> <td>Neutral evil </td> </tr> <tr> <td>10-11 </td> <td>Neutral </td> </tr> <tr> <td>12-13 </td> <td>Neutral good </td> </tr> <tr> <td>14-15 </td> <td>Lawful evil </td> </tr> <tr> <td>16-17 </td> <td>Lawful neutral </td> </tr> <tr> <td>18-20 </td> <td>Lawful good </td> </tr> </table>  <br>The candle's magic is activated when the candle is lit, which requires an action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from the candle's total burn time. <br>While lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack rolls, saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose a lignment matches the candle's can cast 1st-level spells he or she has prepared without expending spell slots, though the spell's effect is as if cast with a 1st-level slot. <br>Alternatively, when you light the candle for the first time, you can cast the <a href='https://tentaculus.ru/spells/#q=gate&ls=9'>gate</a> spell with it. Doing so destroys the candle.",
      "source": "DMG",
      "img": "CANDLE_OF_INVOCATION.jpg"
    },
    "ru": {
      "name": "Свеча мольбы",
      "text": "Эта тонкая восковая свеча посвящена определённому божеству и настроена на мировоззрение этого божества. Мировоззрение свечи можно определить заклинанием <a href='https://tentaculus.ru/spells/?q=detect_evil#q=detect_evil_and_good'>обнаружение добра и зла</a>. Мастер сам выбирает божество и мировоззрение, либо определяет их случайным образом. <br><table><tr><td>к20</td><td>Мировоззрение</td></tr><tr><td>1–2</td><td>Хаотично-злое</td></tr><tr><td>3–4</td><td>Хаотично-нейтральное</td></tr><tr><td>5–7</td><td>Хаотично-доброе</td></tr><tr><td>8–9</td><td>Нейтрально-злое</td></tr><tr><td>18–20</td><td>Законно-доброе</td></tr><tr><td>10–11</td><td>Нейтральное</td></tr><tr><td>12–13</td><td>Нейтрально-доброе</td></tr><tr><td>14–15</td><td>Законно-злое</td></tr><tr><td>16–17</td><td>Законно-нейтральное</td></tr></table><br>Магия свечи активируется, когда свечу зажигают, что совершается действием. Погорев 4 часа, свеча уничтожается. Вы можете затушить свечу раньше, чтобы воспользоваться ей же позже. Минимальная единица учёта времени горения — 1 минута. <br>Будучи зажжённой, свеча испускает тусклый свет в радиусе 30 футов. Все существа в области этого света, чьё мировоззрение совпадает с мировоззрением свечи, совершают броски атаки, спасброски и проверки характеристик с преимуществом. Кроме того, жрецы и друиды в области света, чьё мировоззрение совпадает с мировоззрением свечи, могут накладывать подготовленные заклинания 1 уровня, не тратя ячейки заклинаний, и эффект таких заклинаний будет как у заклинаний, наложенных с использованием ячейки 1 уровня. <br>В качестве альтернативы, когда вы впервые зажигаете совершенно новую свечу, вы можете наложить ей заклинание <a href='https://tentaculus.ru/spells/#q=gate&ls=9'>врата</a>. Это мгновенно уничтожает свечу.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CAPE OF THE MOUNTEBANK",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "This cape smells faintly of brimstone. While wearing it, you can use it to cast the <a href='https://tentaculus.ru/spells/#q=dimension_door'>dimension door</a> spell as an action. This property of the cape can't be used again until the next dawn. <br>When you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke.",
      "source": "DMG",
      "img": "CAPE_OF_THE_MOUNTEBANK.jpg"
    },
     "ru": {
      "name": "Плащ шарлатана",
      "text": "Этот плащ слабо пахнет серой. Пока вы его носите, вы можете действием наложить заклинание <a href='https://tentaculus.ru/spells/#q=dimension_door'>переносящая дверь</a>. Это свойство плаща нельзя использовать повторно до следующего рассвета. <br>Когда вы исчезаете, вы оставляете после себя облачко дыма, и в пункте назначения появляетесь тоже в клубах дыма. Дым слабо заслоняет покинутое и новое пространство и исчезает в конце вашего следующего хода. Лёгкий или более сильный ветер рассеивает этот дым."
    }
  },
  {
    "en": {
      "name": "CARPET OF FLYING",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "You can speak the carpet's command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it. <br>Four sizes of carpet of flying exist. The DM chooses the size of a given carpet or determines it randomly.<br> <table> <tr> <th>d100 </th> <th>Size </th> <th>Capacity </th> <th>Flying Speed </th> </tr> <tr> <td>01-20 </td> <td>3 ft. X 5 ft. </td> <td>200 lb. </td> <td>80 feet </td> </tr> <tr> <td>21-55 </td> <td>4ft. X 6ft. </td> <td>400 lb. </td> <td>60 feet </td> </tr> <tr> <td>56-80 </td> <td>5 ft. X 7 ft. </td> <td>600 lb. </td> <td>40 feet </td> </tr> <tr> <td>81-100 </td> <td>6 ft. X 9 ft. </td> <td>800 lb. </td> <td>30 feet </td> </tr> </table>  <br>A carpet can carry up to twice the weight shown on the table, but it flies at half speed if it carries more than its normal capacity.",
      "source": "DMG",
      "img": "CARPET_OF_FLYING.jpg"
    },
    "ru": {
      "name": "Ковёр-самолёт",
      "text": "Вы можете произнести действием командное слово, чтобы ковёр смог парить и летать. Он перемещается в сказанных вами вслух направлениях, при условии, что вы находитесь в пределах 30 футов от него. <br>Существует четыре версии такого ковра. Мастер сам выбирает размер ковра или определяет его случайным образом. <br>Ковёр может поднять в два раза больший вес, чем тот, что указан в таблице, но при нагрузке больше расчётной его скорость уменьшается вдвое.<br><table><tr><td>к100</td><td>Размер</td><td>Грузоподъёмность</td><td>Скорость полёта</td></tr><tr><td>01–20</td><td>3 фт. × 5 фт.</td><td>200 фнт.</td><td>80 футов</td></tr><tr><td>21–55</td><td>4 фт. × 6 фт.</td><td>400 фнт.</td><td>60 футов</td></tr><tr><td>56–80</td><td>5 фт. × 7 фт.</td><td>600 фнт.</td><td>40 футов</td></tr><tr><td>81–100</td><td>6 фт. × 9 фт.</td><td>800 фнт.</td><td>30 футов</td></tr></table>"
    }
  },
  {
     "en": {
      "name": "CENSER OF CONTROLLING AIR ELEMENTALS",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "While incense is burning in this censer, you can use an action to speak the censer's command word and summon an <a href='https://tentaculus.ru/monsters/#q=air_elemental'>air elemental</a>, as if you had cast the <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>conjure elemental</a> spell. The censer can't be used this way again until the next dawn. <br>This 6-inch-wide, 1-foot-high vessel resembles a chalice with a decorated lid. It weighs 1 pound.",
      "source": "DMG",
      "img": "CENSER_OF_CONTROLLING_AIR_ELEMENTALS.jpg"
    },
    "ru": {
      "name": "Кадило контролирования воздушных элементалей",
      "text": "Если в этом кадиле горит благовоние, вы можете действием произнести командное слово и призвать <a href='https://tentaculus.ru/monsters/#q=air_elemental'>воздушного элементаля</a>, как если бы наложили заклинание <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>призыв элементаля</a>. Кадило нельзя использовать повторно, пока не наступит следующий рассвет. <br>Этот сосуд 6 дюймов шириной и 1 фут высотой напоминает чашу с декорированной крышкой. Весит кадило 1 фунт."
    }
  },
  {
    "en": {
      "name": "CLOAK OF ARACHNIDA",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "This fine garment is made of black silk interwoven with faint silvery threads. While wearing it, you gain the following benefits: <br>You have resistance to poison damage. <br>You have a climbing speed equal to your walking speed. <br>You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. <br> • You can't be caught in webs of any sort and can move through webs as if they were difficult terrain. <br> • You can use an action to cast the <a href='https://tentaculus.ru/spells/#q=web'>web</a> spell (save DC 13). The web created by the spell fills twice its normal area. Once used, this property of the cloak can't be used again until the next dawn.",
      "source": "DMG"
    },
    "ru": {
      "name": "Плащ паука",
      "text": "Этот прекрасный плащ сделан из чёрного шёлка, переплетённого тонкими серебристыми нитями. Пока вы его носите, вы обладаете следующими преимуществами:<br> • Вы получаете сопротивление к урону ядом.<br> • Вы получаете скорость лазания, равную скорость ходьбы.<br> • Вы можете перемещаться вверх, вниз и вдоль вертикальных поверхностей, а также вверх ногами по потолку, оставляя руки свободными.<br> • Вы не можете запутаться ни в какой паутине, и можете перемещаться сквозь паутину как если бы она была просто труднопроходимой местностью.<br> • Вы можете действием наложить заклинание <a href='https://tentaculus.ru/spells/#q=web'>паутина</a> (Сл спасброска 13). Паутина, создаваемая этим заклинанием, заполняет в два раза большую площадь чем обычно. Это свойство нельзя использовать повторно до следующего рассвета."
    }
  },
  {
    "en": {
      "name": "CLOAK OF DISPLACEMENT",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are in-capacitated, restrained, or otherwise unable to move.",
      "source": "DMG",
      "img": "CLOAK_OF_DISPLACEMENT.jpg"
    },
    "ru": {
      "name": "Плащ ускользания",
      "text": "Пока вы носите этот плащ, он создаёт иллюзию, что вы находитесь немного в стороне от настоящего местонахождения, отчего существа совершают броски атаки по вам с помехой. Если вы получаете урон, это свойство перестаёт действовать до начала вашего следующего хода. Это свойство подавляется, пока вы недееспособны, опутаны или не можете перемещаться по другой причине.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CLOAK OF PROTECTION",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "You gain a +1 bonus to AC and saving throws while you wear this cloak.",
      "source": "DMG",
      "img": "CLOAK_OF_PROTECTION.jpg"
    },
    "ru": {
      "name": "Плащ защиты",
      "text": "Вы получаете бонус +1 к КД и к спасброскам, пока носите этот плащ.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CLOAK OF THE BAT",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "While wearing this cloak, you have advantage on <br>Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fa il to grip the cloak's edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed. <br>While wearing the cloak in an area of dim light or darkness, you can use your action to cast polymorph on yourself, transforming into a bat. While you are in the form of the bat, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can't be used this way again until the next dawn.",
      "source": "DMG",
      "img": "CLOAK_OF_THE_BAT.jpg"
    },
    "ru": {
      "name": "Плащ летучей мыши",
      "text": "Пока вы носите этот плащ, вы совершаете с преимуществом проверки Ловкости (Скрытность). В области тусклого освещения или темноте вы можете схватить края плаща обеими руками и использовать его для полёта со скоростью 40 футов. Если вы отпустите плащ во время полёта или перестанете находиться в области тусклого света или тьмы, вы теряете эту скорость полёта. <br>Если вы носите этот плащ, и находитесь в области тусклого освещения или темноте, вы можете действием наложить на себя превращение и стать летучей мышью. Пока вы находитесь в облике летучей мыши, вы сохраняете свои значения Интеллекта, Мудрости и Харизмы. Это свойство плаща нельзя использовать повторно до следующего рассвета.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CLOAK OF THE MANTA RAY",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action.",
      "source": "DMG",
      "img": "CLOAK_OF_THE_MANTA_RAY.jpg"
    },
    "ru": {
      "name": "Плащ ската",
      "text": "Пока вы носите этот плащ с накинутым капюшоном, вы можете дышать под водой и у вас появляется скорость плавания 60 футов. Накидывание и снятие капюшона совершается действием."
    }
  },
  {
    "en": {
      "name": "CLOAK OF ELVENKIND",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage. and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
      "source": "DMG",
      "img": "CLOAK_OF_ELVENKIND.jpg"
    },
    "ru": {
      "name": "Эльфийский плащ",
      "text": "Пока вы носите этот плащ с накинутым капюшоном, проверки Мудрости (Внимательность), совершённые чтобы увидеть вас, совершаются с помехой, а вы совершаете с преимуществом проверки Ловкости (Скрытность), когда прячетесь — плащ способен изменять свой цвет, обеспечивая вам камуфляж. Накидывание и снятие капюшона совершается действием.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CRYSTAL BALL",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "The typical crystal ball, a very rare item, is about 6 inches in diameter. While touching it, you can cast the <a href='https://tentaculus.ru/spells/#q=scrying'>scrying</a> spell (save DC 17) with it. ",
      "source": "DMG",
      "img": "CRYSTAL_BALL.jpg"
    },
    "ru": {
      "name": "Хрустальный шар",
      "text": "Обычный хрустальный шар является очень редким предметом, примерно 6 дюймов диаметром. Если вы его касаетесь, вы можете действием накладывать им заклинание <a href='https://tentaculus.ru/spells/#q=scrying'>наблюдение</a> (Сл спасброска 17).",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CRYSTAL BALL of Mind Reading",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "You can use an action to cast the <a href='https://tentaculus.ru/spells/#q=detect_thoughts'>detect thoughts</a> spell (save DC 17) while you are scrying with the crystal ball, targeting creatures you can see within 30 feet of the spell's sensor. You don't need to concentrate on this detect thoughts to maintain it during its duration, but it ends if scrying ends.",
      "source": "DMG",
      "img": "CRYSTAL_BALL.jpg"
    },
    "ru": {
      "name": "Хрустальный шар чтения мыслей",
      "text": "Вы можете действием наложить заклинание <a href='https://tentaculus.ru/spells/#q=detect_thoughts'>обнаружение мыслей</a> (Сл спасброска 17), пока смотрите в этот хрустальный шар, нацеливаясь на существо, которое вы видите в пределах 30 футов от сенсора заклинания. Вы не обязаны концентрироваться на обнаружении мыслей, но это заклинание оканчивается вместе с наблюдением. ",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CRYSTAL BALL of Telepathy",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "While <a href='https://tentaculus.ru/spells/#q=scrying'>scrying</a> with the crystal ball, you can communicate telepathically with creatures you can see within 30 feet of the spell's sensor. You can also use an action to cast the <a href='https://tentaculus.ru/spells/#q=suggestion'>suggestion</a> spell (save DC 17) through the sensor on one of those creatures. You don't need to concentrate on this suggestion to maintain it during its duration, but it ends if scrying ends. Once used, the suggestion power of the crystal ball can't be used again until the next dawn. ",
      "source": "DMG",
      "img": "CRYSTAL_BALL.jpg"
    },
    "ru": {
      "name": "Хрустальный шар телепатии",
      "text": " Если вы смотрите в этот хрустальный шар, вы можете телепатически общаться с существами, видимыми вами в пределах 30 футов от сенсора. Вы также можете действием наложить заклинание <a href='https://tentaculus.ru/spells/#q=suggestion'>внушение</a> (Сл спасброска 17) через сенсор на одно из таких существ. Вы не обязаны концентрироваться на внушении, но это заклинание оканчивается вместе с наблюдением. Вы не можете повторно использовать внушающую способность этого хрустального шара до следующего рассвета. ",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CRYSTAL BALL of True Seeing",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "While scrying with the crystal ball, you have truesight with a radius of 120 feet centered on the spell's sensor.",
      "source": "DMG",
      "img": "CRYSTAL_BALL.jpg"
    },
    "ru": {
      "name": "Хрустальный шар истинного зрения",
      "text": "Если вы смотрите в этот шар, вы обладаете истинным зрением в радиусе 120 футов с центром на сенсоре заклинания. ",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CUBE OF FORCE",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "This cube is about an inch across. Each face has a distinct marking on it that can be pressed. The cube starts with 36 charges, and it regains 1d20 expended charges daily at dawn. <br>You can use an action to press one of the cube's faces, expending a number of charges based on the chosen face, as shown in the Cube of Force Faces table. Each face has a different effect. If the cube has insufficient charges remaining, nothing happens. Otherwise, a barrier of invisible force springs into existence, forming a cube 15 feet on a side. The barrier is centered on you, moves with you, and lasts for 1 minute, until you use an action to press the cube's sixth face, or the cube runs out of charges. You can change the barrier's effect by pressing a different face of the cube and expending the requisite number of charges, resetting the duration. <br>If your movement causes the barrier to come into contact with a solid object that can't pass through the cube, you can't move any closer to that object as long as the barrier remains. <br> <table> <tr> <th>Face </th> <th>Charges </th> <th>Effect </th> </tr> <tr> <td>1 </td> <td>1 </td> <td>Gases, wind, and fog can't pass through the barrier. </td> </tr> <tr> <td>2 </td> <td>2 </td> <td>Nonliving matter can't pass through the barrier. Walls, floors, and ceilings can pass through at your discretion. </td> </tr> <tr> <td>3 </td> <td>3 </td> <td>Living matter can't pass through the barrier. </td> </tr> <tr> <td>4 </td> <td>4 </td> <td>Spell effects can't pass through the barrier. </td> </tr> <tr> <td>5 </td> <td>5 </td> <td>Nothing can pass through the barrier. Walls, floors, and ceilings can pass through at your discretion. </td> </tr> <tr> <td>6 </td> <td>0 </td> <td>The barrier deactivates. </td> </tr> </table> <br> The cube loses charges when the barrier is targeted by certain spells or comes into contact with certain spell or magic item effects, as shown in the table below. <br> <table> <tr> <th>Spell or Item </th> <th>Charges Lost </th> </tr> <tr> <td><a href='https://tentaculus.ru/spells/?q=detect_evil#q=Disintegrate'>Disintegrate</a> </td> <td>ldl2 </td> </tr> <tr> <td>Horn of blasting </td> <td>ldlO </td> </tr> <tr> <td><a href='https://tentaculus.ru/spells/?q=detect_evil#q=Passwall'>Passwall</a> </td> <td>ld6 </td> </tr> <tr> <td><a href='https://tentaculus.ru/spells/?q=detect_evil#q=Prismatic_spray'><a href='https://tentaculus.ru/spells/#q=prismatic_spray'>Prismatic spray</a></a> </td> <td>ld20 </td> </tr> <tr> <td><a href='https://tentaculus.ru/spells/?q=detect_evil#q=Wall_of_fire'>Wall of fire</a> </td> <td>ld4 </td> </tr> </table> ",
      "source": "DMG",
      "img": "CUBE_OF_FORCE.jpg"
    },
    "ru": {
      "name": "Куб силового поля",
      "text": "Это кубик с длиной ребра около дюйма. На каждой грани есть характерная метка, на которую можно нажать. Вначале у куба 36 зарядов, и он ежедневно восстанавливает 1к20 зарядов на рассвете. <br>Вы можете действием нажать на одну из граней куба, тратя при этом указанное в таблице число зарядов. У каждой грани свой эффект. Если в кубе не осталось достаточного числа зарядов, ничего не произойдёт. В противном случае возникает барьер из невидимого силового поля, формирующий куб с длиной ребра 15 футов. Барьер создаётся с центром на вас, перемещается вместе с вами и существует 1 минуту, пока вы не нажмёте действием на шестую грань куба или пока в кубе не кончатся заряды. Вы можете изменить эффект барьера, нажав на другую грань куба и потратив нужное количество зарядов, сбрасывая при этом счётчик длительности. <br>Если из-за перемещения барьер вступает в контакт с твёрдым предметом, который не может пройти сквозь поле, вы не сможете приблизиться к этому предмету, пока поле существует.<br><table><tr><td>Грань</td><td>Заряды</td><td>Эффект</td></tr><tr><td>1</td><td>1</td><td>Через барьер не проходят газы, ветер и туман.</td></tr><tr><td>2</td><td>2</td><td>Через барьер не проходит неживая материя. Стены, пол и потолок могут проходить, если вы того пожелаете.</td></tr><tr><td>3</td><td>3</td><td>Через барьер не проходит живая материя.</td></tr><tr><td>4</td><td>4</td><td>Через барьер не проходят эффекты заклинаний.</td></tr><tr><td>5</td><td>5</td><td>Через барьер не проходит ничего. Стены, пол и потолок могут проходить, если вы того пожелаете.</td></tr><tr><td>6</td><td>0</td><td>Барьер исчезает</td></tr></table><br>Куб теряет заряды, когда барьер становится целью определённых заклинаний или вступает во взаимодействие с эффектами определённых заклинаний или магических предметов, как показано ниже.<br><table><tr><td>Заклинание или предмет</td><td>Потеря зарядов</td></tr><tr><td><a href='https://tentaculus.ru/spells/#q=wall_of_fire'>Огненная стена</a></td><td>1к4</td></tr><tr><td><a href='https://tentaculus.ru/spells/#q=prismatic_spray'><a href='https://tentaculus.ru/spells/#q=prismatic_spray'>Радужные брызги</a></a></td><td>1к20</td></tr><tr><td><a href='https://tentaculus.ru/spells/?q=detect_evil#q=Disintegrate'>Распад</a></td><td>1к12</td></tr><tr><td>Рог взрыва</td><td>1к10</td></tr><tr><td><a href='https://tentaculus.ru/spells/?q=detect_evil#q=Passwall'>Создание прохода</a></td><td>1к6</td></tr></table>",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CUBIC GATE",
      "type": "Wondrous item",
      "rarity": 5,
      "text": "This cube is 3 inches across and radiates palpable magical energy. The six sides of the cube are each keyed to a different plane of existence, one of which is the Material Plane. The other sides are linked to plane: determined by the DM. <br>You can use an action to press one side of the cube to cast the <a href='https://tentaculus.ru/spells/#q=gate&ls=9'>gate</a> spell with it, opening a portal to the plane keyed to that side. Alternatively, if you use an action to press one side twice, you can cast the <a href='https://tentaculus.ru/spells/#q=plane_shift'>plane shift</a> spell (save DC 17) with the cube and transport the targets to the plane keyed to that side. <br>The cube has 3 charges. Each use of the cube expend: 1 charge. The cube regains ld3 expended charges daily at dawn.",
      "source": "DMG",
      "img": "CUBIC_GATE.jpg"
    },
    "ru": {
      "name": "Куб врат",
      "text": "Это куб с длиной ребра 3 дюйма, излучающий ощутимую на ощупь магическую энергию. Все шесть граней этого куба связаны с разными планами существования, причём один из них — Материальный План. <br>Остальные планы определяет Мастер. <br>Вы можете действием нажать на одну из граней куба, чтобы наложить им заклинание <a href='https://tentaculus.ru/spells/#q=gate&ls=9'>врата</a>, создающее портал на план, связанный с этой гранью. В качестве альтернативы, если вы действием нажмёте на одну грань дважды, вы можете наложить кубом заклинание <a href='https://tentaculus.ru/spells/#q=plane_shift'>уход в иной мир</a> (Сл спасброска 17), перенося целей на план, связанный с этой гранью. <br>У этого куба есть 3 заряда. Каждое использование куба тратит 1 заряд. Куб ежедневно восстанавливает 1к3 заряда на рассвете."
    }
  },
  {
    "en": {
      "name": "DAERN'S INSTANT FORTRESS",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "You can use an action to place this l-inch metal cube on the ground and speak its command word. The cube rapidly grows into a fortress that remains until you use an action to speak the command word that dismisses ir. which works only if the fortress is empty. <br>The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors. with a ladder running along one wall to connect them. <br>The ladder ends at a trapdoor leading to the roof. When activated, the tower has a small door on the side facing you. The door opens only at your command, which you can speak as a bonus action. It is immune to the knock spell and similar magic, such as that of a chime of opening. <br>Each creature in the area where the fortress appears must make a DC 15 Dexterity saving throw, taking lOdlO bludgeoning damage on a failed save, or half as much damage on a successful one. In either case, the creature is pushed to an unoccupied space outside but next to the fortress. Objects in the area that aren't being worn or carried take this damage and are pushed automatically. <br>The tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points, immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a <a href='https://tentaculus.ru/spells/#q=wish'>wish</a> spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of wish causes the roof, the door, or one wall to regain 50 hit points.",
      "source": "DMG",
      "img": "DAERNS_INSTANT_FORTRESS.jpg"
    },
    "ru": {
      "name": "Мгновенная крепость Даэрна",
      "text": "Вы можете действием поместить этот металлический кубик с длиной ребра 1 дюйм на пол и произнести командное слово. Куб быстро вырастет в крепость, которая остаётся, пока вы не произнесёте действием командное слово, которое сработает только если крепость пуста.<br>Крепость является квадратной башней 20 × 20 футов и 30 футов высотой, с бойницами и зубчатой стеной сверху. Внутри она поделена на два этажа, соединённых лестницей, идущей вдоль одной из стен. Лестница заканчивается наверху люком. После активации в ближайшей к вам стене будет небольшая дверь. Дверь открывается только по вашей команде, которую вы произносите бонусным действием. Она обладает иммунитетом к заклинанию открывание и подобной магии, например, к колокольчику открывания. Все существа, находящиеся в области, в которой появляется крепость, должны совершить спасбросок Ловкости со Сл 15, получая дробящий урон 10к10 при провале или половину этого урона при успехе. В любом случае, такое существо выталкивается в ближайшее свободное пространство вне крепости. Предметы в этой области, которые никто не несёт и не носит, получают этот же урон и автоматически толкаются. Башня изготовлена из адамантина, и магия не даёт её опрокинуть. У крыши, двери и стен по 100 хитов, иммунитет к урону от немагического оружия, исключая осадное оружие, и сопротивление ко всем остальным видам урона. Чинить крепость можно только заклинанием <a href='https://tentaculus.ru/spells/#q=wish'>исполнение желаний</a> (это считается дублированием заклинания с уровнем ниже 9). Каждое накладывание этого заклинания восстанавливает крыше, двери или одной из стен 50 хитов."
    }
  },
  {
    "en": {
      "name": "DAGGER OF VENOM",
      "type": "Weapon",
      "typeAdditions": "(dagger)",
      "rarity": 3,
      "text": "You gain a +1 bonus to attack and damage rolls made with this magic weapon. <br>You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. <br>That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn.",
      "source": "DMG",
      "img": "DAGGER_OF_VENOM.jpg"
    },
    "ru": {
      "name": "Кинжал яда",
      "text": "Вы получаете бонус +1 к броскам атаки и урона, совершённым этим магическим оружием. <br>Вы можете действием заставить этот клинок покрыться густым чёрным ядом. Яд остаётся 1 минуту, или пока атака этим оружием не попадёт по существу. Цель должна преуспеть в спасброске Телосложения со Сл 15, иначе она получит урон ядом 2к10 и станет отравленной на 1 минуту. Вы не можете использовать повторно это свойство до следующего рассвета.",
      "typeAdditions": "(кинжал)"
    }
  },
  {
    "en": {
      "name": "DECANTER OF ENDLESS WATER",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds. <br>You can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options: \"Stream\" produces 1 gallon of water. \"Fountain\" produces 5 gallons of water. <br>• \"Geyser\" produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn't being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you.",
      "source": "DMG",
      "img": "DECANTER_OF_ENDLESS_WATER.jpg"
    },
    "ru": {
      "name": "Графин бесконечной воды",
      "text": "Эта закупоренная ёмкость булькает, если её потрясти, как будто в ней находится вода. Весит графин 2 фунта. <br>Вы можете действием откупорить графин и произнести одно из трёх ключевых слов, после чего из графина выливается указанное количество пресной или солёной воды (на ваш выбор). Вода прекращает литься в начале вашего следующего хода. У вас есть следующие варианты:<br><br>• «Ручей» производит 1 галлон воды.<br><br>• «Фонтан» производит 5 галлонов воды.<br><br>• «Гейзер» производит 30 галлонов воды, которая вырывается струёй 30 футов длиной и 1 фут шириной. Держа графин, вы можете бонусным действием нацелиться графином на существо, которое видите в пределах 30 футов от себя. Цель должна преуспеть в спасброске <br>Силы со Сл 13, иначе получит дробящий урон 1к4 и будет сбита с ног. Вместо существа вы можете нацелиться на предмет, который никто не несёт и не носит, и который весит не больше 200 фунтов. Предмет или падает или толкается на 15 футов от вас."
    }
  },
  {
    "en": {
      "name": "CHIME OF OPENING",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "This hollow metal tube measures about 1 foot long and :-veighs 1 pound. You can strike it as an action, pointing 1t at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can't reach the object. If no locks or latches remain, the object itself opens. <br>The chime can be used ten times. After the tenth time it cracks and becomes useless. '",
      "source": "DMG",
      "img": "CHIME_OF_OPENING.jpg"
    },
    "ru": {
      "name": "Колокольчик открывания",
      "text": "Это полая металлическая трубка длинной 1 фут весит 1 фунт. Вы можете действием ударить по ней и направить на предмет, находящийся в пределах 120 футов от вас, который можно открыть, например, дверь, люк или замок. Трубка издаёт чистый звук, и один замок или засов на предмете отпирается, за исключением тех случаев, когда звук не может достигнуть цели. <br>Если на предмете не остаётся запирающих элементов, то предмет открывается сам по себе. <br>Этот предмет может быть использован десять раз. <br>После десятого использования он трескается и становится непригодным для использования."
    }
  },
  {
    "en": {
      "name": "DECK OF ILLUSIONS",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This box contains a set of parchment cards. A full deck has 34 cards. A deck found as treasure is usually missing 1d20 - 1 cards. <br>The magic of the deck functions only if cards are drawn at random (you can use an altered deck of playing cards to simulate the deck). You can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you. <br>An illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature (as presented in the <br>Monster Manual), except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful DC 15 Intelligence (Investigation) check. The creature then appears translucent. <br>The illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card disappears, and that card can't be used again.<br> <table> <tr> <th>Playing Card </th> <th>Illusion </th> </tr> <tr> <td>Ace of hearts </td> <td><a href='https://tentaculus.ru/monsters/?q=Red_dragon'>Red dragon</a> </td> </tr> <tr> <td>King of hearts </td> <td><a href='https://tentaculus.ru/monsters/?q=Knight'>Knight</a> and four <a href='https://tentaculus.ru/monsters/?q=guards&challenge=1/8'>guards</a> </td> </tr> <tr> <td>Queen of hearts </td> <td><a href='https://tentaculus.ru/monsters/?q=Succubus/Incubus'>Succubus or incubus</a> </td> </tr> <tr> <td>Jack of hearts </td> <td><a href='https://tentaculus.ru/monsters/?q=Druid'>Druid</a> </td> </tr> <tr> <td>Ten of hearts </td> <td><a href='https://tentaculus.ru/monsters/?q=Cloud_giant'>Cloud giant</a> </td> </tr> <tr> <td>Nine of hearts </td> <td><a href='https://tentaculus.ru/monsters/?q=Ettin'>Ettin</a> </td> </tr> <tr> <td>Eight of hearts </td> <td><a href='https://tentaculus.ru/monsters/?q=Bugbear'>Bugbear</a> </td> </tr> <tr> <td>Two of hearts </td> <td><a href='https://tentaculus.ru/monsters/?q=Goblin'>Goblin</a> </td> </tr> <tr> <td>Ace of diamonds </td> <td><a href='https://tentaculus.ru/monsters/?q=Beholder'>Beholder</a> </td> </tr> <tr> <td>King of diamonds </td> <td><a href='https://tentaculus.ru/monsters/?q=Archmage'>Archmage</a> and mage apprentice </td> </tr> <tr> <td>Queen of diamonds </td> <td><a href='https://tentaculus.ru/monsters/?q=Night_hag'>Night hag</a> </td> </tr> <tr> <td>Jack of diamonds </td> <td><a href='https://tentaculus.ru/monsters/?q=Assassin'>Assassin</a> </td> </tr> <tr> <td>Ten of diamonds </td> <td><a href='https://tentaculus.ru/monsters/?q=Fire_giant'>Fire giant</a> </td> </tr> <tr> <td>Nine of diamonds </td> <td><a href='https://tentaculus.ru/monsters/?q=Ogre_mage'>Ogre mage</a> </td> </tr> <tr> <td>Eight of diamonds </td> <td><a href='https://tentaculus.ru/monsters/?q=Gnoll'>Gnoll</a> </td> </tr> <tr> <td>Two of diamonds </td> <td><a href='https://tentaculus.ru/monsters/?q=Kobold'>Kobold</a> </td> </tr> <tr> <td>Ace of spades </td> <td><a href='https://tentaculus.ru/monsters/?q=Lich'>Lich</a> </td> </tr> <tr> <td>King of spades </td> <td><a href='https://tentaculus.ru/monsters/?q=Priest'>Priest</a> and two <a href='https://tentaculus.ru/monsters/?q=acolyte'>acolytes</a> </td> </tr> <tr> <td>Queen of spades </td> <td><a href='https://tentaculus.ru/monsters/?q=Medusa'>Medusa</a> </td> </tr> <tr> <td>Jack of spades </td> <td><a href='https://tentaculus.ru/monsters/?q=Veteran'>Veteran</a> </td> </tr> <tr> <td>Ten of spades </td> <td><a href='https://tentaculus.ru/monsters/?q=Frost_giant'>Frost giant</a> </td> </tr> <tr> <td>Nine of spades </td> <td><a href='https://tentaculus.ru/monsters/?q=Troll'>Troll</a> </td> </tr> <tr> <td>Eight of spades </td> <td><a href='https://tentaculus.ru/monsters/?q=Hobgoblin'>Hobgoblin</a> </td> </tr> <tr> <td>Two of spades </td> <td><a href='https://tentaculus.ru/monsters/?q=Goblin'>Goblin</a> </td> </tr> <tr> <td>Ace of clubs </td> <td><a href='https://tentaculus.ru/monsters/?q=Iron golem'>Iron golem</a> </td> </tr> <tr> <td>King of clubs </td> <td><a href='https://tentaculus.ru/monsters/?q=Bandit_captain'>Bandit captain</a> and three <a href='https://tentaculus.ru/monsters/?q=bandit'>bandits</a> </td> </tr> <tr> <td>Queen of clubs </td> <td><a href='https://tentaculus.ru/monsters/?q=Erinyes'>Erinyes</a> </td> </tr> <tr> <td>Jack of clubs </td> <td><a href='https://tentaculus.ru/monsters/?q=Berserker'>Berserker</a> </td> </tr> <tr> <td>Ten of clubs </td> <td><a href='https://tentaculus.ru/monsters/?q=Hill_giant'>Hill giant</a> </td> </tr> <tr> <td>Nine of clubs </td> <td><a href='https://tentaculus.ru/monsters/?q=Ogre'>Ogre</a> </td> </tr> <tr> <td>Eight of clubs </td> <td><a href='https://tentaculus.ru/monsters/?q=Ore'>Ore</a> </td> </tr> <tr> <td>Two of clubs </td> <td><a href='https://tentaculus.ru/monsters/?q=Kobold'>Kobold</a> </td> </tr> <tr> <td>jokers (2) </td> <td>You (the deck's owner) </td> </tr> </table> ",
      "source": "DMG",
      "img": "DECK_OF_ILLUSIONS.jpg"
    },
    "ru": {
      "name": "Колода иллюзий",
      "text": "В этой коробке находится набор пергаментных карт. <br>В полной колоде 34 карты. В колоде, которую находят как сокровище, чаще всего не хватает 1к20 − 1 карт. <br>Магия колоды работает только если карту тянуть случайным образом (можете заранее приготовить модифицированную колоду игральных карт). Вы можете действием вынуть из колоды случайным образом выбранную карту и бросить её на расстояние до 30 футов. <br>Над брошенной картой появляется иллюзия одного или нескольких существ, присутствующая, пока не будет рассеяна. Иллюзорное существо выглядит реальным, у него соответствующий размер, и ведёт себя оно как настоящее существо (как описано в Бестиарии), за исключением того, что оно не может причинять вред. Если вы находитесь в пределах 120 футов от иллюзорного существа и видите его, вы можете действием переместить его с помощью магии в любое место в пределах 30 футов от карты. Любое физическое взаимодействие с иллюзорным существом даст понять, что это иллюзия, потому что предметы проходят сквозь него. Тот, кто действием осмотрит существо, распознает в нём иллюзию при успешной проверке Интеллекта (Анализ) со Сл 15. После этого существо выглядит полупрозрачным. <br>Иллюзия существует, пока карту не переместят или иллюзию не рассеют. Когда иллюзия оканчивается, изображение на карте исчезает, и её уже больше нельзя использовать. <table> <tr> <th>Карта </th> <th>Иллюзия </th> </tr> <tr> <td>Туз червей </td> <td><a href='https://tentaculus.ru/monsters/?q=Red_dragon'>Красный дракон</a> </td> </tr> <tr> <td>Король червей</td> <td><a href='https://tentaculus.ru/monsters/?q=Knight'>Рыцарь</a> и четыре  <a href='https://tentaculus.ru/monsters/?q=guards&challenge=1/8'>стражника</a> </td> </tr> <tr> <td>Дама червей</td> <td><a href='https://tentaculus.ru/monsters/?q=Succubus/Incubus'>Суккуб или инкуб</a> </td> </tr> <tr> <td>Валет червей </td> <td><a href='https://tentaculus.ru/monsters/?q=Druid'>Друид</a> </td> </tr> <tr> <td>10 червей </td> <td><a href='https://tentaculus.ru/monsters/?q=Cloud_giant'>Облачный великан</a> </td> </tr> <tr> <td>9 червей</td> <td><a href='https://tentaculus.ru/monsters/?q=Ettin'>Эттин</a> </td> </tr> <tr> <td>8 червей </td> <td><a href='https://tentaculus.ru/monsters/?q=Bugbear'>Багбир</a> </td> </tr> <tr> <td>2 червей</td> <td><a href='https://tentaculus.ru/monsters/?q=Goblin'>Гоблин</a> </td> </tr> <tr> <td>Туз бубен</td> <td><a href='https://tentaculus.ru/monsters/?q=Beholder'>Бехолдер</a> </td> </tr> <tr> <td>Король бубен </td> <td><a href='https://tentaculus.ru/monsters/?q=Archmage'>Архимаг</a> и ученик мага </td> </tr> <tr> <td>Дама бубен </td> <td><a href='https://tentaculus.ru/monsters/?q=Night_hag'>Ночная карга</a> </td> </tr> <tr> <td>Валет бубен </td> <td><a href='https://tentaculus.ru/monsters/?q=Assassin'>Ассасин</a> </td> </tr> <tr> <td>10 бубен </td> <td><a href='https://tentaculus.ru/monsters/?q=Fire_giant'>Огненный великан</a> </td> </tr> <tr> <td>9 бубен </td> <td><a href='https://tentaculus.ru/monsters/?q=Ogre_mage'>Огр маг</a> </td> </tr> <tr> <td>8 бубен </td> <td><a href='https://tentaculus.ru/monsters/?q=Gnoll'>Гнолл</a> </td> </tr> <tr> <td>2 бубен </td> <td><a href='https://tentaculus.ru/monsters/?q=Kobold'>Кобольд</a> </td> </tr> <tr> <td>Туз пик </td> <td><a href='https://tentaculus.ru/monsters/?q=Lich'>Лич</a> </td> </tr> <tr> <td>Король пик</td> <td><a href='https://tentaculus.ru/monsters/?q=Priest'>Священник</a> и два <a href='https://tentaculus.ru/monsters/?q=acolyte'>послушника</a> </td> </tr> <tr> <td>Дама пик</td> <td><a href='https://tentaculus.ru/monsters/?q=Medusa'>Медуза</a> </td> </tr> <tr> <td>Валет пик </td> <td><a href='https://tentaculus.ru/monsters/?q=Veteran'>Ветеран</a> </td> </tr> <tr> <td>10 пик </td> <td><a href='https://tentaculus.ru/monsters/?q=Frost_giant'>Ледяной великан</a> </td> </tr> <tr> <td>9 пик </td> <td><a href='https://tentaculus.ru/monsters/?q=Troll'>Тролль</a> </td> </tr> <tr> <td>8 пик </td> <td><a href='https://tentaculus.ru/monsters/?q=Hobgoblin'>Хобгоблин</a> </td> </tr> <tr> <td>2 пик </td> <td><a href='https://tentaculus.ru/monsters/?q=Goblin'>Гоблин</a> </td> </tr> <tr> <td>Туз треф </td> <td><a href='https://tentaculus.ru/monsters/?q=Iron golem'>Железный голем</a> </td> </tr> <tr> <td>Король треф </td> <td><a href='https://tentaculus.ru/monsters/?q=Bandit_captain'>Капитан разбойников</a> и три <a href='https://tentaculus.ru/monsters/?q=bandit'>бандита</a> </td> </tr> <tr> <td>Дама треф</td> <td><a href='https://tentaculus.ru/monsters/?q=Erinyes'>Эриния</a> </td> </tr> <tr> <td>Валет треф </td> <td><a href='https://tentaculus.ru/monsters/?q=Berserker'>Берсерк</a> </td> </tr> <tr> <td>10 треф </td> <td><a href='https://tentaculus.ru/monsters/?q=Hill_giant'>Холмовой великан</a> </td> </tr> <tr> <td>9 треф </td> <td><a href='https://tentaculus.ru/monsters/?q=Ogre'>Огр</a> </td> </tr> <tr> <td>8 треф </td> <td><a href='https://tentaculus.ru/monsters/?q=Ore'>Орк</a> </td> </tr> <tr> <td>2 треф </td> <td><a href='https://tentaculus.ru/monsters/?q=Kobold'>Кобольд</a> </td> </tr> <tr> <td>Джокеры (2) </td> <td>Вы (владелец колоды) </td> </tr> </table>"
    }
  },
  {
    "en": {
      "name": "DECK OF MANY THINGS",
      "type": "Wondrous item",
      "rarity": 5,
      "text": "Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two. <br>Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. <br>If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once. <br>Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.<br><table><tr><td>Playing Card</td><td>Card</td></tr><tr><td>Ace of diamonds</td><td>Vizier*</td></tr><tr><td>King of diamonds</td><td>Sun</td></tr><tr><td>Queen of diamonds</td><td>Moon</td></tr><tr><td>jack of diamonds</td><td>Star</td></tr><tr><td>Two of diamonds</td><td>Comet*</td></tr><tr><td>Ace of hearts</td><td>The Fates*</td></tr><tr><td>King of hearts</td><td>Throne</td></tr><tr><td>Queen of hearts</td><td>Key</td></tr><tr><td>jack of hearts</td><td>Knight</td></tr><tr><td>Two of hearts</td><td>Gem*</td></tr><tr><td>Ace of clubs</td><td>Talons*</td></tr><tr><td>King of clubs</td><td>The Void</td></tr><tr><td>Queen of clubs</td><td>Flames</td></tr><tr><td>jack of clubs</td><td>Skull</td></tr><tr><td>Two of clubs</td><td>Idiot*</td></tr><tr><td>Ace of spades</td><td>Donjon*</td></tr><tr><td>King of spades</td><td>Ruin</td></tr><tr><td>Queen of spades</td><td>Euryale</td></tr><tr><td>jack of spades</td><td>Rogue</td></tr><tr><td>Two of spades</td><td>Balance*</td></tr><tr><td>joker (with TM)</td><td>Fool*</td></tr><tr><td>joker (without TM)</td><td>jester</td></tr></table> <br><b>Balance.</b> Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you. <br><b>Comet.</b> If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect. <br><b>Donjon.</b> You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a <a href='https://tentaculus.ru/spells/#q=wish'>wish</a> spell can reveal the location of your prison. You draw no more cards. <br><b>Euryale.</b> The card's medusa-like visage curses you. <br>You take a -2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse. <br><b>The Fates.</b> Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die. <br><b>Flames.</b> A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies. <br><b>Fool.</b> You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level. <br><b>Gem.</b> Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet. <br><b>Idiot.</b> Permanently reduce your Intelligence by ld4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws. <br><b>Jester.</b> You gain 10,000 XP, or you can draw two additional cards beyond your declared draws. <br><b>Key.</b> A rare or rarer magic weapon with which you are proficient appears in your hands. The DM chooses the weapon. <br><b>Knight.</b> You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character. <br><b>Moon.</b> You are granted the ability to cast the wish spell 1d3 times. <br><b>Rogue.</b> A nonplayer character of the DM's choice becomes hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a wish spell or divine intervention can end the NPC's hostility toward you. <br><b>Ruin.</b> All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears. <br><b>Skull.</b> You summon an avatar of death-a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the DM's choice within 10 feet of you and attacks yo~, warning all others that you must win the battle alone. <br>The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life. <br><b>Star.</b> Increase one of your ability scores by 2. The score can exceed 20 but can't exceed 24. <br><b>Sun.</b> You gain 50,000 XP, and a wondrous item (which the DM determines randomly) appears in your hands. <br><b>Talons.</b> Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do vanish. <br><b>Throne.</b> You gain proficiency in the Persuasion skill, and you double your proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of monsters, which you must clear out before you can claim the keep as. yours. <br><b>Vizier.</b> At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. <br>Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it. <br><b>The Void.</b> This black card spells disaster. Your soul is drawn from your body and contained in an object in a place of the DM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is incapacitated. A wish spell can't restore your soul, but the spell reveals the location of the object that holds it. You draw no more cards.",
      "source": "DMG",
      "img": "DECK_OF_MANY_THINGS.jpg"
    },
    "ru": {
      "name": "Колода многих вещей",
      "text": "Эта колода, находящаяся в коробке или мешочке, состоит из карт, сделанных из слоновой кости или пергамента. Большинство (75%) этих колод содержат только тринадцать карт, но остальные включают двадцать две. <br>Перед тем, как тянуть карты, вы должны объявить, сколько собираетесь брать, а затем тяните их по одной (можете использовать модифицированную колоду обычных игральных карт). Карты, взятые сверх названного числа, не будут иметь эффекта. Как только вы вытянули карту, её магия начинает действовать. Вы должны тянуть следующую карту не позднее, чем через час после предыдущей. Если вы не вытянули названное число карт, оставшиеся сами вылетают из колоды и вступают в силу одновременно. <br>Как только карта вытягивается, она исчезает. Если это не Дурак, и не Шут, карта вновь появляется в колоде, что позволяет вытянуть её повторно.<br><table><tr><td>Игральная карта</td><td>Карта</td></tr><tr><td>Туз бубен</td><td>Визирь*</td></tr><tr><td>Король бубен</td><td>Солнце</td></tr><tr><td>Дама бубен</td><td>Луна</td></tr><tr><td>Валет бубен</td><td>Звезда</td></tr><tr><td>Двойка бубен</td><td>Комета*</td></tr><tr><td>Туз червей</td><td>Судьба*</td></tr><tr><td>Король червей</td><td>Трон</td></tr><tr><td>Дама червей</td><td>Ключ</td></tr><tr><td>Валет червей</td><td>Рыцарь</td></tr><tr><td>Двойка червей</td><td>Драгоценность*</td></tr><tr><td>Туз треф</td><td>Когти*</td></tr><tr><td>Король треф</td><td>Пустота</td></tr><tr><td>Дама треф</td><td>Огонь</td></tr><tr><td>Валет треф</td><td>Череп</td></tr><tr><td>Двойка треф</td><td>Юродивый*</td></tr><tr><td>Туз пик</td><td>Тюрьма*</td></tr><tr><td>Король пик</td><td>Руины</td></tr><tr><td>Дама пик</td><td>Эвриала</td></tr><tr><td>Валет пик</td><td>Плут</td></tr><tr><td>Двойка пик</td><td>Равновесие*</td></tr><tr><td>Джокер (со знаком)</td><td>Дурак*</td></tr><tr><td>Джокер (без знака)</td><td>Шут</td></tr></table><br><br>* Только в колоде из 22 карт <br><b>Визирь.</b> В любой момент в течение года, после того как вы вытянули эту карту, вы можете заняться медитацией и задать вопрос, чтобы получить мысленный правдивый ответ. Кроме простой информации ответ может помочь вам решить головоломку или другую дилемму. Другими словами, приходит не только знание, но и мудрость, позволяющая этим знанием распорядиться. <br><b>Драгоценность.</b> Двадцать пять ювелирных украшений стоимостью 2000 зм каждое или пятьдесят драгоценных камней стоимостью 1000 зм каждый появляются у ваших ног. <br><b>Дурак.</b> Вы теряете 10000 опыта, сбрасываете эту карту и вытягиваете из колоды новую, считая их вместе за одну в объявленном вами количестве вытягиваемых карт. Если потеря этого опыта заставила бы вас потерять уровень, вы вместо этого теряете такое количество, которое оставляет вас только с достигнутым уровнем. <br><b>Звезда.</b> Увеличьте одну из ваших характеристик на 2. Новое значение может превысить 20, но не должно превышать 24. <br><b>Ключ.</b> В ваших руках появляется волшебное оружие с редкостью как минимум «редкое», навыком владения которым вы обладаете (по выбору Мастера). <br><b>Когти.</b> Все магические предметы, которые вы несёте и носите, распадаются. Ваши артефакты не уничтожаются, но исчезают. <br><b>Комета.</b> Если вы в одиночку побеждаете следующее встретившееся вам враждебное чудовище или группу чудовищ, вы получаете достаточно опыта, чтобы получить следующий уровень. В противном случае эта карта не оказывает никакого эффекта. <br><b>Луна.</b> Вы получаете возможность 1к3 раза наложить заклинание <a href='https://tentaculus.ru/spells/#q=wish'>исполнение желаний</a>. <br><b>Огонь.</b> Могущественный дьявол становится вашим врагом. Он стремится вас уничтожить, смакуя ваши страдания перед попыткой убить вас. Эта вражда длиться до вашей или его гибели. <br><b>Плут.</b> ПМ по выбору Мастера становится враждебным по отношению к вам. Его личность вам не известна до тех пор, пока он сам или кто-либо ещё не проявит это. Остановить эту вражду сможет как минимум заклинание исполнение желаний или божественное вмешательство. <br><b>Пустота.</b> Эта чёрная карта предсказывает катастрофу. Ваша душа вырывается из тела и заключается в некоем предмете в месте, выбранном Мастером. <br>Это место охраняет сильное создание или даже группа таких созданий. Пока ваша душа похищена, ваше тело недееспособно. Заклинание исполнение желаний не может вернуть вашу душу, но раскрывает местонахождение предмета, вмещающего вашу душу. Вы больше не тянете карты. <br><b>Равновесие.</b> Ваше сознание претерпевает мучительные изменения, заставляя ваше мировоззрение измениться. Законное становится хаотичным, доброе становится злым, и наоборот. Если у вас истинно нейтральное мировоззрение или у вас нет мировоззрения, эта карта не оказывает никакого эффекта. <br><b>Руины.</b> Вы теряете все богатства, которые вы носите или которыми владеете, кроме волшебных предметов. Движимое имущество исчезает. Бизнес, строения и земли, которыми вы владели, пропадают таким способом, который оказывает наименьшее влияние на действительность. Любые документы, подтверждающие ваши права собственности на утерянное имущество, тоже исчезают. <br><b>Рыцарь.</b> Вы получаете на службу воина 4 уровня, который появляется в пределах 30 футов от вас (по вашему выбору). Воин той же расы, что и вы, и будет верно служить вам до смерти, полагая, что судьба привела его к вам. Этим персонажем управляете вы. <br><b>Солнце.</b> Вы получаете 50000 опыта и в ваших руках появляется чудесный предмет (на выбор Мастера). <br><b>Судьба.</b> Ткань реальности разворачивается и складывается вновь, позволяя вам избежать или стереть один случай, как будто его никогда не было. Вы можете использовать магию карты сразу, как только вытянете её, или в любое другое время, пока не умрёте. <br><b>Трон.</b> Вы получаете владение навыком Убеждение, и удваиваете бонус мастерства при проверках этого навыка. Кроме того, вы получаете право владения небольшой цитаделью где-то в мире. Однако сейчас эта крепость занята чудовищами, которых предстоит уничтожить, чтобы объявить цитадель своей. <br><b>Тюрьма.</b> Вы исчезаете и оказываетесь в состоянии приостановленной жизнедеятельности в межпространственной сфере. Все вещи, которые были у вас или на вас, остаются в том месте, где вы были до исчезновения. Вы остаётесь заключёнными в эту тюрьму до тех пор, пока не будете найдены и освобождены. Вы не можете быть обнаружены с помощью школы Прорицания, но заклинание исполнение желаний способно определить ваше местонахождение. Вы больше не тянете карты. <br><b>Череп.</b> Вы вызываете образ смерти — призрачного гуманоидного скелета, одетого в изодранную чёрную одежду и вооружённого призрачной косой. Он появляется в пределах 10 футов от вас (в месте по выбору <br>Мастера) и нападает на вас, предупреждая всех, что вы должны выиграть это сражение в одиночку. Образ смерти сражается до тех пор, пока вы не погибнете, или его хиты не опустятся до 0. После этого он исчезает. Если кто-нибудь попытается помочь вам, он вызовет этим собственный образ смерти. Существо, убитое образом смерти, не может быть возвращено к жизни. <br><b>Шут.</b> Вы получаете 10000 опыта или можете вытянуть две карты в дополнение к заявленному ранее количеству карт. <br><b>Эвриала.</b> Напоминающий медузу образ на карте проклинает вас. Вы получаете штраф −2 к спасброскам, пока на вас лежит это проклятье. Только бог или магия карты Судьба может закончить действие этого проклятья. <br><b>Юродивый.</b> Уменьшите ваш Интеллект на 1к4 + 1 (но не ниже 1). Вы можете вытянуть дополнительно ещё одну карту сверх заявленного ранее количества."
    }
  },
  {
    "en": {
      "name": "DEFENDER",
      "type": "Weapon",
      "typeAdditions": "(any sword)",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "You gain a +3 bonus to attack and damage rolls made with this magic weapon. <br>The first time you attack with the sword on each of your turns, you can transfer some or all of the sword's bonus to your Armor Class, instead of using the bonus on any attacks that turn. For example, you could reduce the bonus to your attack and damage rolls to +1 and gain a +2 bonus to AC. The adjusted bonuses remain in effect ~til the start of your next turn, although you must hold e sword to gain a bonus to AC from it.",
      "source": "DMG",
      "img": "DEFENDER.jpg"
    },
    "ru": {
      "name": "Защитник",
      "text": "Вы получаете бонус +3 к броскам атаки и урона этим магическим оружием. <br>В первый раз в каждом своём ходу, когда вы атакуете этим оружием, вы можете перевести весь бонус или его часть в бонус к КД, а не броскам атаки и урона. Например, вы можете уменьшить бонус к броскам атаки и урона до +1, но получить +2 к КД. Изменённые бонусы действуют до начала вашего следующего хода, но вы должны держать этот меч, чтобы получать от него бонус к КД.",
      "typeAdditions": "(любой меч)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "DEMON ARMOR",
      "type": "Armor",
      "typeAdditions": "(plate)",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal. In addition, the armor's clawed gauntlets turn unarmed strikes with your hands into magic weapons that deal slashing damage, with a +1 bonus to attack rolls and damage lis and a damage die of 1d8. <br><b>Curse.</b> Once you don this cursed armor, you can't doff it unless you are targeted by the remove curse spell or imilar magic. While wearing the armor, you have disadvantage on attack rolls against demons and on saving throws against their spells and special abilities.",
      "source": "DMG",
      "img": "DEMON_ARMOR.jpg"
    },
    "ru": {
      "name": "Демонический доспех",
      "text": "Пока вы носите этот доспех, вы получаете бонус +1 к КД, можете говорить на языке Бездны и понимаете этот язык. Кроме того, латные рукавицы с шипами этого доспеха делают ваши безоружные атаки руками магическим оружием, причиняющим рубящий урон с бонусом +1 к броскам атаки и урона и костью урона 1к8. <br><b>Проклятье.</b> Надев этот проклятый доспех, вы не можете его снять, пока не станете целью заклинания снятие проклятья или подобной магии. Нося этот доспех, вы совершаете с помехой броски атаки по демонам и спасброски от заклинаний и особых умений демонов.",
      "typeAdditions": "(латы)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "DRAGON SCALE MAIL",
      "type": "Armor",
      "typeAdditions": "(scale mail)",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off : a les and gift them to humanoids. Other times, hunters arefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. <br>While wearing this armor, you gain a +1 bonus to <br>C, you have advantage on saving throws against the <br>Frightful Presence and breath weapons of dragons, and you have resistance to one damage type that is etermined by the kind of dragon that provided the : a les (see the table). <br>Additionally, you can focus your senses as an action '0 magically discern the distance and direction to the losest dragon within 30 miles of you that is of the same _·pe as the armor. This special action can't be used gain until the next dawn.<br><table><tr><th>Dragon</th><th>Resistance</th><th>Dragon</th><th>Resistance</th></tr><tr><td>Black</td><td>Acid</td><td>Gold</td><td>Fire</td></tr><tr><td>Blue</td><td>Lightning</td><td>Green</td><td>Poison</td></tr><tr><td>Brass</td><td>Fire</td><td>Red</td><td>Fire</td></tr><tr><td>Bronze</td><td>Lightning</td><td>Silver</td><td>Cold</td></tr><tr><td>Copper</td><td>Acid</td><td>White</td><td>Cold</td></tr></table>",
      "source": "DMG",
      "img": "DRAGON_SCALE_MAIL.jpg"
    },
    "ru": {
      "name": "Доспех из драконьей чешуи",
      "text": "Этот доспех изготавливается из чешуи определённого дракона. Иногда драконы сами собирают сброшенные чешуйки и дарят их гуманоидам. В других случаях успешные охотники тщательно выделывают и хранят шкуры убитых драконов. В любом случае, доспехи из чешуи драконов высоко ценятся. <br>Пока вы носите этот доспех, вы получаете бонус +1 к КД, совершаете с преимуществом спасброски от Ужасающей внешности и оружия дыхания драконов, а также обладаете сопротивлением к одному виду урона, зависящему от вида дракона, чья чешуя была использована для изготовления доспеха (смотрите таблицу). <br>Кроме того, вы можете действием сосредоточиться, чтобы с помощью магии определить расстояние и направление до ближайшего дракона в пределах 30 миль, вид которого совпадает с видом дракона, чья чешуя была использована для изготовления доспеха. <br>Это особое действие нельзя повторно совершать до следующего рассвета. <br><table><tr><td>Дракон</td><td>Сопротивление</td></tr><tr><td>Белый</td><td>Холод</td></tr><tr><td>Бронзовый</td><td>Электричество</td></tr><tr><td>Зелёный</td><td>Яд</td></tr><tr><td>Золотой</td><td>Огонь</td></tr><tr><td>Красный</td><td>Огонь</td></tr><tr><td>Латунный</td><td>Огонь</td></tr><tr><td>Медный</td><td>Кислота</td></tr><tr><td>Серебряный</td><td>Холод</td></tr><tr><td>Синий</td><td>Электричество</td></tr><tr><td>Чёрный</td><td>Кислота</td></tr></table>",
      "typeAdditions": "(чешуйчатый)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "DRAGON SLAYER",
      "type": "Weapon",
      "typeAdditions": "(any sword)",
      "rarity": 3,
      "text": "You gain a +1 bonus to attack and damage rolls made with this magic weapon. <br>When you hit a dragon with this weapon, the dragon takes an extra 3d6 damage of the weapon's type. For the purpose of this weapon, \"dragon\" refers to any creature with the dragon type, including dragon turtles and wyverns.",
      "source": "DMG",
      "img": "DRAGON_SLAYER.jpg"
    },
    "ru": {
      "name": "Убийца драконов",
      "text": "Вы получаете бонус +1 к броскам атаки и урона, совершённым этим магическим оружием. <br>Если вы попадаете этим оружием по дракону, он получит дополнительный урон 3к6, соответствующий виду оружия. Для этого оружия «дракон» означает любое существо с видом «дракон», включая виверн и дракочерепах.",
      "typeAdditions": "(любой меч)"
    }
  },
  {
    "en": {
      "name": "DRIFTGLOBE",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the <a href='https://tentaculus.ru/spells/#q=light'>light</a> or <a href='https://tentaculus.ru/spells/#q=daylight'>daylight spell</a>. Once used, the daylight effect can't be used again until the next dawn. <br>You can speak another command word as an action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you mpve more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out.",
      "source": "DMG",
      "img": "DRIFTGLOBE.jpg"
    },
    "ru": {
      "name": "Парящая сфера",
      "text": "Эта небольшая сфера толстого стекла весит 1 фунт. <br>Находясь в пределах 60 футов от неё, вы можете произнести командное слово и заставить сферу излучать свет, как, если бы было наложено заклинание <a href='https://tentaculus.ru/spells/#q=light'>свет</a> или <a href='https://tentaculus.ru/spells/#q=daylight'>дневной свет</a>. Эффект, дублирующий заклинание дневной свет, нельзя использовать повторно до следующего рассвета. <br>Вы можете действием произнести второе командное слово, заставив светящуюся сферу подняться в воздух и парить на высоте не более 5 футов от земли. <br>Сфера может парить пока вы или другое существо не схватите её. Если вы передвигаетесь более чем на 60 футов от парящей сферы, она следует за вами, оставаясь в пределах 60 футов от вас, выбирая при этом кратчайший маршрут. Если что-либо препятствует перемещению сферы, она мягко опускается на землю, становясь неактивной, и её свет тухнет."
    }
  },
  {
    "en": {
      "name": "DUST OF DISAPPEARANCE",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "Found in a small packet, this powder resembles very fine sand. There is enough of it for one use. When you use an action to throw the dust into the air, you and each creature and object within 10 feet of you become invisible for 2d4 minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. If a creature affected by the dust attacks or casts a spell, the invisibility ends for that creature.",
      "source": "DMG",
      "img": "DUST_OF_DISAPPEARANCE.jpg"
    },
    "ru": {
      "name": "Порошок исчезновения",
      "text": "Найденный в маленьком мешочке, этот порошок выглядит как очень мелкий песок, но его количества будет достаточно для разового применения. Если вы действием развеете порошок в воздухе вокруг себя, то вы и все существа и предметы в пределах 10 футов от вас становитесь невидимыми на 2к4 минуты. Эта продолжительность одинакова для всех существ и предметов. Как только магический эффект начинает действовать, порошок исчезает. Если существо, находящееся под действием порошка, совершает атаку или накладывает заклинание, невидимость для него заканчивается."
    }
  },
  {
    "en": {
      "name": "DUST OF DRYNESS",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This small packet contains 1d6 + 4 pinches of dust. You can use an action to sprinkle a pinch of it over water. <br>The dust turns a cube of water 15 feet on a side into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet's weight is negligible. <br>Someone can use an action to smash the pellet against a hard surface, causing the pellet to shatter and release the water the dust absorbed. Doing so ends that pellet's magic. <br>An elemental composed mostly of water that is exposed to a pinch of the dust must make a DC 13 <br>Constitution saving throw, taking 10d6 necrotic damage on a failed save, or half as much damage on a successful one.",
      "source": "DMG",
      "img": "DUST_OF_DRYNESS.jpg"
    },
    "ru": {
      "name": "Порошок сухости",
      "text": "Этот небольшой мешочек содержит 1к6 + 4 щепоток порошка. Вы можете действием распылить щепотку этого порошка над водой. Порошок превращает куб воды с длиной ребра 15 футов в крошечную гранулу, которая плавает на поверхности воды, где был просыпан порошок, или лежит рядом с ней. Вес гранулы незначителен. <br>Впоследствии кто угодно может действием разбить гранулу об твёрдую поверхность, в результате чего она разрушается и высвобождает воду, заключённую в ней, после чего действие магии заканчивается. <br>Элементали, состоящие преимущественно из воды, и не защищённые от попадания этого порошка, должны совершить спасбросок Телосложения со Сл 13, получая урон некротической энергией 10к6 при провале или половину этого урона при успехе."
    }
  },
  {
    "en": {
      "name": "DUST OF SNEEZING AND CHOKING",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "Found in a small container, this powder resembles very fine sand. It appears to be dust of disappearance, and an <a href='https://tentaculus.ru/spells/#q=identify'>identify</a> spell reveals it to be such. There is enough of it for one use. <br>When you use an action to throw a handful of the dust into the air, you and each creature that needs to breathe within 30 feet of you must succeed on a DC 15 <br>Constitution saving throw or become unable to breathe, while sneezing uncontrollably. A creature affected in this way is incapacitated and suffocating. As long as it · conscious, a creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a uccess. The <a href='https://tentaculus.ru/spells/#q=lesser_restoration'>lesser restoration</a> spell can also end the effect on a creature.",
      "source": "DMG",
      "img": "DUST_OF_SNEEZING_AND_CHOKING.jpg"
    },
    "ru": {
      "name": "Порошок чихания и удушья",
      "text": "Этот порошок, хранящийся в маленьком контейнере, напоминает очень мелкий песок. Он похож на порошок исчезновения, и даже заклинание <a href='https://tentaculus.ru/spells/#q=identify'>опознание</a> показывает, что он им является. Его количества достаточно для одного применения. <br>Если вы действием бросаете горсть этого порошка в воздух, вы и все дышащие существа в пределах 30 футов от вас должны преуспеть в спасброске Телосложения со Сл 15, иначе они не смогут дышать и начнут безудержно чихать. Существо, попавшее под действие этого порошка, становится недееспособным и начинает задыхаться. Пока существо находится в сознании, оно может повторять спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Заклинание <a href='https://tentaculus.ru/spells/#q=lesser_restoration'>малое восстановление</a> тоже оканчивает этот эффект на существе."
    }
  },
  {
    "en": {
      "name": "DWARVEN PLATE",
      "type": "Armor",
      "typeAdditions": "(plate)",
      "rarity": 4,
      "text": "Vhile wearing this armor, you gain a +2 bonus to AC. In addition, if an effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 10 feet.",
      "source": "DMG",
      "img": "DWARVEN_PLATE.jpg"
    },
    "ru": {
      "name": "Латы дварфов",
      "text": "Пока вы носите этот доспех, вы получаете бонус +2 к <br>КД. Кроме того, если некий эффект перемещает вас против вашей воли, а вы стоите на твёрдой поверхности, вы можете реакцией уменьшит расстояние, на которое вас переместят, на расстояние до 10 футов.",
      "typeAdditions": "(латы)"
    }
  },
  {
    "en": {
      "name": "DWARVEN THROWER",
      "type": "Weapon",
      "typeAdditions": "(warhammer)",
      "rarity": 4,
      "attunement": "(requires attunement by a dwarf)",
      "text": "You gain a +3 bonus to attack and damage rolls made ·ith this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. .\\'hen you hit with a ranged attack using this weapon, . deals an extra ld8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon ies back to your hand.",
      "source": "DMG",
      "img": "DWARVEN_THROWER.jpg"
    },
    "ru": {
      "name": "Дварфский метатель",
      "attunement": "(требует настройки дварфом)",
      "text": "Вы получаете бонус +3 к броскам атаки и урона, совершённым этим магическим оружием. Оно обладает свойством «метательное» с нормальной дистанцией 20 футов и максимальной дистанцией 60 футов. Если вы попадёте дальнобойной атакой этим оружием, оно причиняет дополнительный урон 1к8 или, если цель — великан, то 2к8. Сразу же после атаки оружие возвращается в вашу руку.",
      "typeAdditions": "(боевой молот)"
    }
  },
  {
    "en": {
      "name": "EFREETI BOTTLE",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "This painted brass bottle weighs 1 pound. When youuse an action to remove the stopper, a cloud of thicksmoke flows out of the bottle. At the end of your turn,die smoke disappears with a flash of harmless fire,and an efreeti appears in an unoccupied space within30 feet of you. See the Monster Manual for the efreeti'sstatistics.<br>The first time the bottle is opened, the DM rolls to determine what happens. <br><table><tr><th>dlOO</th><th>Effect</th></tr><tr><td>01-10</td><td>The efreeti attacks you. After fighting for 5rounds, the efreeti disappears , and the bottleloses its magic.</td></tr><tr><td>ll-90</td><td>The efreeti serves you for 1 hour, doing as youcommand. Then the efreeti returns to the bottle,and a new stopper contains it. The stopper can'tbe removed for 24 hours . The next two times thebottle is opened , the same effect occurs. If thebottle is opened a fourth time , the efreeti escapesand disappears, and the bottle loses its magic.</td></tr><tr><td>91-00</td><td>The efreeti can cast the <a href='https://tentaculus.ru/spells/#q=wish'>wish</a> spell three times foryou. It disappears when it grants the final wish orafter 1 hour, and the bottle loses its magic.</td></tr></table>",
      "source": "DMG",
      "img": "EFREETI_BOTTLE.jpg"
    },
    "ru": {
      "name": "Бутылка с ифритом",
      "text": "Эта раскрашенная латунная бутылка весит 1 фунт. Если вы действием вынете пробку, из бутылки вырвется густое облако дыма. В конце вашего хода дым исчезает во вспышке безвредного огня, и в свободном пространстве в пределах 30 футов от вас появляется ифрит. Характеристики ифрита смотрите в Бестиарии.<br>Когда бутылку открывают в первый раз, Мастер определяет, что произойдёт дальше:<br><table><tr><td>к100</td><td>Эффект</td></tr><tr><td>01–10</td><td>Ифрит нападёт на вас. Через 5 раундов сражения ифрит исчезает, а бутылка теряет магию.</td></tr><tr><td>11–90</td><td>Ифрит служит вам 1 час, выполняя все ваши команды. После этого ифрит возвращается в бутылку, которая закрывается новой пробкой. Пробку нельзя вынуть в течение 24 часов. В последующие два открытия будет происходить то же самое. Если бутылку откроют в четвёртый раз, ифрит сбежит и исчезнет, а бутылка потеряет магию.</td></tr><tr><td>91–00</td><td>Ифрит может три раза наложить для вас заклинание <a href='https://tentaculus.ru/spells/#q=wish'>исполнение желаний</a>. Он исчезает после того как исполнит последнее желание или спустя 1 час, а бутылка после этого теряет магию.</td></tr></table>"
    }
  },
  {
    "en": {
      "name": "EFREETI CHAIN",
      "type": "Armor",
      "typeAdditions": "(chain mail)",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "While wearing this armor, you gain a +3 bonus to AC, you are immune to fire damage, and you can understand and speak Primordial. In addition, you can stand on and walk across molten rock as if it were solid ground .",
      "source": "DMG",
      "img": "EFREETI_CHAIN.jpg"
    },
    "ru": {
      "name": "Кольчуга ифритов",
      "text": "Пока вы носите этот доспех, вы получаете бонус +3 к <br>КД и иммунитет к урону огнём, а также можете говорить на Первичном и понимаете его. Кроме того, вы можете стоять на расплавленном камне и ходить по нему, как если бы он был твёрдой поверхностью.",
      "typeAdditions": "(кольчуга)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ELEMENTAL GEM",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This gem contains a mote of elemental energy. When you use an action to break the gem, an elemental is summoned as if you had cast the <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>conjure elemental</a> spell, and the gem's magic is lost. The type of gem determines the elemental summoned by the spell. <br><table><tr><td>Gem</td><td>Summoned Elemental</td></tr><tr><td>Blue sapphire</td><td><a href='https://tentaculus.ru/monsters/#q=Air_elemental'>Air elemental</a></td></tr><tr><td>Yellow diamond</td><td><a href='https://tentaculus.ru/monsters/#q=Earth_elemental'>Earth elemental</a></td></tr><tr><td>Red corundum</td><td><a href='https://tentaculus.ru/monsters/#q=Fire_elemental'>Fire elemental</a></td></tr><tr><td>Emerald</td><td><a href='https://tentaculus.ru/monsters/#q=Water_elemental'>Water elemental</a></td></tr></table>",
      "source": "DMG",
      "img": "ELEMENTAL_GEM.jpg"
    },
    "ru": {
      "name": "Камень элементаля",
      "text": "Этот камень содержит частичку стихийной энергии. <br>Если вы действием разбиваете камень, призывается элементаль, как если бы вы наложили заклинание <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>призыв элементаля</a>, и магия, заключённая в камне, исчезает. Вид камня определяет вид призываемого элементаля. <br><table><tr><td>Камень</td><td>Призываемый элементаль</td></tr><tr><td>Изумруд</td><td><a href='https://tentaculus.ru/monsters/#q=Water_elemental'>Элементаль воды</a></td></tr><tr><td>Синий сапфир</td><td><a href='https://tentaculus.ru/monsters/#q=Air_elemental'>Элементаль воздуха</a></td></tr><tr><td>Жёлтый бриллиант</td><td><a href='https://tentaculus.ru/monsters/#q=Earth_elemental'>Элементаль земли</a></td></tr><tr><td>Красный корунд</td><td><a href='https://tentaculus.ru/monsters/#q=Fire_elemental'>Элементаль огня</a></td></tr></table>"
    }
  },
  {
    "en": {
      "name": "ELIXIR OF HEALTH",
      "type": "Potion",
      "rarity": 3,
      "text": "When you drink this potion, it cures any disease afflicting you, and it removes the blinded, deafened, paralyzed, and poisoned conditions. The clear red liquid has tiny bubbles of light in it.",
      "source": "DMG",
      "img": "ELIXIR_OF_HEALTH.jpg"
    },
    "ru": {
      "name": "Эликсир здоровья",
      "text": "Если вы выпьете это зелье, оно вылечит вас от всех болезней, а также устраняет состояния «оглушён», «ослеплён», «отравлен» и «парализован». Это прозрачная красная жидкость с пузырьками света в ней."
    }
  },
  {
    "en": {
      "name": "ELVEN CHAIN",
      "type": "Armor",
      "typeAdditions": "(chain shirt)",
      "rarity": 3,
      "text": "You gain a +1 bonus to AC while you wear this armor. <br>You are considered proficient with this armor even if you lack proficiency with medium armor.",
      "source": "DMG",
      "img": "ELVEN_CHAIN.jpg"
    },
    "ru": {
      "name": "Эльфийская кольчуга",
      "text": "Вы получаете бонус +1 к КД, когда носите этот доспех. Считается, что вы владеете навыком ношения этого доспеха, даже если не владеете навыком ношения средних доспехов.",
      "typeAdditions": "(кольчуга)"
    }
  },
  {
    "en": {
      "name": "EVERSMOKING BOTTLE",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud's area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet. <br>The cloud persists as long as the bottle is open. <br>Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round.",
      "source": "DMG",
      "img": "EVERSMOKING_BOTTLE.jpg"
    },
    "ru": {
      "name": "Вечнодымящаяся бутылка",
      "text": "Из этой закупоренной свинцовой пробкой латунной бутылки, весящей 1 фунт, постоянно сочится тонкая струйка дыма. Если вы действием вынете пробку, из бутылки вырвется облако густого дыма с радиусом 60 футов. Пространство в облаке считается сильно заслонённой местностью. За каждую минуту, пока бутылка стоит открытой и находится внутри облака, его радиус увеличивается на 10 футов, пока не достигнет максимального радиуса 120 футов. <br>Облако остаётся, пока бутылка открыта. Для закрывания бутылки нужно действием произнести её командное слово. Когда бутылку закроют, дым рассеется за 10 минут. Умеренный ветер (от 11 до 20 миль в час) рассеивает дым за 1 минуту, а сильный ветер (21 миля в час и больше) сделает это за 1 раунд."
    }
  },
  {
    "en": {
      "name": "EYES OF CHARMING",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 charge as an action to cast the <a href='https://tentaculus.ru/spells/#q=charm_person'>charm person</a> spell (save DC 13) on a humanoid within 30 feet of you, provided that you and the target can see each other. The lenses regain all expended charges daily at dawn.",
      "source": "DMG",
      "img": "EYES_OF_CHARMING.jpg"
    },
    "ru": {
      "name": "Очки очарования",
      "text": "Эти кристаллические линзы размещаются напротив глаз. У них есть 3 заряда. Если вы их носите, вы можете действием потратить 1 заряд, чтобы наложить заклинание <a href='https://tentaculus.ru/spells/#q=charm_person'>очарование личности</a> (Сл спасброска 13) на гуманоида в пределах 30 футов от себя, при условии, что вы с ним видите друг друга. Линзы восстанавливают ежедневно на рассвете все потраченные заряды.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "EYES OF MINUTE SEEING",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "These crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range.",
      "source": "DMG",
      "img": "EYES_OF_MINUTE_SEEING.jpg"
    },
    "ru": {
      "name": "Очки детального зрения",
      "text": "Эти кристаллические линзы размещаются напротив глаз. Пока вы их носите, вы видите лучше, чем обычно, в пределах 1 фута. Вы совершаете с преимуществом проверки Интеллекта (Анализ), полагающиеся на исследование местности или предмета в пределах 1 фута."
    }
  },
  {
    "en": {
      "name": "EYES OF THE EAGLE",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across.",
      "source": "DMG",
      "img": "EYES_OF_THE_EAGLE.jpg"
    },
    "ru": {
      "name": "Очки орлиного зрения",
      "text": "Эти кристаллические линзы размещаются напротив глаз. Пока вы их носите, вы совершаете с преимуществом проверки Мудрости (Внимательность), полагающиеся на зрение. В условиях хорошей видимости вы можете разглядеть подробности даже у экстремально далёких существ и предметов, с размером не меньше 2 футов в поперечнике.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "Bronze Griffon (FIGURINE OF WONDROUS POWER)",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature. <br>The creature is friendly to you and your companions. <br>It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the <br>Monster Manual for the creature's statistics, except for the giant fly. <br>The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description. <br>This bronze statuette is of a griffon rampant. It can become a <a href='https://tentaculus.ru/monsters/#q=грифон'>griffon</a> for up to 6 hours. Once it has been used, it can't be used again until 5 days have passed. ",
      "source": "DMG",
      "img": "FIGURINE_OF_WONDROUS_POWER.jpg"
    },
    "ru": {
      "name": "Бронзовый грифон (Статуэтка чудесной силы)",
      "text": "Эта бронзовая статуэтка грифона, стоящего на задних лапах. Она становится <a href='https://tentaculus.ru/monsters/#q=грифон'>грифоном</a> на 6 часов. Её нельзя использовать повторно, пока не пройдёт 5 дней. <br>Статуэтка чудесной силы это небольшая статуэтка зверя, помещающаяся в карман. Если вы действием произнесёте командное слово и бросите статуэтку на расстояние до 60 футов, статуэтка станет живым существом. Если пространство, в котором существо должно появиться, занято другим существом или предметом, или если для этого существа просто нет пространства, статуэтка не становится существом. <br>Существо дружественно по отношению к вам и вашим спутникам. Оно понимает ваши языки и подчиняется устным командам. Если вы не отдаёте команды, существо обороняется, но других действий не совершает.  <br>Животное существует в течение времени, зависящего от вида статуэтки. В конце этого периода животное вновь становится статуэткой. Оно становится статуэткой преждевременно, если его хиты опускаются до 0, или если вы действием произнесёте командное слово, касаясь его. Когда существо становится статуэткой, её свойства нельзя использовать повторно, пока не пройдёт определённое количество времени, специфичное для каждой статуэтки. "
    }
  },
  {
    "en": {
      "name": "Ebony Fly (FIGURINE OF WONDROUS POWER)",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature. <br>The creature is friendly to you and your companions. <br>It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the <br>Monster Manual for the creature's statistics, except for the giant fly. <br>The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description. <br> This ebony statuette is carved in the likeness of a horsefly. It can become a <a href='https://tentaculus.ru/monsters/#q=giant_fly'>giant fly</a> for up to 12 hours and can be ridden as a mount. Once it has been used, it can't be used again until 2 day have passed. ",
      "source": "DMG",
      "img": "FIGURINE_OF_WONDROUS_POWER.jpg"
    },
    "ru": {
      "name": "Эбеновая муха (Статуэтка чудесной силы)",
      "text": " Эта статуэтка из чёрного дерева похожа на обычную муху. Она становится <a href='https://tentaculus.ru/monsters/#q=giant_fly'>гигантской мухой</a> на 12 часов и на ней можно летать как на верховом животном. Её нельзя использовать повторно, пока не пройдёт 2 дня.<br>Статуэтка чудесной силы это небольшая статуэтка зверя, помещающаяся в карман. Если вы действием произнесёте командное слово и бросите статуэтку на расстояние до 60 футов, статуэтка станет живым существом. Если пространство, в котором существо должно появиться, занято другим существом или предметом, или если для этого существа просто нет пространства, статуэтка не становится существом. <br>Существо дружественно по отношению к вам и вашим спутникам. Оно понимает ваши языки и подчиняется устным командам. Если вы не отдаёте команды, существо обороняется, но других действий не совершает.  <br>Животное существует в течение времени, зависящего от вида статуэтки. В конце этого периода животное вновь становится статуэткой. Оно становится статуэткой преждевременно, если его хиты опускаются до 0, или если вы действием произнесёте командное слово, касаясь его. Когда существо становится статуэткой, её свойства нельзя использовать повторно, пока не пройдёт определённое количество времени, специфичное для каждой статуэтки."
    }
  },
  {
    "en": {
      "name": "Ivory Goats (FIGURINE OF WONDROUS POWER)",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature. <br>The creature is friendly to you and your companions. <br>It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the <br>Monster Manual for the creature's statistics, except for the giant fly. <br>The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description. <br>These ivory statuettes of goats are always created in sets of three. Each goat looks unique and functions differently from the others. Their properties are as follows: <br>The goat of traveling can become a Large goat with the same statistics as a <a href='https://tentaculus.ru/monsters/#q=riding_horse'>riding horse</a>. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you <a href='https://tentaculus.ru/spells/#q=wish'>wish</a>. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges. <br>The goat of travail becomes a <a href='https://tentaculus.ru/monsters/#q=giant_goat'>giant goat</a> for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed. <br>The goat of terror becomes a <a href='https://tentaculus.ru/monsters/#q=giant_goat'>giant goat</a> for up to 3 hours. The goat can't attack, but you can remove its horns and use them as weapons. One horn becomes a +1/ance, and the other becomes a +2 /ongsword. <br>Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-foot-radius aura of terror while you are riding it. <br>Any creature hostile to you that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed. ",
      "source": "DMG",
      "img": "FIGURINE_OF_WONDROUS_POWER.jpg"
    },
    "ru": {
      "name": "Костяные козлы (Статуэтка чудесной силы)",
      "text": "Эти статуэтки козлов из слоновой кости всегда создаются по три штуки. Каждый козёл имеет уникальную внешность, и функционирует по-своему. Вот их свойства:<br>• Козёл путешествия может стать Большим козлом со статистикой <a href='https://tentaculus.ru/monsters/#q=riding_horse'>ездовой лошади</a>. У него есть 24 заряда, и каждый час или его часть, пока козёл остаётся животным, расходуется 1 заряд. Пока у него есть заряды, вы можете его использовать так часто, как вам вздумается. Когда у него кончаются заряды, он становится статуэткой и не может использоваться, пока не пройдёт 7 дней, после чего он восстанавливает все свои заряды.<br>• Козёл перевозки становится <a href='https://tentaculus.ru/monsters/#q=giant_goat'>гигантским козлом</a> на 3 часа. Его нельзя использовать повторно, пока не пройдёт 30 дней.<br>• Козёл ужаса становится <a href='https://tentaculus.ru/monsters/#q=giant_goat'>гигантским козлом</a> на 3 часа. Он не может атаковать, но вы можете брать его рога и использовать их в качестве оружия. <br>Один рог становится длинным копьём +1, а другой становится длинным мечом +2. Рог берётся действием, и оружие исчезает, когда козёл становится статуэткой, вновь превращаясь в рог. Кроме того, козёл излучает ауру ужаса с радиусом 30 футов, когда вы на нём едете. Все враждебные вам существа, начинающие ход в ауре, должны преуспевать в спасброске Мудрости со Сл 15, иначе они станут испуганными козлом на 1 минуту, ли пока козёл не станет статуэткой. Испуганное существо может повторять спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе. Успешно спасшееся существо получает иммунитет к ауре козла на следующие 24 часа. <br>Статуэтку нельзя использовать повторно, пока не пройдёт 15 дней. <br>Статуэтка чудесной силы это небольшая статуэтка зверя, помещающаяся в карман. Если вы действием произнесёте командное слово и бросите статуэтку на расстояние до 60 футов, статуэтка станет живым существом. Если пространство, в котором существо должно появиться, занято другим существом или предметом, или если для этого существа просто нет пространства, статуэтка не становится существом. <br>Существо дружественно по отношению к вам и вашим спутникам. Оно понимает ваши языки и подчиняется устным командам. Если вы не отдаёте команды, существо обороняется, но других действий не совершает.  <br>Животное существует в течение времени, зависящего от вида статуэтки. В конце этого периода животное вновь становится статуэткой. Оно становится статуэткой преждевременно, если его хиты опускаются до 0, или если вы действием произнесёте командное слово, касаясь его. Когда существо становится статуэткой, её свойства нельзя использовать повторно, пока не пройдёт определённое количество времени, специфичное для каждой статуэтки. "
    }
  },
  {
    "en": {
      "name": "Marble Elephant (FIGURINE OF WONDROUS POWER)",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature. <br>The creature is friendly to you and your companions. <br>It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the <br>Monster Manual for the creature's statistics, except for the giant fly. <br>The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description. <br> This marble statuette is about 4 inches high and long. It can become an <a href='https://tentaculus.ru/monsters/#q=elephant'>elephant</a> for up to 24 hours. Once it has been used, it can't be used again until 7 days have passed. ",
      "source": "DMG",
      "img": "FIGURINE_OF_WONDROUS_POWER.jpg"
    },
    "ru": {
      "name": "Мраморный слон (Статуэтка чудесной силы)",
      "text": " Эта мраморная статуэтка примерно 4 дюйма в высоту и длину. Она становится <a href='https://tentaculus.ru/monsters/#q=elephant'>слоном</a> на 24 часа. Её нельзя использовать повторно, пока не пройдёт 7 дней. <br>Статуэтка чудесной силы это небольшая статуэтка зверя, помещающаяся в карман. Если вы действием произнесёте командное слово и бросите статуэтку на расстояние до 60 футов, статуэтка станет живым существом. Если пространство, в котором существо должно появиться, занято другим существом или предметом, или если для этого существа просто нет пространства, статуэтка не становится существом. <br>Существо дружественно по отношению к вам и вашим спутникам. Оно понимает ваши языки и подчиняется устным командам. Если вы не отдаёте команды, существо обороняется, но других действий не совершает.  <br>Животное существует в течение времени, зависящего от вида статуэтки. В конце этого периода животное вновь становится статуэткой. Оно становится статуэткой преждевременно, если его хиты опускаются до 0, или если вы действием произнесёте командное слово, касаясь его. Когда существо становится статуэткой, её свойства нельзя использовать повторно, пока не пройдёт определённое количество времени, специфичное для каждой статуэтки. "
    }
  },
  {
    "en": {
      "name": "Obsidian Steed (FIGURINE OF WONDROUS POWER)",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature. <br>The creature is friendly to you and your companions. <br>It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the <br>Monster Manual for the creature's statistics, except for the giant fly. <br>The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description. <br> This polished obsidian horse can become a <a href='https://tentaculus.ru/monsters/#q=nightmare'>nightmare</a> for up to 24 hours. The nightmare fights only to defend itself. Once it has been used, it can't be used again until 5 days have passed. <br>If you have a good alignment, the figurine has a 10 percent chance each time you use it to ignore your orders, including a command to revert to figurine form. <br>If you mount the nightmare while it is ignoring your orders, you and the nightmare are instantly transported to a random location on the plane of Hades, where the nightmare reverts to figurine form. ",
      "source": "DMG",
      "img": "FIGURINE_OF_WONDROUS_POWER.jpg"
    },
    "ru": {
      "name": "Обсидиановый скакун (Статуэтка чудесной силы)",
      "text": "Эта лошадь из полированного обсидиана становится <a href='https://tentaculus.ru/monsters/#q=nightmare'>кошмаром</a> на 24 часа. Кошмар сражается только чтобы защитить самого себя. Его нельзя использовать повторно, пока не пройдёт 5 дней. <br>Если у вас доброе мировоззрение, каждый раз, когда вы отдаёте приказ, в том числе приказ вернуться в форму статуэтки, у статуэтки есть 10-процентный шанс, что она проигнорирует его. Если вы едете верхом на кошмаре, когда он игнорирует вас, вы с ним мгновенно переноситесь в случайное место на плане Гадес, где он вновь становится статуэткой. <br>Статуэтка чудесной силы это небольшая статуэтка зверя, помещающаяся в карман. Если вы действием произнесёте командное слово и бросите статуэтку на расстояние до 60 футов, статуэтка станет живым существом. Если пространство, в котором существо должно появиться, занято другим существом или предметом, или если для этого существа просто нет пространства, статуэтка не становится существом. <br>Существо дружественно по отношению к вам и вашим спутникам. Оно понимает ваши языки и подчиняется устным командам. Если вы не отдаёте команды, существо обороняется, но других действий не совершает.  <br>Животное существует в течение времени, зависящего от вида статуэтки. В конце этого периода животное вновь становится статуэткой. Оно становится статуэткой преждевременно, если его хиты опускаются до 0, или если вы действием произнесёте командное слово, касаясь его. Когда существо становится статуэткой, её свойства нельзя использовать повторно, пока не пройдёт определённое количество времени, специфичное для каждой статуэтки. "
    }
  },
  {
    "en": {
      "name": "Onyx Dog (FIGURINE OF WONDROUS POWER)",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature. <br>The creature is friendly to you and your companions. <br>It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the <br>Monster Manual for the creature's statistics, except for the giant fly. <br>The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description. <br> This onyx statuette of a dog can become a <a href='https://tentaculus.ru/monsters/#q=Mastiff'>mastiff</a> for up to 6 hours. The mastiff has an Intelligence of 8 and can speak Common. It also has dark vision out to a range of 60 feet and can see invisible creatures and objects within that range. Once it has been used, it can't be used again until 7 days have passed. ",
      "source": "DMG",
      "img": "FIGURINE_OF_WONDROUS_POWER.jpg"
    },
    "ru": {
      "name": "Ониксовая собака (Статуэтка чудесной силы)",
      "text": "Эта ониксовая статуэтка становится <a href='https://tentaculus.ru/monsters/#q=Mastiff'>мастифом</a> на 6 часов. У мастифа Интеллект 8, и он может говорить на Общем. Он также обладает тёмным зрением в пределах 60 футов и может видеть невидимых существ и предметы в пределах этого диапазона. Его нельзя использовать повторно, пока не пройдёт 7 дней. <br>Статуэтка чудесной силы это небольшая статуэтка зверя, помещающаяся в карман. Если вы действием произнесёте командное слово и бросите статуэтку на расстояние до 60 футов, статуэтка станет живым существом. Если пространство, в котором существо должно появиться, занято другим существом или предметом, или если для этого существа просто нет пространства, статуэтка не становится существом. <br>Существо дружественно по отношению к вам и вашим спутникам. Оно понимает ваши языки и подчиняется устным командам. Если вы не отдаёте команды, существо обороняется, но других действий не совершает.  <br>Животное существует в течение времени, зависящего от вида статуэтки. В конце этого периода животное вновь становится статуэткой. Оно становится статуэткой преждевременно, если его хиты опускаются до 0, или если вы действием произнесёте командное слово, касаясь его. Когда существо становится статуэткой, её свойства нельзя использовать повторно, пока не пройдёт определённое количество времени, специфичное для каждой статуэтки. "
    }
  },
  {
    "en": {
      "name": "Serpentine Owl (FIGURINE OF WONDROUS POWER)",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature. <br>The creature is friendly to you and your companions. <br>It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the <br>Monster Manual for the creature's statistics, except for the giant fly. <br>The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description. <br> This serpentine statuette of an owl can become a <a href='https://tentaculus.ru/monsters/#q=giant_owl'>giant owl</a> for up to 8 hours. Once it has been used, it can't be used again until 2 days have passed. The owl can telepathically communicate with you at any range if you and it are on the same plane of existence. ",
      "source": "DMG",
      "img": "FIGURINE_OF_WONDROUS_POWER.jpg"
    },
    "ru": {
      "name": "Серпентиновая сова (Статуэтка чудесной силы)",
      "text": "Эта серпентиновая статуэтка становится <a href='https://tentaculus.ru/monsters/#q=giant_owl'>гигантской совой</a> на 8 часов. Её нельзя использовать повторно, пока не пройдёт 2 дня. <br>Сова может телепатически общаться с вами на любом расстоянии, если вы с ней находитесь на одном плане существования.<br>Статуэтка чудесной силы это небольшая статуэтка зверя, помещающаяся в карман. Если вы действием произнесёте командное слово и бросите статуэтку на расстояние до 60 футов, статуэтка станет живым существом. Если пространство, в котором существо должно появиться, занято другим существом или предметом, или если для этого существа просто нет пространства, статуэтка не становится существом. <br>Существо дружественно по отношению к вам и вашим спутникам. Оно понимает ваши языки и подчиняется устным командам. Если вы не отдаёте команды, существо обороняется, но других действий не совершает.  <br>Животное существует в течение времени, зависящего от вида статуэтки. В конце этого периода животное вновь становится статуэткой. Оно становится статуэткой преждевременно, если его хиты опускаются до 0, или если вы действием произнесёте командное слово, касаясь его. Когда существо становится статуэткой, её свойства нельзя использовать повторно, пока не пройдёт определённое количество времени, специфичное для каждой статуэтки. "
    }
  },
  {
    "en": {
      "name": "Silver Raven (FIGURINE OF WONDROUS POWER)",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature. <br>The creature is friendly to you and your companions. <br>It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the <br>Monster Manual for the creature's statistics, except for the giant fly. <br>The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.<br> This silver statuette of a <a href='https://tentaculus.ru/monsters/#q=raven'>raven</a> can become a raven for up to 12 hours. Once it has been used, it can't be used again until 2 days have passed. While in raven form, the figurine allows you to cast the <a href='https://tentaculus.ru/spells/#q=animal_messenger'>animal messenger</a> spell on it at will.",
      "source": "DMG",
      "img": "FIGURINE_OF_WONDROUS_POWER.jpg"
    },
    "ru": {
      "name": "Серебряный ворон (Статуэтка чудесной силы)",
      "text": "Эта серебряная статуэтка становится <a href='https://tentaculus.ru/monsters/#q=raven'>вороном<a/> на 12 часов. Её нельзя использовать повторно, пока не пройдёт 2 дня. Пока статуэтка находится в облике ворона, вы можете неограниченно накладывать на неё заклинание <a href='https://tentaculus.ru/spells/#q=animal_messenger'>почтовое животное</a>. <br>Статуэтка чудесной силы это небольшая статуэтка зверя, помещающаяся в карман. Если вы действием произнесёте командное слово и бросите статуэтку на расстояние до 60 футов, статуэтка станет живым существом. Если пространство, в котором существо должно появиться, занято другим существом или предметом, или если для этого существа просто нет пространства, статуэтка не становится существом. <br>Существо дружественно по отношению к вам и вашим спутникам. Оно понимает ваши языки и подчиняется устным командам. Если вы не отдаёте команды, существо обороняется, но других действий не совершает.  <br>Животное существует в течение времени, зависящего от вида статуэтки. В конце этого периода животное вновь становится статуэткой. Оно становится статуэткой преждевременно, если его хиты опускаются до 0, или если вы действием произнесёте командное слово, касаясь его. Когда существо становится статуэткой, её свойства нельзя использовать повторно, пока не пройдёт определённое количество времени, специфичное для каждой статуэтки. "
    }
  },
  {
    "en": {
      "name": "FLAME TONGUE",
      "type": "Weapon",
      "typeAdditions": "(any sword)",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "You can use a bonus action to speak this magic sword' command word, causing flames to erupt from the blade. <br>These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.",
      "source": "DMG",
      "img": "FLAME_TONGUE.jpg"
    },
    "ru": {
      "name": "Язык пламени",
      "text": "Вы можете бонусным действием произнести командное слово этого магического меча, отчего из него вырвутся языки пламени. Это пламя испускает яркий свет в радиусе 40 футов и тусклый свет в радиусе ещё 40 футов. Пока меч пылает, он причиняет дополнительный урон огнём 2к6 целям, по которым попадает. Пламя остаётся, пока вы не произнесёте ещё раз командное слово бонусным действием, или пока не уберёте меч в ножны.",
      "typeAdditions": "(любой меч)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "FOLDING BOAT",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weigh 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring you to use an action to speak it. <br>One command word causes the box to unfold into a ~at 10 feet long, 4 feet wide, and 2 feet deep. The boat as one pair of oars, an anchor, a mast, and a lateen sail. The boat can hold up to four Medium creatures comfortably. <br>The second command word causes the box to unfold <br>JJto a ship 24 feet long, 8 feet wide; and 6 feet deep. -he ship has a deck, rowing seats, five sets of oars, a _ eering oar, an anchor, a deck cabin, and a mast with a 5quare sail. The ship can hold fifteen Medium creatures omfortably. <br>When the box becomes a vessel, its weight becomes - at of a normal vessel its size, and anything that was stored in the box remains in the boat. <br>The third command word causes the folding boat -o fold back into a box, provided that no creatures are aboard. Any objects in the vessel that can't fit inside the ~x remain outside the box as it folds. Any objects in the -:esse! that can fit inside the box do so.",
      "source": "DMG",
      "img": "FOLDING_BOAT.jpg"
    },
    "ru": {
      "name": "Складная лодка",
      "text": "Этот предмет выглядит как деревянная коробка 12 дюймов в длину, 6 дюймов шириной и 6 дюймов высотой. Коробка весит 4 фунта и держится на плаву. <br>Её можно открывать и хранить внутри вещи. У этого предмета есть три командных слова, и каждое из них произносится действием. <br>Первое командное слово разворачивает коробку в лодку 10 футов длиной, 4 фута шириной и 2 фута высотой. У лодки есть пара вёсел, якорь, мачта и треугольный парус. В этой лодке с комфортом разместятся четыре существа Среднего размера. <br>Второе командное слово разворачивает коробку в корабль 24 фута в длину, 8 футов шириной и 6 футов высотой. У корабля есть палуба, скамьи для гребли, пять пар вёсел, кормовое весло, якорь, палубная каюта и мачта с прямым парусом. На корабле с комфортом разместятся пятнадцать существ Среднего размера. <br>Если коробка стала судном, оно весит как обычное судно его размера, а всё, что хранилось в коробке, остаётся на судне. <br>Третье командное слово превращает судно в коробку, при условии, что на борту нет существ. Все предметы на судне, не помещающиеся в коробке, остаются вне коробки, когда та складывается. Все предметы на судне, которые могут поместиться в коробке, оказываются в коробке."
    }
  },
  {
    "en": {
      "name": "FROST BRAND",
      "type": "weapon",
      "typeAdditions": "(any sword)",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additionall 1O feet. <br>When you draw this weapon, you can extinguish all nmagical flames within 30 feet of you. This property an be used no more than once per hour.",
      "source": "DMG",
      "img": "FROST_BRAND.jpg"
    },
    "ru": {
      "name": "Морозный клинок",
      "text": "Если вы попадаете атакой, используя этот магический меч, цель получает дополнительный урон холодом 1к6. Кроме того, пока вы держите этот меч, вы обладаете сопротивлением к урону огнём. <br>При температуре, не превышающей 0 °C, клинок испускает яркий свет в радиусе 10 футов и тусклый свет в радиусе ещё 10 футов. <br>Когда вы вынимаете оружие из ножен, вы можете погасить все источники немагического огня в пределах 30 футов. Это свойство можно использовать не чаще раза в час.",
      "typeAdditions": "(любой меч)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "GAUNTLETS OF OGRE POWER",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher.",
      "source": "DMG",
      "img": "GAUNTLETS_OF_OGRE_POWER.jpg"
    },
    "ru": {
      "name": "Рукавицы силы огра",
      "text": "Ваша Сила равна 19, когда вы носите эти латные рукавицы. Они не оказывают на вас эффект, если ваша <br>Сила без них уже 19 или выше.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "GEM OF BRIGHTNESS",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This prism has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects: <br>The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn't expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem. <br>The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. <br>• The third command word expends 5 charges and causes the gem to flare with blinding light in a 30-foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word. <br>When all of the gem's charges are expended, the gem becomes a non magical jewel worth 50 gp.",
      "source": "DMG",
      "img": "GEM_OF_BRIGHTNESS.jpg"
    },
    "ru": {
      "name": "Камень сияния",
      "text": "У этой призмы есть 50 зарядов. Если вы её держите, вы можете действием произнести одно из трёх командных слов, чтобы вызвать один из следующих эффектов:<br><br>• Первое командное слово заставляет камень испускать яркий свет в радиусе 30 футов и тусклый свет в радиусе ещё 30 футов. Этот эффект не тратит заряд. Он длится, пока вы не повторите командное слово бонусным действием, или пока не воспользуетесь другой функцией камня.<br><br>• Второе командное слово тратит 1 заряд и заставляет камень испустить сверкающий луч в одно существо, которое вы видите в пределах 60 футов. Существо должно преуспеть в спасброске Телосложения со Сл 15, иначе станет ослеплённым на 1 минуту. Существо может повторять спасбросок в конце каждого своего хода, оканчивая эффект при успехе.<br><br>• Третье командное слово тратит 5 зарядов и заставляет камень испускать ослепляющий свет 30-футовым конусом. Все существа в конусе должны совершить спасброски, как если бы по ним попал луч, созданный вторым командным словом. <br>Когда все заряды этого камня кончатся, он становится немагической драгоценностью, стоящей 50 зм."
    }
  },
  {
    "en": {
      "name": "GEM OF SEEING",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "This gem has 3 charges. As an action, you can speak the gem's command word and expend 1 charge. For t\"'~ next 10 minutes, you have truesight out to 120 feet w you peer through the gem. <br>The gem regains 1d3 expended charges daily at da\\",
      "source": "DMG",
      "img": "GEM_OF_SEEING.jpg"
    },
    "ru": {
      "name": "Камень зрения",
      "text": "У этого драгоценного камня есть 3 заряда. Вы можете действием произнести командное слово и потратить 1 заряд. В течение следующих 10 минут вы обладаете истинным зрением в пределах 120 футов, если смотрите через этот драгоценный камень. <br>Камень ежедневно восстанавливает 1к3 заряда на рассвете.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "GIANT SLAYER",
      "type": "Weapon",
      "typeAdditions": "(any axe or sword)",
      "rarity": 3,
      "text": "You gain a +1 bonus to attack and damage rolls made with this magic weapon. <br>When you hit a giant with it, the giant takes an extra 2d6 damage of the weapon's type and must succeed oa <br>DC 15 Strength saving throw or fall prone. For the purpose of this weapon, \"giant\" refers to any creature with the giant type, including ettins and trolls.",
      "source": "DMG",
      "img": "GIANT_SLAYER.jpg"
    },
    "ru": {
      "name": "Убийца великанов",
      "text": "Вы получаете бонус +1 к броскам атаки и урона, совершённым этим магическим оружием. <br>Если вы попадаете им по великану, великан получает дополнительный урон 2к6, соответствующий виду оружия, и должен преуспеть в спасброске Силы со Сл 15, иначе он будет сбит с ног. Для этого оружия «великан» означает любое существо с видом «великан», включая эттинов и троллей.",
      "typeAdditions": "(любой топор или меч)"
    }
  },
  {
    "en": {
      "name": "GLAMOURED STUDDED LEATHER",
      "type": "Armor",
      "typeAdditions": "(studded leather)",
      "rarity": 3,
      "text": "While wearing this armor, you gain a +1 bonus to AC. <br>You can also use a bonus action to speak the armor's command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. The illusory appearance last until you use this property again or remove the armor.",
      "source": "DMG",
      "img": "GLAMOURED_STUDDED_LEATHER.jpg"
    },
    "ru": {
      "name": "Красивый проклёпанный доспех",
      "text": "Пока вы носите этот доспех, вы получаете бонус +1 к <br>КД. Вы также можете бонусным действием произнести его командное слово и заставить доспех принять облик обычной одежды или любого другого доспеха. <br>Вы сами решаете, как он будет выглядеть, включая цвет, стиль и аксессуары, но доспех при этом сохраняет свой объём и вес. Иллюзорный облик длится до тех пор, пока вы не используете это свойство повторно или не снимете доспех.",
      "typeAdditions": "(Проклѐпанная кожа)"
    }
  },
  {
    "en": {
      "name": "GLOVES OF MISSILE SNARING",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "These gloves seem to almost meld into your hands wh you don them. When a ranged weapon attack hits you while you're wearing them, you can use your reaction r reduce the damage by 1d10 +your Dexterity modifier. provided that you have a free hand. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in that hand.",
      "source": "DMG",
      "img": "GLOVES_OF_MISSILE_SNARING.jpg"
    },
    "ru": {
      "name": "Перчатки ловли снарядов",
      "text": "Эти перчатки практически сливаются с вашими руками, когда вы их надеваете. Если по вам попадает дальнобойная атака оружием, когда вы их носите, вы можете реакцией уменьшить урон на 1к10 + ваш модификатор Ловкости, при условии, что у вас есть одна свободная рука. Если вы уменьшили урон до 0, вы можете поймать снаряд, если он достаточно маленький, чтобы его можно было держать одной рукой.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "GLOVES OF SWIMMING AND CLIMBING",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While wearing these gloves, climbing and swimming don't cost you extra movement, and you gain a +5 bonu_ to Strength (Athletics) checks made to climb or swim.",
      "source": "DMG",
      "img": "GLOVES_OF_SWIMMING_AND_CLIMBING.jpg"
    },
    "ru": {
      "name": "Перчатки плавания и лазания",
      "text": "Пока вы носите эти перчатки, лазание и плавание не требует от вас траты дополнительного перемещения, и вы получаете бонус +5 к проверкам Силы (Атлетика), совершённым, чтобы лазать или плавать.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "GLOVES OF THIEVERY",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "These gloves are invisible while worn. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand checks and Dexterity checks made to pick locks.",
      "source": "DMG",
      "img": "GLOVES_OF_THIEVERY.jpg"
    },
    "ru": {
      "name": "Перчатки воровства",
      "text": "Эти перчатки невидимы, пока вы носите их. Пока вы носите их, вы получаете бонус +5 к проверкам Ловкости (Ловкость рук) и проверкам Ловкости, совершённым для вскрывания замков."
    }
  },
  {
    "en": {
      "name": "GOGGLES OF NIGHT",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision. wearing the goggles increases its range by 60 feet.",
      "source": "DMG",
      "img": "GOGGLES_OF_NIGHT.jpg"
    },
    "ru": {
      "name": "Ночные очки",
      "text": "Пока вы носите эти тёмные очки, вы получаете тёмное зрение в радиусе 60 фт. Если у вас уже было тёмное зрение, очки увеличивают его радиус на 60 фт. "
    }
  },
  {
    "en": {
      "name": "HAMMER OF THUNDERBOLTS",
      "type": "Weapon",
      "typeAdditions": "(maul)",
      "rarity": 5,
      "text": "You gain a +1 bonus to attack and damage rolls made with this magic weapon. <br><b>Giant's Bane (Requires Attunement).</b> You must be wearing a belt of giant strength (any variety) and gauntlets of ogre power to attune to this weapon. The attunement ends if you take off either of those items. <br>While you are attuned to this weapon and holding it, your Strength score increases by 4 and can exceed 20, but not 30. When you roll a 20 on an attack roll made with this weapon against a giant, the giant must succeed on a DC 17 Constitution saving throw or die. <br>The hammer also has 5 charges. While attuned to it, you can expend 1 charge and make a ranged weapon attack with the hammer, hurling it as if it had the thrown property with a normal range of 20 feet and a long range of 60 feet. If the attack hits, the hammer unleashes a thunderclap audible out to 300 feet. The target and every creature within 30 feet of it must succeed on a <br>DC 17 Constitution saving throw or be stunned until the end of your next turn. The hammer regains 1d4 + 1 expended charges daily at dawn.",
      "source": "DMG",
      "img": "HAMMER_OF_THUNDERBOLTS.jpg"
    },
    "ru": {
      "name": "Молот грома",
      "text": "Вы получаете бонус +1 к броскам атаки и урона, совершённым этим магическим оружием. <br>Погибель великанов (требуется настройка). Вы должны носить пояс силы великана (любую разновидность) и рукавицы силы огра, чтобы настроиться на это оружие. Настройка окончится, если вы снимаете любой из этих предметов. Если вы настроены на этой оружие и держите его, ваше значение Силы увеличивается на 4 и может превышать 20, но не 30. Если у вас выпало «20» на кости при броске атаки этим оружием по великану, великан должен преуспеть в спасброске <br>Телосложения со Сл 17, иначе он сразу умрёт. <br>У этого молота есть 5 зарядов. Если вы настроены на него, вы можете потратить 1 заряд и совершить им дальнобойную атаку оружием, метая его, как если бы у него было свойство «метательное» с нормальной дистанцией 20 футов и максимальной дистанцией 60 футов. Если эта атака попадает, молот испускает громовой рокот, слышный в пределах 300 футов. Цель и все существа в пределах 30 футов от неё должны преуспеть в спасброске Телосложения со Сл 17, иначе станут ошеломлёнными до конца вашего следующего хода. Молот ежедневно восстанавливает 1к4 + 1 заряд на рассвете.",
      "typeAdditions": "(молот)"
    }
  },
  {
    "en": {
      "name": "HAT OF DISGUISE",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While wearing this hat, you can use an action to cast the <a href='https://tentaculus.ru/spells/#q=disguise_self'>disguise self</a> spell from it at will. The spell ends if the hat is removed.",
      "source": "DMG",
      "img": "HAT_OF_DISGUISE.jpg"
    },
    "ru": {
      "name": "Шапка маскировки",
      "text": "Пока вы носите эту шапку, вы можете неограниченно действием накладывать ей заклинание <a href='https://tentaculus.ru/spells/#q=disguise_self'>маскировка</a>. Это заклинание оканчивается, если снять шапку.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "HEADBAND OF INTELLECT",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher.",
      "source": "DMG",
      "img": "HEADBAND_OF_INTELLECT.jpg"
    },
    "ru": {
      "name": "Повязка интеллекта",
      "text": "Значение вашего Интеллекта равно 19, пока вы носите эту повязку. Она не оказывает на вас эффект, если ваш Интеллект без неё и так уже 19 или выше.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "HELM OF BRILLIANCE",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "This dazzling helm is set with 1d10 diamonds, 2d10 rubies, 3d10 fire opals, and 4d10 opals. Any gem pried from the helm crumbles to dust. When all the gems are removed or destroyed, the helm loses its magic. <br>You gain the following benefits while wearing it: <br>You can use an action to cast one of the following spells (save DC 18), using one of the helm's gems of the specified type as a component: <a href='https://tentaculus.ru/spells/#q=daylight'>daylight</a> (opal), <a href='https://tentaculus.ru/spells/#q=fireball'>fireball</a> (fire opal), <a href='https://tentaculus.ru/spells/#q=prismatic_spray'>prismatic spray</a> (diamond), or <a href='https://tentaculus.ru/spells/#q=wall_of_fire'>wall of fire</a> (ruby). The gem is destroyed when the spell is cast and disappears from the helm. <br>As long as it has at least one diamond, the helm emits dim light in a 30-foot radius when at least one undead is within that area. Any undead that starts its turn in that area takes 1d6 radiant damage. <br>As long as the helm has at least one ruby, you have resistance to fire damage. <br>As long as the helm has at least one fire opal, you can use an action and speak a command word to cause one weapon you are holding to burst into flames. <br>The flames emit bright light in a 10-foot radius and dim light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until you use a bonus action to speak the command word again or until you drop or stow the weapon. <br>Roll a d20 if you are wearing the helm and take fire damage as a result of failing a saving throw against a spell. On a roll of 1, the helm emits beams of light from its remaining gems. Each creature within 60 feet of the helm other than you must succeed on a DC 17 Dexterity saving throw or be struck by a beam, taking radiant damage equal to the number of gems in the helm. The helm and its gems are then destroyed.",
      "source": "DMG",
      "img": "HELM_OF_BRILLIANCE.jpg"
    },
    "ru": {
      "name": "Шлем блеска",
      "text": "Этот сверкающий шлем украшен 1к10 бриллиантами, 2к10 рубинами, 3к10 огненными опалами и 4к10 опалами. Любой камень, извлечённый из шлема, рассыпается в пыль. Если все камни изымут или уничтожат, шлем теряет свою магию. <br>Вы получает следующие преимущества, пока носите его:<br>• Вы можете действием наложить одно из следующих заклинаний (Сл спасброска 18), используя один из камней шлема определённого вида в качестве компонента: <a href='https://tentaculus.ru/spells/#q=daylight'>дневной свет</a> (опал), <a href='https://tentaculus.ru/spells/#q=wall_of_fire'>огненная стена</a> (рубин), <a href='https://tentaculus.ru/spells/#q=fireball'>огненный шар</a> (огненный опал) или <a href='https://tentaculus.ru/spells/#q=prismatic_spray'>радужные брызги</a> (бриллиант). Соответствующий драгоценный камень уничтожается, когда накладывается заклинание, и исчезает со шлема.<br>• Пока у шлема есть хотя бы один бриллиант, он испускает тусклый свет в радиусе 30 футов, если в пределах этой области есть хотя бы одна нежить. <br>Нежить, начинающая ход в этой области, получает урон излучением 1к6.<br>• Пока у шлема есть хотя бы один рубин, вы обладаете сопротивлением к урону огнём.<br>• Пока у шлема есть хотя бы один огненный опал, вы можете действием произнести командное слово, чтобы окутать одно оружие, которое держите, пламенем. Пламя испускает яркий свет в пределах 10 футов и тусклый свет в пределах ещё 10 футов. Это пламя безвредно для вас и вашего оружия. Если вы попадаете атакой, используя это пылающее оружие, цель получает дополнительный урон огнём 1к6. Пламя существует, пока вы не произнесёте бонусным действием командное слово ещё раз, пока вы не уберёте оружие в ножны или не бросите его. <br>Бросьте к20, если носите этот шлем и получаете урон огнём из-за провала спасброска от заклинания. Если выпадет «1»», шлем испустит из оставшихся камней лучи света. Все существа в пределах 60 футов от шлема кроме вас должны преуспеть в спасброске Ловкости со Сл 17, иначе их коснётся луч, и они получат урон излучением, равный количеству драгоценных камней на шлеме. И шлем, и драгоценные камни при этом уничтожаются.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "HELM OF COMPREHENDING LANGUAGES",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "While wearing this helm, you can use an action to cast the <a href='https://tentaculus.ru/spells/#q=comprehend_languages'>comprehend languages</a> spell from it at will.",
      "source": "DMG",
      "img": "HELM_OF_COMPREHENDING_LANGUAGES.jpg"
    },
    "ru": {
      "name": "Шлем понимания языков",
      "text": "Пока вы носите этот шлем, вы можете неограниченно действием накладывать заклинание <a href='https://tentaculus.ru/spells/#q=comprehend_languages'>понимание языков</a>."
    }
  },
  {
    "en": {
      "name": "HELM OF TELEPATHY",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While wearing this helm , you can use an action to cast the <a href='https://tentaculus.ru/spells/#q=detect_thoughts'>detect thoughts</a> spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply-using a bonus action to do so- while your focus on it continues. <br>While focusing on a creature with detect thoughts, you can use an action to cast the <a href='https://tentaculus.ru/spells/#q=suggestion'>suggestion</a> spell (save <br>DC 13) from the helm on that creature. Once used, the suggestion property can't be used again until the next dawn.",
      "source": "DMG",
      "img": "HELM_OF_TELEPATHY.jpg"
    },
    "ru": {
      "name": "Шлем телепатии",
      "text": "Пока вы носите этот шлем, вы можете действием накладывать им заклинание <a href='https://tentaculus.ru/spells/#q=detect_thoughts'>обнаружение мыслей</a> (Сл спасброска 13). Пока вы поддерживаете концентрацию на этом заклинании, вы можете бонусным действием отправить телепатическое послание существу, на котором вы сосредоточились. Оно может ответить бонусным действием, если вы продолжите сосредотачиваться на нём. <br>Сосредоточившись на существе обнаружением мыслей, вы можете действием наложить шлемом на него заклинание <a href='https://tentaculus.ru/spells/#q=suggestion&le=2'>внушение</a> (Сл спасброска 13). Вы не можете использовать свойство внушения повторно до следующего рассвета.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "HELM OF TELEPORTATION",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "This helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the teleport spell from it. The helm regains 1d3 expended charges daily at dawn.",
      "source": "DMG",
      "img": "HELM_OF_TELEPORTATION.jpg"
    },
    "ru": {
      "name": "Шлем телепортации",
      "text": "У этого шлема есть 3 заряда. Если вы его носите, вы можете действием потратить 1 заряд, чтобы наложить им заклинание телепортация. Шлем ежедневно восстанавливает 1к3 заряда на рассвете.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "HEWARD'S HANDY HAVERSACK",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "This backpack has a central pouch and two side pouches, each of which is an extradimensional space. <br>Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents. <br>Placing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top. <br>The haversack has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth, unharmed, and the haversack must be put right before it can be used again. If a breathing creature is placed within the haversack, the creature can survive for up to 10 minutes, after which time it begins to suffocate. <br>Placing the haversack inside an extradimensional space created by a bag of holding, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10-feet of the gate is sucked through it and deposited in a random location on the Astral Plane. <br>The gate then closes. The gate is one-way only and can·I be reopened.",
      "source": "DMG",
      "img": "HEWARDS_HANDY_HAVERSACK.jpg"
    },
    "ru": {
      "name": "Удобный рюкзак Хеварда",
      "text": "У этого рюкзака есть центральный карман и два боковых кармана, и все они являются межпространственными местами. В каждом боковом кармане помещается по 20 фунтов материи, не превышающей в объёме 2 кубических фута. В центральном кармане помещается до 8 кубических футов материи, весящей не больше 80 фунтов. Этот рюкзак всегда весит 5 фунтов, что бы в нём ни хранилось. <br>Помещение предмета в рюкзак использует обычные правила взаимодействия с предметами. Достаются предметы из рюкзака действием. Если вы достаёте из рюкзака конкретную вещь, она магическим образом всегда оказывается на самом верху. <br>У рюкзака есть несколько ограничений. Если он будет переполнен или если острый предмет проткнёт или разорвёт его, рюкзак разрывается и уничтожается. Если рюкзак уничтожается, всё его содержимое навсегда теряется, но артефакты появляются в новых местах. Если рюкзак вывернуть наизнанку, его содержимое выпадет наружу, но рюкзак придётся вывернуть обратно, чтобы его снова можно было использовать. Если в рюкзак поместить дышащее существо, оно может выжить 10 минут, после чего начнёт задыхаться. <br>Помещение рюкзака в межпространство, созданное сумкой хранения, переносной дырой или подобным предметом, мгновенно уничтожает оба предмета и открывает врата в Астральный План. Врата появляются в месте, где один предмет пытались поместить в другой. Все существа в пределах 10 футов от врат затягиваются внутрь и помещаются в случайным образом определённое место на Астральном Плане. После этого врата закрываются. Врата односторонние, и повторно не открываются."
    }
  },
  {
    "en": {
      "name": "HOLY AVENGER",
      "type": "Weapon",
      "typeAdditions": "(any sword)",
      "rarity": 5,
      "attunement": "(requires attunement by a paladin)",
      "text": "You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage. <br>While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius o: the aura increases to 30 feet.",
      "source": "DMG",
      "img": "HOLY_AVENGER.jpg"
    },
    "ru": {
      "name": "Святой мститель",
      "attunement": "(требует настройки паладином)",
      "text": "Вы получаете бонус +3 к броскам атаки и урона, совершённым этим магическим оружием. Если вы попадаете им по исчадию или нежити, это существо получает дополнительный урон излучением 2к10. <br>Пока вы держите в руке этот вынутый из ножен меч, он создаёт ауру с радиусом 10 футов вокруг вас. <br>Вы и все дружественные вам существа в этой ауре совершаете с преимуществом спасброски от заклинаний и других магических эффектов. Если у вас есть 17 уровней в классе паладина, радиус ауры увеличивается до 30 футов.",
      "typeAdditions": "(любой меч)"
    }
  },
  {
    "en": {
      "name": "HORN OF BLASTING",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "You can use an action to speak the horn's command word and then blow the horn, which emits a thunderou blast in a 30-foot cone that is audible 600 feet away. <br>Each creature in the cone must make a DC 15 <br>Constitution saving throw. On a failed save, a creature ra kes 5d6 thunder damage and is deafened for 1 minute. <br>On a successful save, a creature takes half as much damage and isn't deafened. Creatures and objects made of glass or crystal have disadvantage on the saving throw and take 10d6 thunder damage instead of 5d6. <br>Each use of the horn's magic has a 20 percent chance of causing the horn to explode. The explosion deals 10d6 fire damage to the blower and destroys the horn.",
      "source": "DMG",
      "img": "HORN_OF_BLASTING.jpg"
    },
    "ru": {
      "name": "Рог взрыва",
      "text": "Вы можете действием произнести командное слово рога и подуть в него, испуская взрыв 30-футовым конусом, слышимый на расстоянии 600 футов. Все существа в конусе должны совершить спасбросок Телосложения со Сл 15. При провале существо получает урон звуком 5к6 и становится оглохшим на 1 минуту. При успехе существо получает половину урона и не становится оглохшим. Существа и предметы, изготовленные из стекла или кристаллов, спасбросок совершают с помехой и получают урон звуком 10к6, а не 5к6. <br>При каждом использовании магии рога существует 20-процентный шанс, что он взорвётся. Взрыв причиняет урон огнём 10к6 тому, кто в него дул, и уничтожает рог."
    }
  },
  {
    "en": {
      "name": "HORN OF VALHALLA",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(silver or brass)",
      "text": "You can use an action to blow this horn. In response, warrior spirits from the plane ofYsgard appear within 60 feet of you. These spirits use the berserker statistics 'rom the Monster Manual. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed. <br>Four types of horn of Valhalla are known to exist, each made of a different metal. The horn's type determines how many berserkers answer its summons, as well as £he requirement for its use. The DM chooses the horn's rype or determines it randomly. <br><table><tr><td>dlOO</td><td>Horn Type</td><td>Summoned</td><td>Requirement</td></tr><tr><td>01-40</td><td>Silver</td><td>2d4 + 2</td><td>None</td></tr><tr><td>41-75</td><td>Brass</td><td>3d4 + 3</td><td>Proficiency with all simple weapons</td></tr><tr><td>76-90</td><td>Bronze</td><td>4d4 + 4</td><td>Proficiency with all medium armor</td></tr><tr><td>91-00</td><td>Iron 5d4 + 5</td><td>Proficiency with all martial weapons</td></tr></table><br>If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands.",
      "source": "DMG",
      "img": "HORN_OF_VALHALLA.jpg"
    },
    "ru": {
      "name": "Рог Валгаллы",
      "attunement": "(серебрянный или медный)",
      "text": "Вы можете действием подуть в этот рог. После этого в пределах 60 футов от вас появляются духи воителей с плана Асгард. Эти духи используют статистику берсерков из Бестиария. Они возвращаются в Асгард через 1 час, или когда их хиты опускаются до 0. <br>Рог нельзя использовать повторно, пока не пройдёт 7 дней. <br>Существует четыре вида рогов Валгаллы, изготовленных из разных материалов. Вид рога определяет, сколько берсерков будет призвано, а также требования для их использования. Мастер определяет вид рога самостоятельно или случайным образом. <br>Если вы подуете в рог, не выполняя требований, призванные берсерки нападут на вас. Если вы выполняете требования, они будут дружественны к вам и вашим спутникам, и будут выполнять ваши команды. <br><table><tr><td>к100</td><td>Вид рога</td><td>Берсерки</td><td>Требование</td></tr><tr><td>01–40</td><td>Серебряный</td><td>2к4 + 2</td><td>Нет</td></tr><tr><td>41–75</td><td>Латунный</td><td>3к4 + 3</td><td>Владение всеми видами простого оружия</td></tr><tr><td>76–90</td><td>Бронзовый</td><td>4к4 + 4</td><td>Владение всеми видами средних доспехов</td></tr><tr><td>91–00</td><td>Железный</td><td>5к4 + 5</td><td>Владение всеми видами воинского оружия</td></tr></table>"
    }
  },
  {
    "en": {
      "name": "HORSESHOES OF A ZEPHYR",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they allow the creature to move normally while floating 4 inches above the ground. This effect means the cre.ature can cross or stand above nonsolid or unstable surfaces, such as water or lava. The creature leaves no tracks and ignores difficult terrain. In addition, the creature can move at normal speed for up to 12 hours a day without suffering exhaustion from a forced march.",
      "source": "DMG",
      "img": "HORSESHOES_OF_A_ZEPHYR.jpg"
    },
    "ru": {
      "name": "Подковы ветра",
      "text": "Эти железные подковы изготавливаются комплектом по четыре штуки. Если все четыре прикрепить к копытам лошади или подобного существа, они позволят ему перемещаться как обычно, но паря в 4 дюймах от земли. Этот эффект позволяет существу пересекать нетвёрдые и неустойчивые субстанции, такие как вода и лава, а также стоять на них. Существо не оставляет следы и игнорирует труднопроходимую местность. Кроме того, оно может перемещаться с обычной скоростью до 12 часов в день, не получая истощение за форсированный марш."
    }
  },
  {
    "en": {
      "name": "HORSESHOES OF SPEED",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 feet.",
      "source": "DMG",
      "img": "HORSESHOES_OF_SPEED.jpg"
    },
    "ru": {
      "name": "Подковы скорости",
      "text": "Эти железные подковы изготавливаются комплектом по четыре штуки. Если все четыре прикрепить к копытам лошади или подобного существа, они увеличивают скорость ходьбы этого существа на 30 футов."
    }
  },
  {
    "en": {
      "name": "IMMOVABLE ROD",
      "type": "Rod",
      "rarity": 2,
      "text": "This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success.",
      "source": "DMG",
      "img": "IMMOVABLE_ROD.jpg"
    },
    "ru": {
      "name": "Неподвижный жезл",
      "text": "У этого прямого железного жезла есть кнопка на одном торце. Вы можете действием нажать эту кнопку, после чего жезл становится магическим образом зафиксирован в текущей точке пространства. Пока вы или другое существо не нажмёте эту кнопку ещё раз, жезл не может быть сдвинут с места, игнорируя при этом даже гравитацию. Жезл может выдержать до 8000 фунтов веса. Больший вес деактивирует жезл, и тогда тот падает. Существо может действием совершить проверку Силы со Сл 30, сдвигая зафиксированный жезл на 10 футов в случае успеха."
    }
  },
  {
    "en": {
      "name": "Anstruth harp (INSTRUMENT OF THE BARDS)",
      "img": "ANSTRUTH_HARP.jpg",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement by a bard)",
      "text": "An instrument of the bards is an exquisite example of it kind, superior to an ordinary instrument in every way. <br>Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage. <br>You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC. <br>When you use the instrument to cast a spell that causes targets to become charmed on a failed save, the targets have disadvantage on the saving throw. This effect applies whether you are using the instrument as the source of the spell or as a spellcasting focus.<br> <a href='https://tentaculus.ru/spells/#q=Fly'>Fly</a>, <a href='https://tentaculus.ru/spells/#q=Control_weather'>Control weather</a>, <a href='https://tentaculus.ru/spells/#q=cure_wounds'>cure wounds</a> (5th level), <a href='https://tentaculus.ru/spells/#q=wall_of_thorns'>wall of thorns</a> <a href='https://tentaculus.ru/spells/#q=invisibility'>invisibility</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>levitate</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>protection from evil and good</a>",
      "source": "DMG"
    },
    "ru": {
      "name": "Арфа Анструт (Инструмент бардов)",
      "attunement": "(требует настройки бардом)",
      "text": "Инструмент бардов это прекрасный образец музыкального инструмента, во всём превосходящий обычные аналоги. Есть семь разновидностей таких инструментов, каждый назван в честь одной из легендарных коллегий бардов. В приведённом списке указаны заклинания, общие для всех инструментов, а также заклинания, специфичные для каждого инструмента, а также редкость этих инструментов. Существо, пытающееся играть на инструменте, не будучи настроенным на него, должно преуспеть в спасброске Мудрости со Сл 15, иначе получит урон психической энергией 2к4. <br>Вы можете действием сыграть на инструменте и наложить одно из его заклинаний. После того как инструмент использован для наложения заклинания, он не может повторно накладывать это заклинание до следующего рассвета. Заклинания используют вашу базовую характеристику и Сл спасбросков от ваших заклинаний. <br>Если вы использовали инструмент для накладывания заклинания, которое делает цель очарованной при провале спасброска, цель совершает этот спасбросок с помехой. Этот эффект применяется вне зависимости от того, использовали ли вы инструмент в качестве источника заклинания или в качестве заклинательной фокусировки.<br> Заклинания инструмента: <a href='https://tentaculus.ru/spells/#q=Fly'>полёт</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>невидимость</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>левитация,</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>защита от добра и зла</a>, <a href='https://tentaculus.ru/spells/#q=Control_weather'>власть над погодой</a>, <a href='https://tentaculus.ru/spells/#q=cure_wounds'>лечение ран</a> (5 уровень), <a href='https://tentaculus.ru/spells/#q=wall_of_thorns'>терновая стена</a>"
    }
  },
  {
    "en": {
      "name": "Canaith mandolin (INSTRUMENT OF THE BARDS)",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement by a bard)",
      "text": "An instrument of the bards is an exquisite example of it kind, superior to an ordinary instrument in every way. <br>Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage. <br>You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC. <br>When you use the instrument to cast a spell that causes targets to become charmed on a failed save, the targets have disadvantage on the saving throw. This effect applies whether you are using the instrument as the source of the spell or as a spellcasting focus.<br> <a href='https://tentaculus.ru/spells/#q=Fly'>Fly</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>invisibility</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>levitate</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>protection from evil and good</a>,  <a href='https://tentaculus.ru/spells/#q=Cure_wounds'>Cure wounds</a> (3rd level), <a href='https://tentaculus.ru/spells/#q=dispel_magic'>dispel magic</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_energy'>protection_from_energy</a> (lightning only) ",
      "source": "DMG",
      "img": "CANAITH_MANDOLIN.jpg"
    },
    "ru": {
      "name": "Мандолина Канаит (Инструмент бардов)",
      "attunement": "(требует настройки бардом)",
      "text": "Инструмент бардов это прекрасный образец музыкального инструмента, во всём превосходящий обычные аналоги. Есть семь разновидностей таких инструментов, каждый назван в честь одной из легендарных коллегий бардов. В приведённом списке указаны заклинания, общие для всех инструментов, а также заклинания, специфичные для каждого инструмента, а также редкость этих инструментов. Существо, пытающееся играть на инструменте, не будучи настроенным на него, должно преуспеть в спасброске Мудрости со Сл 15, иначе получит урон психической энергией 2к4. <br>Вы можете действием сыграть на инструменте и наложить одно из его заклинаний. После того как инструмент использован для наложения заклинания, он не может повторно накладывать это заклинание до следующего рассвета. Заклинания используют вашу базовую характеристику и Сл спасбросков от ваших заклинаний. <br>Если вы использовали инструмент для накладывания заклинания, которое делает цель очарованной при провале спасброска, цель совершает этот спасбросок с помехой. Этот эффект применяется вне зависимости от того, использовали ли вы инструмент в качестве источника заклинания или в качестве заклинательной фокусировки.<br>  Заклинания инструмента:  <a href='https://tentaculus.ru/spells/#q=Fly'>полёт</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>невидимость</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>левитация,</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>защита от добра и зла</a>, <a href='https://tentaculus.ru/spells/#q=Cure_wounds'>лечение ран</a> (3 уровень), <a href='https://tentaculus.ru/spells/#q=dispel_magic'>рассеивание магии</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_energy'>Защита от энергии</a> (только электричество)"
    }
  },
  {
    "en": {
      "name": "Cli lyre (INSTRUMENT OF THE BARDS)",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement by a bard)",
      "text": "An instrument of the bards is an exquisite example of it kind, superior to an ordinary instrument in every way. <br>Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage. <br>You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC. <br>When you use the instrument to cast a spell that causes targets to become charmed on a failed save, the targets have disadvantage on the saving throw. This effect applies whether you are using the instrument as the source of the spell or as a spellcasting focus.<br> <a href='https://tentaculus.ru/spells/#q=Fly'>Fly</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>invisibility</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>levitate</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>protection from evil and good</a>,  <a href='https://tentaculus.ru/spells/#q=Stone_shape'>Stone shape</a>, <a href='https://tentaculus.ru/spells/#q=wall_of_fire'><a href='https://tentaculus.ru/spells/#q=wall_of_fire'>wall of fire</a></a>, <a href='https://tentaculus.ru/spells/#q=wind_wall'>wind wall</a>",
      "source": "DMG",
      "img": "CLI_LYRE.jpg"
    },
    "ru": {
      "name": "Лира Кли (Инструмент бардов)",
      "attunement": "(требует настройки бардом)",
      "text": "Инструмент бардов это прекрасный образец музыкального инструмента, во всём превосходящий обычные аналоги. Есть семь разновидностей таких инструментов, каждый назван в честь одной из легендарных коллегий бардов. В приведённом списке указаны заклинания, общие для всех инструментов, а также заклинания, специфичные для каждого инструмента, а также редкость этих инструментов. Существо, пытающееся играть на инструменте, не будучи настроенным на него, должно преуспеть в спасброске Мудрости со Сл 15, иначе получит урон психической энергией 2к4. <br>Вы можете действием сыграть на инструменте и наложить одно из его заклинаний. После того как инструмент использован для наложения заклинания, он не может повторно накладывать это заклинание до следующего рассвета. Заклинания используют вашу базовую характеристику и Сл спасбросков от ваших заклинаний. <br>Если вы использовали инструмент для накладывания заклинания, которое делает цель очарованной при провале спасброска, цель совершает этот спасбросок с помехой. Этот эффект применяется вне зависимости от того, использовали ли вы инструмент в качестве источника заклинания или в качестве заклинательной фокусировки.<br>  Заклинания инструмента: <a href='https://tentaculus.ru/spells/#q=Fly'>полёт</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>невидимость</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>левитация,</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>защита от добра и зла</a>, <a href='https://tentaculus.ru/spells/#q=Stone_shape'>изменение формы камня,</a>, <a href='https://tentaculus.ru/spells/#q=wall_of_fire'><a href='https://tentaculus.ru/spells/#q=wall_of_fire'>огненная стена</a></a>, <a href='https://tentaculus.ru/spells/#q=wind_wall'>стена ветров</a>"
    }
  },
  {
    "en": {
      "name": "Doss lute (INSTRUMENT OF THE BARDS)",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement by a bard)",
      "text": "An instrument of the bards is an exquisite example of it kind, superior to an ordinary instrument in every way. <br>Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage. <br>You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC. <br>When you use the instrument to cast a spell that causes targets to become charmed on a failed save, the targets have disadvantage on the saving throw. This effect applies whether you are using the instrument as the source of the spell or as a spellcasting focus.<br> <a href='https://tentaculus.ru/spells/#q=Fly'>Fly</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>invisibility</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>levitate</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>protection from evil and good</a>, <a href='https://tentaculus.ru/spells/#q=Animal_friendship'>Animal friendship</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_energy'>protection from energy</a> (fire only), <a href='https://tentaculus.ru/spells/#q=protection_from_poison'>protection from poison</a>",
      "source": "DMG",
      "img": "DOSS_LUTE.jpg"
    },
    "ru": {
      "name": "Лютня Досс (Инструмент бардов)",
      "attunement": "(требует настройки бардом)",
      "text": "Инструмент бардов это прекрасный образец музыкального инструмента, во всём превосходящий обычные аналоги. Есть семь разновидностей таких инструментов, каждый назван в честь одной из легендарных коллегий бардов. В приведённом списке указаны заклинания, общие для всех инструментов, а также заклинания, специфичные для каждого инструмента, а также редкость этих инструментов. Существо, пытающееся играть на инструменте, не будучи настроенным на него, должно преуспеть в спасброске Мудрости со Сл 15, иначе получит урон психической энергией 2к4. <br>Вы можете действием сыграть на инструменте и наложить одно из его заклинаний. После того как инструмент использован для наложения заклинания, он не может повторно накладывать это заклинание до следующего рассвета. Заклинания используют вашу базовую характеристику и Сл спасбросков от ваших заклинаний. <br>Если вы использовали инструмент для накладывания заклинания, которое делает цель очарованной при провале спасброска, цель совершает этот спасбросок с помехой. Этот эффект применяется вне зависимости от того, использовали ли вы инструмент в качестве источника заклинания или в качестве заклинательной фокусировки.<br> Заклинания инструмента:  <a href='https://tentaculus.ru/spells/#q=Fly'>полёт</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>невидимость</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>левитация,</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>защита от добра и зла</a>, <a href='https://tentaculus.ru/spells/#q=Animal_friendship'>дружба с животными</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_energy'>защита от энергии</a> (только огонь), <a href='https://tentaculus.ru/spells/#q=protection_from_poison'>защита от яда</a>"
    }
  },
  {
    "en": {
      "name": "Fochlucan bandore (INSTRUMENT OF THE BARDS)",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement by a bard)",
      "text": "An instrument of the bards is an exquisite example of it kind, superior to an ordinary instrument in every way. <br>Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage. <br>You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC. <br>When you use the instrument to cast a spell that causes targets to become charmed on a failed save, the targets have disadvantage on the saving throw. This effect applies whether you are using the instrument as the source of the spell or as a spellcasting focus.<br> <a href='https://tentaculus.ru/spells/#q=Fly'>Fly</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>invisibility</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>levitate</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>protection from evil and good</a>, <a href='https://tentaculus.ru/spells/#q=Entangle'>Entangle</a>,<a href='https://tentaculus.ru/spells/#q=faerie_fire'>faerie fire</a>, <a href='https://tentaculus.ru/spells/#q=shillelagh'>shillelagh</a>,  <a href='https://tentaculus.ru/spells/#q=speak_with_animals'>speak with animals</a>",
      "source": "DMG",
      "img": "FOCHLUCAN_BANDORE.jpg"
    },
    "ru": {
      "name": "Бандура Фоклучан (Инструмент бардов)",
      "attunement": "(требует настройки бардом)",
      "text": "Инструмент бардов это прекрасный образец музыкального инструмента, во всём превосходящий обычные аналоги. Есть семь разновидностей таких инструментов, каждый назван в честь одной из легендарных коллегий бардов. В приведённом списке указаны заклинания, общие для всех инструментов, а также заклинания, специфичные для каждого инструмента, а также редкость этих инструментов. Существо, пытающееся играть на инструменте, не будучи настроенным на него, должно преуспеть в спасброске Мудрости со Сл 15, иначе получит урон психической энергией 2к4. <br>Вы можете действием сыграть на инструменте и наложить одно из его заклинаний. После того как инструмент использован для наложения заклинания, он не может повторно накладывать это заклинание до следующего рассвета. Заклинания используют вашу базовую характеристику и Сл спасбросков от ваших заклинаний. <br>Если вы использовали инструмент для накладывания заклинания, которое делает цель очарованной при провале спасброска, цель совершает этот спасбросок с помехой. Этот эффект применяется вне зависимости от того, использовали ли вы инструмент в качестве источника заклинания или в качестве заклинательной фокусировки.<br> Заклинания инструмента:  <a href='https://tentaculus.ru/spells/#q=Fly'>полёт</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>невидимость</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>левитация,</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>защита от добра и зла</a>, <a href='https://tentaculus.ru/spells/#q=Entangle'>опутывание</a>,<a href='https://tentaculus.ru/spells/#q=faerie_fire'>огонь фей</a>, <a href='https://tentaculus.ru/spells/#q=shillelagh'>дубинка</a>,  <a href='https://tentaculus.ru/spells/#q=speak_with_animals'>разговор с животными</a>"
    }
  },
  {
    "en": {
      "name": "Mac-Fuirmidh cittern (INSTRUMENT OF THE BARDS)",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement by a bard)",
      "attunement": "(требует настройки бардом)",
      "text": "An instrument of the bards is an exquisite example of it kind, superior to an ordinary instrument in every way. <br>Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage. <br>You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC. <br>When you use the instrument to cast a spell that causes targets to become charmed on a failed save, the targets have disadvantage on the saving throw. This effect applies whether you are using the instrument as the source of the spell or as a spellcasting focus.<br> <a href='https://tentaculus.ru/spells/#q=Fly'>Fly</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>invisibility</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>levitate</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>protection from evil and good</a>,  <a href='https://tentaculus.ru/spells/#q=Barkskin'>Barkskin</a>, <a href='https://tentaculus.ru/spells/#q=cure_wounds'>cure wounds</a>,<a href='https://tentaculus.ru/spells/#q=fog_cloud'>fog  cloud</a>",
      "source": "DMG",
      "img": "MAC-FUIRMIDH_CITTERN.jpg"
    },
    "ru": {
      "name": "Цитра Мак-Фуирмид (Инструмент бардов)",
      "text": "Инструмент бардов это прекрасный образец музыкального инструмента, во всём превосходящий обычные аналоги. Есть семь разновидностей таких инструментов, каждый назван в честь одной из легендарных коллегий бардов. В приведённом списке указаны заклинания, общие для всех инструментов, а также заклинания, специфичные для каждого инструмента, а также редкость этих инструментов. Существо, пытающееся играть на инструменте, не будучи настроенным на него, должно преуспеть в спасброске Мудрости со Сл 15, иначе получит урон психической энергией 2к4. <br>Вы можете действием сыграть на инструменте и наложить одно из его заклинаний. После того как инструмент использован для наложения заклинания, он не может повторно накладывать это заклинание до следующего рассвета. Заклинания используют вашу базовую характеристику и Сл спасбросков от ваших заклинаний. <br>Если вы использовали инструмент для накладывания заклинания, которое делает цель очарованной при провале спасброска, цель совершает этот спасбросок с помехой. Этот эффект применяется вне зависимости от того, использовали ли вы инструмент в качестве источника заклинания или в качестве заклинательной фокусировки.<br>  Заклинания инструмента: <a href='https://tentaculus.ru/spells/#q=Fly'>полёт</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>невидимость</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>левитация,</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>защита от добра и зла</a>, <a href='https://tentaculus.ru/spells/#q=Barkskin'>дубовая кора</a>, <a href='https://tentaculus.ru/spells/#q=cure_wounds'>лечение ран</a>, <a href='https://tentaculus.ru/spells/#q=fog_cloud'>туманное облако</a>"
    }
  },
  {
    "en": {
      "name": "Ollamh harp (INSTRUMENT OF THE BARDS)",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement by a bard)",
      "text": "An instrument of the bards is an exquisite example of it kind, superior to an ordinary instrument in every way. <br>Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage. <br>You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC. <br>When you use the instrument to cast a spell that causes targets to become charmed on a failed save, the targets have disadvantage on the saving throw. This effect applies whether you are using the instrument as the source of the spell or as a spellcasting focus.<br> <a href='https://tentaculus.ru/spells/#q=Fly'>Fly</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>invisibility</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>levitate</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>protection from evil and good</a>,  <a href='https://tentaculus.ru/spells/#q=Confusion'>Confusion</a>, <a href='https://tentaculus.ru/spells/#q=control_weather'>control weather</a>, <a href='https://tentaculus.ru/spells/#q=fire_storm'>fire storm</a> ",
      "source": "DMG",
      "img": "OLLAMH_HARP.jpg"
    },
    "ru": {
      "name": "Арфа Оллава (Инструмент бардов)",
      "attunement": "(требует настройки бардом)",
      "text": "Инструмент бардов это прекрасный образец музыкального инструмента, во всём превосходящий обычные аналоги. Есть семь разновидностей таких инструментов, каждый назван в честь одной из легендарных коллегий бардов. В приведённом списке указаны заклинания, общие для всех инструментов, а также заклинания, специфичные для каждого инструмента, а также редкость этих инструментов. Существо, пытающееся играть на инструменте, не будучи настроенным на него, должно преуспеть в спасброске Мудрости со Сл 15, иначе получит урон психической энергией 2к4. <br>Вы можете действием сыграть на инструменте и наложить одно из его заклинаний. После того как инструмент использован для наложения заклинания, он не может повторно накладывать это заклинание до следующего рассвета. Заклинания используют вашу базовую характеристику и Сл спасбросков от ваших заклинаний. <br>Если вы использовали инструмент для накладывания заклинания, которое делает цель очарованной при провале спасброска, цель совершает этот спасбросок с помехой. Этот эффект применяется вне зависимости от того, использовали ли вы инструмент в качестве источника заклинания или в качестве заклинательной фокусировки.<br>  Заклинания инструмента: <a href='https://tentaculus.ru/spells/#q=Fly'>полёт</a>, <a href='https://tentaculus.ru/spells/#q=invisibility'>невидимость</a>, <a href='https://tentaculus.ru/spells/#q=levitate'>левитация,</a>, <a href='https://tentaculus.ru/spells/#q=protection_from_evil_and_good'>защита от добра и зла</a>, <a href='https://tentaculus.ru/spells/#q=Confusion'>смятение,</a>, <a href='https://tentaculus.ru/spells/#q=control_weather'>власть над погодой</a>, <a href='https://tentaculus.ru/spells/#q=fire_storm'>огненная буря</a>"
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Absorption)",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br> While this pale lavender ellipsoid orbits your head, you can use your reaction to cancel a spell of 4th level or lower cast by a creature you can see and targeting only you. <br>Once the stone has canceled 20 levels of spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it.",
      "source": "DMG",
      "img": "IOUN_STONE_Absorption.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Поглощение)",
      "text": "Пока этот бледнолавандовый эллипсоид вращается вокруг вашей головы, вы можете реакцией отменить заклинание с уровнем не больше 4, наложенное видимым вами существом и нацеленное только на вас. <br>Как только камень отменит 20 уровней заклинаний, он выгорит и станет тускло-серым, потеряв всю магию. Если вы становитесь целью заклинания, чей уровень настолько большой, что камень не может поглотить его целиком, это заклинание нельзя отменить.<br> Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым."
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Agility)",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br> Your Dexterity score increases by 2, to a maximum of 20, while this deep red sphere orbits your head. ",
      "source": "DMG",
      "img": "IOUN_STONE_Agility.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Проворство)",
      "text": "Ваше значение Ловкости увеличивается на 2, с максимумом 20, пока эта тёмно-красная сфера вращается вокруг вашей головы.  <br> Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым."
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Awareness)",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br> You can't be surprised while this dark blue rhomboid orbits your head.",
      "source": "DMG",
      "img": "IOUN_STONE_Awareness.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Восприятие)",
      "text": " Вы не можете быть захвачены врасплох, пока этот тёмно-синий ромбоид вращается вокруг вашей головы. <br> Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым."
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Fortitude)",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br>Your Constitution score increases by 2, to a maximum of 20, while this pink rhomboid orbits your head. ",
      "source": "DMG",
      "img": "IOUN_STONE_Fortitude.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Стойкость)",
      "text": "Ваше значение Телосложения увеличивается на 2, с максимумом 20, пока этот розовый ромбоид вращается вокруг вашей головы.<br>Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым."
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Greater Absorption)",
      "type": "Wondrous item",
      "rarity": 5,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br>While this marbled lavender and green ellipsoid orbits your head, you can use your reaction to cancel a spell of 8th level or lower cast by a creature you can see and targeting only you. <br>Once the stone has canceled 50 levels of spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it.",
      "source": "DMG",
      "img": "IOUN_STONE_Greater_Absorption.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Большое поглощение)",
      "text": " Пока этот эллипсоид с зелёными и лавандовыми прожилками вращается вокруг вашей головы, вы можете реакцией отменить заклинание с уровнем не больше 8, наложенное видимым вами существом и нацеленное только на вас. <br>Как только камень отменит 50 уровней заклинаний, он выгорит и станет тускло-серым, потеряв всю магию. Если вы становитесь целью заклинания, чей уровень настолько большой, что камень не может поглотить его целиком, это заклинание нельзя отменить. <br>Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым."
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Insight)",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br> Your Wisdom score increases by 2, to a maximum of 20, while this incandescent blue sphere orbits your head. ",
      "source": "DMG",
      "img": "IOUN_STONE_Insight.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Проницательность)",
      "text": "Ваше значение Мудрости увеличивается на 2, с максимумом 20, пока эта ярко-синяя сфера вращается вокруг вашей головы. <br> Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым."
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Intellect)",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br> Your Intelligence score increases by 2, to a maximum of 20, while this marbled scarlet and blue sphere orbits your head. ",
      "source": "DMG",
      "img": "IOUN_STONE_Intellect.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Рассудок)",
      "text": "Ваше значение Интеллекта увеличивается на 2, с максимумом 20, пока эта сфера с алыми и синими прожилками вращается вокруг вашей головы. <br>Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым. "
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Leadership)",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br>Your Charisma score increases by 2, to a maximum of 20, while this marbled pink and green sphere orbits your head. ",
      "source": "DMG",
      "img": "IOUN_STONE_Leadership.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Лидерство)",
      "text": "Ваше значение Харизмы увеличивается на 2, с максимумом 20, пока эта сфера с розовыми и зелёными прожилками вращается вокруг вашей головы. <br>Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым. "
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Mastery)",
      "type": "Wondrous item",
      "rarity": 5,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br> Your proficiency bonus increases by 1 while this pale green prism orbits your head. <br><b>Protection (Rare).</b> You gain a +1 bonus to AC while this dusty rose prism orbits your head. ",
      "source": "DMG",
      "img": "IOUN_STONE_Mastery.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Мастерство)",
      "text": " Ваш бонус мастерства увеличивается на 1, пока эта бледно-зелёная призма вращается вокруг вашей головы. <br>Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым. "
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Protection)",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br> You gain a +1 bonus to AC while this dusty rose prism orbits your head. ",
      "source": "DMG",
      "img": "IOUN_STONE_Protection.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Защита)",
      "text": "Вы получаете бонус +1 к КД, пока эта серо-розовая призма вращается вокруг вашей головы. <br> Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым."
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Regeneration)",
      "type": "Wondrous item",
      "rarity": 5,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br> You regain 15 hit points at the end of each hour this pearly white spindle orbits your head, provided that you have at least 1 hit point. ",
      "source": "DMG",
      "img": "IOUN_STONE_Regeneration.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Регенерация)",
      "text": "Вы восстанавливаете 15 хитов в конце каждого часа, в течение которого этот жемчужно-белый веретенообразный камень вращается вокруг вашей головы, при условии, что у вас есть как минимум 1 хит.<br>Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым. "
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Reserve)",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br> This vibrant purple prism stores spells cast into it, holding them until you use them. The stone can store up to 3 levels worth of spells at a time. <br>When found, it contains ld4 - 1 levels of stored spells chosen by the DM. <br>Any creature can cast a spell of 1st through 3rd level into the stone by touching it as the spell is cast. The s pell has no effect, other than to be stored in the stone. <br>If the stone can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses. <br>While this stone orbits your head, you can cast any spell stored in it. The spell uses the slot level, spell save <br>DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the stone is no longer stored in it, freeing up space. ",
      "source": "DMG",
      "img": "IOUN_STONE_Reserve.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Резерв)",
      "text": " Эта ярко-фиолетовая призма хранит заклинания, наложенные в неё, пока вы не используете их. Этот камень может хранить до 3 уровней заклинаний одновременно. Когда его находят, он хранит 1к4 − 1 уровень заклинаний, выбранных Мастером. <br>Любое существо может заложить в камень заклинание с уровнем от 1 до 3, касаясь его при накладыщается в камень. Если камень не может уместить заклинание, заклинание тратится безо всякого эффекта. Занимаемое число уровней определяется уровнем, с которым заклинание было наложено. <br>Пока этот камень вращается вокруг вашей головы, вы можете наложить заклинание, хранящееся в нём. <br>Заклинание использует уровень ячейки, Сл спасброска, бонус атаки заклинанием и базовую характеристику исходного заклинателя, но во всём остальном считается, что заклинание наложили вы. Наложенное заклинание перестаёт храниться в камне, освобождая пространство. <br>Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым. "
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Strength)",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br> Your Strength score increases by 2, to a maximum of 20, while this pale blue rhomboid orbits your head. ",
      "source": "DMG",
      "img": "IOUN_STONE_Strength.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Сила)",
      "text": "Ваше значение Силы увеличивается на 2, с максимумом 20, пока этот бледносиний ромбоид вращается вокруг вашей головы. <br>Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым. "
    }
  },
  {
    "en": {
      "name": "IOUN STONE (Sustenance)",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color. <br>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of ld3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect. <br>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head. <br>You don't need to eat or drink while this clear spindle orbits your head.",
      "source": "DMG",
      "img": "IOUN_STONE_Sustenance.jpg"
    },
    "ru": {
      "name": "Камень Йоун (Питание)",
      "text": " Вам не нужно ни есть и ни пить, пока этот прозрачный веретенообразный камень вращается вокруг вашей головы. <br>Камень Йоун назван в честь богини знаний и пророчеств, почитаемой в нескольких мирах. Существует много разновидностей камней Йоун, все они отличаются по форме и цвету. <br>Если вы действием подбрасываете один из этих камней в воздух, он начинает вращаться вокруг вашей головы на расстоянии 1к3 футов, предоставляя вам постоянное преимущество. Впоследствии другое существо может действием схватить руками или чем-то иным камень, забирая его себе, если совершит успешный бросок атаки по КД 24 или совершит успешную проверку Ловкости (Акробатика) со Сл 24. <br>Вы сами можете действием схватить и убрать камень, оканчивая его эффект. <br>У камня КД 24, 10 хитов и сопротивление ко всем видам урона. Пока он вращается вокруг вашей головы, он считается носимым. "
    }
  },
  {
    "en": {
      "name": "IRON BANDS OF BILARRO",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "This rusty iron sphere measures 3 inches in diameter and weighs 1 pound. You can use an action to speak the command word and throw the sphere at a Huge or smaller creature you can see within 60 feet of you. As the sphere moves through the air, it opens into a tangle of metal bands. <br>Make a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your proficiency bonus. <br>On a hit, the target is restrained until you take a bonus action to speak the command word again to release it. <br>Doing so, or missing with the attack, causes the bands to contract and become a sphere once more. <br>A creature, including the one restrained, can use an action to make a DC 20 Strength check to break the iron bands. On a success, the item is destroyed, and the restrained creature is freed. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed. <br>Once the bands are used, they can't be used again until the next dawn.",
      "source": "DMG",
      "img": "IRON_BANDS_OF_BILARRO.jpg"
    },
    "ru": {
      "name": "Железные ленты Биларро",
      "text": "Это ржавая железная сфера диаметром 3 дюйма, весящая 1 фунт. Вы можете действием произнести командное слово и бросить сферу в существо с размером не больше Огромного, которое видите в пределах 60 футов от себя. В полёте сфера распадается на отдельные металлические ленты. <br>Совершите бросок дальнобойной атаки с бонусом броска атаки, равным модификатору Ловкости плюс ваш бонус мастерства. При попадании цель становится опутанной, пока вы не произнесёте командное слово ещё раз бонусным действием. После повторного произношения командного слова или промаха атаки ленты сжимаются и снова становятся сферой. <br>Любое существо, в том числе и опутанное, может действием совершить проверку Силы со Сл 20, чтобы порвать ленты. При успехе предмет уничтожается, а удерживаемое существо освобождается. При провале все дальнейшие попытки этого существа автоматически проваливаются в течение 24 часов. <br>Железные ленты нельзя использовать повторно до следующего рассвета."
    }
  },
  {
    "en": {
      "name": "IRON FLASK",
      "type": "Wondrous item",
      "rarity": 5,
      "text": "This iron bottle has a brass stopper. You can use an action to speak the flask's command word, targeting a creature that you can see within 60 feet of you. If the target is native to a plane of existence other than the one you're on, the target must succeed on a DC 17 Wisdom saving throw or be trapped in the flask. If the target has been trapped by the flask before, it has advantage on the saving throw. Once trapped, a creature remains in the flask until released. The flask can hold only one creature at a time. A creature trapped in the flask doesn't need to breathe, eat, or drink and doesn't age. <br>You can use an action to remove the flask's stopper and release the creature the flask contains. The creature is friendly to you and your companions for 1 hour and obeys your commands for that duration. If you give no commands or give it a command that is likely to result in its death, it defends itself but otherwise takes no actions. At the end of the duration, the creature acts in accordance with its normal disposition and alignment. <br>An <a href='https://tentaculus.ru/spells/#q=identify'>identify</a> spell reveals that a creature is inside the flask, but the only way to determine the type of creature is to open the flask. A newly discovered bottle might already contain a creature chosen by the DM or determined randomly. <br> <table><tr><td>dlOO</td><td>Contents</td></tr><tr><td>01-50</td><td>Empty</td></tr><tr><td>51</td><td><a href='https://tentaculus.ru/monsters/#q=Arcanaloth'>Arcanaloth</a></td></tr><tr><td>52</td><td><a href='https://tentaculus.ru/monsters/#q=Cambion'>Cambion</a></td></tr><tr><td>53-54</td><td><a href='https://tentaculus.ru/monsters/#q=Dao'>Dao</a></td></tr><tr><td>55-57</td><td><a href='https://tentaculus.ru/monsters/#q=barlgura,shadow_demon,vrock'>Demon</a>(type 1)</td></tr><tr><td>58-60</td><td><a href='https://tentaculus.ru/monsters/#q=chasme,hezrou'>Demon </a>(type 2)</td></tr><tr><td>61-62</td><td><a href='https://tentaculus.ru/monsters/#q=glabrezu,yochlol'>Demon </a>(type 3)</td></tr><tr><td>63-64</td><td><a href='https://tentaculus.ru/monsters/#q=nalfeshnee'>Demon </a>(type 4)</td></tr><tr><td>65</td><td><a href='https://tentaculus.ru/monsters/#q=marilith'>Demon </a>(type 5)</td></tr><tr><td>66</td><td><a href='https://tentaculus.ru/monsters/#q=balor,goristro'>Demon </a>(type 6)</td></tr><tr><td>67</td><td><a href='https://tentaculus.ru/monsters/#q=Deva'>Deva</a></td></tr><tr><td>68-69</td><td><a href='https://tentaculus.ru/monsters/#q=Devil'>Devil </a>(greater)</td></tr><tr><td>70-72</td><td><a href='https://tentaculus.ru/monsters/#q=Devil'>Devil </a>(lesser)</td></tr><tr><td>73-74</td><td><a href='https://tentaculus.ru/monsters/#q=Djinni'>Djinni</a></td></tr><tr><td>75-76</td><td><a href='https://tentaculus.ru/monsters/#q=Efreeti'>Efreeti</a></td></tr><tr><td>77-78</td><td><a href='https://tentaculus.ru/monsters/#q=Elemental'>Elemental </a>(any)</td></tr><tr><td>79</td><td><a href='https://tentaculus.ru/monsters/#q=Githyanki_knight'>Githyanki knight</a></td></tr><tr><td>80</td><td><a href='https://tentaculus.ru/monsters/#q=Githzerai_zerth'>Githzerai zerth</a></td></tr><tr><td>81-82</td><td><a href='https://tentaculus.ru/monsters/#q=Invisible_stalker'>Invisible stalker</a></td></tr><tr><td>83-84</td><td><a href='https://tentaculus.ru/monsters/#q=Marid'>Marid</a></td></tr><tr><td>85-86</td><td><a href='https://tentaculus.ru/monsters/#q=Mezzoloth'>Mezzoloth</a></td></tr><tr><td>87-88</td><td><a href='https://tentaculus.ru/monsters/#q=Night_hag'>Night hag</a></td></tr><tr><td>89-90</td><td><a href='https://tentaculus.ru/monsters/#q=Nycaloth'>Nycaloth</a></td></tr><tr><td>91</td><td><a href='https://tentaculus.ru/monsters/#q=Planetar'>Planetar</a></td></tr><tr><td>92-93</td><td><a href='https://tentaculus.ru/monsters/#q=Salamander'>Salamander</a></td></tr><tr><td>94-95</td><td><a href='https://tentaculus.ru/monsters/#q=Slaad'>Slaad </a>(any)</td></tr><tr><td>96</td><td><a href='https://tentaculus.ru/monsters/#q=Solar'>Solar</a></td></tr><tr><td>97-98</td><td><a href='https://tentaculus.ru/monsters/#q=Succubus/incubus'>Succubus/incubus</a></td></tr><tr><td>99</td><td><a href='https://tentaculus.ru/monsters/#q=Ultroloth'>Ultroloth</a></td></tr><tr><td>00</td><td><a href='https://tentaculus.ru/monsters/#q=Xorn'>Xorn</a></td></tr></table>",
      "source": "DMG",
      "img": "IRON_FLASK.jpg"
    },
    "ru": {
      "name": "Железная фляга",
      "text": "У этой железной бутылки латунная пробка. Вы можете действием произнести командное слово фляги и выбрать целью существо, которое видите в пределах 60 футов от себя. Если цель родом не с того плана существования, на котором вы находитесь, она должна преуспеть в спасброске Мудрости со Сл 17, иначе будет заточена во фляге. Если цель раньше уже была заточена такой флягой, спасбросок она совершает с преимуществом. Заточённое существо остаётся во фляге, пока не будет выпущено. Во фляге может одновременно находиться только одно существо. Заточённое существо не обязано ни дышать, ни есть, ни спать, и оно не стареет. <br>Вы можете действием вынуть пробку фляги и выпустить существо, находящееся в ней. Оно будет дружественно относиться к вам и вашим спутникам в течение 1 часа и повинуется вашим командам в течение этого времени. Если вы не отдаёте ему команд или отдаёте команду, которая весьма вероятно закончится его смертью, оно будет обороняться, но не будет совершать других действий. В конце этого периода существо действует согласно своему обычному характеру и мировоззрению. <br>Заклинание <a href='https://tentaculus.ru/spells/#q=identify'>опознание</a> показывает, находится ли во фляге существо, но единственный способ определить вид существа это вскрытие фляги. В найденной фляге уже может находиться существо, определённое <br>Мастером самостоятельно или случайным образом.<br> <table><tr><td>dlOO</td><td>Содержимое</td></tr><tr><td>01-50</td><td>Пустая</td></tr><tr><td>51</td><td><a href='https://tentaculus.ru/monsters/#q=Arcanaloth'>Арканалот</a></td></tr><tr><td>52</td><td><a href='https://tentaculus.ru/monsters/#q=Cambion'>Камбион</a></td></tr><tr><td>53-54</td><td><a href='https://tentaculus.ru/monsters/#q=Dao'>Дао</a></td></tr><tr><td>55-57</td><td><a href='https://tentaculus.ru/monsters/#q=barlgura,shadow_demon,vrock'>Демон</a>(вид 1)</td></tr><tr><td>58-60</td><td><a href='https://tentaculus.ru/monsters/#q=chasme,hezrou'>Демон </a>(вид 2)</td></tr><tr><td>61-62</td><td><a href='https://tentaculus.ru/monsters/#q=glabrezu,yochlol'>Демон </a>(вид 3)</td></tr><tr><td>63-64</td><td><a href='https://tentaculus.ru/monsters/#q=nalfeshnee'>Демон </a>(вид 4)</td></tr><tr><td>65</td><td><a href='https://tentaculus.ru/monsters/#q=marilith'>Демон </a>(вид 5)</td></tr><tr><td>66</td><td><a href='https://tentaculus.ru/monsters/#q=balor,goristro'>Демон </a>(вид 6)</td></tr><tr><td>67</td><td><a href='https://tentaculus.ru/monsters/#q=Deva'>Дэв</a></td></tr><tr><td>68-69</td><td><a href='https://tentaculus.ru/monsters/#q=Devil'>Дьявол </a>(greater)</td></tr><tr><td>70-72</td><td><a href='https://tentaculus.ru/monsters/#q=Devil'>Дьявол </a>(lesser)</td></tr><tr><td>73-74</td><td><a href='https://tentaculus.ru/monsters/#q=Djinni'>Джинн</a></td></tr><tr><td>75-76</td><td><a href='https://tentaculus.ru/monsters/#q=Efreeti'>Ифрит</a></td></tr><tr><td>77-78</td><td><a href='https://tentaculus.ru/monsters/#q=Elemental'>Элементаль </a>(any)</td></tr><tr><td>79</td><td><a href='https://tentaculus.ru/monsters/#q=Githyanki_knight'>Гитъянки рыцарь</a></td></tr><tr><td>80</td><td><a href='https://tentaculus.ru/monsters/#q=Githzerai_zerth'>Гитцерай зерт</a></td></tr><tr><td>81-82</td><td><a href='https://tentaculus.ru/monsters/#q=Invisible_stalker'>Невидимый охотник</a></td></tr><tr><td>83-84</td><td><a href='https://tentaculus.ru/monsters/#q=Marid'>Марид</a></td></tr><tr><td>85-86</td><td><a href='https://tentaculus.ru/monsters/#q=Mezzoloth'>Меззолот</a></td></tr><tr><td>87-88</td><td><a href='https://tentaculus.ru/monsters/#q=Night_hag'>Ночная карга</a></td></tr><tr><td>89-90</td><td><a href='https://tentaculus.ru/monsters/#q=Nycaloth'>Никалот</a></td></tr><tr><td>91</td><td><a href='https://tentaculus.ru/monsters/#q=Planetar'>Планетар</a></td></tr><tr><td>92-93</td><td><a href='https://tentaculus.ru/monsters/#q=Salamander'>Саламандра</a></td></tr><tr><td>94-95</td><td><a href='https://tentaculus.ru/monsters/#q=Slaad'>Слаад </a>(any)</td></tr><tr><td>96</td><td><a href='https://tentaculus.ru/monsters/#q=Solar'>Солар</a></td></tr><tr><td>97-98</td><td><a href='https://tentaculus.ru/monsters/#q=Succubus/incubus'>Суккуб/инкуб</a></td></tr><tr><td>99</td><td><a href='https://tentaculus.ru/monsters/#q=Ultroloth'>Ультролот</a></td></tr><tr><td>00</td><td><a href='https://tentaculus.ru/monsters/#q=Xorn'>Зорн</a></td></tr></table>"
    }
  },
  {
    "en": {
      "name": "JAVELIN OF LIGHTNING",
      "type": "Weapon",
      "typeAdditions": "(javelin)",
      "rarity": 2,
      "text": "This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 <br>Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage. <br>The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
      "source": "DMG",
      "img": "JAVELIN_OF_LIGHTNING.jpg"
    },
    "ru": {
      "name": "Метательное копьё молнии",
      "text": "Это метательное копьё — магическое оружие. Если вы метнёте его и произнесёте его командное слово, оно превратится в молнию, формируя линию шириной 5 футов и простирающуюся от вас до цели, находящейся в пределах 120 футов. Все существа в этой линии, исключая вас и цель, должны совершить спасбросок Ловкости со Сл 13, получая урон электричеством 4к6 при провале или половину этого урона при успехе. <br>Молния снова становится копьём, когда достигает цели. Совершите дальнобойную атаку оружием по цели. При попадании цель получает урон от метательного копья плюс урон электричеством 4к6. <br>Это свойство метательного копья нельзя использовать повторно до следующего рассвета. Однако оно всё равно может использоваться как магическое оружие.",
      "typeAdditions": "(метательное копье)"
    }
  },
  {
    "en": {
      "name": "KEOGHTOM'S OINTMENT",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This glass jar, 3 inches in diameter, contains 1d4 + 1 doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh 1/2 pound. <br>As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8 + 2 hit points, ceases to be poisoned, and is cured of any disease.",
      "source": "DMG",
      "img": "KEOGHTOMS_OINTMENT.jpg"
    },
    "ru": {
      "name": "Мазь Кеогтома",
      "text": "Это стеклянная банка, три дюйма в диаметре, содержит 1к4 + 1 доз густой мази, которая слабо пахнет алоэ. Банка и её содержимое весят 0,5 фунта. <br>Действием можно проглотить или нанести на кожу одну дозу мази. Существо, которое делает так, восстанавливает 2к8 + 2 хита, перестаёт быть отравленным и излечивается от всех болезней."
    }
  },
  {
    "en": {
      "name": "LANTERN OF REVEALING",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "While lit, this hooded lantern burns for 6 hours on 1 pint of o'il, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius.",
      "source": "DMG",
      "img": "LANTERN_OF_REVEALING.jpg"
    },
    "ru": {
      "name": "Фонарь обнаружения",
      "text": "Этот закрытый фонарь способен гореть в течение шести часов на одной пинте масла, распространяя яркий свет в радиусе 30 футов и тусклый свет в радиусе ещё 30 футов. Все невидимые предметы и существа становятся видимыми, если они находятся в ярком свете этого фонаря. Вы можете действием опустить козырёк, уменьшив освещение до тусклого света в пределах 5 футов."
    }
  },
  {
    "en": {
      "name": "LUCK BLADE",
      "type": "Weapon",
      "typeAdditions": "(any sword)",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "You gain a +1 bonus to attack and damage rolls made with this magic weapon. While the sword is on your person, you also gain a +1 bonus to saving throws. <br><b>Luck.</b> If the sword is on your person, you can call on its luck (no action required) to reroll one attack roll, ability check, or saving throw you dislike. You must use the second roll. This property can't be used again until the next dawn. <br><b>Wish.</b> The sword has 1d4- 1 charges. While holding it, you can use an action to expend 1 charge and cast the <a href='https://tentaculus.ru/spells/#q=wish'>wish</a> spell from it. This property can't be used again until the next dawn. The sword loses this property if it has no charges.",
      "source": "DMG",
      "img": "LUCK_BLADE.jpg"
    },
    "ru": {
      "name": "Клинок удачи",
      "text": "Вы получаете бонус +1 к броскам атаки и урона, совершённым этим магическим оружием. Пока это оружие находится у вас, вы также получаете бонус +1 к спасброскам. <br>Удача. Если этот меч находится у вас, вы можете воззвать к его удаче (действие не требуется), чтобы перебросить один бросок атаки, проверку характеристики или спасбросок, который вам не понравился. <br>Вы обязаны использовать результат второго броска. <br>Это свойство нельзя использовать повторно до следующего рассвета. <br>Исполнение желаний. У меча есть 1к4 − 1 заряд. <br>Если вы держите его, вы можете действием потратить 1 заряд, чтобы наложить им заклинание <a href='https://tentaculus.ru/spells/#q=wish'>исполнение желаний</a>. Это свойство нельзя использовать повторно до следующего рассвета. Меч теряет это свойство, когда у него не останется зарядов.",
      "typeAdditions": "(любой меч)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "MACE OF DISRUPTION",
      "type": "Weapon",
      "typeAdditions": "(mace)",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn. <br>While you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.",
      "source": "DMG",
      "img": "MACE_OF_DISRUPTION.jpg"
    },
    "ru": {
      "name": "Булава распада",
      "text": "Если вы попадаете этим магическим оружием по исчадию или нежити, это существо получает дополнительный урон излучением 2к6. Если у цели после получения этого урона 25 или меньше хитов, она должна преуспеть в спасброске Мудрости со Сл 15, иначе будет уничтожена. При успешном спасброске существо становится испуганным вами до конца вашего следующего хода. <br>Пока вы держите это оружие, оно излучает яркий свет в радиусе 20 футов и тусклый свет в радиусе ещё 20 футов.",
      "typeAdditions": "(булава)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "MACE OF SMITING",
      "type": "Weapon",
      "typeAdditions": "(mace)",
      "rarity": 3,
      "text": "You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct. <br>When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 bludgeoning damage, or an extra 14 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.",
      "source": "DMG",
      "img": "MACE_OF_SMITING.jpg"
    },
    "ru": {
      "name": "Булава кары",
      "text": "Вы получаете бонус +1 к броскам атаки и урона, совершённым этим магическим оружием. Бонус увеличивается до +3, если атакуется конструкт. <br>Если у вас выпадает «20» при броске атаки этим оружием, цель получает дополнительный дробящий урон 7 или дополнительный дробящий урон 14, если это был конструкт. Если у конструкта осталось 25 или меньше хитов после получения этого урона, он уничтожается.",
      "typeAdditions": "(булава)"
    }
  },
  {
    "en": {
      "name": "MACE OF TERROR",
      "type": "Weapon",
      "typeAdditions": "(mace)",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "This magic weapon has 3 charges. While holding it, you can use an action and expend 1 charge to release a wave of terror. Each creature of your choice in a 30-foo radius extending from you must succeed on a DC 15 <br>Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from y _ as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the savin; throw, ending the effect on itself on a success. <br>The mace regains 1d3 expended charges daily at dawn.",
      "source": "DMG",
      "img": "MACE_OF_TERROR.jpg"
    },
    "ru": {
      "name": "Булава ужаса",
      "text": "У этого оружия есть 3 заряда. Если вы его держите, вы можете действием потратить 1 заряд, чтобы испустить волну ужаса. Все существа на ваш выбор в пределах 30 футов должны преуспеть в спасброске Мудрости со Сл 15, иначе станут испуганными вами на 1 минуту. Будучи испуганным таким способом, существо должно тратить ходы на то, чтобы переместиться как можно дальше от вас, и не может добровольно перемещаться в пространство в пределах 30 футов от вас. Оно также не может совершать реакции. Из всех своих действий существо может использовать только <br>Рывок или пытаться освободиться от эффекта, препятствующего его передвижению. Если двигаться некуда, существо может использовать действие Уклонение. В конце каждого своего хода существо может повторять спасбросок, оканчивая эффект при успехе. <br>Булава ежедневно восстанавливает 1к3 заряда на рассвете.",
      "typeAdditions": "(булава)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "MANTLE OF SPELL RESISTANCE",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "You have advantage on saving throws against spells while you wear this cloak.",
      "source": "DMG",
      "img": "MANTLE_OF_SPELL_RESISTANCE.jpg"
    },
    "ru": {
      "name": "Мантия сопротивления заклинаниям",
      "text": "Вы совершаете с преимуществом спасброски от заклинаний, пока носите этот плащ.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "MANUAL OF BODILY HEALTH",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "This book contains health and diet tips, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Constitution score increases by 2, as does your maximum for that score. <br>The manual then loses its magic, but regains it in a century.",
      "source": "DMG",
      "img": "MANUAL_OF_BODILY_HEALTH.jpg"
    },
    "ru": {
      "name": "Справочник телесного здоровья",
      "text": "Эта книга содержит советы по здоровью и питанию, и её слова наполнены магией. Если вы потратите 48 часов за 6 дней на изучение содержимого книги и применение его на практике, ваше Телосложение, а также его максимум увеличатся на 2. После этого руководство теряет магию, но восстанавливает её через 100 лет."
    }
  },
  {
    "en": {
      "name": "MANUAL OF GAINFUL EXERCISE",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "This book describes fitness exercises, and its words are charged with magic. If you spend 48 hours over a peri of 6 days or fewer studying the book's contents and practicing its guidelines, your Strength score increase_ by 2, as does your maximum for that score. The manueL then loses its magic, but regains it in a century.",
      "source": "DMG",
      "img": "MANUAL_OF_GAINFUL_EXERCISE.jpg"
    },
    "ru": {
      "name": "Справочник полезных упражнений",
      "text": "Эта книга описывает упражнения по физкультуре, и её слова наполнены магией. Если вы потратите 48 часов за 6 дней на изучение содержимого книги и применение его на практике, ваша Сила, а также её максимум увеличатся на 2. После этого руководство теряет магию, но восстанавливает её через 100 лет."
    }
  },
  {
    "en": {
      "name": "MANUAL OF GOLEMS",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To deciph and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes 6d6 psychic damage. <br><table><tr><td>d20</td><td>Golem Time</td><td>Cost</td></tr><tr><td>1-5</td><td>Clay</td><td>30 days</td><td>65,000 gp</td></tr><tr><td>6-17</td><td>Flesh</td><td>60 days</td><td>50,000 gp</td></tr><tr><td>18</td><td>Iron</td><td>120 days</td><td>100,000 gp</td></tr><tr><td>19-20</td><td>Stone</td><td>90 days</td><td>80,000 gp</td></tr></table><br>To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies. <br>Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands. See the Monster Manual for its game statistics.",
      "source": "DMG",
      "img": "MANUAL_OF_GOLEMS.jpg"
    },
    "ru": {
      "name": "Справочник по големам",
      "text": "В этом томе находится информация и чары, необходимые для создания конкретного вида голема. Мастер сам выбирает вид голема или определяет его случайным образом. Для того чтобы расшифровать и использовать справочник, вы должны быть заклинателем с как минимум двумя ячейками заклинаний 5 уровня. Существо, которое не может использовать справочник по големам, но читает его, получает урон психической энергией 6к6.<br><table><tr><td>к20</td><td>Голем</td><td>Время</td><td>Стоимость</td></tr><tr><td>1–5</td><td>Глиняный</td><td>30 дней</td><td>65000 зм</td></tr><tr><td>6</td><td>Железный</td><td>120 дней</td><td>100000 зм</td></tr><tr><td>7–8</td><td>Каменный</td><td>90 дней</td><td>80000 зм</td></tr><tr><td>9–20</td><td>Мясной</td><td>60 дней</td><td>50000 зм</td></tr></table> <br>Для того чтобы создать голема, вы должны потратить время, указанное в таблице, работая без перерывов со справочником в руке, отдыхая не более 8 часов в день. Вы также должны оплатить указанную стоимость, приобретая расходные материалы. <br>После того как голем создан, книга исчезает в магическом пламени. Голем оживает, когда его натрут пеплом справочника. Он находится под вашим контролем, понимает ваши устные команды и выполняет их. Игровые характеристики смотрите в Бестиарии."
    }
  },
  {
    "en": {
      "name": "MANUAL OF QUICKNESS OF ACTION",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "This book contains coordination and balance exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying rhe book's contents and practicing its guidelines, your <br>Dexterity score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
      "source": "DMG",
      "img": "MANUAL_OF_QUICKNESS_OF_ACTION.jpg"
    },
    "ru": {
      "name": "Справочник быстроты действий",
      "text": "Эта книга описывает упражнения по координации и сохранении равновесия, и её слова наполнены магией. Если вы потратите 48 часов за 6 дней на изучение содержимого книги и применение его на практике, ваша Ловкость, а также её максимум увеличатся на 2. <br>После этого руководство теряет магию, но восстанавливает её через 100 лет."
    }
  },
  {
    "en": {
      "name": "MARINER'S ARMOR",
      "type": "Armor",
      "typeAdditions": "(light, medium, or heavy)",
      "rarity": 2,
      "text": "While wearing this armor, you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hit points, the armor causes you to rise 60 feet toward the surface. The armor is decorated with fish and shell motifs.",
      "source": "DMG",
      "img": "MARINERS_ARMOR.jpg"
    },
    "ru": {
      "name": "Доспех моряка",
      "text": "Пока вы носите этот доспех, вы обладаете скоростью плавания, равной скорости вашей ходьбы. Кроме того, каждый раз, когда вы начинаете ход, находясь под водой и с 0 хитов, вы поднимаетесь к поверхности на 60 футов. Данный доспех искусно декорирован различными мотивами с изображениями рыб и морских раковин.",
      "typeAdditions": "(легкая, средняя, или тяжелая)"
    }
  },
  {
    "en": {
      "name": "MEDALLION OF THOUGHTS",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the <a href='https://tentaculus.ru/spells/#q=detect_thoughts'>detect thoughts</a> spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.",
      "source": "DMG",
      "img": "MEDALLION_OF_THOUGHTS.jpg"
    },
    "ru": {
      "name": "Медальон мыслей",
      "text": "У этого медальона есть 3 заряда. Пока вы его носите, вы можете действием потратить 1 заряд, чтобы наложить им заклинание <a href='https://tentaculus.ru/spells/#q=detect_thoughts'>обнаружение мыслей</a> (Сл спасброска 13). Медальон ежедневно восстанавливает 1к3 заряда на рассвете.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "MIRROR OF LIFE TRAPPING",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "When this 4-foot-tall mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, 10 hit points, and vulnerability to bludgeoning damage. It shatters and is destroyed when reduced to 0 hit points. <br>If the mirror is hanging on a vertical surface and you are within 5 feet of it, you can use an action to speak its command word and activate it. It remains activated until you use an action to speak the command word again. <br>Any creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. This saving throw is made with advantage if the creature knows the mirror's nature, and constructs succeed on the saving throw automatically. <br>An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror's cells don't age, and they don't need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed. <br>If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it. <br>While within 5 feet of the mirror, you can use an action to speak the name of one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror's surface. You and the creature can then communicate normally. <br>In a similar way, you can use an action to speak a second command word and free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it.",
      "source": "DMG",
      "img": "MIRROR_OF_LIFE_TRAPPING.jpg"
    },
    "ru": {
      "name": "Зеркало похищения жизни",
      "text": "Если на это 4-футовое в высоту зеркало посмотреть опосредованно, на его поверхности будут видны слабые изображения существ. Зеркало весит 50 фунтов, и у него КД 11, 10 хитов и уязвимость к дробящему урону. Когда его хиты опускаются до 0, оно разлетается вдребезги и уничтожается. <br>Если зеркало висит на вертикальной поверхности, и вы находитесь в пределах 5 футов от него, вы можете действием произнести командное слово и активировать его. Оно остаётся активированным, пока вы вновь не произнесёте командное слово действием. <br>Все существа кроме вас, видящие своё отражение в активированном зеркале, находясь в пределах 30 футов от него, должны преуспеть в спасброске Харизмы, иначе будут похищены вместе со всем, что несли и носили, в одной из двенадцати межпространственных ячеек. Этот спасбросок совершается с преимуществом, если существо знает природу зеркала, а конструкты автоматически преуспевают в этом спасброске. <br>Межпространственная ячейка является бесконечным простором, заполненным густым туманом, уменьшающим видимость до 10 футов. Существо, заключённое в ячейке зеркала, не стареет, и ему не нужно есть, пить и спать. Существо, заключённое в ячейке, может сбежать, используя магию, разрешающую планарное перемещение. В противном случае существо находится в ячейке, пока не освободится. <br>Если зеркало похищает существо, но все двенадцать ячеек уже заняты, зеркало освобождает одно из похищенных существ, определённое случайным образом, и похищает нового пленника. Освобождённое существо появляется в свободном пространстве в пределах обзора зеркала, но спиной к нему. Если зеркало будет разбито, все заключённые в нём существа освобождаются и появляются в свободных клетках рядом с ним. <br>Находясь в пределах 5 футов от зеркала, вы можете действием назвать имя одного существа, заключённого в нём, или номер конкретной ячейки. Названное существо или существо, находящееся в названной ячейке, появляется как образ на поверхности зеркала. После этого вы с ним можете общаться как обычно. <br>Точно так же, вы можете действием произнести второе командное слово и освободить одно существо, похищенное зеркалом. Освободившееся существо появляется со всем снаряжением в свободном пространстве, ближайшем к зеркалу, спиной к нему."
    }
  },
  {
    "en": {
      "name": "MITHRAL ARMOR",
      "type": "Armor",
      "typeAdditions": "(medium or heavy, but not hide)",
      "rarity": 2,
      "text": "Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. I£ the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
      "source": "DMG",
      "img": "MITHRAL_ARMOR.jpg"
    },
    "ru": {
      "name": "Мифрильный доспех",
      "text": "Мифрил это лёгкий и гибкий металл. Сделанная из мифрила кольчужная рубаха или кираса может носиться под обычной одеждой. Если в обычном исполнении доспех накладывает помеху на проверки Ловкости (Скрытность) или имеет требования к Силе, то в версии из мифрила он не обладает этими недостатками.",
      "typeAdditions": "(средняя или тяжелая, но не скрытая)"
    }
  },
  {
    "en": {
      "name": "NECKLACE OF ADAPTATION",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws made against harmful gases and vapors (such as cloudkill and stinking cloud effects, inhaled poisons, and the breath weapons of some dragons).",
      "source": "DMG",
      "img": "NECKLACE_OF_ADAPTATION.jpg"
    },
    "ru": {
      "name": "Ожерелье адаптации",
      "text": "Нося это ожерелье, вы можете нормально дышать в любой окружающей среде и совершаете с преимуществом спасброски от вредоносных газов и испарений (таких как эффекты облака смерти и зловонного облака, вдыхаемые яды и оружие дыхания некоторых драконов).",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "NECKLACE OF FIREBALLS",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "This necklace has ld6 + 3 beads hanging from it. You can use an action to detach a bead and throw it up to 6 feet away. When it reaches the end of its trajectory, the bead detonates as a 3rd-level <a href='https://tentaculus.ru/spells/#q=fireball'>fireball</a> spell (save DC 15 <br>You can hurl multiple beads, or even the whole necklace, as one action. When you do so, increase the level of the fireball by 1 for each bead beyond the first.",
      "source": "DMG",
      "img": "NECKLACE_OF_FIREBALLS.jpg"
    },
    "ru": {
      "name": "Ожерелье огненных шаров",
      "text": "На этом ожерелье висят 1к6 + 3 бусины. Вы можете действием оторвать одну бусину и метнуть её на расстояние до 60 футов. Достигнув конечной точки, бусина детонирует как заклинание <a href='https://tentaculus.ru/spells/#q=fireball'>огненный шар</a> 3 уровня (Сл спасброска 15). <br>Вы можете метнуть одним действием сразу несколько бусин или даже всё ожерелье. При этом увеличьте уровень огненного шара на 1 за каждую бусину после первой."
    }
  },
  {
    "en": {
      "name": "NECKLACE OF PRAYER BEADS",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement by a cleric,druid, or paladin)",
      "text": "This necklace has ld4 + 2 magic beads made from aquamarine, black pearl, or topaz. It also has many nonmagical beads made from stones such as amber, bloodstone, citrine, coral, jade, pearl, or quartz. If a magic bead is removed from the necklace, that bead loses its magic. <br>Six types of magic beads exist. The DM decides the type of each bead on the necklace or determines it randomly. A necklace can have more than one bead of the same type. To use one, you must be wearing the necklace. Each bead contains a spell that you can cast from it as a bonus action (using your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn. <br><table><tr><td>d20</td><td>Bead of ...</td><td>Spell</td></tr><tr><td>1-6</td><td>Blessing</td><td><a href='https://tentaculus.ru/spells/#q=Bless'>Bless</a></td></tr><tr><td>7-12</td><td>Curing</td><td><a href='https://tentaculus.ru/spells/#q=Cure_wounds'>Cure wounds</a> (2nd level) or <a href='https://tentaculus.ru/spells/#q=lesser_restoration'>lesser restoration</a></td></tr><tr><td>13-16</td><td>Favor</td><td><a href='https://tentaculus.ru/spells/#q=Greater_restoration'>Greater restoration</a></td></tr><tr><td>17-18</td><td>Smiting</td><td><a href='https://tentaculus.ru/spells/#q=Branding_smite'>Branding smite</a></td></tr><tr><td>19</td><td>Summons</td><td><a href='https://tentaculus.ru/spells/#q=Planar_ally'>Planar ally</a></td></tr><tr><td>20</td><td>Wind walking</td><td><a href='https://tentaculus.ru/spells/#q=Wind_walk'>Wind walk</a></td></tr></table>",
      "source": "DMG",
      "img": "NECKLACE_OF_PRAYER_BEADS.jpg"
    },
    "ru": {
      "name": "Ожерелье молитвенных чёток",
      "attunement": "(требует настройки жрецом, друидом или паладином)",
      "text": "У этого ожерелья 1к4 + 2 магические бусины, изготовленные из аквамарина, чёрного жемчуга или топаза. На нём также много немагических бусин, изготовленных из янтаря, кровавика, цитрина, коралла, жадеита, жемчуга или кварца. Если магическую бусину снимут с ожерелья, она теряет свою магию. <br>Существует шесть видов магических бусин. Мастер сам решает вид каждой бусины или определяет их случайным образом. На ожерелье могут быть бусины одного и того же вида. Для того чтобы использовать одну из них, вы должны носить это ожерелье. <br>В каждой бусине находится заклинание, которое вы можете наложить ей бонусным действием (при необходимости используйте свою Сл спасброска). После того как заклинание магической бусины наложено, эту бусину нельзя использовать повторно до следующего рассвета.<br><table><tr><td>к20</td><td>Бусина...</td><td>Заклинание</td></tr><tr><td>1–6</td><td>Благословения</td><td><a href='https://tentaculus.ru/spells/#q=bless'>Благословение</a></td></tr><tr><td>7–12</td><td>Лечения</td><td><a href='https://tentaculus.ru/spells/#q=cure_wounds&le=1'>Лечение ран<a/> (2 уровень) или <a href='https://tentaculus.ru/spells/#q=lesser_restoration'>малое восстановление</a></td></tr><tr><td>13–16</td><td>Благоволения</td><td><a href='https://tentaculus.ru/spells/#q=greater_restoration'>Высшее восстановление</a></td></tr><tr><td>17–18</td><td>Кары</td><td><a href='https://tentaculus.ru/spells/#q=Branding_smite'>Клеймящий удар</a></td></tr><tr><td>19</td><td>Призыва</td><td><a href='https://tentaculus.ru/spells/#q=planar_ally'>Планарный союзник</a></td></tr><tr><td>20</td><td>Хождения по ветру</td><td><a href='https://tentaculus.ru/spells/#q=wind_walk' title='Хождение до ветру'>Хождение по ветру</a></td></tr></table>"
    }
  },
  {
    "en": {
      "name": "DIMENSIONAL SHACKLES",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "You and any creature you designate when you use the :hackles can use an action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength <br>At hletics) check. On a success, the creature breaks free and destroys the shackles.",
      "source": "DMG",
      "img": "DIMENSIONAL_SHACKLES.jpg"
    },
    "ru": {
      "name": "Оковы измерений",
      "text": "Вы можете действием надеть эти оковы на недееспособное существо. Они подходят для существ с размером от Маленького до Большого. Кроме того, что оковы служат как обычные наручники, они не позволяют скованному существу никакие перемещения меж измерениями, включая телепортацию и путешествия на другие планы существования. Они не мешают существу проходить сквозь межпространственные порталы. <br>Вы и все существа, указанные вами при надевании оков, можете действием снять их. Раз в 30 дней скованное существо может совершить проверку Силы (Атлетика) со Сл 30. При успехе существо ломает и уничтожает оковы."
    }
  },
  {
    "en": {
      "name": "NINE LIVES STEALER",
      "type": "Weapon",
      "typeAdditions": "(any sword)",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "You gain a +2 bonus to attack and damage rolls made with this magic weapon. <br>The sword has 1d8 + 1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.",
      "source": "DMG",
      "img": "NINE_LIVES_STEALER.jpg"
    },
    "ru": {
      "name": "Вор девяти жизней",
      "text": "Вы получаете бонус +2 к броскам атаки и урона этим магическим оружием. <br>У меча есть 1к8 + 1 заряд. Если вы совершаете критическое попадание по существу, у которого меньше 100 хитов, оно должно преуспеть в спасброске Телосложения со Сл 15, иначе мгновенно умрёт, когда меч вырвет его жизненную силу из тела (конструкты и нежить обладают иммунитетом). Меч теряет 1 заряд, если существо умирает. Когда у меча не останется зарядов, он теряет это свойство.",
      "typeAdditions": "(любой меч)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "NOLZUR'S MARVELOUS PIGMENTS",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "Typically found in 1d4 pots inside a fine wooden box with a brush (weighing 1 pound in total), these pigments allow you to create three-dimensional objects by painting them in two dimensions. The paint flows from the brush to form the desired object as you concentrate on its image. <br>Each pot of paint is sufficient to cover 1,000 square feet of a surface, which lets you create inanimate objects or terrain features-such as a door, a pit, flowers, trees, cells, rooms, or weapons- that are up to 10,000 cubic feet. It takes 10 minutes to cover 100 square feet. <br>When you complete the painting, the object or terrain feature depicted becomes a real, nonmagical object. <br>Thus, painting a door on a wall creates an actual door that can be opened to whatever is beyond. Painting a pit on a floor creates a real pit, and its depth counts against the total area of objects you create. <br>Nothing created by the pigments can have a value greater than 25 gp. If you paint an object of greater value (such as a diamond or a pile of gold), the object looks authentic, but close inspection reveals it is made from paste, bone, or some other worthless material. <br>If you paint a form of energy such as fire or lightning, the energy appears but dissipates as soon as you complete the painting, doing no harm to anything. 0ATHBOW <br>Weapon (longbow), very rare (requires attunement) <br>When you nock an arrow on this bow, it whispers in <br>Elvish, \"Swift defeat to my enemies.\" When you use this weapon to make a ranged attack, you can, as a command phrase, say, \"Swift death to you who have wronged me.\" The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. <br>You can have only one such sworn enemy at a time. <br>When your sworn enemy dies, you can choose a new one after the next dawn. <br>When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage. <br>While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.",
      "source": "DMG",
      "img": "NOLZURS_MARVELOUS_PIGMENTS.jpg"
    },
    "ru": {
      "name": "Чудесные краски Нолзура",
      "text": "Обычно эти краски находят в 1к4 баночках в красивом деревянном ящике вместе с кисточкой (весь набор весит 1 фунт). Эти краски позволяют рисовать трёхмерные предметы в двух измерениях. Краска сама стекает с кисти и формирует желаемый предмет, когда вы концентрируетесь на изображении. <br>Одной баночки достаточно, чтобы покрыть 1000 квадратных футов поверхности, что позволяет вам создавать неживые предметы и особенности местности — такие как двери, ямы, цветы, деревья, решётки, комнаты или оружие — не превышающие в объёме 10000 кубических футов. Разрисовать 100 квадратных футов можно за 10 минут. <br>Когда вы заканчиваете рисовать, предмет (или особенность местности) становится реальным, немагическим предметом. Нарисовав дверь на стене, вы создаёте настоящую дверь, которая ведёт на ту сторону стены. Нарисовав яму на полу, вы получаете настоящую яму, а её глубина учитывается при подсчёте объёма создаваемого предмета. <br>То, что создаётся этими красками, не должно стоить больше 25 зм. Если вы нарисуете что-то, что стоит больше (например, бриллиант или кучу золота), предмет будет выглядеть настоящим, но тщательное исследование даст понять, что он изготовлен из глины, кости или другого бросового материала. <br>Если вы нарисуете энергию, такую как огонь или электричество, в конце рисования энергия возникает, но тут же исчезает, не причиняя ничему урон."
    }
  },
  {
    "en": {
      "name": "OIL OF ETHEREALNESS",
      "type": "Potion",
      "rarity": 3,
      "text": "Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. The oil can cover a <br>Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the <a href='https://tentaculus.ru/spells/#q=etherealness'>etherealness</a> spell for 1 hour.",
      "source": "DMG",
      "img": "OIL_OF_ETHEREALNESS.jpg"
    },
    "ru": {
      "name": "Масло эфирности",
      "text": "Крошечные капли этого серого масла очень быстро испаряются. Маслом можно обмазать одно существо <br>Среднего или меньшего размера, вместе с одеждой и переносимым им снаряжением (на каждую категорию размера выше Среднего необходим один дополнительный пузырёк масла). Нанесение масла занимает 10 минут. Обмазанное существо получает на 1 час эффект заклинания <a href='https://tentaculus.ru/spells/#q=etherealness'>эфирность</a>."
    }
  },
  {
    "en": {
      "name": "OIL OF SHARPNESS",
      "type": "Potion",
      "rarity": 4,
      "text": "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. The oil can coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. Applying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls.",
      "source": "DMG",
      "img": "OIL_OF_SHARPNESS.jpg"
    },
    "ru": {
      "name": "Масло остроты",
      "text": "Это прозрачное и густое масло сверкает от крошечных серебристых включений. Масло может покрыть одно рубящее или колющее оружие или до 5 рубящих или колющих боеприпасов. Нанесение масла занимает 1 минуту. В течение часа покрытые предметы считаются магическими и предоставляют бонус +3 к броскам атаки и урона."
    }
  },
  {
    "en": {
      "name": "OIL OF SLIPPERINESS",
      "type": "Potion",
      "rarity": 2,
      "text": "This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). <br>Applying the oil takes 10 minutes. The affected creature then gains the effect of a <a href='https://tentaculus.ru/spells/#q=freedom_of_movements'>freedom of movement</a> spell for 8 hours. <br>Alternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the <a href='https://tentaculus.ru/spells/#q=grease'>grease</a> spell in that area for 8 hours.",
      "source": "DMG",
      "img": "OIL_OF_SLIPPERINESS.jpg"
    },
    "ru": {
      "name": "Масло ускользания",
      "text": "Эта липкая, чёрная мазь, хранящаяся в толстостенном и тяжёлом контейнере, очень текуча. Маслом можно обмазать одно существо Среднего или меньшего размера, вместе с одеждой и переносимым им снаряжением (на каждую категорию размера выше <br>Среднего необходим один дополнительный пузырёк масла). Нанесение масла занимает 10 минут. Обмазанное существо получает на 8 часов эффект заклинания <a href='https://tentaculus.ru/spells/#q=freedom_of_movements'>свобода перемещения</a>. <br>В качестве альтернативы, можно действием разлить масло по полу, покрыв площадь 10 × 10 футов. <br>Эффект будет такой же, как от заклинания <a href='https://tentaculus.ru/spells/#q=grease'>скольжение</a> длительностью 8 часов."
    }
  },
  {
    "en": {
      "name": "PEARL OF POWER",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement by a spellcaster)",
      "text": "You can use an action to speak this pearl's command word and regain one expended spell slot of up to 3rd level. Once you have used the pearl, it can't be used again until the next dawn.",
      "source": "DMG",
      "img": "PEARL_OF_POWER.jpg"
    },
    "ru": {
      "name": "Жемчужина силы",
      "attunement": "(требует настройки заклинателем)",
      "text": "Если эта жемчужина находится у вас, вы можете действием произнести командное слово и восстановить одну использованную ячейку заклинания. Если уровень потраченной ячейки 4 или больше, вы получите ячейку 3 уровня. Вы не можете повторно использовать жемчужину до следующего рассвета."
    }
  },
  {
    "en": {
      "name": "PERIAPT OF HEALTH",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed you while you wear the pendant.",
      "source": "DMG",
      "img": "PERIAPT_OF_HEALTH.jpg"
    },
    "ru": {
      "name": "Медальон здоровья",
      "text": "Вы обладаете иммунитетом ко всем болезням, пока носите этот медальон. Если вы уже болеете, эффект болезни подавляются на время, пока вы носите этот медальон."
    }
  },
  {
    "en": {
      "name": "PERIAPT OF PROOF AGAINST POISON",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "This delicate silver chain has a brilliant-cut black gem pendant. While you wear it, poisons have no effect on you. You are immune to the poisoned condition and ha\\\"e immunity to poison damage.",
      "source": "DMG",
      "img": "PERIAPT_OF_PROOF_AGAINST_POISON.jpg"
    },
    "ru": {
      "name": "Медальон защиты от яда",
      "text": "На этой изысканной серебряной цепочке висит подвеска из чёрного драгоценного камня бриллиантовой огранки. Пока вы её носите, яды не оказывают на вас эффекта. Вы обладаете иммунитетом к состоянию «отравлен» и к урону ядом."
    }
  },
  {
    "en": {
      "name": "PERIAPT OF WOUND CLOSURE",
      "type": "Wondrous item",
      "attunement": "(requires attunement)",
      "rarity": 2,
      "text": "While you wear this pendant, you stabilize whenever",
      "source": "DMG",
      "img": "PERIAPT_OF_WOUND_CLOSURE.jpg"
    },
    "ru": {
      "name": "Медальон затягивающихся ран",
      "text": "Пока вы носите этот медальон, ваше состояние стабилизируется каждый раз, когда вы находитесь в умирающем состоянии в начале своего хода. Кроме того, каждый раз, когда вы бросаете Кости Хитов для восстановления хитов, вы удваиваете число восстановленных хитов.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "PHILTER OF LOVE",
      "type": "Potion",
      "rarity": 2,
      "text": "The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed. This potion's rose-hued, effervescent liquid contains one easy-to-mis bubble shaped like a heart.",
      "source": "DMG",
      "img": "PHILTER_OF_LOVE.jpg"
    },
    "ru": {
      "name": "Любовное зелье",
      "text": "Вы становитесь на 1 час очарованы первым же существом, которое вы увидите в течение 10 минут после того, как выпили это зелье. Если существо принадлежит к биологическому виду и полу, которые привлекают вас в обычных условиях, то вы воспринимаете его как свою истинную любовь, пока очарованы им. <br>Жидкость представляет собой розовую, шипучую жидкость, с пузырьками в виде сердец."
    }
  },
  {
    "en": {
      "name": "PIPES OF HAUNTING",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "PiPES OF THE SEWERS <br>You must be proficient with wind instruments to use these pipes. They have 3 charges. You can use an action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 feet of you that hears you play must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. <br>If you wish, all creatures in the area that aren't hostile toward you automatically succeed on the saving throw. <br>A creature that fails the saving throw can repeat it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its saving throw is immune to the effect of these pipes for 24 hours. The pipes regain 1d3 expended charges daily at dawn.",
      "source": "DMG",
      "img": "PIPES_OF_HAUNTING.jpg"
    },
    "ru": {
      "name": "Свирель ужаса",
      "text": "Вы должны владеть духовыми музыкальными инструментами, чтобы использовать эту свирель. У неё есть 3 заряда. Вы можете действием поиграть на ней и потратить 1 заряд, чтобы издать жуткую мелодию. <br>Все существа в пределах 30 футов от вас, слышащие вашу мелодию, должны преуспеть в спасброске Мудрости со Сл 15, иначе они станут испуганными вами на 1 минуту. Если хотите, все существа в этой области, не враждебные по отношению к вам, автоматически преуспеют в этом спасброске. Существа, провалившие спасбросок, могут повторять его в конце каждого своего хода, оканчивая эффект на себе при успехе. Существо, преуспевшее в спасброске, получает иммунитет к этой свирели на 24 часа. Свирель ежедневно восстанавливает 1к3 заряда на рассвете."
    }
  },
  {
    "en": {
      "name": "PIPES OF THE SEWERS",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, ordinary rats and giant rats are indifferent toward you and will not attack you unless you threaten or harm them. <br>The pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one swarm of rats (see the <br>Monster Manual for statistics) with each expended charge, provided that enough rats are within half a mile of you to be called in this fashion (as determined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control otherwise. The pipes regain ld3 expended charges daily at dawn. <br>Whenever a swarm of rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. <br>If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends, and the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours.",
      "source": "DMG",
      "img": "PIPES_OF_THE_SEWERS.jpg"
    },
    "ru": {
      "name": "Свирель канализации",
      "text": "Вы должны владеть духовыми музыкальными инструментами, чтобы использовать эту свирель. Пока вы настроены на неё, обычные и гигантские крысы безразличны к вам и не будут вас атаковать, если вы им не угрожаете и не вредите им. <br>У свирели есть 3 заряда. Если вы играете на ней действием, вы можете бонусным действием потратить от 1 до 3 зарядов, призывая по одному <a href='https://tentaculus.ru/monsters/#q=Swarm_of_Rats'>рою крыс</a> за каждый потраченный заряд, при условии, что в пределах полумили от вас есть достаточное количество крыс, которых можно призвать свирелью (на усмотрение Мастера). <br>Если достаточного количества крыс нет, заряд тратится впустую. Призванные рои движутся к источнику музыки кратчайшим возможным маршрутом, но во всём остальном не находятся под вашим контролем. Свирель ежедневно восстанавливает 1к3 заряда на рассвете. <br>Каждый раз, когда рой крыс, не находящийся под контролем другого существа, оказывается в пределах 30 футов от вас, пока вы играете на этой свирели, вы можете совершить проверку Харизмы, противопоставленную проверке Мудрости крыс. Если вы проигрываете состязание, рой действует как обычно, и не может становиться одержимым музыки этой свирели в течение 24 часов. Если вы выиграете состязание, рой становится одержимым музыкой свирели и становится дружественным к вам и вашим спутникам, пока вы каждый раунд продолжаете играть на свирели действием. Дружественный рой подчиняется вашим командам. Если вы не отдаёте команды дружественному рою, он защищается, но других действий не совершает. Если дружественный рой начинает ход, и при этом не слышит музыки свирели, ваш контроль над этим роем заканчивается, рой действует как обычно, и не может быть одержим музыкой свирели в течение следующих 24 часов.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "PLATE ARMOR OF ETHEREALNESS",
      "type": "Armor",
      "typeAdditions": "(plate)",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "While you're wearing this armor, you can speak its command word as an action to gain the effect of the <a href='https://tentaculus.ru/spells/#q=etherealness'>etherealness</a> spell, which last for 10 minutes or until you remove the armor or use an action to speak the command word again. This property of the armor can't be used again until the next dawn.",
      "source": "DMG",
      "img": "PLATE_ARMOR_OF_ETHEREALNESS.jpg"
    },
    "ru": {
      "name": "Латный доспех эфирности",
      "text": "Если вы носите этот доспех, вы можете действием произнести его командное слово, чтобы получить эффект заклинания <a href='https://tentaculus.ru/spells/#q=etherealness'>эфирность</a>, который длится 10 минут, либо пока вы не снимете доспех, либо пока вы не произнесёте командное слово ещё раз. Вы не можете использовать это свойство повторно до следующего рассвета.",
      "typeAdditions": "(латы)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "PORTABLE HOLE",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter. <br>You can use an action to unfold a portable hole and place it on or against a solid surface, whereupon the portable hole creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane, so it can't be u ed to create open passages. Any creature inside an open portable hole can exit the hole by climbing out of it. <br>You can use an action to close a portable hole by taking hold of the edges of the cloth and folding it up. <br>Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. o matter what's in it, the hole weighs next to nothing. <br>If the hole is folded up, a creature with in the hole's extradimensional space can use an action to make a DC 10 Strength check. On a successful check, the creature forces its way out and appears within 5 feet of the portable hole or the creature carrying it. A breathing creature within a closed portable hole can survive for up to 10 minutes, after which time it begins to suffocate. <br>Placing a portable hole inside an extradimensional space created by a bag of holding, Heward's handy haversack, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. <br>The gate then closes. The gate is one-way only and can't be reopened.",
      "source": "DMG",
      "img": "PORTABLE_HOLE.jpg"
    },
    "ru": {
      "name": "Переносная дыра",
      "text": "Эта тонкая чёрная ткань, гладкая как шёлк, складывается до размеров носового платка. Она разворачивается в круг диаметром 6 футов. <br>Вы можете действием развернуть переносную дыру и поместить её на твёрдую поверхность, после чего дыра создаёт межпространственное отверстие глубиной 10 футов. Цилиндрическое пространство внутри дыры находится на другом плане, поэтому с её помощью не получится создавать сквозные проходы. Все существа, находящиеся внутри открытой переносной дыры, могут покинуть её, просто вылезая из неё. <br>Вы можете действием закрыть переносную дыру, взявшись за края ткани и сложив её. Складывание ткани закрывает дыру, и все существа и предметы, находящиеся в ней, остаются в межпространстве. <br>Что бы в ней ни находилось, дыра практически ничего не весит. <br>Если дыра сложена, существо, находящееся в её межпространстве, может действием совершить проверку Силы со Сл 10. При успехе существо вырывается наружу и появляется в пределах 5 футов от переносной дыры или существа, несущего её. Дышащее существо, находящееся в закрытой переносной дыре, может перетерпеть 10 минут, после чего начинает задыхаться. <br>Помещение переносной дыры в межпространство, созданное сумкой хранения, удобным рюкзаком Хеварда или подобным предметом, мгновенно уничтожает оба предмета и открывает врата в Астральный План. <br>Врата появляются в месте, где один предмет пытались поместить в другой. Все существа в пределах 10 футов от врат затягиваются внутрь и помещаются в случайным образом определённое место на Астральном Плане. После этого врата закрываются. Врата односторонние, и повторно не открываются."
    }
  },
  {
    "en": {
      "name": "POTION OF ANIMAL FRIENDSHIP",
      "type": "Potion",
      "rarity": 2,
      "text": "When you drink this potion, you can cast the <a href='https://tentaculus.ru/spells/#q=animal_friendship'>animal friendship</a> spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.",
      "source": "DMG",
      "img": "POTION_OF_ANIMAL_FRIENDSHIP.jpg"
    },
    "ru": {
      "name": "Зелье дружбы с животными",
      "text": "После того как вы выпили это зелье, вы можете в течение одного часа неограниченно накладывать заклинание <a href='https://tentaculus.ru/spells/#q=animal_friendship'>дружба с животными</a> (Сл спасброска 13). <br>При взбалтывании этой мутной жидкости вы видите рыбью чешую, кошачьи когти, беличью шерсть и прочие фрагменты."
    }
  },
  {
    "en": {
      "name": "POTION OF CLAIRVOYANCE",
      "type": "Potion",
      "rarity": 3,
      "text": "When you drink this potion, you gain the effect of the <a href='https://tentaculus.ru/spells/#q=clairvoyance'>clairvoyance</a> spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.",
      "source": "DMG",
      "img": "POTION_OF_CLAIRVOYANCE.jpg"
    },
    "ru": {
      "name": "Зелье ясновидения",
      "text": "Выпив это зелье, вы получаете эффект заклинания <a href='https://tentaculus.ru/spells/#q=clairvoyance'>ясновидения</a>. В желтоватой жидкости зелья плавают глазные яблоки, но они исчезают, когда пузырёк открывают."
    }
  },
  {
    "en": {
      "name": "POTION OF CLIMBING",
      "type": "Potion",
      "rarity": 1,
      "text": "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this rime, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. <br>Shaking the bottle fails to mix the colors.",
      "source": "DMG",
      "img": "POTION_OF_CLIMBING.jpg"
    },
    "ru": {
      "name": "Зелье лазания",
      "text": "Когда вы выпиваете это зелье, вы получаете на 1 час скорость лазания, равную вашей скорости ходьбы. В течение этого времени вы совершаете с преимуществом проверки Силы (Атлетика), совершённые, чтобы лезть. Зелье представляет собой трёхцветную жидкость. Коричневый, серебряный и серый слои структурой напоминают рисунок на камне и не смешиваются между собой, как бы вы ни трясли пузырёк."
    }
  },
  {
    "en": {
      "name": "POTION OF DIMINUTION",
      "type": "Potion",
      "rarity": 3,
      "text": "When you drink this potion, you gain the \"reduce\" effect of the<a href='https://tentaculus.ru/spells/#q=enlarge/reduce'> enlarge/reduce</a> spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.",
      "source": "DMG",
      "img": "POTION_OF_DIMINUTION.jpg"
    },
    "ru": {
      "name": "Зелье уменьшения",
      "text": "Когда вы выпиваете это зелье, вы получаете на 1к4 часа эффект «уменьшение» заклинания <a href='https://tentaculus.ru/spells/#q=enlarge/reduce'>увеличение/ уменьшение</a> (концентрация не требуется). Маленький красный шарик в этой жидкости непрерывно сжимается до размера бусины и тут же расширяется, окрашивая прозрачную жидкость вокруг, после чего сжимается вновь. Тряска пузырька не прерывает этот процесс."
    }
  },
  {
    "en": {
      "name": "POTION OF GROWTH",
      "type": "Potion",
      "rarity": 3,
      "text": "When you drink this potion, you gain the \"reduce\" effect of the<a href='https://tentaculus.ru/spells/#q=enlarge/reduce'> enlarge/reduce</a> spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.",
      "source": "DMG",
      "img": "POTION_OF_DIMINUTION.jpg"
    },
    "ru": {
      "name": "Зелье увеличения",
      "text": "Когда вы выпиваете это зелье, вы получаете на 1к4 часа эффект «увеличение» заклинания <a href='https://tentaculus.ru/spells/#q=enlarge/reduce'>увеличение/ уменьшение</a> (концентрация не требуется). Маленький красный шарик в этой жидкости непрерывно сжимается до размера бусины и тут же расширяется, окрашивая прозрачную жидкость вокруг, после чего сжимается вновь. Тряска пузырька не прерывает этот процесс."
    }
  },
  {
    "en": {
      "name": "POTION OF FIRE BREATH",
      "type": "Potion",
      "rarity": 2,
      "text": "After drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet of you. The target must make a DC 13 Dexterity saving throw, taking 4d6 li re damage on a failed save, or half as much damage on a successful one. The effect t;nds after you exhale the li re three times or when 1 hour has passed. <br>This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
      "source": "DMG",
      "img": "POTION_OF_FIRE_BREATH.jpg"
    },
    "ru": {
      "name": "Зелье огненного дыхания",
      "text": "После того, как вы выпили это зелье, вы можете бонусным действием выдохнуть огонь на цель, находящуюся в пределах 30 футов от вас. Цель должна совершить спасбросок Ловкости со Сл 13, получая урон огнём 4к6 при провале или половину этого урона при успехе. Эффект заканчивается после того, как вы трижды используете огненное дыхание, или по истечении 1 часа. <br>Зелье представляет собой оранжевую мерцающую жидкость, над которой стелется дымок, выходящий наружу каждый раз, когда вы откупориваете пробку."
    }
  },
  {
    "en": {
      "name": "POTION OF FLYING",
      "type": "Potion",
      "rarity": 4,
      "text": "When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. <br>If you're in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
      "source": "DMG",
      "img": "POTION_OF_FLYING.jpg"
    },
    "ru": {
      "name": "Зелье полёта",
      "text": "Выпив это зелье, вы на 1 час получаете скорость полёта, равную вашей скорости ходьбы, и можете парить. Если вы находитесь в воздухе, когда зелье теряет силу, вы падаете, если не обладаете другими средствами, позволяющими оставаться в полёте. Прозрачная жидкость этого зелья парит у горлышка пузырька, и в ней плавают молочно-белые примеси."
    }
  },
  {
    "en": {
      "name": "POTION OF GASEOUS FORM",
      "type": "Potion",
      "rarity": 3,
      "text": "When you drink this potion, you gain the effect of the <a href='https://tentaculus.ru/spells/#q=gaseous_form'>gaseous form</a> spell for 1 hour (no concentration required) or until you end the effect as a bonus action. <br>This potion's container seems to hold fog that moves and pours like water.",
      "source": "DMG",
      "img": "POTION_OF_GASEOUS_FORM.jpg"
    },
    "ru": {
      "name": "Зелье газообразной формы",
      "text": "Когда вы выпиваете это зелье, вы получаете эффект заклинания <a href='https://tentaculus.ru/spells/#q=gaseous_form'>газообразная форма</a> (концентрация не требуется) на 1 час, или пока вы бонусным действием не прервёте его. Пузырёк с этим зельем как будто содержит туман, перетекающий, словно вода."
    }
  },
  {
    "en": {
      "name": "POTION OF Hill GIANT STRENGTH",
      "type": "Potion",
      "rarity": 2,
      "text": "When you drink this potion, your Strength score became 21 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. <br>This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type.",
      "source": "DMG",
      "img": "POTION_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Зелье силы холмового великана",
      "text": "Когда вы выпиваете это зелье, значение вашей Силы станет равным 21 на один час. Зелье не оказывает на вас никакого эффекта в том случае, если значение вашей Силы уже равно этому значению или превосходит его.<br>В прозрачной жидкости этого зелья плавают обрезки ногтей великана соответствующего вида."
    }
  },
  {
    "en": {
      "name": "POTION OF FROST GIANT STRENGTH",
      "type": "Potion",
      "rarity": 3,
      "text": "When you drink this potion, your Strength score became 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. <br>This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. ",
      "source": "DMG",
      "img": "POTION_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Зелье силы ледяного великана",
      "text": "Когда вы выпиваете это зелье, значение вашей Силы станет равным 23 на один час. Зелье не оказывает на вас никакого эффекта в том случае, если значение вашей Силы уже равно этому значению или превосходит его. <br>В прозрачной жидкости этого зелья плавают обрезки ногтей великана соответствующего вида. "
    }
  },
  {
    "en": {
      "name": "POTION OF stone GIANT STRENGTH",
      "type": "Potion",
      "rarity": 3,
      "text": "When you drink this potion, your Strength score became 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. <br>This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. ",
      "source": "DMG",
      "img": "POTION_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Зелье силы каменного великана",
      "text": "Когда вы выпиваете это зелье, значение вашей Силы станет равным 23 на один час. Зелье не оказывает на вас никакого эффекта в том случае, если значение вашей Силы уже равно этому значению или превосходит его. <br>В прозрачной жидкости этого зелья плавают обрезки ногтей великана соответствующего вида. "
    }
  },
  {
    "en": {
      "name": "POTION OF cloud GIANT STRENGTH",
      "type": "Potion",
      "rarity": 4,
      "text": "When you drink this potion, your Strength score became 27 for 1 hour.  The potion has no effect on you if your Strength is equal to or greater than that score. <br>This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. ",
      "source": "DMG",
      "img": "POTION_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Зелье силы облачного великана",
      "text": "Когда вы выпиваете это зелье, значение вашей Силы станет равным 27 на один час. Зелье не оказывает на вас никакого эффекта в том случае, если значение вашей Силы уже равно этому значению или превосходит его. <br>В прозрачной жидкости этого зелья плавают обрезки ногтей великана соответствующего вида. "
    }
  },
  {
    "en": {
      "name": "POTION OF FIRE GIANT STRENGTH",
      "type": "Potion",
      "rarity": 3,
      "text": "When you drink this potion, your Strength score became 25 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. <br>This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. ",
      "source": "DMG",
      "img": "POTION_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Зелье силы огненного великана",
      "text": "Когда вы выпиваете это зелье, значение вашей Силы станет равным 25 на один час. Зелье не оказывает на вас никакого эффекта в том случае, если значение вашей Силы уже равно этому значению или превосходит его.<br>В прозрачной жидкости этого зелья плавают обрезки ногтей великана соответствующего вида."
    }
  },
  {
    "en": {
      "name": "POTION OF storm GIANT STRENGTH",
      "type": "Potion",
      "rarity": 5,
      "text": "When you drink this potion, your Strength score became 29 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. <br>This potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. ",
      "source": "DMG",
      "img": "POTION_OF_GIANT_STRENGTH.jpg"
    },
    "ru": {
      "name": "Зелье силы грозового великана",
      "text": "Когда вы выпиваете это зелье, значение вашей Силы стане равным 29 на один час. Зелье не оказывает на вас никакого эффекта в том случае, если значение вашей Силы уже равно этому значению или превосходит его.<br>В прозрачной жидкости этого зелья плавают обрезки ногтей великана соответствующего вида. "
    }
  },
  {
    "en": {
      "name": "POTION OF HEALING",
      "type": "Potion",
      "rarity": 1,
      "text": "You regain 2d4 + 2 hit points when you drink this potion.  The potion's red liquid glimmers when agitated.",
      "source": "DMG",
      "img": "POTION_OF_HEALING.jpg"
    },
    "ru": {
      "name": "Зелье лечения",
      "text": "Вы восстанавливаете d4 + 2  хита, когда выпиваете это зелье. Зелье представляет собой красную жидкость, сверкающую при встряхивании."
    }
  },
  {
    "en": {
      "name": "POTION OF Greater HEALING",
      "type": "Potion",
      "rarity": 2,
      "text": "You regain 4d4 + 4 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
      "source": "DMG",
      "img": "POTION_OF_GREATER_HEALING.jpg"
    },
    "ru": {
      "name": "Зелье большого лечения",
      "text": "Вы восстанавливаете d4 + 4 хита, когда выпиваете это зелье. Зелье представляет собой красную жидкость, сверкающую при встряхивании."
    }
  },
  {
    "en": {
      "name": "POTION OF Superior HEALING",
      "type": "Potion",
      "rarity": 3,
      "text": "You regain 8d4 + 8 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
      "source": "DMG",
      "img": "POTION_OF_SUPERIOR_HEALING.jpg"
    },
    "ru": {
      "name": "Зелье отличного лечения",
      "text": "Вы восстанавливаете 8d4 + 8 хитов, когда выпиваете это зелье. Зелье представляет собой красную жидкость, сверкающую при встряхивании."
    }
  },
  {
    "en": {
      "name": "POTION OF Supreme HEALING",
      "type": "Potion",
      "rarity": 4,
      "text": "You regain 10d4 + 20 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
      "source": "DMG",
      "img": "POTION_OF_SUPREME_HEALING.jpg"
    },
    "ru": {
      "name": "Зелье превосходного лечения",
      "text": "Вы восстанавливаете 10d4 + 20 хитов, когда выпиваете это зелье. Зелье представляет собой красную жидкость, сверкающую при встряхивании."
    }
  },
  {
    "en": {
      "name": "POTION OF HEROISM",
      "type": "Potion",
      "rarity": 3,
      "text": "HP Regained 2d4 + 2 4d4 + 4 8d4 + 8 10d4 + 20 <br>For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the <a href='https://tentaculus.ru/spells/#q=bless'>bless</a> spell (no concentration required). This blue potion bubbles and steams as if boiling.",
      "source": "DMG",
      "img": "POTION_OF_HEROISM.jpg"
    },
    "ru": {
      "name": "Зелье героизма",
      "text": "После того, как вы выпили это зелье, вы на 1 час получаете 10 временных хитов. Кроме того, в течение этого часа вы находитесь под эффектом заклинания <a href='https://tentaculus.ru/spells/#q=bless'>благословление</a> (концентрация не требуется). Это синее зелье пузырится и парит, словно оно находится в состоянии закипания."
    }
  },
  {
    "en": {
      "name": "POTION OF INVISIBILITY",
      "type": "Potion",
      "rarity": 4,
      "text": "This potion's container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.",
      "source": "DMG",
      "img": "POTION_OF_INVISIBILITY.jpg"
    },
    "ru": {
      "name": "Зелье невидимости",
      "text": "Контейнер с этим зельем выглядит пустым, но на вес чувствуется, что он всё же содержит жидкость. Выпив её, вы становитесь невидимым на 1 час. Всё, что вы несёте и носите, становится невидимым вместе с вами. Эффект оканчивается преждевременно, если вы атакуете или наложите заклинание."
    }
  },
  {
    "en": {
      "name": "POTION OF INVULNERABILITY",
      "type": "Potion",
      "rarity": 3,
      "text": "For 1 minute after you drink this potion, you have resistance to all damage. The potion's syrupy liquid looks like liquified iron.",
      "source": "DMG",
      "img": "POTION_OF_INVULNERABILITY.jpg"
    },
    "ru": {
      "name": "Зелье неуязвимости",
      "text": "В течение 1 минуты после того, как вы выпили это зелье, вы обладаете сопротивлением ко всем видам урона. Это густое как сироп зелье выглядит как расплавленное железо."
    }
  },
  {
    "en": {
      "name": "POTION OF LONGEVITY",
      "type": "Potion",
      "rarity": 4,
      "text": "When you drink this potion, your physical age is reduced by 1d6 + 6 years, to a minimum of 13 years. <br>Each time you subsequently drink a potion of longevity, there is 10 percent cumulative chance that you instead age by 1d6 + 6 years. Suspended in this amber liquid are a scorpion's tail, an adder's fang, a dead spider, and a tiny heart that, against all reason, is still beating. <br>These ingredients vanish when the potion is opened.",
      "source": "DMG",
      "img": "POTION_OF_LONGEVITY.jpg"
    },
    "ru": {
      "name": "Зелье долголетия",
      "text": "После того как вы выпьете это зелье, ваш физический возраст уменьшается на 1к6 + 6 лет, при минимуме в 13 лет. Каждый раз, когда вы в дальнейшем будете пить зелья долголетия, существует накопительный штраф 10 процентов, что вместо этого вы постареете на 1к6 + 6 лет. В янтарной жидкости плавают хвост скорпиона, клык гадюки, мёртвый паук и крохотное сердце, которое вопреки всему всё ещё бьётся. Эти ингредиенты исчезают, когда зелье откупоривают."
    }
  },
  {
    "en": {
      "name": "POTION OF MIND READING",
      "type": "Potion",
      "rarity": 3,
      "text": "When you drink this potion, you gain the effect of the <a href='https://tentaculus.ru/spells/#q=detect_thoughts'>detect thoughts</a> spell (save DC 13). The potion's dense, purple liquid has an ovoid cloud of pink floating in it.",
      "source": "DMG",
      "img": "POTION_OF_MIND_READING.jpg"
    },
    "ru": {
      "name": "Зелье чтения мыслей",
      "text": "Когда вы выпиваете это зелье, вы получаете эффект заклинания <a href='https://tentaculus.ru/spells/#q=detect_thoughts'>обнаружение мыслей</a> (Сл спасброска 13). <br>На вид это густое, фиолетовое зелье, с плавающим в нём небольшим овальным облачком."
    }
  },
  {
    "en": {
      "name": "POTION OF POISON",
      "type": "Potion",
      "rarity": 2,
      "text": "This concoction looks, smells, and tastes like a potion of healing or other beneficial potion. However, it is actpally poison masked by illusion magic. An <a href='https://tentaculus.ru/spells/#q=identify'>identify</a> spell reveals its true nature. <br>If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. <br>At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. <br>The poison ends when the damage decreases to 0.",
      "source": "DMG",
      "img": "POTION_OF_POISON.jpg"
    },
    "ru": {
      "name": "Зелье яда",
      "text": "Эта смесь выглядит, пахнет и обладает таким же вкусом, что и зелье лечения или другое полезное зелье. <br>Однако, это самый настоящий яд, чья истинная природа скрыта магией иллюзий. Заклинание <a href='https://tentaculus.ru/spells/#q=identify'>опознания</a> раскрывает этот обман. <br>Если вы всё же выпьете это зелье, вы получаете урон ядом 3к6 и должны преуспеть в спасброске Телосложения со Сл 13, иначе станете отравленным. В начале каждого вашего хода, пока вы отравлены этим зельем, вы получаете урон ядом 3к6. В конце каждого своего хода вы можете повторять спасбросок. В случае успеха каждый урон ядом в последующих раундах будет уменьшен на 1к6. Яд прекращает действие, когда его урон станет равным нулю."
    }
  },
  {
    "en": {
      "name": "POTION OF RESISTANCE",
      "type": "Potion",
      "rarity": 2,
      "text": "When you drink this potion, you gain resistance to one type of damage for 1 hour. The DM chooses the type determines it randomly from the options below. <br><table><tr><td>d10</td><td>Damage Type</td></tr><tr><td>1</td><td>Acid</td></tr><tr><td>2</td><td>Cold</td></tr><tr><td>3</td><td>Fire</td></tr><tr><td>4</td><td>Force</td></tr><tr><td>5</td><td>Lightning</td></tr><tr><td>6</td><td>Necrotic</td></tr><tr><td>7</td><td>Poison</td></tr><tr><td>8</td><td>Psychic</td></tr><tr><td>9</td><td>Radiant</td></tr><tr><td>10</td><td>Thunder</td></tr></table>",
      "source": "DMG",
      "img": "POTION_OF_RESISTANCE.jpg"
    },
    "ru": {
      "name": "Зелье сопротивления",
      "text": "Когда вы выпиваете это зелье, вы получаете сопротивление к одному виду урона на 1 час. Мастер сам выбирает вид урона или определяет его случайным образом из приведённых ниже вариантов.<br><table><tr><td>к10</td><td>Вид урона</td></tr><tr><td>1</td><td>Звук</td></tr><tr><td>2</td><td>Излучение</td></tr><tr><td>3</td><td>Кислота</td></tr><tr><td>4</td><td>Некротическая энергия</td></tr><tr><td>5</td><td>Огонь</td></tr><tr><td>6</td><td>Психическая энергия</td></tr><tr><td>7</td><td>Силовое поле</td></tr><tr><td>8</td><td>Холод</td></tr><tr><td>9</td><td>Электричество</td></tr><tr><td>10</td><td>Яд</td></tr></table>"
    }
  },
  {
    "en": {
      "name": "POTION OF SPEED",
      "type": "Potion",
      "rarity": 4,
      "text": "When you drink this potion, you gain the effect of the <a href='https://tentaculus.ru/spells/#q=haste'>haste</a> spell for 1 minute (no concentration required). 1~potion's yellow fluid is streaked with black and swirl on its own.",
      "source": "DMG",
      "img": "POTION_OF_SPEED.jpg"
    },
    "ru": {
      "name": "Зелье скорости",
      "text": "Когда вы выпьете это зелье, вы получите на 1 минуту эффект заклинания <a href='https://tentaculus.ru/spells/#q=haste'>ускорение</a> (концентрация не требуется). В жёлтой жидкости этого зелья видны чёрные полоски, и она перемешивается сама собой."
    }
  },
  {
    "en": {
      "name": "POTION OF VITALITY",
      "type": "Potion",
      "rarity": 4,
      "text": "When you drink this potion, it removes any exhaustion you are suffering and cures any disease or poison affecting you. For the next 24 hours, you regain the maximum number of hit points for any Hit Die you spend. The potion's crimson liquid regularly pulses wi-dulllight, calling to mind a heartbeat.",
      "source": "DMG",
      "img": "POTION_OF_VITALITY.jpg"
    },
    "ru": {
      "name": "Зелье живучести",
      "text": "Если вы выпьете это зелье, оно устранит всё имеющееся у вас истощение, а также все болезни и яды, действующие на вас. В течение следующих 24 часов вы восстанавливаете максимум хитов за каждую использованную Кость Хитов. Алая жидкость этого зелья периодически пульсирует, напоминая биение сердца."
    }
  },
  {
    "en": {
      "name": "POTION OF WATER BREATHING",
      "type": "Potion",
      "rarity": 2,
      "text": "You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.",
      "source": "DMG",
      "img": "POTION_OF_WATER_BREATHING.jpg"
    },
    "ru": {
      "name": "Зелье подводного дыхания",
      "text": "Вы можете дышать под водой в течение 1 часа после того, как выпьете это зелье. В мутно-зелёной жидкости, пахнущей морем, плавают небольшие пузырьки, похожие на медуз."
    }
  },
  {
    "en": {
      "name": "QUAAL'S FEATHER TOKEN",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single-use effect. The DM chooses the kind of token or determines it randomly.<br><table><tr><td>dlOO</td><td>Feather Token</td></tr><tr><td>01-20</td><td>Anchor</td></tr><tr><td>21-35</td><td>Bird</td></tr><tr><td>36-50</td><td>Fan</td></tr><tr><td>51-65</td><td>Swan boat</td></tr><tr><td>66-90</td><td>Tree</td></tr><tr><td>91-00</td><td>Whip</td></tr></table> <br><b>Anchor.</b> You can use an action to touch the token to a boat or ship. For the next 24 hours, the vessel can't be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears. <br><b>Bird.</b> You can use an action to toss the token 5 feet into the air. The token disappears and an enormous, multicolored bird takes its place. The bird has the statistics of a roc (see the Monster Manual), but it obeys your simple commands and can't attack. It can carry up to 500 pounds while flying at its maximum speed (16 miles an hour for a maximum of 144 miles per day. with a one-hour rest for every 3 hours of flying), or 1,00G pounds at half that speed. The bird disappears after flying its maximum distance for a day or if it drops to 0 hit points. You can dismiss the bird as an action. <br><b>Fan.</b> If you are on a boat or ship, you can use an action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action. <br><b>Swan Boat.</b> You can use an action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot-wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. <br>You can use an action while on the boat to command it to move or to turn up to 90 degrees. The boat can carry up to thirty-two Medium or smaller creatures. A Large creature counts as four Medium creatures, while a <br>Huge creature counts as nine. The boat remains for 24 hours and then disappears. You can dismiss the boat as an action. <br><b>Tree.</b> You must be outdoors to use this token. You can use an action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. <br><b>Whip.</b> You can use an action to throw the token to a point within 10 feet of you. The token disappears, and a floating whip takes its place. You can then use a bonus action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. <br>On a hit, the target takes 1d6 + 5 force damage. <br>As a bonus action on your turn, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of it. The whip disappears after 1 hour, when you use an action to dismiss it, or when you are incapacitated or die.",
      "source": "DMG",
      "img": "QUAALS_FEATHER_TOKEN.jpg"
    },
    "ru": {
      "name": "Перо Кваля",
      "text": "Этот маленький предмет выглядит как перо. Существует несколько разновидностей таких предметов, и каждый из которых обладает своим особым эффектом, используемым один раз. Мастер сам определяет разновидность пера или определяет её случайным образом. <br><table><tr><td>к100</td><td>Эффект</td></tr><tr><td>01–15</td><td>Веер</td></tr><tr><td>16–40</td><td>Дерево</td></tr><tr><td>41–50</td><td>Кнут</td></tr><tr><td>51–65</td><td>Лодка-лебедь</td></tr><tr><td>66–80</td><td>Птица</td></tr><tr><td>81–00</td><td>Якорь</td></tr></table><br><b>Веер.</b> Если вы находитесь на корабле или лодке, то можете действием подбросить веер в воздух на расстояние до 10 футов. Этот предмет исчезнет, и на том месте, где это произошло, появится гигантский машущий веер. Этот веер парит в воздухе и создаёт ветер, достаточный для того, чтобы наполнить паруса корабля, увеличивая его скорость на 5 миль в час в течение 8 часов. Вы можете действием прервать этот эффект. <br><b>Дерево.</b> Для использования этого пера вы должны находиться на открытом воздухе. Вы можете действием коснуться свободного пространства на поверхности земли. Перо исчезает, и на том месте, где вы коснулись земли, вырастет дуб, не обладающий никакими магическими свойствами. Высотой дерево будет достигать 60 футов при диаметре ствола 5 футов и радиусе кроны 20 футов. <br><b>Кнут.</b> Вы можете действием бросить это перо в любую точку пространства в пределах 10 футов от себя. Перо исчезает, и на его месте появится парящий над землёй кнут. После этого вы можете бонусным действием совершить рукопашную атаку заклинанием по существу, находящемуся в пределах 10 футов от кнута, с бонусом атаки +9. При попадании цель получает урон силовым полем 1к6 + 5. <br>В свой ход вы можете бонусным действием приказать кнуту переместиться на 20 футов и повторить атаку по существу, находящемуся в пределах 10 футов от него. Кнут исчезает через 1 час, либо после того, как вы действием отпустите его, либо же если вы станете недееспособным или умрёте. <br><b>Лодка-лебедь.</b> Вы можете действием прикоснуться этим предметом к водоёму с диаметром как минимум 60 футов. Перо исчезнет, и вместо него появляется лодка в форме лебедя длиной 50 и шириной 20 футов. Эта лодка может самостоятельно двигаться по водной глади со скоростью 6 миль в час. Находясь на лодке, вы можете действием отдавать ей команды двигаться или совершить поворот на 90 градусов. Лодка может перевозить 32 существа Среднего или меньшего размера. Большое существо считается за четыре Средних, а Огромное за девять. Лодка остаётся в вашем распоряжении 24 часа, после чего исчезает. Вы также можете действием прервать действие магии досрочно. <br><b>Птица.</b> Вы можете действием подбросить перо в воздух на 5 футов. Перо исчезает, и на его месте появляется огромная, разноцветная птица. Используйте для неё блок статистики <a href='https://tentaculus.ru/monsters/#q=рух'>рух</a>, но она исполняет ваши простые приказания и не может атаковать. Она может переносить до 500 фунтов, летя со своей максимальной скоростью (16 миль в час при максимуме в 144 мили в день, с часовыми отдыхами через каждые 3 часа), или 1000 фунтов с уменьшенной вдвое скоростью. Птица исчезнет после того, как пролетит свою максимальную дневную дистанцию или, если её хиты опустятся до 0. Вы также можете отпустить её действием. <br><b>Якорь.</b> Вы можете действием коснуться этим пером лодки или корабля. В течение следующих 24 часов это судно не может двинуться с места, какие бы средства не использовались для этого. Повторное прикосновение прекращает эффект. Когда эффект заканчивается, перо исчезает."
    }
  },
  {
    "en": {
      "name": "QUIVER OF EHLONNA",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears. <br>You can draw any item the quiver contains as if doing so from a regular quiver or scabbard.",
      "source": "DMG",
      "img": "QUIVER_OF_EHLONNA.jpg"
    },
    "ru": {
      "name": "Колчан Элонны",
      "text": "Все три отделения этого колчана соединены с межпространственным местом, что позволяет ему вмещать множество предметов, но весит он всегда не более 2 фунтов. В самом коротком отделении может поместиться до шестидесяти стрел, арбалетных болтов или подобных предметов. В среднем отделении помещается до восемнадцати метательных копий или подобных предметов. В самом длинном отделении помещается до шести длинных предметов, таких как луки, боевые посохи и копья. <br>Вы можете вынуть любой предмет из колчана, как если бы это был обычный колчан или ножны."
    }
  },
  {
    "en": {
      "name": "RING OF ANIMAL INFLUENCE",
      "type": "Ring",
      "rarity": 3,
      "text": "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 of its charges to cast one of the following spells: <br><a href='https://tentaculus.ru/spells/#q=Animal_friendship'>Animal friendship</a> (save DC 13) <br><a href='https://tentaculus.ru/spells/#q=Fear'>Fear</a> (save DC 13), targeting only beasts that have an <br>Intelligence of 3 or lower <br><a href='https://tentaculus.ru/spells/#q=Speak_with_animals'>Speak with animals</a>",
      "source": "DMG",
      "img": "RING_OF_ANIMAL_INFLUENCE.jpg"
    },
    "ru": {
      "name": "Кольцо влияния на животных",
      "text": "У этого кольца есть 3 заряда, и оно ежедневно восстанавливает 1к3 заряда на рассвете. Нося это кольцо, вы можете действием потратить 1 заряд, чтобы наложить одно из следующих заклинаний:<br><br>• <a href='https://tentaculus.ru/spells/#q=animal_friendship'>Дружба с животными</a> (Сл спасброска 13)<br><br>• <a href='https://tentaculus.ru/spells/#q=fear'>Ужас</a> (Сл спасброска 13), нацеливается только на зверей с Интеллектом 3 или ниже<br><br>• <a href='https://tentaculus.ru/spells/#q=speak_with_animal'>Разговор с животными</a>"
    }
  },
  {
    "en": {
      "name": "RING OF DJINNI SUMMONING",
      "type": "Ring",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "While wearing this ring, you can speak its command word as an action to summon a particular djinni from the Elemental Plane of Air. The djinni appears in an unoccupied space you choose within 120 feet of you. It remains as long as you concentrate (as if concentrating on a spell), to a maximum of 1 hour, or until it drops to 0 hit points. It then returns to its home plane. <br>While summoned, the djinni is friendly to you and your companions. It obeys any commands you give it, no matter what language you use. If you fail to command it, the djinni defends itself against attackers but takes no other actions. <br>After the djinni departs, it can't be summoned again for 24 hours, and the ring becomes nonmagical if the djinni dies.",
      "source": "DMG",
      "img": "RING_OF_DJINNI_SUMMONING.jpg"
    },
    "ru": {
      "name": "Кольцо призыва джинна",
      "text": "Нося это кольцо, вы можете действием произнести его командное слово, чтобы призвать конкретного джинна со Стихийного Плана Воздуха. Джинн появляется в свободном пространстве, выбранном вами в пределах 120 футов от себя. Он остаётся, пока вы концентрируетесь (как при концентрации на заклинании), но не более 1 часа, или пока его хиты не опустятся до 0, после чего он возвращается на домашний план. <br>Будучи призванным, джинн дружелюбен к вам и вашим спутникам. Он повинуется командам, которые вы отдаёте, вне зависимости от использованного языка. Если вы не отдаёте приказы, джинн защищается от нападающих, но не совершает других действий. <br>После того как джинн возвращается на родной план, его нельзя призвать повторно, пока не пройдёт 24 часа, и кольцо перестаёт быть магическим, если джинн умирает.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF Air ELEMENTAL COMMAND",
      "type": "Ring",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "This ring is linked to one of the four Elemental <br>Planes. The DM chooses or randomly determines the linked plane. <br>While wearing this ring, you have advantage on attack rolls against elementals from the linked plane, and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the linked plane. <br>The ring has 5 charges. It regains 1d4 + 1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17. <br> You can expend 2 of the ring's charges to cast <a href='https://tentaculus.ru/spells/#q=dominate_monster'>dominate monster</a> on an <a href='https://tentaculus.ru/monsters/#q=Air_elemental'>air elemental</a>. In addition, when you fall, you descend 60 feet per round and take no damage from falling. You can also speak and understand Auran. <br>If you help slay an air elemental while attuned to the ring, you gain access to the following additional properties: <br>You have resistance to lightning damage. <br>• You have a flying speed equal to your walking speed and can hover. <br>You can cast the following spells from the ring, expending the necessary number of charges: chain lightning (3 charges), <a href='https://tentaculus.ru/spells/#q=gust_of_windl'>gust of wind</a> (2 charges), or wr.~.: wall (1 charge).",
      "source": "DMG",
      "img": "RING_OF_ELEMENTAL_COMMAND.jpg"
    },
    "ru": {
      "name": "Кольцо командования воздушными элементалями",
      "text": "Это кольцо связано с одним из четырёх Стихийных <br>Планов. Мастер выбирает один такой план самостоятельно или случайным образом. <br>Нося это кольцо, вы совершаете с преимуществом броски атаки по элементалям из связанного плана, а они совершают с помехой броски атаки по вам. Кроме того, вы получаете дополнительные преимущества, связанные с планом кольца. <br>У кольца есть 5 зарядов. Оно ежедневно восстанавливает 1к4 + 1 заряд на рассвете. У заклинаний, наложенных кольцом, Сл спасброска равна 17. <br>Вы можете потратить 2 заряда кольца, чтобы наложить на воздушного элементаля <a href='https://tentaculus.ru/spells/#q=dominate_monster'>подчинение чудовища</a>. Кроме того, если вы падаете, вы спускаетесь на 60 футов в раунд и не получаете урон от падения. Вы также можете говорить на языке Ауран и понимать его. <br>Если вы поможете убить воздушного элементаля, будучи настроенным на это кольцо, вы получаете доступ к следующим свойствам:<br><br>• Вы получаете сопротивление к урону электричеством.<br><br>• Вы получаете скорость полёта, равную вашей скорости хождения, и можете парить.<br><br>• Вы можете накладывать кольцом следующие заклинания, тратя соответствующее число зарядов: пляшущая молния (3 заряда), <a href='https://tentaculus.ru/spells/#q=gust_of_windl'>порыв ветра</a> (2 заряда) или стена ветров (1 заряд). ",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF earth ELEMENTAL COMMAND",
      "type": "Ring",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "This ring is linked to one of the four Elemental <br>Planes. The DM chooses or randomly determines the linked plane. <br>While wearing this ring, you have advantage on attack rolls against elementals from the linked plane, and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the linked plane. <br>The ring has 5 charges. It regains 1d4 + 1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17. <br> You can expend 2 of the ring's charges to cast <a href='https://tentaculus.ru/spells/#q=dominate_monster'>dominate monster</a> on  <a href='https://tentaculus.ru/monsters/#q=Earth_elemental'>earth elemental</a>. In addition, you can move in difficulr terrain that is composed of rubble, rocks, or dirt as if it were normal terrain. You can also speak and understand Terran. <br>If you help slay an earth elemental while attuned to the ring, you gain access to the following additional properties: <br>• You have resistance to acid damage. <br>• You can move through solid earth or rock as if tho areas were difficult terrain. If you end your turn the:= you are shunted out to the nearest unoccupied space you last occupied. <br>• You can cast the following spells from the ring, expending the necessary number of charges: stone shape (2 charges), stoneskin (3 charges), or wall of stone (3 charges). ",
      "source": "DMG",
      "img": "RING_OF_ELEMENTAL_COMMAND.jpg"
    },
    "ru": {
      "name": "Кольцо командования земляными элементалями",
      "text": "Это кольцо связано с одним из четырёх Стихийных <br>Планов. Мастер выбирает один такой план самостоятельно или случайным образом. <br>Нося это кольцо, вы совершаете с преимуществом броски атаки по элементалям из связанного плана, а они совершают с помехой броски атаки по вам. Кроме того, вы получаете дополнительные преимущества, связанные с планом кольца. <br>У кольца есть 5 зарядов. Оно ежедневно восстанавливает 1к4 + 1 заряд на рассвете. У заклинаний, наложенных кольцом, Сл спасброска равна 17.  <br>Вы можете потратить 2 заряда кольца, чтобы наложить на земляного элементаля <a href='https://tentaculus.ru/spells/#q=dominate_monster'>подчинение чудовища</a>. Кроме того, вы можете перемещаться по труднопроходимой местности, вызванной камнями, валунами или грязью, как если бы это была обычная местность. Вы также можете говорить на языке Терран и понимать его. <br>Если вы поможете убить земляного элементаля, будучи настроенным на это кольцо, вы получаете доступ к следующим свойствам:<br><br>• Вы получаете сопротивление к урону кислотой.<br><br>• Вы можете перемещаться сквозь плотную землю или камень, как если бы они были труднопроходимой местностью. Если вы оканчиваете ход в них, вас выбрасывает в ближайшее свободное пространство, занимаемое вами ранее.<br><br>• Вы можете накладывать кольцом следующие заклинания, тратя соответствующее число зарядов: изменение формы камня (2 заряда), каменная кожа (3 заряда) или каменная стена (3 заряда).",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF fire ELEMENTAL COMMAND",
      "type": "Ring",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "This ring is linked to one of the four Elemental <br>Planes. The DM chooses or randomly determines the linked plane. <br>While wearing this ring, you have advantage on attack rolls against elementals from the linked plane, and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the linked plane. <br>The ring has 5 charges. It regains 1d4 + 1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17. <br> You can expend 2 of the ring's charges to cast <a href='https://tentaculus.ru/spells/#q=dominate_monster'>dominate monster</a> on a <a href='https://tentaculus.ru/monsters/#q=Fire_elemental'>fire elemental</a>. In addition, you have resistance to fire damage. You can also speak and understand Ignan. <br>If you help slay a fire elemental while attuned to the ring, you gain access to the following additional properties: <br>You are immune to fire damage. <br>You can cast the following spells from the ring, expending the necessary number of charges: burnin: hands (1 charge), <a href='https://tentaculus.ru/spells/#q=fireball'>fireball</a> (2 charges), and <a href='https://tentaculus.ru/spells/#q=wall_of_fire'>wall of fire</a> (3 charges).",
      "source": "DMG",
      "img": "RING_OF_ELEMENTAL_COMMAND.jpg"
    },
    "ru": {
      "name": "Кольцо командования огненными элементалями",
      "text": "Это кольцо связано с одним из четырёх Стихийных <br>Планов. Мастер выбирает один такой план самостоятельно или случайным образом. <br>Нося это кольцо, вы совершаете с преимуществом броски атаки по элементалям из связанного плана, а они совершают с помехой броски атаки по вам. Кроме того, вы получаете дополнительные преимущества, связанные с планом кольца. <br>У кольца есть 5 зарядов. Оно ежедневно восстанавливает 1к4 + 1 заряд на рассвете. У заклинаний, наложенных кольцом, Сл спасброска равна 17.  <br>Вы можете потратить 2 заряда кольца, чтобы наложить на огненного элементаля <a href='https://tentaculus.ru/spells/#q=dominate_monster'>подчинение чудовища</a>. Кроме того, вы получаете сопротивление к урону огнём. Вы также можете говорить на языке Игнан и понимать его. <br>Если вы поможете убить огненного элементаля, будучи настроенным на это кольцо, вы получаете доступ к следующим свойствам:<br><br>• Вы получаете иммунитет к урону огнём.<br><br>• Вы можете накладывать кольцом следующие заклинания, тратя соответствующее число зарядов: <a href='https://tentaculus.ru/spells/#q=wall_of_fire'>огненная стена</a> (3 заряда), огненные ладони (1 заряд) или <a href='https://tentaculus.ru/spells/#q=fireball'>огненный шар</a> (2 заряда).",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF water ELEMENTAL COMMAND",
      "type": "Ring",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "This ring is linked to one of the four Elemental <br>Planes. The DM chooses or randomly determines the linked plane. <br>While wearing this ring, you have advantage on attack rolls against elementals from the linked plane, and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the linked plane. <br>The ring has 5 charges. It regains 1d4 + 1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17. <br> You can expend 2 of the ring's charges to cast <a href='https://tentaculus.ru/spells/#q=dominate_monster'>dominate monster</a> on a <a href='https://tentaculus.ru/monsters/#q=Water_elemental'>water elemental</a>. In addition, you can stand on and walk across liquid surfaces as if they were solid ground. You can also speak and understand Aquan . . <br>If you help slay a water elemental while attuned to the ring, you gain access to the following additional properties: <br>You can breathe underwater and have a swimming speed equal to your walking speed. <br>You can cast the following spells from the ring, expending the necessary number of charges: create or destroy water (1 charge), control water (3 charges), ice storm (2 charges), or wall of ice (3 charges).",
      "source": "DMG",
      "img": "RING_OF_ELEMENTAL_COMMAND.jpg"
    },
    "ru": {
      "name": "Кольцо командования водяными элементалями",
      "text": "Это кольцо связано с одним из четырёх Стихийных <br>Планов. Мастер выбирает один такой план самостоятельно или случайным образом. <br>Нося это кольцо, вы совершаете с преимуществом броски атаки по элементалям из связанного плана, а они совершают с помехой броски атаки по вам. Кроме того, вы получаете дополнительные преимущества, связанные с планом кольца. <br>У кольца есть 5 зарядов. Оно ежедневно восстанавливает 1к4 + 1 заряд на рассвете. У заклинаний, наложенных кольцом, Сл спасброска равна 17. <br> Вы можете потратить 2 заряда кольца, чтобы наложить на <a href='https://tentaculus.ru/monsters/#q=Water_elemental'>водяного элементаля</a> <a href='https://tentaculus.ru/spells/#q=dominate_monster'>подчинение чудовища</a>. Кроме того, вы можете стоять на жидких поверхностях и ходить по ним, как если бы они были твёрдыми. Вы также можете говорить на языке Акван и понимать его. <br>Если вы поможете убить водяного элементаля, будучи настроенным на это кольцо, вы получаете доступ к следующим свойствам:<br><br>• Вы можете дышать под водой и получаете скорость плавания, равную скорости ходьбы.<br><br>• Вы можете накладывать кольцом следующие заклинания, тратя соответствующее число зарядов: власть над водами (3 заряда), град (2 заряда), ледяная стена (3 заряда) или сотворение или уничтожение воды (1 заряд).",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF EVASION",
      "type": "Ring",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 of its charges to succeed on that saving throw instead.",
      "source": "DMG",
      "img": "RING_OF_EVASION.jpg"
    },
    "ru": {
      "name": "Кольцо уклонения",
      "text": "У этого кольца 3 заряда, и оно ежедневно восстанавливает 1к3 заряда на рассвете. Если вы проваливаете спасбросок Ловкости, когда носите его, вы можете реакцией потратить 1 заряд, чтобы спасбросок стал успешным.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF FEATHER FALLING",
      "type": "Ring",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling.",
      "source": "DMG",
      "img": "RING_OF_FEATHER_FALLING.jpg"
    },
    "ru": {
      "name": "Кольцо падения пёрышком",
      "text": "Если вы падаете, нося это кольцо, вы опускаетесь на 60 футов в раунд и не получаете урон от падения.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF FREE ACTION",
      "type": "Ring",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "While you wear this ring, difficult terrain doesn't cost you extra movement. In addition, magic can neither reduce your speed nor cause you to be paralyzed or restrained.",
      "source": "DMG",
      "img": "RING_OF_FREE_ACTION.jpg"
    },
    "ru": {
      "name": "Кольцо свободных действий",
      "text": "Если вы носите это кольцо, труднопроходимая местность не заставляет вас тратить дополнительное перемещение. Кроме того, магия не может ни уменьшить вашу скорость, ни сделать вас парализованным или опутанным.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF INVISIBILITY",
      "type": "Ring",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying is invisible with you. You remain invisible until the ring is removed, until you attack or cast a spell, or until you use a bonus action to become visible again.",
      "source": "DMG",
      "img": "RING_OF_INVISIBILITY.jpg"
    },
    "ru": {
      "name": "Кольцо невидимости",
      "text": "Нося это кольцо, вы можете действием становиться невидимым. Всё, что вы несёте и носите, становится невидимым вместе с вами. Вы остаётесь невидимым, пока не снимете кольцо, пока не атакуете или не наложите заклинание, или пока не станете снова видимым бонусным действием.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF JUMPING",
      "type": "Ring",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While wearing this ring, you can cast the <a href='https://tentaculus.ru/spells/#q=jump'>jump</a> spell from it as a bonus action at will, but can target only yourself when you do so.",
      "source": "DMG",
      "img": "RING_OF_JUMPING.jpg"
    },
    "ru": {
      "name": "Кольцо прыжков",
      "text": "Нося это кольцо, вы можете бонусным действием накладывать заклинание <a href='https://tentaculus.ru/spells/#q=jump'>прыжок</a>, но нацеливаясь при этом только на себя.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF MIND SHIELDING",
      "type": "Ring",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it. <br>You can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die. <br>If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication.",
      "source": "DMG",
      "img": "RING_OF_MIND_SHIELDING.jpg"
    },
    "ru": {
      "name": "Кольцо защиты разума",
      "text": "Нося это кольцо, вы обладаете иммунитетом к магии, позволяющей другим существам читать ваши мысли, определять, лжёте ли вы, определять ваше мировоззрение и ваш вид существа. Существа могут телепатически общаться с вами только если вы позволяете это. <br>Вы можете действием сделать кольцо невидимым, пока вновь не сделаете его видимым другим действием, пока не снимете его, или пока не умрёте. <br>Если вы умрёте, нося это кольцо, ваша душа входит в него, если только оно уже не занято душой. Вы можете остаться в кольце, а можете отправиться навстречу посмертию. Пока ваша душа находится в кольце, вы можете телепатически общаться с любым существом, которое носит его. Владелец не может отказаться от этого телепатического общения.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF PROTECTION",
      "type": "Ring",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "You gain a +1 bonus to AC and saving throws while wearing this ring.",
      "source": "DMG",
      "img": "RING_OF_PROTECTION.jpg"
    },
    "ru": {
      "name": "Кольцо защиты",
      "text": "Вы получаете бонус +1 к КД и спасброскам, пока носите это кольцо.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF REGENERATION",
      "type": "Ring",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "While wearing this ring, you regain 1d6 hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6 + 1 days if you have at least 1 hit point the whole time.",
      "source": "DMG",
      "img": "RING_OF_REGENERATION.jpg"
    },
    "ru": {
      "name": "Кольцо регенерации",
      "text": "Нося это кольцо, вы восстанавливаете 1к6 хитов каждые 10 минут, при условии, что у вас есть хотя бы 1 хит. Если вы теряете часть тела, кольцо отращивает её и возвращает функциональность через 1к6 + 1 день, если всё это время у вас есть хотя бы 1 хит.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF RESISTANCE",
      "type": "Ring",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "You have resistance to one damage type while wearing this ring. The gem in the ring indicates the type, which the DM chooses or determines randomly. <br><table><tr><td>dlO</td><td>Damage Type</td><td>Gem</td></tr><tr><td>1</td><td>Acid</td><td>Pearl</td></tr><tr><td>2</td><td>Cold</td><td>Tourmaline</td></tr><tr><td>3</td><td>Fire</td><td>Garnet</td></tr><tr><td>4</td><td>Force</td><td>Sapphire</td></tr><tr><td>5</td><td>Lightning</td><td>Citrine</td></tr><tr><td>6</td><td>Necrotic</td><td>Jet</td></tr><tr><td>7</td><td>Poison</td><td>Amethyst</td></tr><tr><td>8</td><td>Psychic</td><td>Jade</td></tr><tr><td>9</td><td>Radiant</td><td>Topaz</td></tr><tr><td>10</td><td>Thunder</td><td>Spinel</td></tr></table>",
      "source": "DMG",
      "img": "RING_OF_RESISTANCE.jpg"
    },
    "ru": {
      "name": "Кольцо сопротивления",
      "text": "Вы обладаете сопротивлением к одному виду урона, пока носите это кольцо. Драгоценный камень в кольце указывает на этот вид урона, который Мастер выбирает самостоятельно или с помощью данной таблицы:<br><table><tr><td>к10</td><td>Вид урона</td><td>Камень</td></tr><tr><td>1</td><td>Кислота</td><td>Жемчужина</td></tr><tr><td>2</td><td>Холод</td><td>Турмалин</td></tr><tr><td>3</td><td>Огонь</td><td>Гранат</td></tr><tr><td>4</td><td>Силовое поле</td><td>Сапфир</td></tr><tr><td>5</td><td>Электричество</td><td>Цитрин</td></tr><tr><td>6</td><td>Некротическая энергия</td><td>Гагат</td></tr><tr><td>7</td><td>Яд</td><td>Аметист</td></tr><tr><td>8</td><td>Психическая энергия</td><td>Жадеит</td></tr><tr><td>9</td><td>Излучение</td><td>Топаз</td></tr><tr><td>10</td><td>Звук</td><td>Шпинель</td></tr></table>",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF SHOOTING STARS",
      "type": "Ring",
      "rarity": 4,
      "attunement": "(requires attunement outdoors at night)",
      "text": "While wearing this ring in dim light or darkness, you can cast dancing lights and light from the ring at will. <br>Casting either spell from the ring requires an action. <br>The ring has 6 charges for the following other properties. The ring regains ld6 expended charges daily at dawn. <br><b>Faerie Fire.</b> You can expend 1 charge as an action to cast faerie fire from the ring. <br><b>Ball Lightning.</b> You can expend 2 charges as an , action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually. <br>Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius. <br>As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. <br>When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 <br>Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created.<br><table><tr><td>Spheres</td><td>Lightning Damage</td></tr><tr><td>4</td><td>2d4</td></tr><tr><td>3</td><td>2d6</td></tr><tr><td>2</td><td>5d4</td></tr><tr><td>1</td><td>4dl2</td></tr></table> <br><b>Shooting Stars.</b> You can expend 1 to 3 charges as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
      "source": "DMG",
      "img": "RING_OF_SHOOTING_STARS.jpg"
    },
    "ru": {
      "name": "Кольцо падающих звёзд",
      "attunement": "(требует настройки ночью на улице)",
      "text": "Нося это кольцо в области тусклого света или темноте, вы можете неограниченно действием накладывать им пляшущие огоньки или свет. <br>У кольца есть 6 зарядов для использования описанных ниже свойств. Кольцо ежедневно восстанавливает 1к6 зарядов на рассвете. <br><b>Огонь фей.</b> Вы можете действием потратить 1 заряд, чтобы наложить кольцом <a href='https://tentaculus.ru/spells/#q=faerie_fire'>огонь фей</a>. <br><b>Шаровая молния.</b> Вы можете действием потратить 2 заряда, чтобы создать кольцом от одной до четырёх шаровых молний диаметром 3 фута. Чем больше шаров вы создадите, тем менее эффективен каждый из них. <br>Каждый шар появляется в свободном пространстве, видимом вами в пределах 120 футов. Шары существуют, пока вы концентрируетесь (как при концентрации на заклинании), но не более 1 минуты. <br>Каждый шар испускает тусклый свет в радиусе 30 футов. <br>Вы можете бонусным действием переместить каждый шар на расстояние до 30 футов, но не более чем на 120 футов от себя. Если какое-нибудь существо кроме вас оказывается в пределах 5 футов от шара, шар выпускает в него разряд молнии и исчезает. Это существо должно совершить спасбросок Ловкости со Сл 15. При провале существо получает урон электричеством, зависящий от количества созданных вами шаров. <br><table><tr><td>Шары</td><td>Урон электричеством</td></tr><tr><td>4</td><td>2к4</td></tr><tr><td>3</td><td>2к6</td></tr><tr><td>2</td><td>5к4</td></tr><tr><td>1</td><td>4к12</td></tr></table><br><b>Падающие звёзды.</b> Вы можете действием потратить от 1 до 3 зарядов. За каждый потраченный заряд вы выпускаете из кольца по одному светящемуся шарику в точку, которую видите в пределах 60 футов. Все существа в пределах 15-футового куба, исходящего из этой точки, покрываются искрами и должны совершить спасбросок Ловкости со Сл 15, получая урон огнём 5к4 при провале или половину урона при успехе."
    }
  },
  {
    "en": {
      "name": "RING OF SPELL STORING",
      "type": "Ring",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contain ld6 - I levels of stored spells chosen by the DM. <br>Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. <br>The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expendec without effect. The level of the slot used to cast the spel! determines how much space it uses. <br>While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. <br>The spell cast from the ring is no longer stored in it, freeing up space.",
      "source": "DMG",
      "img": "RING_OF_SPELL_STORING.jpg"
    },
    "ru": {
      "name": "Кольцо хранения заклинаний",
      "text": "Это кольцо хранит заклинания, наложенные на него, позволяя использовать их владельцу, настроенному на кольцо. Кольцо может хранить до 5 уровней заклинаний одновременно. Когда кольцо находят, оно хранит 1к6 − 1 уровень заклинаний, которые выбирает Мастер. <br>Любое существо может наложить заклинание с уровнем от 1 до 5 на кольцо, касаясь его в процессе колдовства. Заклинание не оказывает эффекта сейчас, а просто сохраняется в кольце. Если кольцо не может удержать заклинание, заклинание тратится безо всякого эффекта. Занимаемое пространство определяется уровнем ячейки, использованной для накладывания заклинания. <br>Нося это кольцо, вы можете накладывать любые хранящиеся в нём заклинания. Заклинание использует уровень ячейки, Сл спасброска, бонус атаки и базовую характеристику исходного заклинателя, но во всём остальном считается, что заклинание наложили вы. Наложенное кольцом заклинание больше не хранится в нём и освобождает пространство.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF SPELL TURNING",
      "type": "Ring",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "While wearing this ring, you have advantage on saving throws against any spell that targets only you (not in an area of effect). In addition, if you roll a 20 for the save and the spell is 7th level or lower, the spell has no effect on you and instead targets the caster, using the slot level, spell save DC, attack bonus, and spellcasting ability of the caster.",
      "source": "DMG",
      "img": "RING_OF_SPELL_TURNING.jpg"
    },
    "ru": {
      "name": "Кольцо отражения заклинаний",
      "text": "Нося это кольцо, вы совершаете с преимуществом спасброски от заклинаний, нацеленных только на вас (не обладающих зонами воздействия). Кроме того, если у вас выпадет «20» при спасброске от заклинание с уровнем не больше 7, заклинание не оказывает на вас никакого эффекта, и вместо этого нацеливается на заклинателя, используя уровень ячейки, Сл спасброска, бонус атаки и базовую характеристику самого заклинателя.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF SWIMMING",
      "type": "Ring",
      "rarity": 2,
      "text": "You have a swimming speed of 40 feet while wearing this ring.",
      "source": "DMG",
      "img": "RING_OF_SWIMMING.jpg"
    },
    "ru": {
      "name": "Кольцо плавания",
      "text": "Вы получаете скорость плавания 40 футов, пока носите это кольцо."
    }
  },
  {
    "en": {
      "name": "RING OF TELEKINESIS",
      "type": "Ring",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "While wearing this ring, you can cast the telekinesis spell at will, but you can target only objects that aren't being worn or carried.",
      "source": "DMG",
      "img": "RING_OF_TELEKINESIS.jpg"
    },
    "ru": {
      "name": "Кольцо телекинеза",
      "text": "Нося это кольцо, вы можете неограниченно накладывать заклинание телекинез, но нацеливаясь только на предметы, которые никто не несёт и не носит.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF THE RAM",
      "type": "Ring",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 to 3 of its charges to attack one creature you can see within 60 feet of you. The ring produces a spectral ram's head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you. <br>Alternatively, you can expend 1 to 3 of the ring's charges as an action to try to break an object you can see within 60 feet of you that isn't being worn or carried. <br>The ring makes a Strength check with a +5 bonus for each charge you spend.",
      "source": "DMG",
      "img": "RING_OF_THE_RAM.jpg"
    },
    "ru": {
      "name": "Кольцо тарана",
      "text": "У этого кольца 3 заряда, и оно ежедневно восстанавливает 1к3 заряда на рассвете. Нося это кольцо, вы можете действием потратить от 1 до 3 зарядов, чтобы атаковать одно существо, видимое в пределах 60 футов. Кольцо создаёт призрачную голову барана и совершает атаку с бонусом +7. При попадании за каждый использованный вами заряд цель получает урон силовым полем 2к10 и толкается на 5 футов от вас. <br>В качестве альтернативы, вы может действием потратить от 1 до 3 зарядов, чтобы попытаться сломать предмет, видимый в пределах 60 футов, который никто не несёт и не носит. Кольцо совершает проверку <br>Силы с бонусом +5 за каждый использованный заряд.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF THREE WISHES",
      "type": "Ring",
      "rarity": 5,
      "text": "While wearing this ring, you can use an action to expend 1 of its 3 charges to cast the <a href='https://tentaculus.ru/spells/#q=wish'>wish</a> spell from it. The ring becomes nonmagical when you use the last charge.",
      "source": "DMG",
      "img": "RING_OF_THREE_WISHES.jpg"
    },
    "ru": {
      "name": "Кольцо трёх желаний",
      "text": "Нося это кольцо, вы можете действием использовать 1 из 3 его зарядов, чтобы наложить им заклинание <a href='https://tentaculus.ru/spells/#q=wish'>исполнение желаний</a>. Кольцо перестаёт быть магическим, когда тратится последний заряд."
    }
  },
  {
    "en": {
      "name": "RING OF WARMTH",
      "type": "Ring",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as - 50 degrees Fahrenheit.",
      "source": "DMG",
      "img": "RING_OF_WARMTH.jpg"
    },
    "ru": {
      "name": "Кольцо тепла",
      "text": "Нося это кольцо, вы обладаете сопротивлением к урону холодом. Кроме того, вы и всё, что вы несёте и носите, не получают вреда от температур не ниже −50 °F (−45 °C).",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "RING OF WATER WALKING",
      "type": "Ring",
      "rarity": 2,
      "text": "While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground.",
      "source": "DMG",
      "img": "RING_OF_WATER_WALKING.jpg"
    },
    "ru": {
      "name": "Кольцо хождения по воде",
      "text": "Нося это кольцо, вы можете стоять на жидких поверхностях и ходить по ним, как если бы они были твёрдыми."
    }
  },
  {
    "en": {
      "name": "RING OF X-RAY VISION",
      "type": "Ring",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "While wearing this ring, you can use an action to speak its command word. When you do so, you can see into and through solid matter for 1 minute. This vision has a radius of 30 feet. To you, solid objects within that radius appear transparent and don't prevent light from passing through them. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. <br>Thicker substances block the vision, as does a thin sheet of lead. <br>Whenever you use the ring again before taking a long rest, you must succeed on a DC 15 Constitution saving throw or gain one level of exhaustion.",
      "source": "DMG",
      "img": "RING_OF_X-RAY_VISION.jpg"
    },
    "ru": {
      "name": "Кольцо проникающего зрения",
      "text": "Нося это кольцо, вы можете действием произнести его командное слово. Сделав это, вы сможете видеть через твёрдую материю в течение 1 минуты. Радиус этого зрения — 30 футов. Для вас твёрдые предметы в этом радиусе выглядят прозрачными и не препятствуют проходить сквозь них свету. Это зрение может проникать сквозь 1 фут камня, 1 дюйм обычного металла или 3 фута дерева или земли. Более толстые препятствия, а также тонкий лист свинца блокируют обзор. <br>Каждый раз, когда вы используете это кольцо повторно до совершения продолжительного отдыха, вы должны преуспеть в спасброске Телосложения со Сл 15, иначе получите 1 уровень истощения.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ROBE OF EYES",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "This robe is adorned with eyelike patterns. While you wear the robe, you gain the following benefits: <br>The robe lets you see in all directions, and you have advantage on Wisdom (Perception) checks that rely on sight. <br>• You have darkvision out to a range of 120 feet. <br>• You can see invisible creatures and objects, as well as see into the Ethereal Plane, out to a range of 120 feet. <br>The eyes on the robe can't be closed or averted. <br>Although you can close or avert your own eyes, you are never considered to be doing so while wearing this robe <br>A light spell cast on the robe or a <a href='https://tentaculus.ru/spells/#q=daylight'>daylight spell</a> cast within 5 feet of the robe causes you to be blinded for 1 minute. At the end of each of your turns, you can make _ <br>Constitution saving throw (DC 11 for light or DC 15 for daylight), ending the blindness on a success.",
      "source": "DMG",
      "img": "ROBE_OF_EYES.jpg"
    },
    "ru": {
      "name": "Мантия глаз",
      "text": "Эта мантия украшена узором в виде глаз. Пока вы носите её, вы обладаете следующими преимуществами:<br><br>• Мантия позволяет вам видеть во всех направлениях, и вы совершаете с преимуществом проверки Мудрости (Внимательность), полагающиеся на зрение.<br><br>• Вы обладаете тёмным зрением в пределах 120 футов.<br><br>• Вы можете видеть невидимых существ и предметы, а также ваше зрение простирается на 120 футов на Эфирный План. <br>Глаза на мантии нельзя закрыть или отвести в сторону. Вы можете закрыть или увести в сторону свои собственные глаза, но пока вы носите эту мантию, считается, что вы этого никогда не делаете. <br>Заклинание свет, наложенное на эту мантию, или заклинание <a href='https://tentaculus.ru/spells/#q=daylight'>дневной свет</a>, наложенное в пределах 5 футов от мантии, вызывает у вас слепоту на 1 минуту. В конце каждого своего хода вы можете совершать спасброски Телосложения (Сл 11 для света или 15 для дневного света), оканчивая слепоту при успехе.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ROBE OF SCINTILLATING COLORS",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "This robe has 3 charges, and it regains 1d3 expended charges daily at dawn. While you wear it, you can use an action and expend 1 charge to cause the garment to display a shifting pattern of dazzling hues until the end of your next turn. During this time, the robe sheds bright light in a 30-foot radius and dim light for an additional 30 feet. Creatures that can see you have disadvantage on attack rolls against you. In addition, any creature in the bright light that can see you when the robe's power is activated must succeed on a DC 15 Wisdom saving throw or become stunned until the effect ends.",
      "source": "DMG",
      "img": "ROBE_OF_SCINTILLATING_COLORS.jpg"
    },
    "ru": {
      "name": "Мантия сияющих цветов",
      "text": "У этой мантии 3 заряда, и она ежедневно восстанавливает 1к3 заряда на рассвете. Пока вы её носите, вы можете действием потратить 1 заряд, чтобы на ней появился до конца вашего следующего хода узор из завораживающих оттенков. В это время мантия испускает яркий свет в пределах 30 футов и тусклый свет в пределах ещё 30 футов. Существа, видящие вас, совершают по вам броски атаки с помехой. Кроме того, когда свойство мантии активируется, все существа в области яркого света, видящие вас, должны преуспеть в спасброске Мудрости со Сл 15, иначе они станут ошеломлёнными до окончания эффекта.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ROBE OF STARS",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "This black or dark blue robe is embroidered with smal! white or silver stars. You gain a +1 bonus to saving throws while you wear it. <br>Six stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you caL use an action to pull off one of the stars and use it to cast <a href='https://tentaculus.ru/spells/#q=magic_missilel'>magic missile</a> as a 5th-level spell. Daily at dusk, la: removed stars reappear on the robe. <br>While you wear the robe, you can use an action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use an action to return to the plane you were on. You reappear in the last space you occupied, or if that space is occupied, the nearest unoccupied space.",
      "source": "DMG",
      "img": "ROBE_OF_STARS.jpg"
    },
    "ru": {
      "name": "Мантия звёзд",
      "text": "Эта чёрная или тёмно-синяя мантия украшена белыми или серебристыми звёздочками. Вы получаете бонус +1 к спасброскам, пока носите её. <br>Шесть звёзд, расположенные на груди, отличаются увеличенным размером. Если вы носите эту мантию, вы можете действием оторвать одну из звёзд и использовать её для наложения заклинания <a href='https://tentaculus.ru/spells/#q=magic_missilel'>волшебная стрела</a> как заклинания 5 уровня. Каждый день на закате на мантии заново появляются 1к6 звёзд. <br>Пока вы носите эту мантию, вы можете действием перейти на Астральный План вместе со всем, что вы несёте и носите. Вы остаётесь там, пока не вернётесь действием на тот же самый план. Вы появляетесь в пространстве, которое занимали ранее, или ближайшем пространстве, если прошлое место занято.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ROBE OF THE ARCHMAGI",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement by a sorcerer, warlock, or wizard)",
      "text": "This elegant garment is made from exquisite cloth of white, gray, or black and adorned with silvery runes. <br>The robe's color corresponds to the alignment for whi - the item was created. A white robe was made for good. gray for neutral, and black for evil. You can't attune to a robe of the archmagi that doesn't correspond to your alignment. <br>You gain these benefits while wearing the robe: <br>• If you aren't wearing armor, your base Armor Class is 15 +your Dexterity modifier. <br>You have advantage on saving throws against spell and other magical effects. <br>Your spell save DC and spell attack bonus each increase by 2.",
      "source": "DMG",
      "img": "ROBE_OF_THE_ARCHMAGI.jpg"
    },
    "ru": {
      "name": "Мантия архимага",
      "attunement": "(требует настройки чародеем, колдуном или волшебником)",
      "text": "Этот красивый наряд пошит из белой, серой или чёрной ткани и украшен серебристыми рунами. Цвет мантии соответствует мировоззрению, для которого она и создана. Белые мантии делают для добрых, серые для нейтральных, а чёрные для злых. Вы не можете настроиться на мантию архимага, чьё мировоззрение не совпадает с вашим. <br>Вы получаете следующие преимущества, пока носите мантию:<br><br>• Если вы не носите доспех, ваш базовый Класс Доспеха равен 15 + ваш модификатор Ловкости.<br><br>• Вы совершаете с преимуществом спасброски от заклинаний и других магических эффектов.<br><br>• Сл спасбросков от ваших заклинаний и бонус атаки заклинаниями увеличиваются на 2."
    }
  },
  {
    "en": {
      "name": "ROBE OF USEFUL ITEMS",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This robe has cloth patches of various shapes and colors covering it. While wearing the robe. you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment. <br>The robe has two of each of the following patches: <br>Dagger <br>Bullseye lantern (filled and lit) <br>Steel mirror 10-foot pole <br>Hempen rope (50 feet, coiled) <br>Sack <br>In addition, the robe has 4d4 other patches. The DM chooses the patches or determines them randomly. <br>RoD OF ABSORPTION <br>Rod, very rare (requires attunement) <br>While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell's effect is canceled, and the spell's energy- not the spell itself- is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can't absorb more. If you are targeted by a spell that the rod can't store, the rod has no effect on that spell. <br>When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence, and how many levels of spell energy it currently has stored. <br>If you are a spellcaster holding the rod, you can convert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of 5th level. You use the stored levels in place of your slots, but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a 3rd-level spell slot. <br>A newly found rod has ldlO levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical.<br><table><tr><td>dlOO</td><td>Patch</td></tr><tr><td>01-08</td><td>Bag of 100 gp</td></tr><tr><td>09-15</td><td>Silver coffer (1 foot long, 6 inches wide and deep) worth 500 gp</td></tr><tr><td>16-22</td><td>Iron doo r (up to 10 feet wide and 10 feet high, barred on one side of your choice), wh ich you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself</td></tr><tr><td>23-30</td><td>10 gems worth 100 gp each</td></tr><tr><td>31-44</td><td>Wooden ladder (24 feet long)</td></tr><tr><td>45-51</td><td>A <a href=/https://tentaculus.ru/monsters/#q=riding_horse'>riding horse</a> with saddle bags (see the Monster Manual for statistics)</td></tr><tr><td>52-59</td><td>Pit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you</td></tr><tr><td>60-68</td><td>4 potions of healing</td></tr><tr><td>69-75</td><td>Rowboat (12 feet long)</td></tr><tr><td>76-83</td><td>Spell scroll contai ning one spell of 1st to 3rd level</td></tr><tr><td>84-90</td><td>2 mastiffs (see the Monster Manual for statistics)</td></tr><tr><td>91-96</td><td>Window (2 feet by 4 feet , up to 2 feet deep), which you can place on a vertical surface you can reach</td></tr><tr><td>97-00</td><td>Portable ram</td></tr></table>",
      "source": "DMG",
      "img": "ROBE_OF_USEFUL_ITEMS.jpg"
    },
    "ru": {
      "name": "Мантия полезных предметов",
      "text": "Эта мантия покрыта множеством цветных заплат различных размеров и форм. Пока вы носите эту мантию, вы можете действием оторвать одну из заплаток, вследствие чего она превращается в тот предмет, который символизировала. В тот момент, когда будет оторвана последняя заплатка, мантия превращается в обычную одежду. <br>Мантия содержит по две штуки каждой из заплат, представленных ниже:<br><br>• Кинжал<br><br>• Направленный фонарь (заправленный и зажжённый)<br><br>• Стальное зеркальце<br><br>• 10-футовый шест<br><br>• Пеньковая верёвка (50 футов, собранная в бухту)<br><br>• Мешок <br>Кроме того, на мантии также есть 4к4 других заплат. Мастер может самостоятельно выбрать, что именно это за заплатки, или же определить их случайным образом.<br><table><tr><td>к100</td><td>Заплатка</td></tr><tr><td>01–08</td><td>Сумка со 100 зм</td></tr><tr><td>09–15</td><td>Серебряный сундучок (1 фут в длину и 6 дюймов в ширину и высоту)</td></tr><tr><td>16–22</td><td>Железная дверь (до 10 футов в ширину и высоту, имеющая запор с одной стороны), которую вы можете установить в проём, до которого можете дотронуться. Дверь самостоятельно приспосабливается под нужный размер и навешивается на петли</td></tr><tr><td>23–30</td><td>10 драгоценных камней стоимостью 100 зм каждый</td></tr><tr><td>31–44</td><td>Деревянная лестница (24 фута длиной)</td></tr><tr><td>45–51</td><td><a href='https://tentaculus.ru/monsters/#q=Riding_Horse'>Ездовая лошадь</a> с притороченными седельными сумками (смотрите характеристики в Бестиарии)</td></tr><tr><td>52–59</td><td>Яма (куб с длиной грани 10 футов, который вы можете разместить на полу в пределах 10 футов от себя)</td></tr><tr><td>60–68</td><td>4 зелья лечения</td></tr><tr><td>69–75</td><td>Шлюпка (12 футов в длину)</td></tr><tr><td>76–83</td><td>Свиток заклинания, содержащий заклинание 1–3 уровня</td></tr><tr><td>84–90</td><td>2 <a href='https://tentaculus.ru/monsters/#q=Mastiff'>мастифа</a> (смотрите характеристики в Бестиарии)</td></tr><tr><td>91–96</td><td>Окно (4 на 2 фута и глубиной до 2 футов), станавливаемое на вертикальную поверхность,до которой можете дотронуться.</td></tr><tr><td>97–00</td><td>Портативный таран</td></tr></table>"
    }
  },
  {
    "en": {
      "name": "ROD OF ALERTNESS",
      "type": "Rod",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "This rod has a flanged head and the following properties. <br><b>Alertness.</b> While holding the rod, you have advantage on Wisdom (Perception) checks and on rolls for initiative. <br><b>Spells.</b> While holding the rod, you can use an action to cast one of the following spells from it: detect evil and good, detect magic, detect poison and disease, or see invisibility. <br><b>Protective Aura.</b> As an action, you can plant the haft end of the rod in the ground, whereupon the rod's head sheds bright light in a 60-foot radius and dim light for an additional 60 feet. While in that bright light, you and any creature that is friendly to you gain a +1 bonus to <br>AC and saving throws and can sense the location of any invisible hostile creature that is also in the bright light. <br>The rod's head stops glowing and the effect ends after 10 minutes, or when a creature uses an action to pull the rod from the ground. This property can't be used again until the next dawn.",
      "source": "DMG",
      "img": "ROD_OF_ALERTNESS.jpg"
    },
    "ru": {
      "name": "Жезл бдительности",
      "text": "У этого жезла ребристое навершие, и он обладает следующими свойствами: <br><b>Бдительность.</b> Пока вы держите жезл, вы совершаете с преимуществом проверки Мудрости (Внимательность) и проверки инициативы. <br><b>Заклинания.</b> Пока вы держите этот жезл, вы можете действием наложить им одно из следующих заклинаний: видение невидимого, обнаружение болезней и яда, <a href='https://tentaculus.ru/spells/?q=detect_evil#q=detect_evil_and_good'>обнаружение добра и зла</a> или обнаружение магии. <br><b>Защитная аура.</b> Вы можете действием воткнуть рукоятку жезла в землю, после чего навершие будет испускать яркий свет в пределах 60 футов и тусклый свет в пределах ещё 60 футов. Находясь в области яркого света, вы и все дружественные вам существа получаете бонус +1 к КД и спасброскам, а также можете чувствовать местоположение всех невидимых враждебных существ, тоже находящихся в области яркого света. <br>Навершие жезла перестаёт светиться, оканчивая эффект, через 10 минут, или когда какое-нибудь существо действием выдернет его из земли. Это свойство нельзя использовать повторно до следующего рассвета.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ROD OF LORDLY MIGHT",
      "type": "Rod",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "This rod has a flanged head, and it functions as a magic mace that grants a +3 bonus to attack and damage roll made with it. The rod has properties associated with si.:_ different buttons that are set in a row along the haft. It has three other properties as well, detailed below. <br><b>Six Buttons.</b> You can press one of the rod's six buttons as a bonus action. A button's effect lasts until you push a different button or until you push the same button again, which causes the rod to revert to its normal form. <br>If you press button 1, the rod becomes a flame tongue as a fiery blade sprouts from the end opposite the rod's flanged head. <br>If you press button 2, the rod's flanged head folds down and two crescent-shaped blades spring out, transforming the rod into a magic battleaxe that grants a +3 bonus to attack and damage rolls made with it. <br>If you press button 3, the rod's flanged head folds down, a spear point springs from the rod's tip, and the rod's handle lengthens into a 6-foot haft, transforming the rod into a magic spear that grants a + 3 bonus to attack and damage rolls made with it. <br>If you press button 4, the rod transforms into a climbing pole up to 50 feet long, as you specify. In surfaces as hard as granite, a spike at the bottom and three hooks at the top anchor the pole. Horizontal bars 3 inches long fold out from the sides, 1 foot apart, forming a ladder. The pole can bear up to 4,000 pounds. <br>More weight or lack of solid anchorin cau es the rod to revert to its normal form. <br>If you press button 5, the rod transforms into a handheld battering ram and gram its u era +10 bonus to Strength checks made to break through doors, barricades, and other barriers. <br>If you press button 6, the rod assumes or remains in its normal form and indicates magnetic north. ( othing happens if this function of the rod is used in a location that has no magnetic north.) The rod also gives you knowledge of your approximate depth beneath the ground or your height above it. <br><b>Drain Life.</b> When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failure, the target rakes an extra 4d6 necrotic damage, and you regain a number of hit points equal to half that necrotic damage. <br>This property can't be used again until the next dawn. <br><b>Paralyze.</b> When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Strength saving throw. On a failure , the target is paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on a success. This property can't be used again until the next dawn. <br><b>Terrify.</b> While holding the rod, you can use an action o fo rce each creature you can see with in 30 feet of you ·o make a DC 17 Wisdom saving throw. On a failure, a target is frightened of you for 1 minute. A frightened target can repeat the saving throw at the end of each of ; turns, ending the effect on itself on a success. This property can't be used again until the next dawn.",
      "source": "DMG",
      "img": "ROD_OF_LORDLY_MIGHT.jpg"
    },
    "ru": {
      "name": "Жезл величественной мощи",
      "text": "У этого жезла ребристое навершие, и он функционирует как магическая булава, предоставляющая бонус +3 к броскам атаки и урона, совершённым им. У жезла есть свойства, связанные с шестью кнопками, расположенными вдоль ручки, а также три дополнительных свойства. <br><b>Шесть кнопок.</b> Вы можете нажать одну из шести кнопок бонусным действием. Эффект кнопки длится, пока вы не нажмёте другую кнопку, или пока не нажмёте эту же кнопку ещё раз, что возвращает жезл в обычную форму. <br>Если вы нажмёте кнопку 1, жезл становится языком пламени, так как из ручки появляется пламенный клинок. <br>Если вы нажмёте кнопку 2, навершие разойдётся в стороны, становясь двумя полукружьями, а жезл становится магическим боевым топором, предоставляющим бонус +3 к броскам атаки и урона, совершённым им. <br>Если вы нажмёте кнопку 3, навершие разойдётся в стороны, из него появится наконечник копья, а рукоятка удлиняется, становясь 6-футовым древком. Так жезл становится магическим копьём, предоставляющим бонус +3 к броскам атаки и урона, совершённым им. <br>Если вы нажмёте кнопку 4, жезл превратится в шест для лазания с длиной до 50 футов, на ваш выбор. <br>На поверхностях, твёрдых как гранит, в основании появляется шип, а на верхней части три крюка, надёжно закрепляющие шест. Через 1 фут в стороны от шеста отходят 3-дюймовые горизонтальные перекладины, превращая его в подобие лестницы. Шест может выдержать до 4000 фунтов. Больший вес или отсутствие надёжной опоры возвращают жезл в обычную форму. <br>Если вы нажмёте кнопку 5, жезл превратится в переносной таран, предоставляющий использующему его бонус +10 к проверкам Силы, совершённым для выламывания дверей, разлома баррикад и прочих препятствий. <br>Если вы нажмёте кнопку 6, жезл возвращается в обычную форму или же сохраняет её, но при этом начинает указывать на северный магнитный полюс. <br>Ничего не произойдёт, если эту функцию использовать в месте, где нет магнитного полюса. Жезл также даёт вам знание примерной глубины под землёй или же наоборот, высоты над землёй. <br><b>Вытягивание жизни.</b> Если вы попадаете по существу рукопашной атакой, используя этот жезл, вы можете заставить цель совершить спасбросок Телосложения со Сл 17. При провале цель получит дополнительный урон некротической энергией 4к6, а вы восстановите количество хитов, равное половине этого урона некротической энергией. Это свойство нельзя использовать повторно до следующего рассвета. <br><b>Паралич.</b> Если вы попадаете по существу рукопашной атакой, используя этот жезл, вы можете заставить цель совершить спасбросок Силы со Сл 17. <br>При провале цель становится парализованной на 1 минуту. Цель может повторять спасброски в конце каждого своего хода, оканчивая эффект при успехе. <br>Это свойство нельзя использовать повторно до следующего рассвета. <br><b>Испуг.</b> Если вы держите этот жезл, вы можете действием заставить всех существ, которых видите в пределах 30 футов от себя, совершить спасбросок Мудрости со Сл 17. При провале цель становится испуганной вами на 1 минуту. Испуганная цель может повторять спасброски в конце каждого своего хода, оканчивая эффект на себе при успехе. Это свойство нельзя использовать повторно до следующего рассвета.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ROD OF THE PACT KEEPER +1",
      "type": "rod",
      "rarity": 2,
      "text": "While holding this rod, you gain a bonus +1 to spell attack roils and to the saving throw DCs of your warlock spells. <br> 1n addition, you can regain one warlock spell slot - an action while holding the rod. You can't use this ;Jroperty again until you finish a long rest.",
      "source": "DMG",
      "img": "ROD_OF_THE_PACT_KEEPER.jpg"
    },
    "ru": {
      "name": "Жезл хранителя договора +1",
      "text": "Держа этот жезл, вы получаете бонус +1 к броскам атаки заклинаниями колдуна и Сл спасбросков от ваших заклинаний колдуна. <br>Кроме того, вы можете действием восстановить одну ячейку заклинания колдуна, если держите этот жезл. Вы не можете использовать это свойство повторно, пока не окончите продолжительный отдых."
    }
  },
  {
    "en": {
      "name": "ROD OF THE PACT KEEPER +2",
      "type": "rod",
      "rarity": 3,
      "text": "While holding this rod, you gain a bonus +2 to spell attack roils and to the saving throw DCs of your warlock spells. <br> 1n addition, you can regain one warlock spell slot - an action while holding the rod. You can't use this ;Jroperty again until you finish a long rest.",
      "source": "DMG",
      "img": "ROD_OF_THE_PACT_KEEPER.jpg"
    },
    "ru": {
      "name": "Жезл хранителя договора +2",
      "text": "Держа этот жезл, вы получаете бонус +2 к броскам атаки заклинаниями колдуна и Сл спасбросков от ваших заклинаний колдуна. <br>Кроме того, вы можете действием восстановить одну ячейку заклинания колдуна, если держите этот жезл. Вы не можете использовать это свойство повторно, пока не окончите продолжительный отдых."
    }
  },
  {
    "en": {
      "name": "ROD OF THE PACT KEEPER +3",
      "type": "rod",
      "rarity": 4,
      "text": "While holding this rod, you gain a bonus +3 to spell attack roils and to the saving throw DCs of your warlock spells. <br> 1n addition, you can regain one warlock spell slot - an action while holding the rod. You can't use this ;Jroperty again until you finish a long rest.",
      "source": "DMG",
      "img": "ROD_OF_THE_PACT_KEEPER.jpg"
    },
    "ru": {
      "name": "Жезл хранителя договора +3",
      "text": "Держа этот жезл, вы получаете бонус +3 к броскам атаки заклинаниями колдуна и Сл спасбросков от ваших заклинаний колдуна. <br>Кроме того, вы можете действием восстановить одну ячейку заклинания колдуна, если держите этот жезл. Вы не можете использовать это свойство повторно, пока не окончите продолжительный отдых."
    }
  },
  {
    "en": {
      "name": "ROD OF SECURITY",
      "type": "Rod",
      "rarity": 4,
      "text": "While holding this rod, you can use an action to activate it. The rod then instantly transports you and up to 199 other willing creatures you can see to a paradise that exists in an extraplanar space. You choose the form that the paradise takes. It could be a tranquil garden, lovely glade, cheery tavern, immense palace, tropical island, fantastic carnival, or whatever else you can imagine. <br>Regardless of its nature, the paradise contains enough water and food to sustain its visitors. Everything else that can be interacted with inside the extraplanar space can exist only there. For example, a flower picked from a garden in the paradise disappears if it is taken outside the extraplanar space. <br>For each hour spent in the paradise, a visitor regains hit points as if it had spent 1 Hit Die. Also, creatures don't age while in the paradise, although time passes normally. Visitors can remain in the paradise for up to 200 days divided by the number of creatures present (round down). <br>When the time runs out or you use an action to end it, all visitors reappear in the location they occupied when you activated the rod, or an unoccupied space nearest that location. The rod can't be used again until ten days have passed.",
      "source": "DMG",
      "img": "ROD_OF_SECURITY.jpg"
    },
    "ru": {
      "name": "Жезл безопасности",
      "text": "Если вы держите этот жезл, вы можете действием активировать его. После этого жезл мгновенно телепортирует вас и до 199 других согласных существ, которых вы видите, в райское место между планами. Вы сами определяете вид этого райского места. Это может быть тихий сад, уютная лужайка, шумная таверна, огромный дворец, тропический остров, фантастический карнавал, или что вы ещё придумаете. Вне зависимости от внешнего облика, там хватает воды и пищи для пропитания всех гостей. Всё остальное, с чем можно взаимодействовать в этом месте, существует только там. Например, цветок, сорванный в саду, исчезнет, если его вынести наружу. <br>За каждый час, проведённый в райском месте, посетитель восстанавливает хиты, как если бы он потратил 1 Кость Хитов. Кроме того, существа не стареют, находясь в раю, хотя время течёт как обычно. <br>Посетители могут находиться в этом месте не больше 200 дней, разделённых на число присутствующих существ (округляя в меньшую сторону). <br>Когда отведённое время заканчивается или вы действием оканчиваете эффект, все посетители возвращаются в места, которые они занимали до активации жезла, или в свободном пространстве, ближайшем к прошлому местонахождению. Жезл нельзя использовать повторно, пока не пройдёт 10 дней."
    }
  },
  {
    "en": {
      "name": "ROD OF RESURRECTION",
      "type": "Rod",
      "rarity": 5,
      "attunement": "(requires attunement by a cleric, druid, or paladin)",
      "text": "The rod has 5 charges. While you hold it, you ·can use an action to cast one of the following spells from it: <a href='https://tentaculus.ru/spells/#q=heal'>heal</a> (expends 1 charge) or <a href='https://tentaculus.ru/spells/#q=resurrection'>resurrection</a> (expends 5 charges).<br>The rod regains 1 expended charge daily at dawn. If the rod is reduced to 0 charges, roll a d20. On a 1, the zod disappears in a burst of radiance.",
      "source": "DMG",
      "img": "ROD_OF_RESURRECTION.jpg"
    },
    "ru": {
      "name": "Жезл воскрешения",
      "attunement": "(требует настройки жрецом, друидом или паладином)",
      "text": "У этого жезла есть 5 зарядов. Если вы держите его, вы можете действием наложить им одно из следующих заклинаний: <a href='https://tentaculus.ru/spells/#q=heal'>полное исцеление</a> (тратит 1 заряд) или <a href='https://tentaculus.ru/spells/#q=resurrection'>воскрешение</a> (тратит 5 зарядов). <br>Жезл ежедневно восстанавливает 1 заряд на рассвете. Если заряды жезла уменьшаются до 0, бросьте к20. Если выпадет «1», жезл исчезнет во вспышке света."
    }
  },
  {
    "en": {
      "name": "ROD OF RULERSHIP",
      "type": "Rod",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "You can use an action to present the rod and commandobedience from each creature of your choice that youcan see within 120 feet of you. Each target must succeedon a DC 15 Wisdom saving throw or be charmed by youfor 8 hours. While charmed in this way, the creaturegards you as its trusted leader. If harmed by you orur companions, or commanded to do somethingcontrary to its nature, a target ceases to be charmedin this way. The rod can't be used again until thenext dawn.",
      "source": "DMG",
      "img": "ROD_OF_RULERSHIP.jpg"
    },
    "ru": {
      "name": "Жезл правления",
      "text": "Вы можете действием продемонстрировать жезл и потребовать послушания от всех существ на ваш выбор, видимых вами в пределах 120 футов от себя. <br>Каждая цель должна преуспеть в спасброске Мудрости со Сл 15, иначе она станет очарованной вами на 8 часов. Будучи очарованным из-за этого эффекта, существо считает вас своим истинным предводителем. <br>Получив урон от вас или ваших спутников, или получив приказ, противоречащий её природе, цель перестаёт быть очарованной этим эффектом. Жезл нельзя использовать повторно до следующего рассвета.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "ROPE OF CLIMBING",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying. <br>If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it. <br>The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.",
      "source": "DMG",
      "img": "ROPE_OF_CLIMBING.jpg"
    },
    "ru": {
      "name": "Верёвка лазания",
      "text": "Эта 60-футовая шёлковая верёвка весит 3 фунта и способна выдержать до 3000 фунтов веса. Если вы удерживаете один конец верёвки, вы можете действием произнести командное слово, чтобы оживить верёвку. Бонусным действием вы можете отдать приказ другому концу двигаться к какому-либо месту на ваш выбор. Этот конец будет продвигаться в сторону указанного места со скоростью 10 футов за раунд, пока не достигнет его, или пока верёвка не размотается на свою полную длину, или же пока вы не прикажете ей остановиться. Вы также можете приказать верёвке крепко обвязаться вокруг какого-либо предмета, отвязаться, навязать или развязать узлы по всей длине или самостоятельно скрутиться кольцом для удобства переноски. <br>Если вы приказываете верёвке навязать узлы, то они появляются через каждый фут по всей её длине. <br>При этом верёвка становится короче на 10 футов, но зато проверки, совершённые для лазания по ней, совершаются с преимуществом. <br>У верёвки КД 20 и 20 хитов. Она восстанавливает 1 хит каждые 5 минут, если у неё есть хотя бы 1 хит. <br>Если хиты верёвки опускаются до 0, она уничтожается."
    }
  },
  {
    "en": {
      "name": "ROPE OF ENTANGLEMENT",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "This rope is 30 feet long and weighs 3 pounds. If you hold one end of the rope and use an action to speak its command word, the other end darts forward to entangle a creature you can see within 20 feet of you. The target must succeed on a DC 15 Dexterity saving throw or become restrai ned. <br>You can release the creature by using a bonus action to speak a second command word. A target restrained by the rope can use an action to make a DC 15 Strength or Dexterity check (target's choice). On a success, the creature is no longer restrained by the rope. <br>The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.",
      "source": "DMG",
      "img": "ROPE_OF_ENTANGLEMENT.jpg"
    },
    "ru": {
      "name": "Верёвка опутывания",
      "text": "Это 30-футовая верёвка, весящая 3 фунта. Если вы держите один конец верёвки и действием произносите командное слово, другой конец устремляется вперёд, чтобы обмотаться вокруг существа, которое вы видите в пределах 20 футов. Цель должна преуспеть в спасброске Ловкости со Сл 15, иначе она станет опутанной. <br>Вы можете отпустить существо, произнеся бонусным действием второе командное слово. Цель, опутанная верёвкой, может действием совершать проверку Силы или Ловкости (на свой выбор) со Сл 15. <br>При успехе существо перестаёт быть опутанным верёвкой. <br>У верёвки КД 20 и 20 хитов. Она восстанавливает 1 хит каждые 5 минут, если у неё есть хотя бы 1 хит. <br>Если хиты верёвки опускаются до 0, она уничтожается."
    }
  },
  {
    "en": {
      "name": "SADDLE OF THE CAVALIER",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage.",
      "source": "DMG",
      "img": "SADDLE_OF_THE_CAVALIER.jpg"
    },
    "ru": {
      "name": "Седло кавалериста",
      "text": "Если вы находитесь в этом седле на ездовом животном, и вы в сознании, вы не можете быть спешены против вашей воли, и броски атаки по вашему ездовому животному совершаются с помехой."
    }
  },
  {
    "en": {
      "name": "SCARAB OF PROTECTION",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "If you hold this beetle-shaped medallion in your hand for 1 round, an inscription appears on its surface revealing its magical nature. It provides two benefits while it is on your person: <br>You have advantage on saving throws against spells. <br>The scarab has 12 charges. If you fail a saving throw against a necromancy spell or a harmful effect originating from an undead creature, you can use your reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended.",
      "source": "DMG",
      "img": "SCARAB_OF_PROTECTION.jpg"
    },
    "ru": {
      "name": "Скарабей защиты",
      "text": "Если вы держите в своей руке этот медальон в форме жука в течение 1 раунда, на его поверхности появятся письмена, открывающие его магическую сущность. Он предоставляет два преимущества, пока находится у вас:<br>• Вы совершаете с преимуществом спасброски от заклинаний.<br>• У скарабея есть 12 зарядов. Если вы проваливаете спасбросок от заклинания школы Некромантии или вредоносного эффекта, исходящего от нежити, вы можете реакцией потратить 1 заряд, чтобы превратить проваленный спасбросок в успешный. Скарабей рассыпается в порошок и уничтожается, когда тратится его последний заряд.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "SCIMITAR OF SPEED",
      "type": "Weapon",
      "typeAdditions": "(scimitar)",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.",
      "source": "DMG",
      "img": "SCIMITAR_OF_SPEED.jpg"
    },
    "ru": {
      "name": "Скимитар скорости",
      "text": "Вы получаете бонус +2 к броскам атаки и урона, совершённым этим магическим оружием. Кроме того, в каждом своём ходу вы можете совершить бонусным действием одну атаку им.",
      "typeAdditions": "(скимитар)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "SCROLL OF PROTECTION",
      "type": "Scroll",
      "rarity": 3,
      "text": "Each scroll of protection works against a specific type of creature chosen by the DM or determined randomly by rolling on the following table.<br><table><tr><td>dlOO</td><td>Creature Type</td></tr><tr><td>01-10</td><td>Aberrations</td></tr><tr><td>11-20</td><td>Beasts</td></tr><tr><td>21-30</td><td>Celestials</td></tr><tr><td>31-40</td><td>Elementals</td></tr><tr><td>41-50</td><td>Fey</td></tr><tr><td>51-75</td><td>Fiends</td></tr><tr><td>76-80</td><td>Plants</td></tr><tr><td>81-00</td><td>Undead</td></tr></table> <br>Using an action to read the scroll encloses you in a invisible barrier that extends from you to form a 5-footradius, 10-foot-high cylinder. For 5 minutes, this barrier prevents creatures of the specified type from entering or affecting anything within the cylinder. <br>The cylinder moves with you and remains centered on you. However, if you move in such a way that a creature of the specified type would be inside the cylinder, the effect ends. <br>A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. <br>On a success, the creature ceases to be affected by the barrier.",
      "source": "DMG",
      "img": "SCROLL_OF_PROTECTION.jpg"
    },
    "ru": {
      "name": "Свиток защиты",
      "text": "Каждый свиток защиты работает против какого-то одного определённого вида существ, выбранного Мастером самостоятельно или же случайным образом с помощью приведённой ниже таблицы. <br><table><tr><td>к100</td><td>Вид существ</td></tr><tr><td>01–10</td><td>Аберрации</td></tr><tr><td>11–20</td><td>Звери</td></tr><tr><td>21–45</td><td>Исчадия</td></tr><tr><td>46–55</td><td>Небожители</td></tr><tr><td>56–75</td><td>Нежить</td></tr><tr><td>76–80</td><td>Растения</td></tr><tr><td>81–90</td><td>Феи</td></tr><tr><td>91–00</td><td>Элементали</td></tr></table><br>Прочитав действием свиток, вы окружаете себя невидимым барьером, формирующим цилиндр с радиусом 5 футов и высотой 10 футов. В течение 5 минут этот барьер препятствует созданиям определённого вида входить в цилиндр и каким-либо образом воздействовать на то, что заключено в него. <br>Этот цилиндр перемещается вместе с вами, оставаясь с центром на вас. Однако, если вы перемещаетесь так, что существо указанного вида окажется внутри цилиндра, защитный эффект заканчивается. <br>Существо может попытаться преодолеть барьер, совершив действием проверку Харизмы со Сл 15. <br>При успехе барьер на это конкретное существо не действует."
    }
  },
  {
    "en": {
      "name": "SENDING STONES",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "Sending stones come in pairs, with each smooth stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can use an action to cast the <a href='https://tentaculus.ru/spells/#q=sending'>sending</a> spell from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell. <br>Once sending is cast through the stones, they can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical.",
      "source": "DMG",
      "img": "SENDING_STONES.jpg"
    },
    "ru": {
      "name": "Камни послания",
      "text": "Камни послания изготавливаются парами. На их гладкой поверхности есть парные символы, по которым их можно отличать от других таких камней. Пока вы касаетесь одного камня, вы можете действием наложить им заклинание <a href='https://tentaculus.ru/spells/#q=sending'>послание</a>. Целью является владелец парного камня. Если второй камень никто не несёт, вы это узнаёте в момент использования камня и заклинание не накладываете. <br>После того как камни наложат заклинание послание, они не могут сделать это повторно до следующего утра. Если один из камней уничтожается, второй перестаёт быть магическим."
    }
  },
  {
    "en": {
      "name": "SENTINEL SHIELD",
      "type": "Armor",
      "typeAdditions": "(shield)",
      "rarity": 2,
      "text": "While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye. <br>SHIELD, +1, +2, OR +3 <br>Armor (shield), uncommon (+1), rare (+2), or very rare (+3) <br>While holding this shield, you have a bonus to AC determined by the shield's rarity. This bonus is in addition to the shield's normal bonus to AC.",
      "source": "DMG",
      "img": "SENTINEL_SHIELD.jpg"
    },
    "ru": {
      "name": "Щит часового",
      "text": "Пока вы держите этот щит, вы совершаете с преимуществом проверки инициативы и проверки Мудрости (Внимательность). Сам щит украшен символом глаза.",
      "typeAdditions": "(щит)"
    }
  },
  {
    "en": {
      "name": "SHIELD OF MISSILE ATTRACTION",
      "type": "Armor",
      "typeAdditions": "(shield)",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "While holding this shield, you have resistance to damage from ranged weapon attacks. <br><b>Curse.</b> This shield is cursed. Attuning to it curses you until you are targeted by the remove curse spell or similar magic. Removing the shield fails to end the curse on you. Whenever a ranged weapon attack is made against a target within 10 feet of you, the curse causes you to become the target instead.",
      "source": "DMG",
      "img": "SHIELD_OF_MISSILE_ATTRACTION.jpg"
    },
    "ru": {
      "name": "Щит притягивания снарядов",
      "text": "Вы получаете сопротивление к урону от дальнобойных атак оружием, пока держите этот щит. <br>Проклятье. Этот щит проклят. Если вы настраиваетесь на него, вы становитесь проклятым, пока не станете целью заклинания снятие проклятья или другой подобной магии. Простое снятие щита не оканчивает проклятье на вас. Каждый раз, когда по цели, находящейся в пределах 10 футов от вас, совершается дальнобойная атака оружием, проклятье заставляет стать целью вас.",
      "typeAdditions": "(щит)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "SLIPPERS OF SPIDER CLIMBING",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. Howevethe slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil.",
      "source": "DMG",
      "img": "SLIPPERS_OF_SPIDER_CLIMBING.jpg"
    },
    "ru": {
      "name": "Туфли паука",
      "text": "Пока вы носите эту лёгкую обувь, вы можете перемещаться по вертикальным поверхностям, а также вверх ногами по потолку, оставляя руки свободными. Вы получаете скорость лазания, равную скорости хождения. Однако туфли не позволяют перемещаться так по скользкой поверхности, например, покрытой маслом или льдом.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "SOVEREIGN GLUE",
      "type": "Wondrous item",
      "rarity": 5,
      "text": "This viscous, milky-white substance can form a permanent adhesive bond between any two objects. <br>It must be stored in a jar or flask that has been coated inside with oil of slipperiness. When found, a containe; contains 1d6 + 1 ounces. <br>One ounce of the glue can cover a 1-foot square surface. The glue takes 1 minute to set. Once it has done so, the bond it creates can be broken only by the application of universal solvent or oil of etherealness. - with a <a href='https://tentaculus.ru/spells/#q=wish'>wish</a> spell.",
      "source": "DMG",
      "img": "SOVEREIGN_GLUE.jpg"
    },
    "ru": {
      "name": "Превосходный клей",
      "text": "Эта тягучая, молочно-белая субстанция может склеить два любых предмета. Она должна храниться в сосуде или фляге, покрытой изнутри маслом скольжения. В найденном контейнере находится 1к6 + 1 унция клея. <br>Одна унция клея может покрыть 1 квадратный фут поверхности. Клей затвердевает через 1 минуту. <br>После этого связь двух предметов можно разорвать только нанесением универсального растворителя или масла эфирности, либо же заклинанием <a href='https://tentaculus.ru/spells/#q=wish'>исполнение желаний</a>."
    }
  },
  {
    "en": {
      "name": "SPELL SCROLL Cantrip ",
      "type": "Scroll",
      "rarity": 1,
      "text": "A spell scroll bears the words of a single spell, written - a mystical cipher. If the spell is on your class's spellli you can use an action to read the scroll and cast its spe without having to provide any of the spell's componen <br> Save DC: 13, Attack Bonus: +5 <br>Otherwise, the scroll is unintelligible. <br>If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determ· whether you cast it successfully. The DC equals 10 + spell's level. On a failed check, the spell disappears frothe scroll with no other effect. <br>Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust. <br>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check ucceeds or fa ils, the spell scroll is destroyed.",
      "source": "DMG",
      "img": "SPELL_SCROLL.jpg"
    },
    "ru": {
      "name": "Свиток заклинания (заговора)",
      "text": "Свиток заклинания несёт на себе слова одного заклинания, написанные таинственным шифром. Если это заклинание есть в списке заклинаний вашего класса, вы можете прочитать свиток и наложить его заклинание, не предоставляя материальные компоненты.<br>Сл спасброска: 13, Бонус атаки: +5 <br>В противном случае свиток непонятен для вас. Накладывание заклинания свитком занимает столько же времени, сколько обычное накладывание заклинания. После того, как заклинание наложено, слова на свитке исчезают, а сам свиток рассыпается в прах. <br>Если накладывание прервано, свиток остаётся целым. <br>Если заклинание есть в списке заклинаний вашего класса, но имеет более высокий уровень, чем те, что вы способны накладывать, вы должны совершить проверку базовой характеристики, чтобы определить, удалось ли вам справиться с задачей. Сл такой проверки равна 10 + уровень заклинания. При провале заклинание просто исчезает со свитка, не произведя никаких эффектов. <br>Если свиток содержит заклинание из списка заклинаний волшебника, то оно может быть скопировано в книгу заклинаний. Для этого надо преуспеть в проверке Интеллекта (Магия), Сл которой равна 10 + уровень заклинания. Если проверка успешна, заклинание удаётся скопировать. Вне зависимости от исхода проверки свиток после этого уничтожается."
    }
  },
  {
    "en": {
      "name": "SPELL SCROLL 1 lvl",
      "type": "Scroll",
      "rarity": 1,
      "text": "A spell scroll bears the words of a single spell, written - a mystical cipher. If the spell is on your class's spellli you can use an action to read the scroll and cast its spe without having to provide any of the spell's componen <br> Save DC: 13, Attack Bonus: +5  <br>Otherwise, the scroll is unintelligible. <br>If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determ· whether you cast it successfully. The DC equals 10 + spell's level. On a failed check, the spell disappears frothe scroll with no other effect. <br>Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust. <br>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check ucceeds or fa ils, the spell scroll is destroyed.",
      "source": "DMG",
      "img": "SPELL_SCROLL.jpg"
    },
    "ru": {
      "name": "Свиток заклинания 1 уровня",
      "text": "Свиток заклинания несёт на себе слова одного заклинания, написанные таинственным шифром. Если это заклинание есть в списке заклинаний вашего класса, вы можете прочитать свиток и наложить его заклинание, не предоставляя материальные компоненты. <br>Сл спасброска: 13, Бонус атаки: +5<br>В противном случае свиток непонятен для вас. Накладывание заклинания свитком занимает столько же времени, сколько обычное накладывание заклинания. После того, как заклинание наложено, слова на свитке исчезают, а сам свиток рассыпается в прах. <br>Если накладывание прервано, свиток остаётся целым. <br>Если заклинание есть в списке заклинаний вашего класса, но имеет более высокий уровень, чем те, что вы способны накладывать, вы должны совершить проверку базовой характеристики, чтобы определить, удалось ли вам справиться с задачей. Сл такой проверки равна 10 + уровень заклинания. При провале заклинание просто исчезает со свитка, не произведя никаких эффектов. <br>Если свиток содержит заклинание из списка заклинаний волшебника, то оно может быть скопировано в книгу заклинаний. Для этого надо преуспеть в проверке Интеллекта (Магия), Сл которой равна 10 + уровень заклинания. Если проверка успешна, заклинание удаётся скопировать. Вне зависимости от исхода проверки свиток после этого уничтожается."
    }
  },
  {
    "en": {
      "name": "SPELL SCROLL 2 lvl",
      "type": "Scroll",
      "rarity": 2,
      "text": "A spell scroll bears the words of a single spell, written - a mystical cipher. If the spell is on your class's spellli you can use an action to read the scroll and cast its spe without having to provide any of the spell's componen <br> Save DC: 13, Attack Bonus: +5   <br>Otherwise, the scroll is unintelligible. <br>If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determ· whether you cast it successfully. The DC equals 10 + spell's level. On a failed check, the spell disappears frothe scroll with no other effect. <br>Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust. <br>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check ucceeds or fa ils, the spell scroll is destroyed.",
      "source": "DMG",
      "img": "SPELL_SCROLL.jpg"
    },
    "ru": {
      "name": "Свиток заклинания 2 уровня",
      "text": "Свиток заклинания несёт на себе слова одного заклинания, написанные таинственным шифром. Если это заклинание есть в списке заклинаний вашего класса, вы можете прочитать свиток и наложить его заклинание, не предоставляя материальные компоненты. <br>Сл спасброска: 13, Бонус атаки: +5 <br>В противном случае свиток непонятен для вас. Накладывание заклинания свитком занимает столько же времени, сколько обычное накладывание заклинания. После того, как заклинание наложено, слова на свитке исчезают, а сам свиток рассыпается в прах. <br>Если накладывание прервано, свиток остаётся целым. <br>Если заклинание есть в списке заклинаний вашего класса, но имеет более высокий уровень, чем те, что вы способны накладывать, вы должны совершить проверку базовой характеристики, чтобы определить, удалось ли вам справиться с задачей. Сл такой проверки равна 10 + уровень заклинания. При провале заклинание просто исчезает со свитка, не произведя никаких эффектов.  <br>Если свиток содержит заклинание из списка заклинаний волшебника, то оно может быть скопировано в книгу заклинаний. Для этого надо преуспеть в проверке Интеллекта (Магия), Сл которой равна 10 + уровень заклинания. Если проверка успешна, заклинание удаётся скопировать. Вне зависимости от исхода проверки свиток после этого уничтожается."
    }
  },
  {
    "en": {
      "name": "SPELL SCROLL 3 lvl",
      "type": "Scroll",
      "rarity": 2,
      "text": "A spell scroll bears the words of a single spell, written - a mystical cipher. If the spell is on your class's spellli you can use an action to read the scroll and cast its spe without having to provide any of the spell's componen <br> Save DC: 15, Attack Bonus: +7   <br>Otherwise, the scroll is unintelligible. <br>If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determ· whether you cast it successfully. The DC equals 10 + spell's level. On a failed check, the spell disappears frothe scroll with no other effect. <br>Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust. <br>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check ucceeds or fa ils, the spell scroll is destroyed.",
      "source": "DMG",
      "img": "SPELL_SCROLL.jpg"
    },
    "ru": {
      "name": "Свиток заклинания 3 уровня",
      "text": "Свиток заклинания несёт на себе слова одного заклинания, написанные таинственным шифром. Если это заклинание есть в списке заклинаний вашего класса, вы можете прочитать свиток и наложить его заклинание, не предоставляя материальные компоненты.<br>Сл спасброска: 15, Бонус атаки: +7  <br>В противном случае свиток непонятен для вас. Накладывание заклинания свитком занимает столько же времени, сколько обычное накладывание заклинания. После того, как заклинание наложено, слова на свитке исчезают, а сам свиток рассыпается в прах. <br>Если накладывание прервано, свиток остаётся целым. <br>Если заклинание есть в списке заклинаний вашего класса, но имеет более высокий уровень, чем те, что вы способны накладывать, вы должны совершить проверку базовой характеристики, чтобы определить, удалось ли вам справиться с задачей. Сл такой проверки равна 10 + уровень заклинания. При провале заклинание просто исчезает со свитка, не произведя никаких эффектов. <br>Если свиток содержит заклинание из списка заклинаний волшебника, то оно может быть скопировано в книгу заклинаний. Для этого надо преуспеть в проверке Интеллекта (Магия), Сл которой равна 10 + уровень заклинания. Если проверка успешна, заклинание удаётся скопировать. Вне зависимости от исхода проверки свиток после этого уничтожается."
    }
  },
  {
    "en": {
      "name": "SPELL SCROLL 4 lvl ",
      "type": "Scroll",
      "rarity": 3,
      "text": "A spell scroll bears the words of a single spell, written - a mystical cipher. If the spell is on your class's spellli you can use an action to read the scroll and cast its spe without having to provide any of the spell's componen <br> Save DC: 15, Attack Bonus: +7  <br>Otherwise, the scroll is unintelligible. <br>If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determ· whether you cast it successfully. The DC equals 10 + spell's level. On a failed check, the spell disappears frothe scroll with no other effect. <br>Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust. <br>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check ucceeds or fa ils, the spell scroll is destroyed.",
      "source": "DMG",
      "img": "SPELL_SCROLL.jpg"
    },
    "ru": {
      "name": "Свиток заклинания 4 уровня",
      "text": "Свиток заклинания несёт на себе слова одного заклинания, написанные таинственным шифром. Если это заклинание есть в списке заклинаний вашего класса, вы можете прочитать свиток и наложить его заклинание, не предоставляя материальные компоненты.<br>Сл спасброска: 15, Бонус атаки: +7 <br>В противном случае свиток непонятен для вас. Накладывание заклинания свитком занимает столько же времени, сколько обычное накладывание заклинания. После того, как заклинание наложено, слова на свитке исчезают, а сам свиток рассыпается в прах. <br>Если накладывание прервано, свиток остаётся целым. <br>Если заклинание есть в списке заклинаний вашего класса, но имеет более высокий уровень, чем те, что вы способны накладывать, вы должны совершить проверку базовой характеристики, чтобы определить, удалось ли вам справиться с задачей. Сл такой проверки равна 10 + уровень заклинания. При провале заклинание просто исчезает со свитка, не произведя никаких эффектов.  <br>Если свиток содержит заклинание из списка заклинаний волшебника, то оно может быть скопировано в книгу заклинаний. Для этого надо преуспеть в проверке Интеллекта (Магия), Сл которой равна 10 + уровень заклинания. Если проверка успешна, заклинание удаётся скопировать. Вне зависимости от исхода проверки свиток после этого уничтожается."
    }
  },
  {
    "en": {
      "name": "SPELL SCROLL 5 lvl",
      "type": "Scroll",
      "rarity": 4,
      "text": "A spell scroll bears the words of a single spell, written - a mystical cipher. If the spell is on your class's spellli you can use an action to read the scroll and cast its spe without having to provide any of the spell's componen <br> Save DC: 17, Attack Bonus: +9  <br>Otherwise, the scroll is unintelligible. <br>If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determ· whether you cast it successfully. The DC equals 10 + spell's level. On a failed check, the spell disappears frothe scroll with no other effect. <br>Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust. <br>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check ucceeds or fa ils, the spell scroll is destroyed.",
      "source": "DMG",
      "img": "SPELL_SCROLL.jpg"
    },
    "ru": {
      "name": "Свиток заклинания 5 уровня",
      "text": "Свиток заклинания несёт на себе слова одного заклинания, написанные таинственным шифром. Если это заклинание есть в списке заклинаний вашего класса, вы можете прочитать свиток и наложить его заклинание, не предоставляя материальные компоненты.<br>Сл спасброска: 17, Бонус атаки: +9  <br>В противном случае свиток непонятен для вас. Накладывание заклинания свитком занимает столько же времени, сколько обычное накладывание заклинания. После того, как заклинание наложено, слова на свитке исчезают, а сам свиток рассыпается в прах. <br>Если накладывание прервано, свиток остаётся целым. <br>Если заклинание есть в списке заклинаний вашего класса, но имеет более высокий уровень, чем те, что вы способны накладывать, вы должны совершить проверку базовой характеристики, чтобы определить, удалось ли вам справиться с задачей. Сл такой проверки равна 10 + уровень заклинания. При провале заклинание просто исчезает со свитка, не произведя никаких эффектов. <br>Если свиток содержит заклинание из списка заклинаний волшебника, то оно может быть скопировано в книгу заклинаний. Для этого надо преуспеть в проверке Интеллекта (Магия), Сл которой равна 10 + уровень заклинания. Если проверка успешна, заклинание удаётся скопировать. Вне зависимости от исхода проверки свиток после этого уничтожается."
    }
  },
  {
    "en": {
      "name": "SPELL SCROLL 6 lvl",
      "type": "Scroll",
      "rarity": 4,
      "text": "A spell scroll bears the words of a single spell, written - a mystical cipher. If the spell is on your class's spellli you can use an action to read the scroll and cast its spe without having to provide any of the spell's componen <br> Save DC: 17, Attack Bonus: +9  <br>Otherwise, the scroll is unintelligible. <br>If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determ· whether you cast it successfully. The DC equals 10 + spell's level. On a failed check, the spell disappears frothe scroll with no other effect. <br>Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust. <br>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check ucceeds or fa ils, the spell scroll is destroyed.",
      "source": "DMG",
      "img": "SPELL_SCROLL.jpg"
    },
    "ru": {
      "name": "Свиток заклинания 6 уровня",
      "text": "Свиток заклинания несёт на себе слова одного заклинания, написанные таинственным шифром. Если это заклинание есть в списке заклинаний вашего класса, вы можете прочитать свиток и наложить его заклинание, не предоставляя материальные компоненты. <br>Сл спасброска: 17, Бонус атаки: +9  <br>В противном случае свиток непонятен для вас. Накладывание заклинания свитком занимает столько же времени, сколько обычное накладывание заклинания. После того, как заклинание наложено, слова на свитке исчезают, а сам свиток рассыпается в прах. <br>Если накладывание прервано, свиток остаётся целым. <br>Если заклинание есть в списке заклинаний вашего класса, но имеет более высокий уровень, чем те, что вы способны накладывать, вы должны совершить проверку базовой характеристики, чтобы определить, удалось ли вам справиться с задачей. Сл такой проверки равна 10 + уровень заклинания. При провале заклинание просто исчезает со свитка, не произведя никаких эффектов.  <br>Если свиток содержит заклинание из списка заклинаний волшебника, то оно может быть скопировано в книгу заклинаний. Для этого надо преуспеть в проверке Интеллекта (Магия), Сл которой равна 10 + уровень заклинания. Если проверка успешна, заклинание удаётся скопировать. Вне зависимости от исхода проверки свиток после этого уничтожается."
    }
  },
  {
    "en": {
      "name": "SPELL SCROLL 7 lvl",
      "type": "Scroll",
      "rarity": 4,
      "text": "A spell scroll bears the words of a single spell, written - a mystical cipher. If the spell is on your class's spellli you can use an action to read the scroll and cast its spe without having to provide any of the spell's componen <br> Save DC: 18, Attack Bonus: +10 <br>Otherwise, the scroll is unintelligible. <br>If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determ· whether you cast it successfully. The DC equals 10 + spell's level. On a failed check, the spell disappears frothe scroll with no other effect. <br>Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.<br>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check ucceeds or fa ils, the spell scroll is destroyed.",
      "source": "DMG",
      "img": "SPELL_SCROLL.jpg"
    },
    "ru": {
      "name": "Свиток заклинания 7 уровня",
      "text": "Свиток заклинания несёт на себе слова одного заклинания, написанные таинственным шифром. Если это заклинание есть в списке заклинаний вашего класса, вы можете прочитать свиток и наложить его заклинание, не предоставляя материальные компоненты.<br>Сл спасброска: 18, Бонус атаки: +10  <br>В противном случае свиток непонятен для вас. Накладывание заклинания свитком занимает столько же времени, сколько обычное накладывание заклинания. После того, как заклинание наложено, слова на свитке исчезают, а сам свиток рассыпается в прах. <br>Если накладывание прервано, свиток остаётся целым. <br>Если заклинание есть в списке заклинаний вашего класса, но имеет более высокий уровень, чем те, что вы способны накладывать, вы должны совершить проверку базовой характеристики, чтобы определить, удалось ли вам справиться с задачей. Сл такой проверки равна 10 + уровень заклинания. При провале заклинание просто исчезает со свитка, не произведя никаких эффектов.  <br>Если свиток содержит заклинание из списка заклинаний волшебника, то оно может быть скопировано в книгу заклинаний. Для этого надо преуспеть в проверке Интеллекта (Магия), Сл которой равна 10 + уровень заклинания. Если проверка успешна, заклинание удаётся скопировать. Вне зависимости от исхода проверки свиток после этого уничтожается."
    }
  },
  {
    "en": {
      "name": "SPELL SCROLL 8 lvl",
      "type": "Scroll",
      "rarity": 4,
      "text": "A spell scroll bears the words of a single spell, written - a mystical cipher. If the spell is on your class's spellli you can use an action to read the scroll and cast its spe without having to provide any of the spell's componen<br> Save DC: 18, Attack Bonus: +10 <br>Otherwise, the scroll is unintelligible. <br>If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determ· whether you cast it successfully. The DC equals 10 + spell's level. On a failed check, the spell disappears frothe scroll with no other effect. <br>Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust. <br>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check ucceeds or fa ils, the spell scroll is destroyed.",
      "source": "DMG",
      "img": "SPELL_SCROLL.jpg"
    },
    "ru": {
      "name": "Свиток заклинания 8 уровня",
      "text": "Свиток заклинания несёт на себе слова одного заклинания, написанные таинственным шифром. Если это заклинание есть в списке заклинаний вашего класса, вы можете прочитать свиток и наложить его заклинание, не предоставляя материальные компоненты.<br>Сл спасброска: 18, Бонус атаки: +10 <br>В противном случае свиток непонятен для вас. Накладывание заклинания свитком занимает столько же времени, сколько обычное накладывание заклинания. После того, как заклинание наложено, слова на свитке исчезают, а сам свиток рассыпается в прах. <br>Если накладывание прервано, свиток остаётся целым. <br>Если заклинание есть в списке заклинаний вашего класса, но имеет более высокий уровень, чем те, что вы способны накладывать, вы должны совершить проверку базовой характеристики, чтобы определить, удалось ли вам справиться с задачей. Сл такой проверки равна 10 + уровень заклинания. При провале заклинание просто исчезает со свитка, не произведя никаких эффектов.  <br>Если свиток содержит заклинание из списка заклинаний волшебника, то оно может быть скопировано в книгу заклинаний. Для этого надо преуспеть в проверке Интеллекта (Магия), Сл которой равна 10 + уровень заклинания. Если проверка успешна, заклинание удаётся скопировать. Вне зависимости от исхода проверки свиток после этого уничтожается."
    }
  },
  {
    "en": {
      "name": "SPELL SCROLL 9 lvl",
      "type": "Scroll",
      "rarity": 5,
      "text": "A spell scroll bears the words of a single spell, written - a mystical cipher. If the spell is on your class's spellli you can use an action to read the scroll and cast its spe without having to provide any of the spell's componen<br> Save DC: 19, Attack Bonus: +11<br>Otherwise, the scroll is unintelligible. <br>If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determ· whether you cast it successfully. The DC equals 10 + spell's level. On a failed check, the spell disappears frothe scroll with no other effect. <br>Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust. <br>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check ucceeds or fa ils, the spell scroll is destroyed.",
      "source": "DMG",
      "img": "SPELL_SCROLL.jpg"
    },
    "ru": {
      "name": "Свиток заклинания 9 уровня",
      "text": "Свиток заклинания несёт на себе слова одного заклинания, написанные таинственным шифром. Если это заклинание есть в списке заклинаний вашего класса, вы можете прочитать свиток и наложить его заклинание, не предоставляя материальные компоненты.<br>Сл спасброска: 19, Бонус атаки: +11 <br>В противном случае свиток непонятен для вас. Накладывание заклинания свитком занимает столько же времени, сколько обычное накладывание заклинания. После того, как заклинание наложено, слова на свитке исчезают, а сам свиток рассыпается в прах. <br>Если накладывание прервано, свиток остаётся целым. <br>Если заклинание есть в списке заклинаний вашего класса, но имеет более высокий уровень, чем те, что вы способны накладывать, вы должны совершить проверку базовой характеристики, чтобы определить, удалось ли вам справиться с задачей. Сл такой проверки равна 10 + уровень заклинания. При провале заклинание просто исчезает со свитка, не произведя никаких эффектов.  <br>Если свиток содержит заклинание из списка заклинаний волшебника, то оно может быть скопировано в книгу заклинаний. Для этого надо преуспеть в проверке Интеллекта (Магия), Сл которой равна 10 + уровень заклинания. Если проверка успешна, заклинание удаётся скопировать. Вне зависимости от исхода проверки свиток после этого уничтожается."
    }
  },
  {
    "en": {
      "name": "SPELLGUARD SHIELD",
      "type": "Armor",
      "typeAdditions": "(shield)",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you.",
      "source": "DMG",
      "img": "SPELLGUARD_SHIELD.jpg"
    },
    "ru": {
      "name": "Щит от заклинаний",
      "text": "Пока вы держите этот щит, вы совершаете с преимуществом спасброски от заклинаний и других магических эффектов, и броски атаки заклинаниями совершаются по вам с помехой.",
      "typeAdditions": "(щит)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "SPHERE OF ANNIHILATION",
      "type": "Wondrous item",
      "rarity": 5,
      "text": "This 2-foot-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical fi eld surrounding it. <br>The sphere obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a sphere of annihilation, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 4d10 fo rce damage. <br>The sphere is stationary until someone controls it. <br>If you are within 60 feet of an uncontrolled sphere, you can use an action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to a number of feet equal to 5 x your Intelligence modifier (minimum 5 feet). On a fa ilure, the sphere moves 10 fe et toward you. A creature whose space the sphere enters must succeed on a DC 13 Dexterity saving throw or be touched by it, taking 4d10 force damage. <br>If you attempt to control a sphere that is under another creature's control, you make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal. <br>If the sphere comes into contact with a planar portal, such as that created by the gate spell, or an extradimensional space, such as that within a portable hole, the DM determines randomly what happens, using the following table.<br><table><tr><td>dlOO</td><td>Result</td></tr><tr><td>01-50</td><td>The sphere is destroyed.</td></tr><tr><td>51-85</td><td>The sphere moves through the portal or into the extradimensional space.</td></tr><tr><td>86-00</td><td>A spatial rift sends each creature and object with in</td></tr><tr><td>180</td><td>feet of the sphere, including the sphere, to a random plane of existence.</td></tr></table>",
      "source": "DMG",
      "img": "SPHERE_OF_ANNIHILATION.jpg"
    },
    "ru": {
      "name": "Сфера аннигиляции",
      "text": "Этот чёрный шар диаметром 2 фута является дырой в ткани мультивселенной, стабилизированной окружающим магическим полем и парящей на месте. <br>Сфера уничтожает всю материю, через которую проходит и всю материю, проходящую сквозь неё. <br>Артефакты — исключение. Если в описании артефакта не сказано, что он подвержен урону от сферы аннигиляции, то он проходит сквозь сферу невредимым. Всё остальное, что касается сферы, но не помещается в неё целиком, получает урон силовым полем 4к10. <br>Сфера находится в состоянии покоя, пока ктонибудь не начнёт её контролировать. Если вы находитесь в пределах 60 футов от неконтролируемой сферы, вы можете действием совершить проверку Интеллекта (Магия) со Сл 25. При успехе сфера левитирует в выбранном вами направлении на расстояние в футах, не превышающее 5 × ваш модификатор Интеллекта (минимум 5 футов). При провале сфера перемещается на 10 футов в вашу сторону. Существа, в чьё пространство входит сфера, должны преуспеть в спасброске Ловкости со Сл 13, иначе они коснутся сферы и получат урон силовым полем 4к10. <br>Если вы пытаетесь контролировать сферу, находящуюся под контролем другого существа, вы совершаете проверку Интеллекта (Магия), противопоставленную проверке Интеллекта (Магия) другого существа. Победитель получает контроль над сферой и может управлять ей как описано выше. <br>Если сфера вступает в контакт с планарным порталом, например, созданным заклинанием <a href='https://tentaculus.ru/spells/#q=gate&ls=9'>врата</a>, или межпространственным феноменом, таким как переносная дыра, Мастер случайным образом определяет, что произойдёт, используя следующую таблицу:<br><table><tr><td>к100</td><td>Результат</td></tr><tr><td>01–50</td><td>Сфера уничтожается.</td></tr><tr><td>51–85</td><td>Сфера проходит через портал или оказывается в межпространственном месте.</td></tr><tr><td>86–00</td><td>Разрыв в пространстве отправляет все существа и предметы, находящиеся в пределах 180 футов от сферы, включая саму сферу, на случайный план существовани</td></tr></table>"
    }
  },
  {
    "en": {
      "name": "STAFF OF CHARMING",
      "type": "Staff",
      "rarity": 3,
      "attunement": "(requires attunement by a bard, cleric, druid,sorcerer, warlock, or wizard)",
      "text": "While holding this staff, you can use an action to expend 1 of its 10 charges to cast <a href='https://tentaculus.ru/spells/#q=charm_person'>charm person</a>, command, or <a href='https://tentaculus.ru/spells/#q=comprehend_languages'>comprehend languages</a> from it using your spell save DC. <br>The staff can also be used as a magic quarterstaff. <br>If you are holding the staff and fail a saving throw against an enchantment spell that targets only you, you can turn your failed save into a successful one. You can't use this property of the staff again until the next dawn. If you succeed on a save against an enchantment spell that targets only you, with or without the staff's intervention, you can use your reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell. <br>The staff regains 1d8 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
      "source": "DMG",
      "img": "STAFF_OF_CHARMING.jpg"
    },
    "ru": {
      "name": "Посох очарования",
      "attunement": "(требует настройки бардом, жрецом, друидом, чародеем, колдуном или волшебником)",
      "text": "Держа этот посох, вы можете действием потратить 1 из его 10 зарядов на то, чтобы наложить им <a href='https://tentaculus.ru/spells/#q=charm_person'>очарование личности</a>, <a href='https://tentaculus.ru/spells/#q=comprehend_languages'>понимание языков</a> или приказ, используя свою Сл спасброска от заклинания. Этот посох также может использоваться как магический боевой посох. <br>Если вы держите этот посох и проваливаете спасбросок от заклинания школы Очарования, нацеленного только на вас, вы можете превратить проваленный спасбросок в успешный. Вы не можете использовать это свойство повторно до следующего рассвета. <br>Если вы преуспели в спасброске от заклинания, нацеленного только на вас, вне зависимости от того, пришлось ли для этого прибегнуть к помощи посоха, вы можете реакцией потратить 1 заряд из посоха и отразить заклинание в того, кто его наложил, как если бы вы сами наложили это заклинание. <br>Посох ежедневно восстанавливает 1к8 + 2 заряда на рассвете. Если вы истратили последний заряд, бросьте к20. Если выпадет «1», посох становится немагическим боевым посохом."
    }
  },
  {
    "en": {
      "name": "STAFF OF FIRE",
      "type": "Staff",
      "rarity": 4,
      "attunement": "(requires attunement by a druid,sorcerer, warlock, or wizard)",
      "text": "You have resistance to fire damage while you hold this staff. <br>The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: burning hands (1 charge), <a href='https://tentaculus.ru/spells/#q=fireball'>fireball</a> (3 charges), or <a href='https://tentaculus.ru/spells/#q=wall_of_fire'>wall of fire</a> (4 cha rges). <br>The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last cha rge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.",
      "source": "DMG",
      "img": "STAFF_OF_FIRE.jpg"
    },
    "ru": {
      "name": "Посох огня",
      "attunement": "(требует настройки друидом, чародеем, колдуном или волшебником)",
      "text": "Вы получаете сопротивление к урону огнём, пока держите этот посох. <br>У этого посоха есть 10 зарядов. Держа его, вы можете действием потратить часть зарядов и наложить им одно из следующих заклинаний, используя свою <br>Сл спасброска от заклинания: <a href='https://tentaculus.ru/spells/#q=wall_of_fire'>огненная стена</a> (4 заряда), огненные ладони (1 заряд) или <a href='https://tentaculus.ru/spells/#q=fireball'>огненный шар</a> (3 заряда). <br>Посох ежедневно восстанавливает 1к6 + 4 заряда на рассвете. Если вы истратили последний заряд, бросьте к20. Если выпадет «1», посох чернеет, разваливается на угли и уничтожается."
    }
  },
  {
    "en": {
      "name": "STAFF OF FROST",
      "type": "Staff",
      "rarity": 4,
      "attunement": "(requires attunement by a druid,sorcerer, warlock, or wizard)",
      "text": "You have resistance to cold damage while you hold this staff. <br>The staff has 10 charges. While holding it, you can u e an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: cone of cold (5 charges), fog cloud (1 charge), ice storm (4 charges), or wall of ice (4 charges). <br>The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff turns to water and is destroyed.",
      "source": "DMG",
      "img": "STAFF_OF_FROST.jpg"
    },
    "ru": {
      "name": "Посох мороза",
      "attunement": "(требует настройки друидом, чародеем, колдуном или волшебником)",
      "text": "Вы получаете сопротивление к урону холодом, пока держите этот посох. <br>У этого посоха есть 10 зарядов. Держа его, вы можете действием потратить часть зарядов и наложить им одно из следующих заклинаний, используя свою <br>Сл спасброска от заклинания: град (4 заряда), конус холода (5 зарядов), ледяная стена (4 заряда) или туманное облако (1 заряд). <br>Посох ежедневно восстанавливает 1к6 + 4 заряда на рассвете. Если вы истратили последний заряд, бросьте к20. Если выпадет «1», посох превращается в воду и уничтожается."
    }
  },
  {
    "en": {
      "name": "STAFF OF HEALING",
      "type": "Staff",
      "rarity": 3,
      "attunement": "(requires attunement by a bard, cleric, or druid)",
      "text": "This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: cure wounds (1 charge per spell level, up to 4th), <a href='https://tentaculus.ru/spells/#q=lesser_restoration'>lesser restoration</a> (2 charges). or mass cure wounds (5 charges). <br>The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff vanishes in a flash of light, lost forever.",
      "source": "DMG",
      "img": "STAFF_OF_HEALING.jpg"
    },
    "ru": {
      "name": "Посох лечения",
      "attunement": "(требует настройки бардом, жрецом или друидом)",
      "text": "У этого посоха есть 10 зарядов. Держа его, вы можете действием потратить часть зарядов и наложить им одно из следующих заклинаний, используя свою Сл спасброска от заклинания и базовую характеристику: лечение ран (1 заряд за каждый уровень заклинания, максимум 4 уровень), <a href='https://tentaculus.ru/spells/#q=lesser_restoration'>малое восстановление</a> (2 заряда) или множественное лечение ран (5 зарядов). <br>Посох ежедневно восстанавливает 1к6 + 4 заряда на рассвете. Если вы истратили последний заряд, бросьте к20. Если выпадет «1», посох исчезает во вспышке света, теряясь навсегда."
    }
  },
  {
    "en": {
      "name": "STAFF OF POWER",
      "type": "Staff",
      "rarity": 4,
      "attunement": "(requires attunement by a sorcerer,warlock, or wizard)",
      "text": "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Clas saving throws, and spell attack rolls. <br>The staff has 20 charges for the following properties. <br>The staff regains 2d8 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain 1d8 + 2 charges. <br><b>Power Strike.</b> When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target. <br><b>Spells.</b> While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: cone of cold (5 charges), <a href='https://tentaculus.ru/spells/#q=fireball'>fireball</a> (5th-level version, 5 charges), globe of invulnerability (6 charges), hold monster (5 charges), levitate (2 charges). lightning bolt (5th-level version, 5 charges), <a href='https://tentaculus.ru/spells/#q=magic_missilel'>magic missile</a> (1 charge), ray of enfeeblement (1 charge), or wall of force (5 charges). <br><b>Retributive Strike.</b> You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it. <br>You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. <br>If you fail to avoid the effect, you take force damage equal to 16 x the number of charge in the taff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save. a creature rake an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a uccessful save, a creature takes half as much damage.<br><table><tr><td>Distance from Origin</td><td>Damage</td></tr><tr><td>10 ft. away or closer</td><td>8 x the number of charges in the staff</td></tr><tr><td>11 to 20 ft. away</td><td>6 x the number of charges in the staff</td></tr><tr><td>21 to 30ft. away</td><td>4 x the number of cha rges in the staff</td></tr></table>",
      "source": "DMG",
      "img": "STAFF_OF_POWER.jpg"
    },
    "ru": {
      "name": "Посох силы",
      "attunement": "(требует настройки чародеем, колдуном или волшебником)",
      "text": "Этот посох можно использовать как магический боевой посох, предоставляющий бонус +3 к броскам атаки и урона им. Держа его, вы получаете бонус +2 к Классу Доспеха, спасброскам и броскам атаки заклинаниями.<br>У посоха есть 20 зарядов для описанных ниже свойств. Он ежедневно восстанавливает 2к8 + 4 заряда на рассвете. Если вы истратили последний заряд, бросьте к20. Если выпадет «1», посох сохраняет бонус +2 к броскам атаки и урона, но теряет все остальные свойства. Если выпадет «20», посох восстанавливает 1к8 + 2 заряда.<br><b>Силовой удар.</b> Если вы попадаете рукопашной атакой этим посохом, вы можете потратить 1 заряд, чтобы причинить цели дополнительный урон силовым полем 1к6.<br><b>Заклинания.</b> Если вы держите этот посох, вы можете действием потратить часть зарядов, чтобы наложить им одно из следующих заклинаний, используя свою Сл спасброска от заклинания и бонус броска атаки заклинанием: <a href='https://tentaculus.ru/spells/#q=magic_missilel'>волшебная стрела</a> (1 заряд), конус холода (5 зарядов), левитация (2 заряда), луч слабости (1 заряд), молния (версия 5 уровня, 5 зарядов), <a href='https://tentaculus.ru/spells/#q=fireball'>огненный шар</a> (версия 5 уровня, 5 зарядов), силовая стена (5 зарядов), сфера неуязвимости (6 зарядов) или удержание чудовища (5 зарядов).<br><b>Карающий удар.</b> Вы можете действием сломать посох о колено или твёрдую поверхность, совершая, таким образом, карающий удар. Посох уничтожается, испуская оставшуюся в нём магию взрывом, заполняющим сферу радиусом 30 футов с центром на нём.<bt>У вас есть 50-процентный шанс мгновенно перенестись на случайный план существования, избежав взрыва. Если вы его не избегаете, то получаете урон силовым полем, равный 16 × количество зарядов в посохе. Все другие существа в области взрыва должны совершить спасбросок Ловкости со Сл 17. При провале существо получает урон, зависящий от того, как далеко оно находится от исходной точки взрыва, как показано в таблице. При успехе существо получает половину этого урона <br> <table><tr><td>к100</td><td>Эффект</td></tr><tr><td>01–15</td><td>Веер</td></tr><tr><td>16–40</td><td>Дерево</td></tr><tr><td>41–50</td><td>Кнут</td></tr><tr><td>51–65</td><td>Лодка-лебедь</td></tr><tr><td>66–80</td><td>Птица</td></tr><tr><td>81–00</td><td>Якорь</td></tr></table>"
    }
  },
  {
    "en": {
      "name": "STAFF OF STRIKING",
      "type": "Staff",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "This staff can be wielded as a magic quarterstaff that grants a + 3 bonus to attack and damage rolls made with it. <br>The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. <br>For each charge you expend, the target takes an extra ld6 force damage. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
      "source": "DMG",
      "img": "STAFF_OF_STRIKING.jpg"
    },
    "ru": {
      "name": "Посох ударов",
      "text": "Этот посох можно использовать как магический боевой посох, предоставляющий бонус +3 к броскам атаки и урона им. <br>У этого посоха есть 10 зарядов. Если вы попадаете им рукопашной атакой, вы можете потратить до 3 зарядов. За каждый потраченный заряд цель получает дополнительный урон силовым полем 1к6. Посох ежедневно восстанавливает 1к6 + 4 заряда на рассвете. Если вы истратили последний заряд, бросьте к20. <br>Если выпадет «1», посох становится немагическим боевым посохом.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "STAFF OF SWARMING INSECTS",
      "type": "Staff",
      "rarity": 3,
      "attunement": "(requires attunement by a bard, cleric, druid,sorcerer, warlock, or wizard)",
      "text": "This staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses. <br><b>Spells.</b> While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: giant insect (4 charges) or insect plague (5 charges). <br><b>Insect Cloud.</b> While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. <br>The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.",
      "source": "DMG",
      "img": "STAFF_OF_SWARMING_INSECTS.jpg"
    },
    "ru": {
      "name": "Посох роя насекомых",
      "attunement": "(требует настройки бардом, жрецом, друидом, чародеем, колдуном или волшебником)",
      "text": "У этого посоха 10 зарядов, и он ежедневно восстанавливает 1к6 + 4 заряда на рассвете. Если вы истратили последний заряд, бросьте к20. Если выпадет «1», рой насекомых пожирает посох, уничтожая его, и рассеивается. <br><b>Заклинания.</b> Если вы держите этот посох, вы можете действием потратить часть зарядов, чтобы наложить им одно из следующих заклинаний, используя свою Сл спасброска от заклинания: гигантское насекомое (4 заряда) или нашествие насекомых (5 зарядов). <br><b>Облако насекомых.</b> Если вы держите посох, вы можете действием потратить 1 заряд, чтобы окружить себя роем летучих насекомых с 30-футовым радиусом. Насекомые остаются на 10 минут, делая эту область сильно заслонённой для всех существ кроме вас. Рой перемещается с вами, оставаясь с центром на вас. Ветер со скоростью как минимум 10 миль в час (16 километров в час) рассеивает рой и оканчивает этот эффект."
    }
  },
  {
    "en": {
      "name": "STAFF OF THE ADDER",
      "type": "Staff",
      "rarity": 2,
      "attunement": "(requires attunement by a cleric, druid,or warlock)",
      "text": "You can use a bonus action to speak this staff's command word and make the head of the staff become that of an animate poisonous snake for 1 minute. By using another bonus action to speak the command word again, you return the staff to its normal inanimate form. <br>You can make a melee attack using the snake head, which has a reach of 5 feet. Your proficiency bonus applies to the attack roll. On a hit, the target takes 1d6 piercing damage and must succeed on a DC 15 <br>Constitution saving throw or take 3d6 poison damage. <br>The snake head can be attacked while it is animate. It has an Armor Class of 15 and 20 hit points. If the head drops to 0 hit points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost hit points when it reverts to its inanimate form.",
      "source": "DMG",
      "img": "STAFF_OF_THE_ADDER.jpg"
    },
    "ru": {
      "name": "Посох гадюки",
      "attunement": "(требует настройки жрецом, друидом или колдуном)",
      "text": "Вы можете бонусным действием произнести командное слово посоха, чтобы сделать на 1 минуту его навершие головой ядовитой змеи. Произнеся бонусным действием командное слово ещё раз, вы делаете посох обычным. <br>Вы можете совершить рукопашную атаку головой змеи, у которой досягаемость 5 футов. К броску атаки применяется ваш бонус мастерства. При попадании цель получает колющий урон 1к6 и должна преуспеть в спасброске Телосложения со Сл 15, иначе получит урон ядом 3к6. <br>Голову змеи можно атаковать, пока она жива. У неё Класс Доспеха 15 и 20 хитов. Если хиты головы уменьшатся до 0, посох уничтожается. Если посох пока не уничтожен, и вы делаете его неоживлённым, он восстанавливает все свои хиты."
    }
  },
  {
    "en": {
      "name": "STAFF OF THE MAGI",
      "type": "Staff",
      "rarity": 5,
      "attunement": "(requires attunement by a sorcerer,warlock, or wizard)",
      "text": "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls. <br>The staff has 50 charges for the following properties. <br>It regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12 + 1 charges. <br><b>Spell Absorption.</b> While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. <br>However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below). <br><b>Spells.</b> While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability: <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>conjure elemental</a> (7 charges), dispel magic (3 charges), <a href='https://tentaculus.ru/spells/#q=fireball'>fireball</a> (7th-level version, 7 charges), flaming sphere (2 charges), ice storm (4 charges), invisibility (2 charges), knock (2 charges), lightning bolt (7th-level version, 7 charges), passwall (5 charges), plane shift (7 charges), telekinesis (5 charges), <a href='https://tentaculus.ru/spells/#q=wall_of_fire'>wall of fire</a> (4 charges), or web (2 charges). <br>You can also use an action to cast one of the following spells from the staff without using any charges: arcane lock, detect magic, <a href='https://tentaculus.ru/spells/#q=enlarge/reduce'>enlarge/reduce</a>, light, mage hand, or protection from evil and good. <br><b>Retributive Strike.</b> You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it. <br>You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. <br>If you fail to avoid the effect, you take force damage equal to 16 x the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage. <br><table><tr><td>Distance from Origin</td><td>Damage</td></tr><tr><td>10 ft. away or closer</td><td>8 x the number of charges in the staff</td></tr><tr><td>11 to 20 ft. away</td><td>6 x the number of charges in the staff</td></tr><tr><td>21 to 30ft. away</td><td>4 x the number of charges in the staff</td></tr></table>",
      "source": "DMG",
      "img": "STAFF_OF_THE_MAGI.jpg"
    },
    "ru": {
      "name": "Посох магов",
      "attunement": "(требует настройки чародеем, колдуном или волшебником)",
      "text": "Этот посох можно использовать как магический боевой посох, предоставляющий бонус +2 к броскам атаки и урона им. Держа его, вы получаете бонус +2 к броскам атаки заклинаниями. <br>У посоха есть 50 зарядов для описанных ниже свойств. Он ежедневно восстанавливает 4к6 + 2 заряда на рассвете. Если вы истратили последний заряд, бросьте к20. Если выпадет «20», посох восстановит 1к12 + 1 заряд. <br><b>Впитывание заклинаний.</b> Пока вы держите посох, вы совершаете спасброски от заклинаний с преимуществом. Кроме того, вы можете использовать реакцию, когда другое существо накладывает заклинание, целью которого являетесь только вы. Если вы это делаете, посох впитывает магию этого заклинания, отменяя его эффект и восстанавливая количество зарядов, равное уровню поглощённого заклинания. Однако если из-за этого сумма зарядов в посохе превысит 50, посох взорвётся, как если бы вы активировали его «карающий удар» (смотрите ниже). <br><b>Заклинания.</b> Если вы держите этот посох, вы можете действием потратить часть зарядов, чтобы наложить им одно из следующих заклинаний (Сл спасброска 17): град (4 заряда), молния (версия 7 уровня, 7 зарядов), невидимость (2 заряда), <a href='https://tentaculus.ru/spells/#q=wall_of_fire'>огненная стена</a> (4 заряда), <a href='https://tentaculus.ru/spells/#q=fireball'>огненный шар</a> (версия 7 уровня, 7 зарядов), открывание (2 заряда), паутина (2 заряда), <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>призыв элементаля</a> (7 зарядов), пылающий шар (2 заряда), рассеивание магии (3 заряда), создание прохода (5 зарядов), телекинез (5 зарядов) или уход в иной мир (7 зарядов). <br>Вы также можете действием наложить посохом одно из следующих заклинаний, не тратя зарядов: волшебная рука, волшебный замок, защита от добра и зла, обнаружение магии, свет или увеличение/уменьшение. <br><b>Карающий удар.</b> Вы можете действием сломать посох о колено или твёрдую поверхность, совершая, таким образом, карающий удар. Посох уничтожается, испуская оставшуюся в нём магию взрывом, заполняющим сферу радиусом 30 футов с центром на нём. <br>У вас есть 50-процентный шанс мгновенно перенестись на случайный план существования, избежав взрыва. Если вы его не избегаете, то получаете урон силовым полем, равный 16 × количество зарядов в посохе. Все другие существа в области взрыва должны совершить спасбросок Ловкости со Сл 17. При провале существо получает урон, зависящий от того, как далеко оно находится от исходной точки взрыва, как показано в таблице. При успехе существо получает половину этого урона.Расстояние от исходной точки |Урон@10 фт. или ближе| 8 × количество зарядов в посохе@от 11 до 20 фт. |6 × количество зарядов в посохе@от 21 до 30 фт. |4 × количество зарядов в посохе"
    }
  },
  {
    "en": {
      "name": "STAFF OF THE PYTHON",
      "type": "Staff",
      "rarity": 2,
      "attunement": "(requires attunement by a cleric, druid,or warlock)",
      "text": "You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake (see the Monster Manual for statistics) under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake. <br>On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. <br>You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location. <br>If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them.",
      "source": "DMG",
      "img": "STAFF_OF_THE_PYTHON.jpg"
    },
    "ru": {
      "name": "Посох питона",
      "attunement": "(требует настройки жрецом, друидом или колдуном)",
      "text": "Вы можете действием произнести командное слово и бросить посох на пол в пределах 10 футов от себя. <br>Посох становится <a href='https://tentaculus.ru/monsters/#q=Constrictor_Snake'>гигантским удавом</a> под вашим контролем и у него есть своё место в порядке инициативы. Произнеся бонусным действием командное слово ещё раз, вы возвращаете посоху его естественный облик, и он будет лежать в пространстве, ранее занимаемом удавом. <br>В свой ход вы можете мысленно отдавать команды удаву, если он находится в пределах 60 футов от вас и дееспособен. Вы определяете, какие действия ему совершать и куда перемещаться в следующем ходу, или же можете отдать общую команду, такую как «нападай на врагов» или «охраняй место». Если хиты змеи опустятся до 0, она умирает и становится посохом. <br>Посох при этом раскалывается на куски и уничтожается. Если змея становится посохом до того как потеряет все хиты, она их тут же восстанавливает."
    }
  },
  {
    "en": {
      "name": "STAFF OF THE WOODLANDS",
      "type": "Staff",
      "rarity": 3,
      "attunement": "(requires attunement by a druid)",
      "text": "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls. <br>The staff has 10 charges for the following properties. <br>It regains 1d6 + 4 expended charges daily at dawn. <br>If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff. <br><b>Spells.</b> You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: <a href='https://tentaculus.ru/spells/#q=animal_friendship'>animal friendship</a> (1 charge), <a href='https://tentaculus.ru/spells/#q=awaken'>awaken</a> (5 charges), <a href='https://tentaculus.ru/spells/#q=barkskin'>barkskin</a> (2 charges), <a href='https://tentaculus.ru/spells/#q=locate_animals_or_plants'>locate animals or plants</a> (2 charges), <a href='https://tentaculus.ru/spells/#q=speak_with_animals'>speak with animals</a> (1 charge), <a href='https://tentaculus.ru/spells/#q=speak_with_plants'>speak with plants</a> (3 charges), or <a href='https://tentaculus.ru/spells/#q=wall_of_thorns'>wall of thorns</a> (6 charges). <br>You can also use an action to cast the <a href='https://tentaculus.ru/spells/#q=pass_without_traces'>pass without trace</a> spell from the staff without using any charges. <br><b>Tree Form.</b> You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by detect magic. While touching the tree and using another action to speak its command, word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
      "source": "DMG",
      "img": "STAFF_OF_THE_WOODLANDS.jpg"
    },
    "ru": {
      "name": "Посох леса",
      "attunement": "(требует настройки друидом)",
      "text": "Этот посох можно использовать как магический боевой посох, предоставляющий бонус +2 к броскам атаки и урона им. Держа его, вы получаете бонус +2 к броскам атаки заклинаниями. <br>У посоха есть 10 зарядов для описанных ниже свойств. Он ежедневно восстанавливает 1к6 + 4 заряда на рассвете. Если вы истратили последний заряд, бросьте к20. Если выпадет «1», посох теряет все свои свойства и становится немагическим боевым посохом. <br><b>Заклинания.</b> Вы можете действием потратить 1 или несколько зарядов посоха, чтобы наложить им одно из следующих заклинания, используя свою Сл спасброска от заклинания: <a href='https://tentaculus.ru/spells/#q=animal_friendship'>дружба с животными</a> (1 заряд), <a href='https://tentaculus.ru/spells/#q=barkskin'>дубовая кора</a> (2 заряда), <a href='https://tentaculus.ru/spells/#q=locate_animals_or_plants'>поиск животных или растений</a> (2 заряда), <a href='https://tentaculus.ru/spells/#q=awaken'>пробуждение разума</a> (5 зарядов), <a href='https://tentaculus.ru/spells/#q=speak_with_animals'>разговор с животными</a> (1 заряд), <a href='https://tentaculus.ru/spells/#q=speak_with_plants'>разговор с растениями</a> (3 заряда) или <a href='https://tentaculus.ru/spells/#q=wall_of_thorns'>терновая стена</a> (6 зарядов). <br>Вы также можете действием накладывать посохом заклинание <a href='https://tentaculus.ru/spells/#q=pass_without_traces'>бесследное передвижение</a>, не тратя зарядов. <br><b>Древесный облик.</b> Вы можете действием воткнуть посох в плодородную землю и потратить 1 заряд, чтобы превратить посох в здоровое дерево. Высота дерева 60 футов, диаметр ствола — 5 футов, а ветви на макушке раскинуты в радиусе 20 футов. Это дерево выглядит обычным, но излучает слабую магию школы Преобразования, если становится целью обнаружения магии. Прикоснувшись к дереву и произнеся действием командное слово, вы возвращаете посоху его обычный облик. Все находящиеся на дереве существа при этом падают."
    }
  },
  {
    "en": {
      "name": "STAFF OF THUNDER AND LIGHTNING",
      "type": "Staff",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn. <br><b>Lightning.</b> When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage. <br><b>Thunder.</b> When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn. <br><b>Lightning Strike.</b> You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one. <br><b>Thunderclap.</b> You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened. <br><b>Thunder and Lightning.</b> You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
      "source": "DMG",
      "img": "STAFF_OF_THUNDER_AND_LIGHTNING.jpg"
    },
    "ru": {
      "name": "Посох грома и молнии",
      "text": "Этот посох можно использовать как магический боевой посох, предоставляющий бонус +2 к броскам атаки и урона им. Он также обладает описанными ниже дополнительными свойствами. Каждое из свойств не может быть повторно использовано до следующего рассвета. <br><b>Молния.</b> Если вы попали рукопашной атакой, используя этот посох, вы можете причинить цели дополнительный урон электричеством 2к6. <br><b>Гром.</b> Если вы попали рукопашной атакой, используя этот посох, вы можете заставить посох издать громовой рокот, слышный в пределах 300 футов. Цель, по которой вы попали, должна преуспеть в спасброске Телосложения со Сл 17, иначе она станет ошеломлённой до конца вашего следующего хода. <br><b>Удар молнии.</b> Вы можете действием выпустить из кончика посоха молнию линией шириной 5 футов и 120 футов длиной. Все существа в этой линии должны совершить спасбросок Ловкости со Сл 17, получая урон электричеством 9к6 при провале или половину этого урона при успехе. <br><b>Удар грома.</b> Вы можете действием заставить посох издать громовой гул, слышный в пределах 600 футов. <br>Все существа в пределах 60 футов от вас (исключая вас) должны совершить спасбросок Телосложения со Сл 17. При провале существо получает урон звуком 2к6 и становится оглохшим на 1 минуту. При успехе существо получает половину урона и не становится оглохшим. <br><b>Гром и молния.</b> Вы можете действием использовать одновременно свойства «удар молнии» и «удар грома». Это не учитывается при подсчёте того, использовали ли вы эти свойства в этот день, тратится использование лишь непосредственно этого свойства.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "STAFF OF WITHERING",
      "type": "Staff",
      "rarity": 3,
      "attunement": "(requires attunement by a cleric, druid, or warlock)",
      "text": "This staff has 3 charges and regains 1d3 expended charges daily at dawn. <br>The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
      "source": "DMG",
      "img": "STAFF_OF_WITHERING.jpg"
    },
    "ru": {
      "name": "Посох иссушения",
      "attunement": "(требует настройки жрецом, друидом или чародеем)",
      "text": "У этого посоха 3 заряда, и он ежедневно восстанавливает 1к3 заряда на рассвете. <br>Этот посох можно использовать как магический боевой посох. При попадании он причиняет урон как обычный боевой посох, и вы можете потратить 1 заряд, чтобы причинить цели дополнительный урон некротической энергией 2к10. Кроме того, цель должна преуспеть в спасброске Телосложения со Сл 15, иначе она в течение 1 часа будет совершать с помехой проверки характеристик и спасброски, использующие Силу или Телосложение."
    }
  },
  {
    "en": {
      "name": "STONE OF CONTROLLING EARTH ELEMENTALS",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "If the stone is touching the ground, you can use an action to speak its command word and summon an <a href='https://tentaculus.ru/monsters/#q=earth_elemental'>earth elemental</a>, as if you had cast the <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>conjure elemental</a> spell. The stone can't be used this way again until the next dawn. The stone weighs 5 pounds.",
      "source": "DMG",
      "img": "STONE_OF_CONTROLLING_EARTH_ELEMENTALS.jpg"
    },
    "ru": {
      "name": "Камень контролирования земляных элементалей",
      "text": "Если этот камень касается пола, вы можете действием произнести командное слово и призвать <a href='https://tentaculus.ru/monsters/#q=earth_elemental'>земляного элементаля</a>, как если бы вы наложили заклинание <a href='https://tentaculus.ru/spells/#q=conjure_elemental'>призыв элементаля</a>. После этого камень нельзя повторно использовать до следующего рассвета. Весит камень 5 фунтов."
    }
  },
  {
    "en": {
      "name": "STONE OF GOOD LUCK (LUCKSTONE)",
      "type": "Wondrous item",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "While this polished agate is on your person, you gain a + 1 bonus to ability checks and saving throws. ",
      "source": "DMG",
      "img": "STONE_OF_GOOD_LUCK_LUCKSTONE_.jpg"
    },
    "ru": {
      "name": "Камень удачи",
      "text": "Пока этот полированный агат находится у вас, вы получаете бонус +1 к проверкам характеристик и спасброскам.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "SUN BLADE",
      "type": "Weapon",
      "typeAdditions": "longsword",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade. <br>You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage. <br>The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. <br>The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
      "source": "DMG",
      "img": "SUN_BLADE.jpg"
    },
    "ru": {
      "name": "Солнечный клинок",
      "text": "Этот предмет выглядит как рукоять длинного меча. <br>Держа эту рукоятку, вы можете бонусным действием заставить появиться или исчезнуть клинок из чистого сияния. Пока клинок существует, этот магический длинный меч обладает свойством «фехтовальное». Если вы владеете обращением с короткими или длинными клинками, то вы владеете и обращением с солнечным клинком. <br>Вы получаете бонус +2 к броскам атаки и урона, совершённым этим оружием, и причиняете не рубящий урон, а урон излучением. Если вы попадаете им по нежити, цель получает дополнительный урон излучением 1к8. <br>Клинок этого меча испускает яркий свет в радиусе 15 футов и тусклый свет в радиусе ещё 15 футов. Это солнечный свет. Пока клинок существует, вы можете действием увеличить или уменьшить радиус и яркого и тусклого света на 5 футов каждый, с максимумом 30 футов и минимумом 10 футов для каждого.",
      "typeAdditions": "длинный меч",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "SWORD OF ANSWERING",
      "type": "Weapon",
      "typeAdditions": "(longsword)",
      "rarity": 5,
      "attunement": "(requires attunement by a creature with the same alignment as the sword)",
      "text": "In the world of Greyhawk, only nine of these blades are known to exist. Each is patterned after the legendary sword Fragarach, which is variously translated as \"Final Word.\" Each of the nine swords has its own name and alignment, and each bears a different gem in its pommel. <br><table><tr><td>Name</td><td>Alignment</td><td>Gem</td></tr><tr><td>Answerer</td><td>Chaotic good</td><td>Emerald</td></tr><tr><td>Back Talker</td><td>Chaotic evil</td><td>Jet</td></tr><tr><td>Concluder</td><td>Lawful neutral</td><td>Amethyst</td></tr><tr><td>Last Quip</td><td>Chaotic neutral</td><td>Tourmaline</td></tr><tr><td>Rebutter</td><td>Neutral good</td><td>Topaz</td></tr><tr><td>Replier</td><td>Neutral</td><td>Peridot</td></tr><tr><td>Retorter</td><td>Lawful good</td><td>Aquamarine<br>•</td></tr><tr><td>Scather</td><td>Lawful evil</td><td>Garnet</td></tr></table><br>You gain a +3 bonus to attack and damage rolls made with this sword. In addition, while you hold the sword, you can use your reaction to make one melee attack with it against any creature in your reach that deals damage to you. You have advantage on the attack roll, and any damage dealt with this special attack ignores any damage immunity or resistance the target has.",
      "source": "DMG",
      "img": "SWORD_OF_ANSWERING.jpg"
    },
    "ru": {
      "name": "Меч ответа",
      "attunement": "(требует настройки созданием того же мировоззрения, что и меч)",
      "text": " В мире Грейхок известны девять таких мечей. Все они изготовлены по образу легендарного меча, Фрагараха, чьё название часто переводят как «Последнее слово». У каждого из девяти мечей есть своё название и своё мировоззрение, и у всех у них в навершии использованы разные драгоценные камни. <br><table><tr><td>Название</td><td>Мировоззрение</td><td>Камень</td></tr><tr><td>Возразитель</td><td>Законно-доброе</td><td>Аквамарин</td></tr><tr><td>Грубитель</td><td>Законно-злое</td><td>Гранат</td></tr><tr><td>Дерзитель</td><td>Хаотично-злое</td><td>Агат</td></tr><tr><td>Опровергатель</td><td>Нейтрально-доброе</td><td>Топаз</td></tr><tr><td>Ответчик</td><td>Хаотично-доброе</td><td>Изумруд</td></tr><tr><td>Подавитель</td><td>Нейтрально-злое</td><td>Шпинель</td></tr><tr><td>Рассказчик</td><td>Нейтральное</td><td>Перидот</td></tr><tr><td>Решатель</td><td>Законно-нейтральное</td><td>Аметист</td></tr><tr><td>Язвитель</td><td>Хаотично-нейтральное</td><td>Турмалин</td></tr></table>Вы получаете бонус +3 к броскам атаки и урона, совершаемым этим мечом. Кроме того, пока вы держите этот меч, вы можете реакцией совершать им одну рукопашную атаку по существу, находящемуся в пределах вашей досягаемости, которое причиняет вам урон. Вы совершаете этот бросок атаки с преимуществом, и урон, причиняемый этой особой атакой, игнорирует все сопротивления к урону и иммунитеты, которые могут быть у цели.",
      "typeAdditions": "(длинный меч)"
    }
  },
  {
    "en": {
      "name": "SWORD OF LIFE STEALING",
      "type": "Weapon",
      "typeAdditions": "(any sword)",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "When you attack a creature with this magic weapon ~ roll a 20 on the attack roll, that target takes an extra : necrotic damage if it isn't a construct or an undead. Y also gain 10 temporary hit points.",
      "source": "DMG",
      "img": "SWORD_OF_LIFE_STEALING.jpg"
    },
    "ru": {
      "name": "Меч кражи жизни",
      "text": "Если вы атакуете этим магическим оружием существо, и при броске атаки выпадает «20», эта цель получает дополнительный урон некротической энергией 10, если не является ни конструктом ни нежитью. <br>Вы также получаете 10 временных хитов.",
      "typeAdditions": "(любой меч)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "SWORD OF SHARPNESS",
      "type": "Weapon",
      "typeAdditions": "(any sword that deals slashing damage)",
      "rarity": 4,
      "text": "When you attack an object with this magic sword and hit, maximize your weapon damage dice agains£ the target. <br>When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra : slashing damage. Then roll another d20. If you roll a .:: you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has limb to sever, you lop off a portion of its body instead. <br>In addition, you can speak the sword's command to cause the blade to shed bright light in a 10-foot rad:: and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts ou· the light.",
      "source": "DMG",
      "img": "SWORD_OF_SHARPNESS.jpg"
    },
    "ru": {
      "name": "Меч остроты",
      "text": "Если вы атакуете этим магическим мечом предмет и попадаете, кости урона причиняют цели максимальный урон. <br>Если вы атакуете этим оружием существо, и при броске атаки выпадает «20», эта цель получит дополнительный рубящий урон 14. После этого бросьте ещё к20. Если выпадет «20», вы отрубаете одну из конечностей цели, а эффект этого определяет Мастер. <br>Если у существа не было конечностей, вы отрубаете часть его тела. <br>Кроме того, вы можете произнести командное слово меча, чтобы клинок начал излучать яркий свет в радиусе 10 футов и тусклый свет в пределах ещё 10 футов. Повторное произнесение этого слова или убирание меча в ножны гасит свет.",
      "typeAdditions": "(любой меч который наносит рубящий урон)"
    }
  },
  {
    "en": {
      "name": "SWORD OF VENGEANCE",
      "type": "Weapon",
      "typeAdditions": "(any sword)",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "You gain a +1 bonus to attack and damage rolls made with this magic weapon. <br><b>Curse.</b> This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the cu:-: to you. As long as you remain cursed, you are unwilli- ~ to part with the sword, keeping it on your person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons othethan this one. <br>In addition, while the sword is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed sa,-you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it. <br>You can break the curse in the usual ways. <br>Alternatively, casting <a href='https://tentaculus.ru/spells/#q=banishment'>banishment</a> on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.",
      "source": "DMG",
      "img": "SWORD_O_VENGEANCE.jpg"
    },
    "ru": {
      "name": "Меч мести",
      "attunement": "(требуется настройка)",
      "text": "Вы получаете бонус +1 к броскам атаки и урона этим магическим оружием. <br><b>Проклятье.</b> Этот меч проклят и одержим мстительным духом. Настроившись на него, вы тоже становитесь проклятым. Пока вы прокляты, вы не желаете расставаться с эти мечом, и всегда держите его при себе. Пока вы настроены на это оружие, вы совершаете с помехой все броски атаки другим оружием. <br>Кроме того, пока меч находится у вас, вы должны совершать спасбросок Мудрости со Сл 15 каждый раз, когда получаете урон в сражении. При провале вы должны атаковать существо, причинившее вам урон, пока хиты одного из вас не опустятся до 0, или пока вы не сможете дотянуться до существа, чтобы совершить по нему рукопашную атаку. <br>Вы можете избавиться от проклятья как обычно. <br>В качестве альтернативы, накладывание <a href='https://tentaculus.ru/spells/#q=banishment'>изгнания</a> на меч заставляет мстительный дух покинуть его. После этого меч становится обычным оружием +1 без особых свойств.",
      "typeAdditions": "(любой меч)"
    }
  },
  {
    "en": {
      "name": "SWORD OF WOUNDING",
      "type": "Weapon",
      "typeAdditions": "(any sword)",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means. <br>Once per turn, when you hit a creature with an attack using this magic weapon, you can wound the target. <br>At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time you've wounded it, and it can then make a DC 15 Constitution saving throw, ending the effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success.",
      "source": "DMG",
      "img": "SWORD_OF_WOUNDING.jpg"
    },
    "ru": {
      "name": "Меч ранения",
      "text": "Хиты, потерянные из-за урона этим оружием, могут восстановиться только за счёт короткого или продолжительного отдыха, а не за счёт регенерации, магии и других средств. <br>Один раз в ход, когда вы попадаете по существу атакой, используя это магическое оружие, вы можете ранить цель. В начале каждого своего хода раненое существо получает урон некротической энергией 1к4 за каждое ранение, а потом совершает спасбросок Телосложения со Сл 15, оканчивая эффекты всех таких ран на себе при успехе. В качестве альтернативы, раненое существо или любое существо в пределах 5 футов от неё может действием совершить проверку Мудрости (Медицина) со Сл 15, оканчивая эффект таких ран на нём при успехе.",
      "typeAdditions": "(любой меч)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "TALISMAN OF PURE GOOD",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement by acreature of good alignment)",
      "text": "This talisman is a mighty symbol of goodness. A creature that is neither good nor evil in alignment takes 6d6 radiant damage upon touching the talisman. An evil creature takes 8d6 radiant damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman. <br>If you are a good cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to pel! attack rolls while you wear or hold it. <br>The talisman has 7 charges. If you are wearing or holding it, you can use an action to expend 1 charge from it and choose one creature you can see on the ground within 120 feet of you. If the target is of evil alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. <br>The fissure then closes, leaving no trace of its existence. <br>When you expend the last charge, the talisman disperses into motes of golden light and is destroyed.",
      "source": "DMG",
      "img": "TALISMAN_OF_PURE_GOOD.jpg"
    },
    "ru": {
      "name": "Талисман чистого добра",
      "attunement": "(требует настройки созданием с добрым мировоззрением)",
      "text": "Этот талисман — могущественный символ добра. Существа, чьё мировоззрение и не доброе и не злое, получают урон излучением 6к6, когда прикасаются к талисману. Злое существо получает урон излучением 8к6, когда прикасается к талисману. Все эти существа получают такой же урон каждый раз, когда оканчивают ход, держа или неся талисман. <br>Если вы — добрый жрец или паладин, вы можете использовать талисман как святой символ, и вы получаете бонус +2 к броскам атаки заклинаний, пока носите или держите его. <br>У талисмана есть 7 зарядов. Если вы носите или держите его, вы можете действием потратить 1 заряд и выбрать одно существо, которое видите находящимся на полу в пределах 120 футов от вас. Если у цели злое мировоззрение, под ней откроется огненная расщелина. Цель должна преуспеть в спасброске Ловкости со Сл 20, иначе она упадёт в расщелину и уничтожится, не оставив после себя останков. Расщелина после этого закрывается, не оставляя следов. <br>Когда вы тратите последний заряд, талисман распадается искрами золотистого света и уничтожается."
    }
  },
  {
    "en": {
      "name": "TALISMAN OF THE SPHERE",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "When you make an Intelligence (Arcana) check to control a sphere of annihilation while you are holding this talisman, you double your proficiency bonus on the check. In addition, when you start your turn with control over a sphere of annihilation, you can use an action to levitate it 10 feet plus a number of additional feet equal to 10 x your Intelligence modifier.",
      "source": "DMG",
      "img": "TALISMAN_OF_THE_SPHERE.jpg"
    },
    "ru": {
      "name": "Талисман сферы",
      "text": "Когда вы совершаете проверку Интеллекта (Магия) для контроля сферы аннигиляции, держа этот талисман, вы удваиваете бонус мастерства для этой проверки. Кроме того, если вы начинаете ход, удерживая контроль над сферой аннигиляции, вы можете действием сделать так, что она переместится на 10 футов плюс количество футов, равное 10 × ваш модификатор Интеллекта.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "TALISMAN OF ULTIMATE EVIL",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement by acreature of evil alignment)",
      "text": "This item symbolizes unrepentant evil. A creature that is neither good nor evil in alignment takes 6d6 necrotic damage upon touching the talisman. A good creature takes 8d6 necrotic damage upon touching the talisman. <br>Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman. <br>If you are an evil cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it. <br>The talisman has 6 charges. If you are wearing or holding it, you can use an action to expend 1 charge from the talisman and choose one creature you can see on the ground within 120 feet of you. If the target is of good alignment, a flaming fissure opens under it. <br>The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman dissolves into foul-smelling slime and is destroyed.",
      "source": "DMG",
      "img": "TALISMAN_OF_ULTIMATE_EVIL.jpg"
    },
    "ru": {
      "name": "Талисман абсолютного зла",
      "attunement": "(требует настройки создание со злым мировоззреним)",
      "text": "Этот предмет символизирует чистое зло. Существа, чьё мировоззрение и не доброе и не злое, получают урон некротической энергией 6к6, когда прикасаются к талисману. Доброе существо получает урон некротической энергией 8к6, когда прикасается к талисману. Все эти существа получают такой же урон каждый раз, когда оканчивают ход, держа или неся талисман. <br>Если вы — злой жрец или паладин, вы можете использовать талисман как святой символ, и вы получаете бонус +2 к броскам атаки заклинаний, пока носите или держите его. <br>У талисмана есть 6 зарядов. Если вы носите или держите его, вы можете действием потратить 1 заряд и выбрать одно существо, которое видите находящимся на полу в пределах 120 футов от вас. Если у цели доброе мировоззрение, под ней откроется огненная расщелина. Цель должна преуспеть в спасброске Ловкости со Сл 20, иначе она упадёт в расщелину и уничтожится, не оставив после себя останков. Расщелина после этого закрывается, не оставляя следов. <br>Когда вы тратите последний заряд, талисман растворяется дурно пахнущей слизью и уничтожается."
    }
  },
  {
    "en": {
      "name": "TENTACLE ROD",
      "type": "Rod",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "Made by the drow, this rod is a magic weapon that end_ in three rubbery tentacles. While holding the rod, you can use an action to direct each tentacle to attack a creature you can see within 15 feet of you. Each tentac ~ makes a melee attack roll with a +9 bonus. On a hit, the tentacle deals 1d6 bludgeoning damage. If you hit a target with all three tentacles, it must make a DC 15 <br>Constitution saving throw. On a failure, the creature's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions for 1 minute. <br>Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of ea - of its turns, it can repeat the saving throw, ending the effect on itself on a success.",
      "source": "DMG",
      "img": "TENTACLE_ROD.jpg"
    },
    "ru": {
      "name": "Жезл щупалец",
      "text": "Этот изготовленный дроу жезл — магическое оружие, оканчивающееся тремя эластичными щупальцами. Держа этот жезл в руке, вы можете действием направить каждое щупальце, чтобы оно атаковало существо в пределах 15 футов от вас. Каждое щупальце совершает бросок рукопашной атаки с бонусом +9. При попадании щупальце причиняет дробящий урон 1к6. Если вы попали по одной цели всеми тремя щупальцами, она должна совершить спасбросок Телосложения со Сл 15. При провале на 1 минуту скорость существа уменьшается вдвое, оно получает помеху для спасбросков Ловкости и не может совершать реакции. Более того, в каждом своём ходу оно может или совершать действие или бонусное действие, но не то и другое одновременно. В конце каждого своего хода оно повторяет спасбросок, оканчивая эффект на себе при успехе.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "TOME OF CLEAR THOUGHT",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "This book contains memory and logic exercises, and i~ words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Intelligence score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it ·.., a century.",
      "source": "DMG",
      "img": "TOME_OF_CLEAR_THOUGHT.jpg"
    },
    "ru": {
      "name": "Том чистых мыслей",
      "text": "Эта книга содержит упражнения по тренировке памяти и логики, и её слова наполнены магией. Если вы потратите 48 часов за 6 дней на изучение содержимого книги и применение его на практике, ваш Интеллект, а также его максимум увеличатся на 2. После этого руководство теряет магию, но восстанавливает её через 100 лет"
    }
  },
  {
    "en": {
      "name": "TOME OF LEADERSHIP AND INFLUENCE",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Charisma score increases by 2, as d~ your maximum for that score. The manual then loses i·magic, but regains it in a century.",
      "source": "DMG",
      "img": "TOME_OF_LEADERSHIP_AND_INFLUENCE.jpg"
    },
    "ru": {
      "name": "Том лидерства и влияния",
      "text": "Эта книга содержит руководства по оказанию влияния на других, и её слова наполнены магией. Если вы потратите 48 часов за 6 дней на изучение содержимого книги и применение его на практике, ваша Харизма, а также её максимум увеличатся на 2. После этого руководство теряет магию, но восстанавливает её через 100 лет."
    }
  },
  {
    "en": {
      "name": "TOME OF THE STILLED TONGUE",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement by a wizard)",
      "text": "This thick leather-bound volume has a desiccated tongue pinned to the front cover. Five of these tomes exist, and it's unknown which one is the original. The grisly cover decoration on the first tome of the stilled tongue once belonged to a treacherous former servant of the lich-god Vecna, keeper of secrets. The tongues pinned to the covers of the four copies came from othe:spellcasters who crossed Vecna. The first few pages o' each tome are filled with indecipherable scrawls. The remaining pages are blank and pristine. <br>If you can attune to this item, you can use it as a spellbook and an arcane focus. In addition, while holding the tome, you can use a bonus action to cast a spell you have written in this tome, without expend in a spell slot or using any verbal or somatic component <br>Once used, this property of the tome can't be used agai::. until the next dawn. <br>While attuned to the book, you can remove the tonguF from the book's cover. If you do so, all spells written in the book are permanently erased. <br>Vecna watches anyone using this tome. He can also <br>Tite cryptic messages in the book. These messages appear at midnight and fade away after they are read.",
      "source": "DMG",
      "img": "TOME_OF_THE_STILLED_TONGUE.jpg"
    },
    "ru": {
      "name": "Том молчаливого языка",
      "attunement": "(требует настройки волшебником)",
      "text": "У этого толстого тома с кожаным переплётом к обложке пришит язык. Всего существует пять таких томов, и никто не может сказать, какой из них оригинальный. Жуткое украшение на обложке первого тома когда-то было языком вероломного слуги лича-бога Векны, хранителя тайн. Языки на обложках четырёх копий принадлежали заклинателям, предавшим Векну. Первые несколько страниц каждого тома исписаны непонятными каракулями. Оставшиеся страницы девственно чисты. <br>Если вы можете настроиться на этот том, вы можете использовать его в качестве магической фокусировки. Кроме того, держа этот том в руке, вы можете бонусным действием наложить заклинание, которое вы в него записали, не тратя ячейку заклинания и не используя ни вербальный, ни соматический компонент. Вы не можете повторно использовать это свойство тома до следующего рассвета. <br>Будучи настроенным на эту книгу, вы можете оторвать язык с обложки. Если вы это сделаете, все заклинания, записанные в ней, мгновенно стираются. <br>Векна следит за всеми, кто использует этот том. <br>Он также записывает в книгу таинственные сообщения. Эти сообщения появляются в полночь и исчезают после прочтения."
    }
  },
  {
    "en": {
      "name": "TOME OF UNDERSTANDING",
      "type": "Wondrous item",
      "rarity": 4,
      "text": "Veapon (trident), uncommon (requires attunement) -:'his trident is a magic weapon. It has 3 charges. While _. ou carry it, you can use an action and expend 1 charge o cast dominate beast (save DC 15) from it on a beast rhat has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.",
      "source": "DMG",
      "img": "TOME_OF_UNDERSTANDING.jpg"
    },
    "ru": {
      "name": "Том понимания",
      "text": "Эта книга содержит упражнения по тренировке интуиции и проницательности, и её слова наполнены магией. Если вы потратите 48 часов за 6 дней на изучение содержимого книги и применение его на практике, ваша Мудрость, а также её максимум увеличатся на 2. После этого руководство теряет магию, но восстанавливает её через 100 лет."
    }
  },
  {
    "en": {
      "name": "TRIDENT OF FISH COMMAND",
      "type": "Weapon",
      "typeAdditions": "(trident)",
      "attunement": "(requires attunement)",
      "rarity": 2,
      "text": "-:'his trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast <a href='https://tentaculus.ru/spells/#q=dominate_beast'>dominate beast</a> (save DC 15) from it on a beast rhat has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.",
      "source": "DMG",
      "img": "TRIDENT_OF_FISH_COMMAND.jpg"
    },
    "ru": {
      "name": "Трезубец командования рыбами",
      "typeAdditions": "(трезубец)",
      "attunement": "(требует настройки)",
      "text": "Этот трезубец — магическое оружие. У него есть 3 заряда. Если вы его держите, вы можете действием потратить 1 заряд, чтобы наложить им заклинание <a href='https://tentaculus.ru/spells/#q=dominate_beast'>подчинение зверя</a> (Сл спасброска 15) на зверя, у которого есть врождённая скорость плавания. Трезубец ежедневно восстанавливает 1к3 заряда на рассвете."
    }
  },
  {
    "en": {
      "name": "UNIVERSAL SOLVENT",
      "type": "Wondrous item",
      "rarity": 5,
      "text": "This tube holds milky liquid with a strong alcohol ~me lt. You can use an action to pour the contents of the rube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches, including sovereign glue.",
      "source": "DMG",
      "img": "UNIVERSAL_SOLVENT.jpg"
    },
    "ru": {
      "name": "Универсальный растворитель",
      "text": "В этом тюбике находится молочно-белая жидкость с сильным запахом спирта. Вы можете действием вылить содержимое тюбика на поверхность в пределах досягаемости. Она мгновенно растворяет до 1 квадратного фута клейкой субстанции, которой касается, включая превосходный клей."
    }
  },
  {
    "en": {
      "name": "VICIOUS WEAPON",
      "type": "Weapon",
      "typeAdditions": "(any)",
      "rarity": 3,
      "text": "When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.",
      "source": "DMG",
      "img": "VICIOUS_WEAPON.jpg"
    },
    "ru": {
      "name": "Жестокое оружие",
      "text": "Если у вас при броске атаки этим магическим оружием выпадает «20», цель получает дополнительный урон 7 того вида, который причиняет это оружие.",
      "typeAdditions": "(любое)"
    }
  },
  {
    "en": {
      "name": "VORPAL SWORD",
      "type": "Weapon",
      "typeAdditions": "(any sword that deals slashing damage)",
      "attunement": "(requires attunement)",
      "rarity": 5,
      "text": "You gain a +3 bonus to attack and damage rolls made <br>When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or rhe DM decides that the creature is too big for its head ro be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.",
      "source": "DMG",
      "img": "VORPAL_SWORD.jpg"
    },
    "ru": {
      "name": "Меч головоруб",
      "text": "Вы получаете бонус +3 к броскам атаки и урона этим магическим оружием. Кроме того, это оружие игнорирует сопротивление к рубящему урону. <br>Если вы атакуете этим оружием существо, у которого есть как минимум одна голова, и при броске атаки у вас выпадает «20», вы отрубаете одну из голов чудовища. Существо умирает, если не может жить без головы. Существо обладает иммунитетом к этому эффекту, если обладает иммунитетом к рубящему урону, не имеет головы или не нуждается в ней, обладает легендарными действиями или Мастер решает, что существо слишком большое, чтобы вы могли отрубить ему голову этим оружием. Такие существа вместо этого получают рубящий урон 6к8.",
      "typeAdditions": "(любой меч который наносит рубящий урон)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "WAND OF BINDING",
      "type": "Wand",
      "rarity": 3,
      "attunement": "(requires attunement by a spellcaster)",
      "text": "This wand has 7 charges for the following properties. It regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed. <br><b>Spells.</b> While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): <a href='https://tentaculus.ru/spells/#q=hold_monster'>hold monster</a> (5 charges) or hold person</a> (2 charges). <br><b>Assisted Escape.</b> While holding the wand, you can use your reaction to expend 1 charge and gain advantage on a saving throw you make to avoid being paralyzed or restrained, or you can expend 1 charge and gain advantage on any check you make to escape a grapple.",
      "source": "DMG",
      "img": "WAND_OF_BINDING.jpg"
    },
    "ru": {
      "name": "Волшебная палочка сковывания",
      "attunement": "(требует настройки заклинателем)",
      "text": "У этой волшебной палочки 7 зарядов для использования описанными ниже свойствами. Она ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится. <br>Заклинания. Если вы держите эту палочку, вы можете действием потратить часть зарядов, чтобы наложить одно из следующих заклинаний (Сл спасброска 17): <a href='https://tentaculus.ru/spells/#q=hold_monster'>удержание чудовища</a> (5 зарядов) или <a href='https://tentaculus.ru/spells/#q=hold_person'>держание личности</a> (2 заряда). <br>Помощь в освобождении: Если вы держите эту палочку, вы можете реакцией потратить 1 заряд, чтобы получить преимущество для спасброска, совершаемого для того, чтобы не быть парализованным или опутанным, или вы можете потратить 1 заряд, чтобы получить преимущество для проверки, совершаемой, чтобы вырваться из захвата."
    }
  },
  {
    "en": {
      "name": "WAND OF ENEMY DETECTION",
      "type": "Wand",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "This wand has 7 charges. While holding it, you can use an action and expend 1 charge to speak its command word. For the next minute, you know the direction of the nearest creature hostile to you within 60 feet, but not its distance from you. The wand can sense the presence of hostile creatures that are ethereal, invisible, disguised, or hidden, as well as those in plain sight. The effect ends if you stop holding the wand. <br>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. <br>On a 1, the wand crumbles into ashes and is destroyed.",
      "source": "DMG",
      "img": "WAND_OF_ENEMY_DETECTION.jpg"
    },
    "ru": {
      "name": "Волшебная палочка обнаружения врагов",
      "text": "У этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 заряд, чтобы сказать командное слово. В течение следующей минуты вы знаете направление к ближайшему существу, враждебному к вам и находящемуся в пределах 60 футов, но не расстояние до него. Палочка может чувствовать присутствие враждебных существ, которые эфирны, невидимы, замаскированы или прячутся, а также тех, кто и так видны. Эффект оканчивается, если вы перестаёте держать палочку. <br>Палочка ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "WAND OF FEAR",
      "type": "Wand",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "This wand has 7 charges for the following properties. It regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed. <br><b>Command.</b> While holding the wand, you can use an action to expend 1 charge and command another creature to flee or grovel, as with the <a href='https://tentaculus.ru/spells/#q=command'>command</a> spell (save DC 15). <br><b>Cone of Fear.</b> While holding the wand, you can use an action to expend 2 charges, causing the wand's tip to emit a 60-foot cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can· willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the <br>Dash action or try to escape from an effect that preven it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each o: its turns, a creature can repeat the saving throw, endin,. the effect on itself on a success.",
      "source": "DMG",
      "img": "WAND_OF_FEAR.jpg"
    },
    "ru": {
      "name": "Волшебная палочка страха",
      "text": "У этой волшебной палочки 7 зарядов для использования описанными ниже свойствами. Она ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится. <br><b>Приказ.</b> Если вы держите эту палочку, вы можете действием потратить 1 заряд, чтобы приказать другому существу убежать или упасть, как заклинанием <a href='https://tentaculus.ru/spells/#q=command'>приказ</a> (Сл спасброска 15). <br><b>Конус страха.</b> Если вы держите эту палочку, вы можете действием потратить 2 заряда, чтобы кончик палочки испустил 60-футовый конус янтарного света. <br>Все существа в конусе должны преуспеть в спасброске Мудрости со Сл 15, иначе они станут испуганными вами на 1 минуту. Будучи испуганным таким образом, существо обязано тратить ходы на то, чтобы переместиться максимально далеко от вас, и оно не может добровольно переместиться в пространство в пределах 30 футов от вас. Оно также не может совершать реакции. В качестве действия существо может использовать только Рывок или пытаться освободиться от эффекта, препятствующего его передвижению. Если двигаться некуда, существо может использовать действие Уклонение. В конце каждого своего хода существо может повторять спасбросок, оканчивая эффект на себе при успехе.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "WAND OF FIREBALLS",
      "type": "Wand",
      "rarity": 3,
      "attunement": "(requires attunement by a spellcaster)",
      "text": "This wand has 7 charges. While holding it, you can u e an action to expend 1 or more of its charges to cast the <a href='https://tentaculus.ru/spells/#q=fireball&le=3'>fireball</a> spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increa e the spell slot level by one for each additional charge you expend. <br>The wand regains 1d6 + 1 expended charges daily a· dawn. If you expend the wand's last charge, roll a d20. <br>On a 1, the wand crumbles into ashes and is destroyed",
      "source": "DMG",
      "img": "WAND_OF_FIREBALLS.jpg"
    },
    "ru": {
      "name": "Волшебная палочка огненных шаров",
      "attunement": "(требует настройки заклинателем)",
      "text": "У этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 или несколько зарядов, чтобы наложить ей заклинание <a href='https://tentaculus.ru/spells/#q=fireball&le=3'>огненный шар<a/> (Сл спасброска 15). За 1 заряд вы накладываете это заклинание 3-го уровня. Вы можете увеличить уровень заклинания на 1 за каждый дополнительный используемый заряд. <br>Палочка ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится."
    }
  },
  {
    "en": {
      "name": "WAND OF LIGHTNING BOLTS",
      "type": "Wand",
      "rarity": 3,
      "attunement": "(requires attunement by a spellcaster)",
      "text": "~his wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the <a href='https://tentaculus.ru/spells/#q=lightning_bolt'>lightning bolt</a> spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can crease the spell slot level by one for each additional barge you expend. <br> The wand regains ld6 + 1 expended charges daily at Gawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
      "source": "DMG",
      "img": "WAND_OF_LIGHTNING_BOLTS.jpg"
    },
    "ru": {
      "name": "Волшебная палочка молний",
      "attunement": "(требует настройки заклинателем)",
      "text": "У этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 или несколько зарядов, чтобы наложить ей заклинание <a href='https://tentaculus.ru/spells/#q=lightning_bolt'>молния</a> (Сл спасброска 15). За 1 заряд вы накладываете это заклинание 3-го уровня. Вы можете увеличить уровень заклинания на 1 за каждый дополнительный используемый заряд. <br>Палочка ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится."
    }
  },
  {
    "en": {
      "name": "WAND OF MAGIC DETECTION",
      "type": "Wand",
      "rarity": 2,
      "text": "This wand has 3 charges. While holding it, you can spend 1 charge as an action to cast the <a href='https://tentaculus.ru/spells/#q=detect_magic'>detect magic</a> spell from it. The wand regains ld3 expended charges daily at dawn.",
      "source": "DMG",
      "img": "WAND_OF_MAGIC_DETECTION.jpg"
    },
    "ru": {
      "name": "Волшебная палочка обнаружения магии",
      "text": "У этой волшебной палочки 3 заряда. Если вы её держите, вы можете действием потратить 1 заряд, чтобы наложить ей заклинание <a href='https://tentaculus.ru/spells/#q=detect_magic'>обнаружение магии</a>. Палочка ежедневно восстанавливает 1к3 заряда на рассвете."
    }
  },
  {
    "en": {
      "name": "WAND OF MAGIC MISSILES",
      "type": "Wand",
      "rarity": 2,
      "text": "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the <a href='https://tentaculus.ru/spells/#q=magic_missile'>magic missile</a>spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend. <br>The wand regains ld6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
      "source": "DMG",
      "img": "WAND_OF_MAGIC_MISSILES.jpg"
    },
    "ru": {
      "name": "Волшебная палочка снарядов",
      "text": "У этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 или несколько зарядов, чтобы наложить ей заклинание <a href='https://tentaculus.ru/spells/#q=magic_missile'>волшебная стрела</a>. За 1 заряд вы накладываете это заклинание 1-го уровня. Вы можете увеличить уровень заклинания на 1 за каждый дополнительный используемый заряд. <br>Палочка ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится."
    }
  },
  {
    "en": {
      "name": "WAND OF PARALYSIS",
      "type": "Wand",
      "rarity": 3,
      "attunement": "(requires attunement by a spellcaster)",
      "text": "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. Make a ranged attack roll against mat creature using your spell attack bonus. On a hit, the target is paralyzed for 1 minute. At the end of each of the ta rget's turns, it can repeat the saving throw, ending the effect on itself on a success. <br>The wand regains ld6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. <br>On a 1, the wand crumbles into ashes and is destroyed.",
      "source": "DMG",
      "img": "WAND_OF_PARALYSIS.jpg"
    },
    "ru": {
      "name": "Волшебная палочка паралича",
      "attunement": "(требует настройки заклинателем)",
      "text": "У этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 заряд, чтобы выпустить из её кончика тонкий синий луч в сторону существа, которое видите в пределах 60 футов. Цель должна преуспеть в спасброске Телосложения со Сл 15, иначе она станет парализованной на 1 минуту. <br>В конце каждого своего хода цель может повторять спасбросок, оканчивая эффект на себе при успехе. <br>Палочка ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится."
    }
  },
  {
    "en": {
      "name": "WAND OF POLYMORPH",
      "type": "Wand",
      "rarity": 4,
      "attunement": "(requires attunement by a spellcaster)",
      "text": "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the <a href='https://tentaculus.ru/spells/#q=polymorph&le=4'>polymorph</a> spell (save DC 15) from it. <br>The wand regains ld6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. <br>On a 1, the wand crumbles into ashes and is destroyed.",
      "source": "DMG",
      "img": "WAND_OF_POLYMORPH.jpg"
    },
    "ru": {
      "name": "Волшебная палочка превращения",
      "attunement": "(требует настройки заклинателем)",
      "text": "У этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 заряд, чтобы наложить ей заклинание <a href='https://tentaculus.ru/spells/#q=polymorph&le=4'>превращение</a> (Сл спасброска 15). <br>Палочка ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится."
    }
  },
  {
    "en": {
      "name": "WAND OF SECRETS",
      "type": "Wand",
      "rarity": 2,
      "text": "The wand has 3 charges. While holding it. you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains ld3 expended charges daily at dawn. ",
      "source": "DMG",
      "img": "WAND_OF_SECRETS.jpg"
    },
    "ru": {
      "name": "Волшебная палочка секретов",
      "text": "У этой волшебной палочки 3 заряда. Если вы держите её, вы можете действием потратить 1 заряд, и если в пределах 30 футов от вас есть потайные двери или ловушки, то палочка завибрирует и укажет на ту, что находится ближе всего к вам. Палочка ежедневно восстанавливает 1к3 заряда на рассвете."
    }
  },
  {
    "en": {
      "name": "WAND OF THE WAR MAGE +1",
      "type": "Wand",
      "rarity": 2,
      "attunement": "(requires attunement by a spellcaster)",
      "text": "While holding this wand, you gain a bonus +1 to spell attack rolls, you ignore half cover when making a spell attack.",
      "source": "DMG",
      "img": "WAND_OF_THE_WAR_MAGE.jpg"
    },
    "ru": {
      "name": "Волшебная палочка боевого мага +1",
      "attunement": "(требует настройки заклинателем)",
      "text": "Держа эту палочку в руке, вы получаете бонус +1 к броскам атаки заклинаний. Кроме того, вы игнорируете укрытие на половину, когда совершаете атаки заклинаниями."
    }
  },
  {
    "en": {
      "name": "WAND OF THE WAR MAGE +2",
      "type": "Wand",
      "rarity": 3,
      "attunement": "(requires attunement by a spellcaster)",
      "text": "While holding this wand, you gain a bonus +2 to spell attack rolls, you ignore half cover when making a spell attack.",
      "source": "DMG",
      "img": "WAND_OF_THE_WAR_MAGE.jpg"
    },
    "ru": {
      "name": "Волшебная палочка боевого мага +2",
      "attunement": "(требует настройки заклинателем)",
      "text": "Держа эту палочку в руке, вы получаете бонус +2 к броскам атаки заклинаний. Кроме того, вы игнорируете укрытие на половину, когда совершаете атаки заклинаниями."
    }
  },
  {
    "en": {
      "name": "WAND OF THE WAR MAGE +3",
      "type": "Wand",
      "rarity": 4,
      "attunement": "(requires attunement by a spellcaster)",
      "text": "While holding this wand, you gain a bonus +3 to spell attack rolls, you ignore half cover when making a spell attack.",
      "source": "DMG",
      "img": "WAND_OF_THE_WAR_MAGE.jpg"
    },
    "ru": {
      "name": "Волшебная палочка боевого мага +3",
      "attunement": "(требует настройки заклинателем)",
      "text": "Держа эту палочку в руке, вы получаете бонус +3 к броскам атаки заклинаний. Кроме того, вы игнорируете укрытие на половину, когда совершаете атаки заклинаниями."
    }
  },
  {
    "en": {
      "name": "WAND OF WEB",
      "type": "Wand",
      "rarity": 2,
      "attunement": "(requires attunement by a spellcaster)",
      "text": "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the <a href='https://tentaculus.ru/spells/#q=web'>web</a> spell (save DC 15) from it. <br>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. <br>On a 1, the wand crumbles into ashes and is destroyed.",
      "source": "DMG",
      "img": "WAND_OF_WEB.jpg"
    },
    "ru": {
      "name": "Волшебная палочка паутины",
      "attunement": "(требует настройки заклинателем)",
      "text": "У этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 заряд, чтобы наложить ей заклинание <a href='https://tentaculus.ru/spells/#q=web'>паутина</a> (Сл спасброска 15). <br>Палочка ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится."
    }
  },
  {
    "en": {
      "name": "WAND OF WONDER",
      "type": "Wand",
      "rarity": 3,
      "attunement": "(requires attunement by a spellcaster)",
      "text": "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll dlOO and consult the following table to discover what happens. <br>If the effect causes you to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 feet if it isn't already. <br>If an effect covers an area, you must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected. <br>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. <br>On a 1, the wand crumbles into dust and is destroyed. <br>WEAPON, +1, +2, OR +3 <br>Weapon (any), uncommon (+1), rare (+2), or very rare (+3) <br>You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity. <br> <a href='https://tentaculus.ru/archive/tables/wonder_stick_standart.html'>Effects</a>",
      "source": "DMG",
      "img": "WAND_OF_WONDER.jpg"
    },
    "ru": {
      "name": "Волшебная палочка чудес",
      "attunement": "(требует настройки заклинателем)",
      "text": "У этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 заряд и выбрать цель в пределах 120 футов. Цель должна быть существом, предметом или точкой в пространстве. <br>Бросьте к100 и определите последствия с помощью таблицы. <br>Если эффект накладывает заклинание, Сл спасброска от него равна 15. Если обычно у этого заклинания есть дистанция в футах, то эта дистанция становится равной 120 футам. <br>Если эффект покрывает площадь, то вы должны сделать центром заклинания цель и включить её в качестве цели заклинания. Если эффект может воздействовать на несколько разных субъектов, Мастер случайным образом выбирает, кто станет целью. <br>Палочка ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится. <br><a href='https://tentaculus.ru/archive/tables/wonder_stick_standart.html'>Список эффектов</a>"
    }
  },
  {
    "en": {
      "name": "WEAPON +1",
      "type": "Weapon",
      "typeAdditions": "(any)",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "TYou have a bonus +1 to attack and damage rolls made with this magic weapon.",
      "source": "DMG",
      "img": "WEAPON.jpg"
    },
    "ru": {
      "name": "Оружие +1",
      "text": "Вы получаете бонус +1 к броскам атаки и урона, совершённым этим магическим оружием.",
      "typeAdditions": "(любой)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "WEAPON +2",
      "type": "Weapon",
      "typeAdditions": "(any)",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "TYou have a bonus +2 to attack and damage rolls made with this magic weapon.",
      "source": "DMG",
      "img": "WEAPON.jpg"
    },
    "ru": {
      "name": "Оружие +2",
      "text": "Вы получаете бонус +2 к броскам атаки и урона, совершённым этим магическим оружием.",
      "typeAdditions": "(любой)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "WEAPON +3",
      "type": "Weapon",
      "typeAdditions": "(any)",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "TYou have a bonus +3 to attack and damage rolls made with this magic weapon.",
      "source": "DMG",
      "img": "WEAPON.jpg"
    },
    "ru": {
      "name": "Оружие +3",
      "text": "Вы получаете бонус +3 к броскам атаки и урона, совершённым этим магическим оружием.",
      "typeAdditions": "(любой)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "WEAPON OF WARNING",
      "type": "Weapon",
      "typeAdditions": "(any)",
      "rarity": 2,
      "attunement": "(requires attunement)",
      "text": "This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
      "source": "DMG",
      "img": "WEAPON_OF_WARNING.jpg"
    },
    "ru": {
      "name": "Оружие предупреждения",
      "text": "Это магическое оружие предупреждает вас об опасности. Пока это оружие находится у вас, вы совершаете с преимуществом проверки инициативы. Кроме того, вы и все ваши спутники в пределах 30 футов не можете быть захвачены врасплох, кроме случаев, когда недееспособны из-за чего угодно кроме немагического сна. Это оружие с помощью магии будит вас и ваших спутников, если кто-то из вас спит, когда начинается сражение.",
      "typeAdditions": "(любой)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "WELL OF MANY WORLDS",
      "type": "Wondrous item",
      "rarity": 5,
      "text": "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter. <br>You can use an action to unfold and place the well of many worlds on a solid surface, whereupon it creates a two-way portal to another world or plane of existence. <br>Each time the item opens a portal, the DM decides where it leads. You can use an action to close an open portal by taking hold of the edges of the cloth and folding it up. Once well of many worlds has opened a portal, it can't do so again for ld8 hours.",
      "source": "DMG",
      "img": "WELL_OF_MANY_WORLDS.jpg"
    },
    "ru": {
      "name": "Колодец многих миров",
      "text": "Эту чёрную ткань, гладкую как шёлк, можно свернуть до размеров носового платка. В развёрнутом виде это круг диаметром 6 футов. <br>Вы можете действием развернуть колодец многих миров и разместить его на твёрдой поверхности, после чего он станет двусторонним порталом в другой мир или план существования. Каждый раз, когда этот предмет открывает портал, Мастер решает, куда он будет вести. Вы можете действием закрыть открытый портал, свернув ткань за края. Колодец многих миров не может повторно открыть портал, пока не пройдёт 1к8 часов."
    }
  },
  {
    "en": {
      "name": "WIND FAN",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "While holding this fan , you can use an action to cast the <a href='https://tentaculus.ru/spells/#q=gust_of_windl'>gust of wind</a> spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20 percent chance of not working and tearing into useless, nonmagical tatters.",
      "source": "DMG",
      "img": "WIND_FAN.jpg"
    },
    "ru": {
      "name": "Веер ветра",
      "text": "Если вы держите этот веер, вы можете действием наложить им заклинание <a href='https://tentaculus.ru/spells/#q=gust_of_windl'>порыв ветра</a> (Сл спасброска 13). До следующего рассвета веером лучше не пользоваться. За каждое повторное использование до рассвета существует накопительный 20-процентный шанс, что веер не сработает и превратится в бесполезные немагические обрывки."
    }
  },
  {
    "en": {
      "name": "DANCING SWORD",
      "type": "Weapon",
      "typeAdditions": "(any sword)",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The -word uses your attack roll and ability score modifier to damage rolls. <br>While the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause rhe sword to attack one creature within 5 feet of it. <br>After the hovering sword attacks for the fourth time, it ies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the sword has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or move more than 30 feet away from it.",
      "source": "DMG",
      "img": "DANCING_SWORD.jpg"
    },
    "ru": {
      "name": "Танцующий меч",
      "text": "Вы можете бонусным действием бросить этот магический меч в воздух и произнести командное слово. <br>После этого меч начнёт парить, пролетает до 30 футов и атакует одно существо на ваш выбор в пределах 5 футов от него. Меч использует ваш бросок атаки и ваш модификатор характеристики для броска урона. <br>Пока меч парит, вы можете бонусным действием заставить его перелететь на расстояние 30 футов в другое место, находящееся в пределах 30 футов от вас. Частью этого же бонусного действия вы можете заставить меч атаковать одно существо, находящееся в пределах 5 футов от него. <br>После того как парящий меч совершит четвёртую атаку, он пролетает до 30 футов и пытается вернуться в вашу руку. Если у вас нет свободных рук, он падает на землю у ваших ног. Если у меча нет свободного пути до вас, он перемещается максимально близко к вам и потом падает на землю. Он перестаёт парить, если вы хватаете его или перемещаетесь более чем на 30 футов от него.",
      "typeAdditions": "(любой меч)",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CLOAK OF INVISIBILITY",
      "type": "Wondrous item",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "While wearing this cloak, you can pull its hood over your head to cause yourself to become invisible. While you are invisible, anything you are carrying or wearing is invisible with you. You become visible when you cease wearing the hood. Pulling the hood up or down requires an action. <br>Deduct the time you are invisible, in increments of 1 minute, from the cloak's maximum duration of 2 hours. <br>After 2 hours of use, the cloak ceases to function. For every uninterrupted period of 12 hours the cloak goes unused, it regains 1 hour of duration.",
      "source": "DMG",
      "img": "CLOAK_OF_INVISIBILITY.jpg"
    },
    "ru": {
      "name": "Плащ невидимости",
      "text": "Если вы носите этот плащ, вы можете надеть на голову капюшон и стать невидимым. Пока вы невидимы, всё, что вы несёте и носите, становится невидимым вместе с вами. Вы видимы, если не надеваете капюшон. Капюшон надевается и снимается действием. <br>Суммируйте время, в течение которого вы остаётесь невидимы, порциями по 1 минуте. После 2 накопленных часов невидимости плащ перестаёт действовать. За каждые 12 часов, пока плащ не используется, он восстанавливает 1 час использования.",
      "attunement": "(требуется настройка)"
    }
  },
  {
    "en": {
      "name": "CAP OF WATER BREATHING",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "While wearing this cap underwater, you can speak its command word as an action to create a bubble of air around your head. It allows you to breathe normally underwater. This bubble stays with you until you speak the command word again, the cap is removed, or you are no longer underwater.",
      "source": "DMG",
      "img": "CAP_OF_WATER_BREATHING.jpg"
    },
    "ru": {
      "name": "Шапка подводного дыхания",
      "text": "Чудесный предмет, необычный <br>Если вы находитесь под водой и на вас надета эта шапка, вы можете действием произнести командное слово, после чего вокруг вашей головы возникнет воздушный пузырь. Это позволит вам свободно дышать под водой. Пузырь остаётся до тех пор, пока вы не произнесёте командное слово ещё раз, или не выберетесь из-под воды."
    }
  },
  {
    "en": {
      "name": "BEAD OF FORCE",
      "type": "Wondrous item",
      "rarity": 3,
      "text": "This small black sphere measures 3/4 of an inch in diameter and weighs an ounce. Typically, 1d4 + 4 beads of force are found together. <br>You can use an action to throw the bead up to 60 feet. The bead explodes on impact and is destroyed. <br>Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take 5d4 force damage. A sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this sphere. Creatures that succeeded on the save, or are partially within the area, are pushed away from the center of the sphere until they are no longer inside it. Only breathable air can pass through the sphere's wall. No attack or other effect can. <br>An enclosed creature can use its action to push against the sphere's wall, moving the sphere up to half the creature's walking speed. The sphere can be picked up, and its magic causes it to weigh only 1 pound, regardless of the weight of creatures inside.",
      "source": "DMG",
      "img": "BEAD_OF_FORCE.jpg"
    },
    "ru": {
      "name": "Бусина силы",
      "text": "Это маленький черный шарик 3/4 дюйма в диаметре и весом в одну унцию. Как правило, 1к4 + 4 бусин силы находят вместе. <br>Вы можете действием бросить бусину на расстояние до 60 футов. Бусина взрывается при ударе и уничтожается. Все существа, находящиеся в пределах 10 футов от места приземления бусины, должны преуспеть в спасброске Ловкости со Сл 15, иначе получат урон силовым полем 5к4. После этого на этой площади образуется прозрачная сфера из силового поля, остающаяся на этом месте в течение 1 минуты. Все существа, провалившие спасбросок и полностью находящиеся в пределах этой площади, оказывается запертым внутри сферы. Существа, преуспевшие в спасброске, или находящиеся в этой сфере лишь частично, выталкиваются прочь от центра сферы, пока полностью не окажутся за пределами действия силового поля. Никакие атаки и эффекты не могут проникать сквозь сферу — только воздух, пригодный для дыхания. <br>Запертое внутри существо может действием толкать сферу, перемещая её со своей уменьшенной вдвое скоростью. Сферу можно легко поднять, так как вне зависимости от веса существ, находящихся в ней, она весит всего 1 фунт. "
    }
  },
  {
    "en": {
      "name": "CIRCLET OF BLASTING",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "While wearing this circlet, you can use an action to cast the <a href='https://tentaculus.ru/spells/#q=scorching_ray'>scorching ray</a> spell with it. When you make the spell's attacks, you do so with an attack bonus of +5'. The circlet can't be used this way again until the next dawn.",
      "source": "DMG",
      "img": "CIRCLET_OF_BLASTING.jpg"
    },
    "ru": {
      "name": "Обруч сжигания",
      "text": "Пока на вас надета эта диадема, вы можете действием сотворить заклинание <a href='https://tentaculus.ru/spells/#q=scorching_ray'>ОБЖИГАЮЩИЙ ЛУЧ</a>. Вы совершаете магическую атаку с бонусом +5. Диадему нельзя использовать повторно до следующего рассвета."
    }
  },
  
  /* TOMB OF ANNIHILATION */
  
  {
    "en": {
      "name": "AMULET OF THE BLACK SKULL",
      "type": "Wondrous item",
      "rarity": 4,
      "attunement": "(requires attunement)",
      "text": "This amulet is carved from obsidian and shaped like a screaming humanoid skull, with ruby eyes and emeralds for teeth. It hangs from an iron chain necklace. <br>The amulet has 6 charges and regains ld6 charges daily at d awn. While wearing the amulet, you can use an a ction to expend 1 of its char ges to transport your self and anything you are wearing or carrying to a location within 100 feet of you. The destination you choose doesn't need to be in your line of sight, but it must be familiar to you (in other words, a place you have seen or visited), and it must be on the same plane of existence as you . This effect isn't subject to the magic restrictions placed on the Tomb of the Nine Gods; thus, the amulet can be used to enter and exit the tomb. <br>If you aren't undead, you must make a DC 16 Constitution saving throw each time you use the amulet to teleport. On a failed saving throw, the black skull cackles as you are transformed in transit. The transformation takes effect as soon as you arrive at the destination, and is determined randomly by rolling percentile dice and consulting the Black Skull Transformation table.<br> <table> <tr> <td>dl00</td><td> Transformation</td> </tr> <tr> <td> 01-20</td><td>  The symbol of Acererak is burned into your flesh, a curse that can only be removed with a <a href='https://tentaculus.ru/spells/#q=remove_curse'>remove curse</a> spell or similar magic. Until the curse ends, your hit points can't be restored by magic.</td> </tr> <tr> <td> 21-35</td><td> You grow larger as if affected by an <a href='https://tentaculus.ru/spells/#q=enlarge/reduce'>enlarge/reduce spell</a>, except the effect lasts for 1 hour.</td> </tr> <tr> <td> 36-50 </td><td> You grow smaller as if affected by an <a href='https://tentaculus.ru/spells/#q=enlarge/reduce'>enlarge/reduce spell</a> spell, except the effect lasts for 1 hour.</td> </tr> <tr> <td> 51-70</td><td>  You arrive at the destination wearing nothing but the amulet of the black skull. Everything else that you were wearing or carrying appears in a random unoccupied space within 100 feet of you.</td> </tr> <tr> <td> 71-95 </td><td> You are paralyzed for l minute or until this effect is ended with a <a hre='https://tentaculus.ru/spells/#q=lesser_restoration'>lesser restoration</a> spell or similar magic.</td> </tr> <tr> <td> 96-00 </td><td> You become petrified. Th is effect can be ended only with a <a href='https://tentaculus.ru/spells/#q=greater_restoration'>greater restoration</a> spell or similar magic.</td> </tr> </table>",
      "source": "ToA",
      "img": "AMULET_OF_THE_BLACK_SKULL.jpg"
    },
    "ru": {
      "name": "Амулет Черного Черепа",
      "attunement": "(reтребует настройки)",
      "text": "Вырезанный из обсидиана в виде кричащего человеческого черепа с рубинами вместо глаз и изумрудами в качестве зубов амулет висит на железной цепи. <br> У амулета есть 6 зарядов и ежедневно он восстанавливает d6 из них. Пока вы носите амулет, можно использовать 1 заряд, чтобы перенести себя и все что вы несете на расстояние до 100 футов. Место назначения не обязательно видеть, но оно должно вам быть знакомо (другими словами вы видели это место или посещали ранее), кроме того оно должно быть на том же плане, что и вы. Этот эффект никак не ограничивается магией Гробницы Девяти Богов, таким образом, его можно использовать ,чтобы войти или выйти из гробницы. <br> Если вы не нежить, то каждый раз при использовании этой телепортации вам придется успешно совершать спасбросок по Телосложению (сложность 16). При провале черный черех расхохочется над тем, в что вы превратились в процессе переноса.  Трансформация происходит сразу после переноса. <br> <table> <tr> <td>dl00</td><td> Трансформация</td> </tr> <tr> <td> 01-20</td><td>На вашем теле появляется выжженный символ Ацерерака, убрать его можно заклинанием <a href='https://tentaculus.ru/spells/#q=remove_curse'>снять проклятие</a> или аналогичным. Пока действует проклятие, ваши хиты не могут быть восстановлены магией.</td> </tr> <tr> <td> 21-35</td><td> Вы становитесь больше, как из за заклинания <a href='https://tentaculus.ru/spells/#q=enlarge/reduce'>увеличение/уменьшение</a>Эффект длится час.</td> </tr> <tr> <td> 36-50 </td><td> Вы становитесь меньше, как из за заклинания <a href='https://tentaculus.ru/spells/#q=enlarge/reduce'>увеличение/уменьшение</a>Эффект длится час.</td> </tr> <tr> <td> 51-70</td><td> Вы появляетесь в точке назначения без всего, крое амулета. Все что было на вас надето и все, что вы несли появляется в случайном незанятом месте в пределах 100 футов от вас.</td> </tr> <tr> <td> 71-95 </td><td>Вы парализованы на 1 минуту или пока эффект не снимут заклинанием <a hre='https://tentaculus.ru/spells/#q=lesser_restoration'>малое восстановление</a> или подобным.</td> </tr> <tr> <td> 96-00 </td><td> Вы обездвижены, пока эффект не будет снят заклинанием <a href='https://tentaculus.ru/spells/#q=greater_restoration'>улучшенное восстановление</a> или подобным.</td> </tr> </table>"
    }
  },
  {
    "en": {
      "name": "BOOKMARK",
      "type": "Weapon",
      "typeAdditions": "(dagger)",
      "rarity": 5,
      "attunement": "(requires attunement)",
      "text": "This +3 dagger belongs to Artus Cimber (see appendix D). While you have the dagger drawn, you can use a bonus action to activate one of the fo llowing proper ties:<br> • Cause a blue gem set into the dagger's pommel to shed bright light in a 20-foot radius and dim light for an additional 20 feet, or make the gem go dark.<br> • Turn the dagger into a compass that, while resting on your palm, points north. <br> • Cast <a href='https://tentaculus.ru/spells/#q=dimension_door'>dimension door</a> from the dagger. Once this property is used, it can't be used again until the next dawn.<br> • Cast <a href='https://tentaculus.ru/spells/#q=compulsion'>compulsion</a> (save DC 15) from the dagger. The range of the spell increases to 90 feet, but it targets only spiders that are beasts. Once this property is used, it can't be used again until the next dawn.",
      "source": "ToA",
      "img": "BOOKMARK.jpg"
    },
    "ru": {
      "name": "Закладка",
      "typeAdditions": "(кинжал)",
      "attunement": "(reтребует настройки)",
      "text": "Этот кинжал +3 принадлежит Артуру Кимберу (см. дополнение Д). Если вы держите кинжал, бонусным действием можно активировать одно из следующих свойств: <br> • Заставить синий самоцвет в рукояти светить ярким светов в радиусе 20 футов и еще на 20 футов тусклым, или потушить самоцвет.<br> • Использовать кинжал как компас, пока он лежит на ладони - указывает на север.<br> • Использовать заклинание кинжала <a href='https://tentaculus.ru/spells/#q=dimension_door'>дверь измерений</a>. Заклинание нельзя будет применить до следующего рассвета. <br> • Использовать заклинание кинжала <a href='https://tentaculus.ru/spells/#q=compulsion'>принуждение</a> (сложность 15). Радиус заклинания возрастает до 90 футов, но действует оно только на пауков, которые являются животными. Заклинание нельзя будет применить до следующего рассвета. "
    }
  },
  {
    "en": {
      "name": "GHOST LANTERN",
      "type": "Wondrous item",
      "rarity": 3,
      "attunement": "(requires attunement)",
      "text": "A restless spirit is trapped inside this lantern. While holding the lantern, you can command the spirit as a bonus action to shed bright light in a 30-foot radius and dim light for an additional 30 feet. <br>While holding the lantern , you can use an action to order the spirit to leave the lantern and duplicate the effect of the <a href='https://tentaculus.ru/spells/#q=mage_hand'>mage hand</a> spell. The spirit returns to the lantern when the spell ends. <br>If you fall unconscious within 10 feet of the la ntern, the spirit emerges from it, magically stabilizes you with a touch, and then quickly returns to the lantern. <br>The spirit is bound to the lantern and can't be harmed, turned, or raised from the dead. Casting a <a href='https://tentaculus.ru/spells/#q=dispel_evil_and_good'>dispel evil and good</a> spell on the lantern releases the spirit to the afterlife and renders the lantern nonmagical.",
      "source": "ToA",
      "img": "GHOST_LANTERN.jpg"
    },
    "ru": {
      "name": "Призрачный фонарь",
      "attunement": "(требует настройки)",
      "text": "Внутрь фонаря заключен неупокоенный дух. Пока вы держите фонарь, бонусным действием можете приказать духу освещать местность ярким светом в радиусе 30 футов и тусклым еще в 30. <br> Держа фонарь вы действием можете приказать духу покинуть фонарь и скопировать эффект заклинания <a href='https://tentaculus.ru/spells/#q=mage_hand'>волшебная рука</a>. Дух возвращается в фонарь после окончания действия заклинания.<br> Если вы потеряете сознание в пределах 10 футов от фонаря, дух покинет его, магическим образом стабилизирует вас, и тут же вернется в фонарь. <br> Дух связан с фонарем магическим образом, ему не может быть причинен вред, его невозможно изгнать или упокоить ил воскресить. Применения заклинания <a href='https://tentaculus.ru/spells/#q=dispel_evil_and_good'>развеять зло и добро</a> на фонаре отправить духа в загробную жизнь и фонарь перестанет быть магическим."
    }
  },
  {
    "en": {
      "name": "MASK OF THE BEAST",
      "type": "Wondrous item",
      "rarity": 2,
      "text": "This wooden mask is shaped in the likeness of a beast's visage and has 3 charges. While wearing the mask, you can expend 1 charge and use the mask to cast the <a href='https://tentaculus.ru/spells/#q=animal_friendship'>animal friendship</a> spell as an action. The mask regains all expended charges at dawn.",
      "source": "ToA",
      "img": "MASK_OF_THE_BEAST.jpg"
    },
    "ru": {
      "name": "Маска зверя",
      "text": "Деревянная маска, изображающая животное. У нее есть три заряда. Тот, кто носит маску может потратить 1 заряд и использовать маску для наложения действием заклинания <a href='https://tentaculus.ru/spells/#q=animal_friendship'>дружба с животными</a>. Маска восстанавливает все заряды на рассвете."
    }
  },
  {
    "en": {
      "name": "RING OF WINTER",
      "type": "Ring",
      "attunement": "(requires attunement)",
      "rarity": 6,
      "text": "Artus Cimber (see appendix D) has kept this item in his possession for over a century. The Ring of Winter is a golden band that resizes to fit snugly on the finger of its wearer. A thin layer of frost coats the outside of the ring, which normal heat can't melt. The ring feels ice cold to the touch and initially numbs the hand that wears it, but this cold ceases to be felt by one who is attuned to the ring. <br> The Ring of Winter is sentient and tries to take control of any creature that wears it (see \"Sentient Magic Items\" in chapter 7 of the Dungeon Master's Guide). If it succeeds, the ring compels its wearer to cause undue harm to everyone and everything around it, in a cold-hearted attempt to incur the wrath of enemies and bring about the wearer's doom. <br><b>Sentience.</b> The Ring of Winter is a sentient chaotic evil item with an Intelligence of 14, a Wisdom of 14, and a Charisma of 17. The ring communicates by transmitting emotion to the creature carrying or wielding it, and it has hearing and normal vision out to a range of 60 feet. The ring craves destruction, and it likes intlicting indiscriminate harm on others. <br><b>Nondetection.</b> The Ring of Winter defies attempts to magically locate it. Neither the ring nor its wearer can be targeted by any divination magic or perceived through magical scrying sensors. <br><b>Frozen Time.</b> As long as you wear the ring, you don't age naturally. This effect is similar to suspended animation, in that your age doesn't catch up to you once the ring is removed. The ring doesn't protect its wearer from magical or supernatural aging effects, such as the Horrifying Visage of a <a href='https://tentaculus.ru/monsters/#q=ghost'>ghost</a>. <br><b>Cold Immunity.</b> While attuned to and wearing the ring, you have immunity to cold damage and don't suffer any ill effects from extreme cold (see chapter 5 of the Dungeon Master's Guide). <br><b>Magic.</b> The Ring of Winter has 12 charges and regains all its expended charges daily at dawn. While wearing the ring, you can expend the necessary number of charges to activate one of the folJowing properties: <br> • You can expend 1 charge as an action and use the ring to lower the temperature in a 120-foot-radius sphere centered on a point you can see within 300 feet of you. The temperature in that area drops 20 degrees per minute, to a minimum of -30 degrees Fahrenheit. Frost and ice begin to form on surfaces once the temperature drops below 32 degrees. This effect is permanent unless you use the ring to end it as an action, at which point the temperature in the area returns to normal at a rate of 10 degrees per minute. <br> • You can cast one of the following spells from the ring (spell save DC 17) by expending the necessary number of charges: <a href='https://tentaculus.ru/spells/#q=Bigby's_hand'>Bigby's hand</a> (2 charges; the hand is made of ice, is immune to cold damage, and deals bludgeoning damage instead of force damage as a clenched fist), <a href='https://tentaculus.ru/spells/#q=cone_of_cold'>cone of cold</a> (2 charges), flesh to ice (3 charges; as <a href='https://tentaculus.ru/spells/#q=flesh_to_stone'>flesh to stone</a> except that the target turns to solid ice with the density and durability of stone), <a href='https://tentaculus.ru/spells/#q=ice_storm'>ice storm</a> (2 charges), <a href='https://tentaculus.ru/spells/#q=Otiluke's_freezing_sphere'>Otiluke's freezing sphere</a> (3 charges), <a href='https://tentaculus.ru/spells/#q=sleet_storm'>sleet storm</a> (1 charge), <a href='https://tentaculus.ru/spells/#q=spike_growth'>spike growth</a> (1 charge; the spikes are made of ice), or <a href='https://tentaculus.ru/spells/#q=wall_of_ice'>wall of ice</a> (2 charges). <br> • You can expend the necessary number of charges as an action and use the ring to create either an inanimate ice object (2 charges) or an animated ice creature (4 charges). The ice object can't have any moving parts, must be able to fit inside a 10-foot cube, and has the density and durability of metal or stone (your choice). The ice creature must be modeled after a <a href='https://tentaculus.ru/monsters/#cr=0,1/8,1/4,1/2,1,2&type=зверь'>beast with a challenge rating of 2 or less</a>. The ice creature has the same statistics as the beast it models, with the following changes: the creature is a construct with vulnerability to fire damage, immunity to cold and poison damage, and immunity to the following conditions: charmed, exhaustion, frightened, paralyzed, petrified, and poisoned. The ice creature obeys only its creator's commands. The ice object or creature appears in an unoccupied space within 60 feet of you. It melts into a pool of normal water after 24 hours or when it drops to 0 hit points. In extreme heat, it loses 5 (ldlO) hit points per minute as it melts. Use the guidelines in chapter 8 of the Dungeon Master's Guide to determine the hit points of an inanimate object if they become necessary. <br><b>Other Properties.</b>  The Ring of Winter is rumored to possess other properties that can be activated only by an evil being whose will the ring can't break. Frost giants have long believed that the ring can be used to freeze entire worlds, while a djinni in Lhe service of a Calishite pasha once claimed that the ring could be used to summon and control white dragons, as well as a mighty ice primordial named Cryonax. <br><b>Destroying the Ring.</b>  The ring is nigh indestructible, resisting even the most intense magical heat. If it is placed on the finger of the powerful arch fey known as the Summer Queen, the ring melts away and is destroyed forever.",
      "source": "ToA",
      "img": "RING_OF_WINTER.jpg"
    },
    "ru": {
      "name": "Кольцо зимы",
      "attunement": "(требует настройки)",
      "text": "Артур Кимбер (см. Приложение Д) хранил эту вещь веками. Кольцо зимы - простое на вид золотое кольцо, которое подстраивает свои размеры так, чтобы плотно сидеть на пальце владельца. Внешняя сторона покрыта тонким слоем инея, который не тает от обычного тепла. Кольцо на ощупь холодное, и если его оденет тот, кто не настроен на кольцо, его рука тут же онемеет от холода. <br> Кольцо Зимы разумно и пытается взять под контроль любое существо, которое его носит (см. \"Разумные магические предметы\" в 7 главе Руководства Мастера)ю Если это удается, кольцо заставляет носителя крушить все и всех вокруг в стремлении навлечь на себя гнев врагов и уничтожить носителя кольца. <br><b>Разумность.</b> Кольцо Зимы - разумный хаотично-злой предмет с Интеллектом 14, Мудростью 14 и Харизмой 17. Кольцо общается передавая эмоции существу, носящему его, а так же обладает слухом и обычным зрением в радиусе 60 футов. Кольцо жаждет разрушения и ему нравится причинять вред всему окружающему. <br><b>Необнаруживаемость.</b> Кольцо Зимы сопротивляется попыткам магического обнаружения. Ни кольцо, ни его носитель не могут являться целью магии прорицания, так же они невидимы для магических средств слежения. <br><b>Заморозка времени.</b> Пока вы носите это кольцо вы не стареете естественным образом. При снятии кольца вы не состаритесь на \"замороженные\" годы. Кольцо не защищает носителя от изменения возраста, вызванного магическими эффектами, такими как  Устрашающий Вид <a href='https://tentaculus.ru/monsters/#q=ghost'>призрака</a>. <br><b>Иммунитет к Холоду</b>. Пока вы носите это кольцо и настроены на него, вы иммунны у рону холодом и не страдаете от негативных низких температур (см. главу 5 Руководства Мастера). <br><b>Магия.</b> У кольца Зимы есть 12 зарядов и оно восстанавливает их все на рассвете. Пока вы носите кольцо, можете потратить необходимое количество зарядов, чтобы использовать следующие свойства: <br> • Вы можете действием потратить 1 заряд кольца, чтобы понизить температуру в сфере радиусом 120 футов  с центром в точке, которую вы можете видеть в пределах 300 футов от вас. Температура в области падает на 20 градусов по Фаренгейту в минуту до минимума в -30 (-34°С). Иней и лед на поверхности начинают появляться, когда температура опускается ниже 32°F (0°C). Эффект является постоянным, если только вы не используете действие, чтобы прекратить его, после чего температура постепенно приходит в норму со скоростью 10 градусов в минуту.  <br> • Вы можете использовать одно из следующих заклинаний Кольца (сложность спасброска 17), потратив полагающееся чисто зарядов: <a href='https://tentaculus.ru/spells/#q=Bigby's_hand'>рука Бигби</a> (2 заряда; рука состоит из льда, иммунна к урону холодом и наносит сжатым кулаком дробящий урон (вместо уроном энергией)), <a href='https://tentaculus.ru/spells/#q=cone_of_cold'>конус холода</a> (2 заряда), плоть в лед (3 заряда; как <a href='https://tentaculus.ru/spells/#q=flesh_to_stone'>плоть в камень</a> за исключением того, что цель превращается в лед с прочностью и долговечностью камня), <a href='https://tentaculus.ru/spells/#q=ice_storm'>ледяной шторм</a> (2 заряда), <a href='https://tentaculus.ru/spells/#q=Otiluke's_freezing_sphere'>ледяной шар Отилюка</a> (3 заряда), <a href='https://tentaculus.ru/spells/#q=sleet_storm'>дождь со снегом</a> (1 заряд), <a href='https://tentaculus.ru/spells/#q=spike_growth'>рост шипов</a> (1 заряд; шипы состоят изо льда) или <a href='https://tentaculus.ru/spells/#q=wall_of_ice'>стена изо льда</a> (2 заряда).<br> • Вы можете потратить соответствующее число зарядов кольца, чтобы действием создать неодушевленный ледяной предмет (2 заряда) или живое ледяное существо (4 заряда). У ледяного объекта не должно быть подвижных частей и он должен помещаться в куб со стороной в 10 футов. Он имеет плотность и долговечность металла или камня (по вашему выбору). Ледяное существо аналогично <a href='https://tentaculus.ru/monsters/#cr=0,1/8,1/4,1/2,1,2&type=зверь'>животному с Классом Опасности не выше 2</a>. Ледяное существо обладает теми же характеристиками, что и выбранное животное, со следующими изменениями: существо это конструкт с уязвимостью к урону огнем и иммунитетом у урону холодом и ядом, и иммунитетом к следующим состояниям: очарование, истощение, страх, паралич, обездвиживание, отравление. Ледяное существо слушается только команд своего создателя. Ледяной объект или существо появляется в незанятом пространстве в пределах 60 футов от вас. Оно истаивает в лужу обычной воды через 24 часа, либо при опускании Хотов в 0. При высокой температуре оно теряет по 5 (d10) хитов в минуту из-за таяния. Пи необходимости рассчитать количество хитов существа обратитесь к рекомендациям в 8 главе Руководства Мастера. <br><b>Прочие свойства.</b> По слухам, Кольцо Зимы обладает другими свойствами, которыми могут воспользоваться только злые существа, чья воля не порабощена кольцом. Морозные великаны издавна верят, что с помощью кольца можно замораживать целые миры, в то время как джинн на службе у Калишитского паши как-то сказал, что кольцо позволяет призывать и управлять белыми драконами, а так же к могучей морозной первородной сущность по имени Крионакс.  <br><b>Уничтожение кольца.</b> Кольцо практически неуничтожимо и сопротивляется даже самому горячему магическому огню. Если его оденет архифея, известная как Королева Лета, кольцо расстает и навсегда исчезнет." 
    }
  },
  {
    "en": {
      "name": "SCORPION ARMOR",
      "type": "Armor",
      "typeAdditions": "(plate)",
      "rarity": 3,
      "attunement": "(quires attunement)",
      "text": "This suit of plate armor is fashioned from giant scorpion chitin. While wearing this armor, you gain the following benefits: <br> • The armor improves your combat readiness, granting you a +5 bonus to initiative as long as you aren't incapacitated. <br> • The armor doesn't impose disadvantage on your Dexterity (Stealth) c hecks. <br> • The armor doesn't impose disadvantage on saving throws made to resist the effects of extreme heat (see chapter 5 of the Dungeon Master's Guide). <br><b>Curse.</b> This armor is cursed. Whenever you don or doff it, you must make a DC 15 Constitution saving throw, taking 100 (10d10+45) poison damage on a failed save, or half as much damage on a successful one. Only a <a href='https://tentaculus.ru/spells/#q=wish'>wish</a> spell can remove the armor's curse.",
      "source": "ToA",
      "img": "SCORPION_ARMOR.jpg"
    },
    "ru": {
      "name": "Скорпионий доспех",
      "typeAdditions": "(латы)",
      "attunement": "(требует настройки)",
      "text": "Эти латы сделаны из хитина гигантского скорпиона. При ношении доспеха, вы получаете следующие преимущества: <br> • Броня улучшает вашу боеготовность, предоставляя вам +5 бонус к инициативе, пока вы не выведены из строя.<br> •  Броня не налагает помех на проверки Ловкости (Скрытности).<br> •   Броня не накладывает помеху на спасброски, против воздействия сильной жары (см. Главу 5 Руководства Мастера Подземелий). <br><b>Проклятие</b>. Эта броня проклята. Всякий раз одевая или снимая ее вы должны преуспеть в спаброске по телосложению (сложность - 15), получая 100 (10d10+45) урона ядом при провале и половину при успехе. Только заклинание <a href='https://tentaculus.ru/spells/#q=wish'>исполнение желаний</a> может снять проклятие доспеха."
    }
  },
  {
    "en": {
      "name": "STAFF OF THE FORGOTTEN ONE",
      "type": "Staff",
      "rarity": 6,
      "attunement": "(requires attunementby a sorcerer, warlock, or wizard)",
      "text": "This crooked staff is carved from bone and topped with the skull of a forgotten archmage whom Acererak destroyed long ago. Etched into the skull's forehead is Acererak's rune, which is known on many worlds as a sign of death. <br> <b>Beneficial Properties.</b> While the staff is on your person, you gain the following benefits: <br> • Your proficiency bonus to Intelligence (Arcana) and Intelligence (History) checks is doubled. <br> • You can't be blinded, charmed, deafened, frightened, petrified, or stunned. <br> • Undead with a challenge rating of 2 or lower will neither threaten nor attack you unless you harm them. <br> • You can wield the staff as a +3 quarterstaff that deals an extra 10 (3d6) necrotic damage on a hit. <br><b>Invoke Curse.</b> The Staff of the Forgotten One has 7 charges and regains ld4 + 3 expended charges daily at dawn. While holding the staff, you can use an action to expend 1 charge and target one creature you can see within 60 feet of you. The target must succeed on a Constitution saving throw (using your spell save DC) or be cursed. While cursed in this way, the target can't regain hit points and has vulnerability to necrotic damage. A <a href='https://tentaculus.ru/spells/#q=greater_restoration'>greater restoration</a>, <a href='https://tentaculus.ru/spells/#q=remove_curse'>remove curse</a>, or similar spell ends the curse on the target. <br><br>The Forgotten One.</b> The bodiless life force of a dead archmage empowers the staff and is imprisoned within it. The rune carved into the staff's skull protects Acererak from this spirit's vengeance. Each time a creature other than Acererak expends any of the staff's charges, there is a 50 percent chance that the life force tries to possess the staff wielder. The wielder must s ucceed on a DC 20 Charisma saving throw or be possessed, becoming an NPC under the DM's control. If the intruding life force is targeted by magic such as a <a href='https://tentaculus.ru/spells/#q=dispel_evil_and_good'>dispel evil and good</a> spell, it becomes trapped in the staff once more. Once it takes control of another creature, the insane spirit of the dead archmage attempts to destroy the staff. <br><br>Destroying the Staff.</b> A creature in possession of the staff can use an action to break it over one knee or a solid surface. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it. Each creature in the area must make a DC 18 D exterity saving throw, taking 132 (24dl0) force damage on a failed save, or half as much damage on a successful one. When the staff is destroyed, the life force of the Forgotten One is released to the afterlife. Where it goes is anyone's guess. Casting the staff into a sphere of annil1ilation destroys both the s taff and the Life force trapped within it. The staff doesn't explode if destroyed in this manner, but its destruction causes the sphere to be destroyed as well.",
      "source": "ToA",
      "img": "STAFF_OF_THE_FORGOTTEN_ONE.jpg"
    },
    "ru": {
      "name": "Посох забытого",
      "attunement": "(требует настройки чародеем, колдуном или волшебником)",
      "text": "Этот искривленный посох вырезан из кости, а навершием ему служит череп забытого архимага, уничтоженного Ацерераком давным-давно. На лбу у черепа вырезана руна Ацерерака, которая известна во многих мирах как символ смерти. <br> <b>Полезные свойства.</b> Покуда вы пользуетесь этим посохом, получаете следующие преимущества: <br> • Ваш Бонус Мастерства при проверке Интеллекта (Арканы и Истории) удваивается.<br> • Вы не можете быть ослеплены, очарованы, оглушены, напуганы, обездвижены или ошеломлены.<br> • Нежить с уровнем вызова 2 и ниже не может навредить вам, пока вы ее не атаковали.<br> • Посох можно использовать как оружие ближнего боя +3, которое наносит дополнительно 10(3d6) некротического урона при попадании. <br><b>Наложение проклятия.</b> У посоха есть 7 зарядов и он восстанавливает 1d4+3 ежедневно на рассвете. Если ы держите посох, действием можно потратить 1 заряд и выбрать целью видимое вам существо в пределах 60 футов от вас. Существо должно преуспеть в спасброске по  Телосложению (сложность спасброска от ваших заклинаний) или будет проклято. Проклятое таким образом существо не может восстанавливать хиты и получает уязвимость к некротическому урону. <a href='https://tentaculus.ru/spells/#q=greater_restoration'>Улучшенное восстановление</a>, <a href='https://tentaculus.ru/spells/#q=remove_curse'>снятие проклятия</a> или подобные заклинания снимают проклятие с цели. <br><b>Забытый</b> Бестелесная жизненная сила мертвого архимага дает силу посоху и его владельцу. Руна на черепе защищает Ацерерака от мести этого духа. Если ко-то помимо Ацерерака расходует заряды посоха, то есть 50% шанс что дух попытается захватить тело использующего посох. Владелец посоха должен преуспеть в спасброске по Харизме (сложность 20), в противном случае он становится одержим духом мертвого архимага и становится НПСом под управлением ДМа. Если одержимый становится целью заклинания <a href='https://tentaculus.ru/spells/#q=dispel_evil_and_good'>развеять зло и добро</a>, дух снова оказывается заперт в посох. Когда дух овладевает другим созданием, он пытается уничтожить посох. <br><b>Уничтожение посоха.</b> Владеющее посохом существо может действием сломать его о колено или любую твердую поверхность. Посох уничтожается и высвобождает оставшуюся магию во взрыве, который заполняет сферу радиусом 30 футов с центром на посохе. Каждое создание в сфере должносовершить спасбосок по Ловкости (сложность 18), получая 132 (24d10) урона силой при провале или половину при успехе. После уничтожения посоха дух Забытого освобождается и отправляется в загробную жизнь. Куда именно он отправляется можно только догадываться. Если бросить посох в Сферу Аннигиляции, и посох, и дух Забытого уничтожается, но взрыва не будет. Однако, в таком случае уничтожиться и Сфера."
    }
  },
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	{
  "en": {
   "name": "ARMOR 0E GLEAMING",
	 "img": "ARMOR_OF_GLEAMING.jpg",
   "type": "Armor",
   "typeAdditions": "(any medium or heavy)",
   "rarity": "1",
   "text": "This armor never gets dirty.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Сверкающий доспех",
   "text": "Этот доспех никогда не покрывается грязью."
  }
 },
 {
  "en": {
   "name": "BEAD OF NOURISHMENT",
	 "img": "BEAD_OF_NOURISHMENT.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This spongy, flavorless, gelatinous bead dissolves onyour tongue and provides as much nourishment as 1 dayof rations.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Бусина насыщения",
   "text": "Эта пористая безвкусная студенистая бусина растворяется у вас на языке и насыщает вас на 1 день."
  }
 },
 {
  "en": {
   "name": "BEAD OF REERESHMENT",
	 "img": "BEAD_OF_REERESHMENT.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This spongy, flavorless, gelatinous bead dissolves inliquid, transforming up to a pint of the liquid into fresh,cold drinking water. The head has no effect on magicalliquids or harmful substances such as poison.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Освежающая бусина",
   "text": "Эта пористая безвкусная студенистая бусина растворяется в жидкости, превращая до пинты жидкости в свежую чистую холодную воду. Бусина не оказывает эффект на магические жидкости или опасные вещтва типа яда."
  }
 },
 {
  "en": {
   "name": "BOOTS OF FALSE TRACKS",
	 "img": "BOOTS_OF_FALSE_TRACKS.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "Only humanoids can wear these boots. While wearingthe boots, you can choose to have them leave tracks likethose of another kind of humanoid of your size.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Сапоги ложных следов",
   "text": "Только гуманоиды могут носить эти сапоги. Когда выих носите, то можете их заставить оставлять следы других гуманоидов вашего размера."
  }
 },
 {
  "en": {
   "name": "CANDLE OF THE DEEP",
	 "img": "CANDLE_OF_THE_DEEP.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "The flame of this candle is not extinguished whenimmersed in water. It gives off light and heat like a normalcandle.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Свеча глубин",
   "text": "Пламя этой свечи не гаснет при погружении в воду.<br>Она излучает свет и тепло как обычная свеча."
  }
 },
 {
  "en": {
   "name": "CAST—OFF ARMOR",
	 "img": "CAST_OFF_ARMOR.jpg",
   "type": "Armor",
   "typeAdditions": "(light, medium. or heavy)",
   "rarity": 1,
   "text": "You can doff this armor as an action.",
	 "source": "XGTE"
  },
	"ru": {
		"name": "Доспех быстрого снятия",
		"text": "Вы можете снять этот доспех действием."
	}
 },
 {
  "en": {
   "name": "CHARLATAN’S DIE",
	 "img": "CHARLATANS_DIE.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "attunement": "(requires attunement)",
   "text": "Whenever you roll this six—sided die, you can controlwhich number it rolls.",
	 "source": "XGTE"
  },
	 "ru": {
   "name": "Кость шарлатана",
   "attunement": "(требует настройки)",
   "text": "Когда вы бросаете эту 6-гранную кость, вы можете выбрать, какой гранью она выпадет."
  }
 },
 {
  "en": {
   "name": "CLOAK OF BILLOWING",
	 "img": "CLOAK_OF_BILLOWING.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "While wearing this cloak, you can use a bonus action tomake it billow dramatically.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Развевающийся плащ",
   "text": "Когда вы носите этот плащ, вы можете бонуснымдействием заставить его драматично развеваться."
  }
 },
 {
  "en": {
   "name": "CLOAK OF MANY FASHIONS",
	 "img": "CLOAK_OF_MANY_FASHIONS.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "While wearing this cloak, you can use a bonus action tochange the style, color, and apparent quality of the garment.<br>The cloak’s weight doesn’t change. Regardless ofits appearance, the cloak can’t be anything but a cloak.<br>Although it can duplicate the appearance of other magiccloaks, it doesn’t gain their magical properties.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Плащ множества стилей",
   "text": "Когда вы носите этот плащ, вы можете бонуснымдействием заставить его изменить стиль, цвет ивидимое качество. Вес плаща не меняется. Независимо от внешнего вида, он может быть только плащом.<br>Хотя он может принимать вид других магическихплащей, их свойств он не получает."
  }
 },
 {
  "en": {
   "name": "CLOCKWORK AMULET",
	 "img": "CLOCKWORK_AMULET.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This copper amulet contains tiny interlocking gearsand is powered by magic from Mechanus, a plane ofclockwork predictability. A creature that puts an ear tothe amulet can hear faint ticking and whirring noisescoming from within.<br>When you make an attack roll while wearing the am—ulet, you can forgo rolling the d20 to get a 10 on the die.<br>Once used. this property can’t be used again until thenext dawn.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Механистический амулет",
   "text": "Этот медный амулет содержит очень маленькиешестерёнки, находящиеся в постоянном движении изаряженные магией Механуса – плана механической предопределённости. Существо, которое прикладывает амулет к уху, может услышать тихое тиканье ишуршание шестерёнок.<br>Когда вы носите этот амулет и совершаете бросокатаки, вы можете не бросать к20 и просто выбрать значение 10 на кости. Это свойство нельзя использовать повторно до следующего рассвета."
  }
 },
 {
  "en": {
   "name": "CLOTHES OF MENDING",
	 "img": "CLOTHES_OF_MENDING.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This elegant outfit of traveler’s clothes magically mendsitself to counteract daily wear and tear. Pieces of the outfitthat are destroyed can’t be repaired in this way.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Самочинящаяся одежда",
   "text": "Эта элегантная одежда путешественника волшебным образом восстанавливает износ и разрывы. Кускиткани, которые были уничтожены, не могут самостоятельно восстановиться."
  }
 },
 {
  "en": {
   "name": "DARK SHARD AMULET",
	 "img": "DARK_SHARD_AMULET.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "attunement": "(requires attunement by a wariock)",
   "text": "This amulet is fashioned from a single shard of resilientextraplanar material originating from the realm of yourwarlock patron. While you are wearing it, you gain thefollowing benefits:<ul> <li>You can use the amulet as a spellcasting focus foryour warlock spells.</li><li>You can try to cast a cantrip that you don’t know. Thecantrip must be on the warlock spell list, and youmust make a DC 10 Intelligence (Arcana) check. If thecheck succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spellis wasted. In either case, you can’t use this propertyagain until you finish a long rest.</li></ul>",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Амулет тёмного осколка",
   "nic": "Амулет темного осколка",
   "attunement": "(требуется настройка колдуном)",
   "text": "Этот амулет выполнен из цельного осколка упругого экстрапланарного материала, происходящего из царства покровителя вашего колдуна. Пока он надет навас, вы получаете следующие преимущества: <ul> <li>Вы можете использовать этот амулет как магическую фокусировку для своих заклинаний колдуна. </li><li>Вы можете попробовать сотворить заговор, которого не знаете. Этот заговор должен быть в списке заклинаний колдуна, и вы должны пройти проверку Интеллекта (Магия) Сл 10. При успехе вытворите заклинание. При провале и заклинание, идействие, которое было предназначено для сотворения заклинания, теряется. В любом случае вы неможете снова использовать это свойство, пока незавершите продолжительный отдых.</li></ul>"
  }
 },
 {
  "en": {
   "name": "DREAD HELM",
	 "img": "DREAD_HELM.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This fearsome steel helm makes your eyes glow redwhile you wear it.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Шлем ужаса",
   "text": "Этот жуткий стальной шлем заставляет ваши глаза светиться красным, когда вы его носите."
  }
 },
 {
  "en": {
   "name": "EAR HORN OF HEARING",
	 "img": "EAR_HORN_OF_HEARING.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "While held up to your ear, this horn suppresses the ef—fects of the deafened condition on you, allowing you tohear normally.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Слуховой рог",
   "text": "Будучи поднесённым к уху, этот рог подавляет на вас эффекты состояния оглохший и позволяет слышать нормально."
  }
 },
 {
  "en": {
   "name": "ENDURING SPELLBOOK",
	 "img": "ENDURING_SPELLBOOK.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This spellbook, along with anything written on itspages, can’t be damaged by fire or immersion in water.<br>In addition, the spellbook doesn't deteriorate with age.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Износостойкая книга заклинаний",
   "text": "Эта книга заклинаний, включая все в ней записанное, не может быть повреждена огнём или погружением в воду. Кроме того, она не портится со временем."
  }
 },
 {
  "en": {
   "name": "ERSATZ EYE",
	 "img": "ERSATZ_EYE.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "attunement": "(requires attunement)",
   "text": "This artificial eye replaces a real one that was lost orremoved. While the ersata eye is embedded in your eyesocket, it can’t be removed by anyone other than you,and you can see through the tiny orb as though it were anormal eye.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Запасной глаз",
   "attunement": "(требует настройки)",
   "text": "Этот искусственный глаз заменяет настоящий, который был потерян или удалён. Когда запасной глаз вставлен в глазницу, его не может удалить никто, кроме вас, и вы можете видеть сквозь этот крошечный шарик, как будто это обычный глаз."
  }
 },
 {
  "en": {
   "name": "HAT OF VERMIN",
	 "img": "HAT_OF_VERMIN.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This hat has 3 charges. While holding the hat, you canuse an action to expend 1 of its charges and speak acommand word that summons your choice ofa hat, afrog, or a rat (see the Player’s Handbook or the Monster<br>Manual for statistics). The summoned creature magicallyappears in the hat and tries to get away from youas quickly as possible. The creature is neither friendlynor hostile, and it isn’t under your control. It behaves asan ordinary creature of its kind and disappears after 1hour or when it drops to 0 hit points. The hat regains allexpended charges daily at dawn.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Шляпа вредителей",
   "text": "У этой шляпы три заряда. Держа шляпу, вы можете действием потратить один заряд и произнести командное слово, которое по вашему выбору вызовет  <a href='https://tentaculus.ru/monsters/index.html#cr=0&q=bat'> летучую мышь<a>, <a href='https://tentaculus.ru/monsters/index.html#cr=0&q=frog'>лягушку</a>  или <a href='https://tentaculus.ru/monsters/index.html#cr=0&q=rat'>крысу</a>.<br>Вызванное существо появляется в шляпе и пытается уйти от вас с максимально возможной скоростью.<br>Существо ни дружественно, ни враждебно, и не находится под вашим контролем. Оно ведёт себя как обычное существо своего вида и исчезает через 1 час или, когда его здоровье падает до 0. Шляпа восстанавливает израсходованные заряды ежедневно на рассвете."
  }
 },
 {
  "en": {
   "name": "HAT OF WIZARDRY",
	 "img": "HAT_OF_WIZARDRY.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "attunement": "(requires attunemenr by a Wizard)",
   "text": "This antiquated, cone—shaped hat is adorned with goldcrescent moons and stars. While you are wearing it, yougain the following benefits:<ul><li>You can use the hat as a spellcasting focus for yourwizard spells.</li><li> You can try to cast a cantrip that you don’t know. Thecantrip must be on the wizard spell list, and you mustmake a DC 10 Intelligence (Arcana) check. If thecheck succeeds, you cast the spell. If the check fails,so does the spell, and the action used to cast the spellis wasted. In either case, you can’t use this propertyagain until you finish a long rest.</li></ul>",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Шляпа волшебства",
   "attunement": "(необходима настройка волшебником)",
   "text": "Эта старинная конусообразная шляпа украшена золотыми полумесяцами и звёздами. Пока она надетана вас, вы получаете следующие преимущества:<ul><li>Вы можете использовать эту шляпу как заклинательную фокусировку для своих заклинаний волшебника.</li><li>Вы можете попытаться сотворить заговор, которого не знаете. Заговор должен присутствоватьв списке заклинаний волшебника, и вы должны пройти проверку Интеллекта (Магия) Сл 10. При успехе вы творите заклинание. При провале и заклинание, и действие, которое было предназначено для сотворения заклинания, теряется. В любом случае вы не можете снова использовать этосвойство, пока не завершите продолжительный отдых.</li></ul>"
  }
 },
 {
  "en": {
   "name": "HEWARD’S HANDY SPICE POUCH",
	 "img": "HEWARDS_HANDY_SPICE_POUCH.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This belt pouch appears empty and has 10 charges.<br>While holding the pouch, you can use an action to expendl of its charges, speak the name of any nonmagicalfood seasoning (such as salt, pepper, saffron, orcilantro), and remove a pinch of the desired seasoningfrom the pouch. A pinch is enough to season a singlemeal. The pouch regains 1d6 + 4 expended chargesdaily at dawn.",
	 "source": "XGTE"
  },
	 "ru": {
   "name": "Удобный мешочек специй Хеварда",
   "text": "Этот мешочек пуст, и у него 10 зарядов. Держа егов руке, вы можете действием потратить один заряд, назвать любую немагическую пищевую приправу (например, соль, перец, шафран или кинза), и вытащить щепотку приправы из мешочка. Щепотки достаточно, чтобы приправить одну порцию еды. Мешок ежедневно восстанавливает 1к6+4 потраченных зарядов на рассвете."
  }
 },
 {
  "en": {
   "name": "HORN OF SILENT ALARM",
	 "img": "HORN_OF_SILENT_ALARM.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This horn has 4 charges. When you use an action toblow it, one creature of your choice can hear the hornsblare, provided the creature is within 600 feet of thehorn and not deafened. No other creature hears soundcoming from the horn. The horn regains ld4 expendedcharges daily at dawn.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Рог беззвучного сигнала",
   "text": "У этого рога 4 заряда. Когда вы используете действие, чтобы подуть в него, одно существо по вашему выбору может слышать трубный звук рога, при условии, что оно находится не более, чем в 600 футах от рога, и не оглохшее. Никакие другие существа не слышатзвук рога. Рог восстанавливает 1к4 потраченных зарядов ежедневно на рассвете."
  }
 },
 {
  "en": {
   "name": "INSTRUMENT OF ILLUSIONS",
	 "img": "INSTRUMENT_OF_ILLUSIONS.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "attunement": "(requires attunement)",
   "text": "While you are playing this musical instrument, youcan create harmless, illusory visual effects within a5—foot—radius sphere centered on the instrument. Ifyou are a bard, the radius increases to 15 feet. Sample<br>Visual effects include luminous musical notes, a spec—tral dancer, butterflies, and gently falling snow. Themagical effects have neither substance nor sound, andthey are obviously illusory. The effects end when youstop playing.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Инструмент иллюзий",
   "attunement": "(требует настройки)",
   "text": "Когда вы играете на этом инструменте, вы можете создавать безвредные иллюзорные визуальные эффекты в пределах сферы радиусом 5 футов с центром на инструменте. Если вы бард, радиус возрастает до 15 футов. Примеры визуальных эффектов – светящиесяноты в воздухе, призрачная танцовщица, бабочки или медленно падающие хлопья снега. Магические эффекты неосязаемы и не издают звуков, кроме того, их иллюзорность очевидна. Эффекты заканчиваются, когда вы перестаёте играть."
  }
 },
 {
  "en": {
   "name": "INSTRUMENT OF SGRIBING",
	 "img": "INSTRUMENT_OF_SGRIBING.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "attunement": "(requires attunement)",
   "text": "This musical instrument has 3 charges. While you areplaying it, you can use an action to expend 1 chargefrom the instrument and write a magical message ona nonmagical object or surface that you can see within30 feet of you. The message can be up to six words longand is written in a language you know. If you are a bard,you can scribe an additional seven words and chooseto make the message glow faintly, allowing it to be seenin nonmagical darkness. Casting dispel magic on themessage erases it. Otherwise, the message fades awayafter 24 hours.<br>The instrument regains all expended chargesdaily at dawn.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Инструмент надписей",
   "attunement": "(требует настройки)",
   "text": "У этого инструмента 3 заряда. Играя на нём, вы можете действием потратить один заряд инструмента, чтобы написать магическое послание на немагическом предмете или поверхности, которые вы можете видеть в пределах 30 футов от вас.<br>Послание не может превышать 6 слов и должно быть написано на известном вам языке. Если вы бард, то можете увеличить длину сообщения ещё на 7 слов, и по вашему выбору слова могут слабо светиться, что позволит прочесть их в немагической темноте.<br>Применение заклинания <a href='https://tentaculus.ru/spells/index.html#q=dispel_magic'>рассеивание магии</a> на слова стирает их. В противном случае сообщение пропадает через 24 часа.<br>Инструмент восстанавливает все потраченные заряды ежедневно на рассвете."
  }
 },
 {
  "en": {
   "name": "LOCK OF TRICKERY",
	 "img": "LOCK_OF_TRICKERY.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This lock appears to be an ordinary lock (of the typedescribed in chapter 5 of the Player’s Handbook) andcomes with a single key. The tumblers in this lock magi.-cally adjust to thwart burglars. Dexterity checks made topick the lock have disadvantage.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Плутовской замок",
   "text": "Этот замок выглядит как обычный замок (описанныйв главе 5 Книги игрока), и к нему прилагается один ключ. Внутренний механизм замка магическим образом двигается, чтобы предотвратить попытки взлома. Проверки Ловкости с целью вскрыть этот замок совершаются с помехой."
  }
 },
 {
  "en": {
   "name": "MOON—TOUCHED SWORD",
	 "img": "MOON_TOUCHED_SWORD.jpg",
   "type": "Weapon",
   "typeAdditions": "(any sword)",
   "rarity": 1,
   "text": "In darkness, the unsheathed blade of this sword. shedsmoonlight, creating bright light in a 15-foot radius anddim light for an additional 15 feet.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Осенённый луной меч",
   "text": "В темноте обнажённое лезвие этого меча излучает лунный свет, создавая яркий свет в радиусе 15 футови тусклый свет в радиусе ещё 15 футов."
  }
 },
 {
  "en": {
   "name": "MYSTERY KEY",
	 "img": "MYSTERY_KEY.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "A question mark is worked into the head of this key. Thekey has a 5 percent chance of unlocking any lock intowhich it’s inserted. Once it unlocks something, the keydisappears.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Таинственный ключ",
   "text": "Головка этого ключа выполнена в виде вопросительного знака. Существует шанс 5%, что ключ откроет любой замок, в который был вставлен. Однажды открыв что либо, ключ пропадает."
  }
 },
 {
  "en": {
   "name": "ORB OF DIRECTION",
	 "img": "ORB_OF_DIRECTION.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "While holding this orb, you can use an action to determinewhich way is north. This property functions onlyon the Material Plane.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Сфера направления",
   "text": "Держа эту сферу, вы можете действием определить направление на север. Это свойство работает только на материальном плане."
  }
 },
 {
  "en": {
   "name": "ORB OF TIME",
	 "img": "ORB_OF_TIME.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "While holding this orb, you can use an action to determinewhether it is morning, afternoon, evening, ornighttime outside. This property functions only on the<br>Material Plane.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Сфера времени",
   "text": "Держа эту сферу, вы можете использовать действиемопределить время суток на улице (утро, день, вечерили ночь). Это свойство работает только на материальном плане."
  }
 },
 {
  "en": {
   "name": "PERFUME OF BEWITCHING",
	 "img": "PERFUME_OF_BEWITCHING.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This tiny vial contains magic perfume, enough for oneuse. You can use an action to apply the perfume to yourself,and its effect lasts 1 hour. For the duration, youhave advantage on all Charisma checks directed at humanoidsof challenge rating 1 or lower. Those subjectedto the perfume’s effect are not aware that they’ve beeninfluenced by magic.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Духи очарования",
   "nic": "Парфюм очарования",
   "text": "Этот крошечный пузырёк содержит магический парфюм в количестве, достаточном для одного использования. Действием вы можете нанести парфюм насебя, и его эффект будет длиться один час. В течение этого времени вы совершаете все проверки Харизмы, направленные на гуманоидов с рейтингом опасности 1 и ниже, с преимуществом. Те, на кого воздействует эффект парфюма, не понимают, что подверглись воздействию магии."
  }
 },
 {
  "en": {
   "name": "PIPE OF SMOKE MONSTERS",
	 "img": "PIPE_OF_SMOKE_MONSTERS.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "While smoking this pipe, you can use an action to exhalea puff of smoke that takes the form of a single crea—ture, such as a dragon, a flumph, or a froghemoth. Theform must be small enough to fit in a 1-foot cube andloses its shape after a few seconds, becoming an ordinarypuff of smoke.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Трубка дымных монстров",
   "text": "Куря эту трубку, вы можете действием выдохнуть облако дыма, которое принимает форму одного существа, например, дракона, фламфа или лягемота. Эта форма должна быть достаточно маленькой, чтобы уместиться в 1-футовый куб, и теряет очертания спустя несколько секунд, превращаясь в обычное облако дыма."
  }
 },
 {
  "en": {
   "name": "POLE OF ANGLING",
	 "img": "POLE_OF_ANGLING.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "While holding this 10—foot pole, you can speak a commandword and transform it into a fishing pole with ahook, a line, and a reel. Speaking the command wordagain changes the fishing pole back into a normal10—foot pole.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Шест рыболовства",
   "text": "Держа этот 10-футовый шест, вы можете произнести командное слово и трансформировать его в рыболовную удочку с крючком, леской и поплавком.<br>Повторное произнесение слова снова превращает егов 10-футовый шест."
  }
 },
 {
  "en": {
   "name": "POLE OF COLLAPSING",
	 "img": "POLE_OF_COLLAPSING.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "While holding this 10—foot pole, you can use an actionto speak a command word and cause it to collapse intoa l-foot-long rod, for ease of storage. The poles weightdoesn’t change. You can use an action to speak a differentcommand word and cause the rod to revert to apole; however, the rod will elongate only as far as thesurrounding space allows.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Складной шест",
   "text": "Держа этот 10-футовый шест, вы можете действием произнести командное слово и сложить шест в 1-футовый жезл для удобства хранения. Вес шеста не меняется. Вы можете действием произнести другое командное слово и заставить жезл снова превратиться в шест, однако шест удлинится только настолько, насколько позволяет окружающее пространство."
  }
 },
 {
  "en": {
   "name": "POT OF AWAKENING",
	 "img": "POT_OF_AWAKENING.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "lf you plant an ordinary shrub in this lO-pound clay potand let it grow for 30 days, the shrub magically transformsinto an awakened shrub (see the Monster Manualfor statistics) at the end of that time. When the shrubawakens, its roots break the pot, destroying it.The awakened shrub is friendly toward you. Absentcommands from you, it does nothing.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Горшок пробуждения",
   "text": "Если вы посадите обычный куст в этот 10-фунтовый глиняный горшок и будете выращивать его в течение 30 дней, к концу этого времени куст магическим образом превратится в <a href='https://tentaculus.ru/monsters/index.html#q=Awakened_Shrub'>Пробуждённый куст</a>. При пробуждении кустломает корнями горшок, уничтожая его.<br>Пробуждённый куст дружественен к вам. Куст ничего не делает в отсутствие команд от вас."
  }
 },
 {
  "en": {
   "name": "ROPE OF MENDING",
	 "img": "ROPE_OF_MENDING.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "You can cut this 50-foot coil of hempen rope into anynumber of smaller pieces, and then use an action tospeak a command word and cause the pieces to knitback together. The pieces must be in contact with eachother and not otherwise in use. A rope ofmending is forevershortened if a section of it is lost or destroyed.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Срастающаяся верёвка",
   "text": "Вы можете разрезать этот 50-футовый моток верёвки на любое количество частей, а затем действием сказать командное слово и заставить их соединиться обратно. Части должны соприкасаться друг с другоми не должны использоваться в данный момент. Срастающаяся верёвка навсегда укорачивается если её часть потеряна или уничтожена."
  }
 },
 {
  "en": {
   "name": "RUBY OF THE WAR MAGE",
	 "img": "RUBY_OF_THE_WAR_MAGE.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "attunement": "(requires attunement by a speilcaster)",
   "text": "Etched with eldritch runes, this l—inch-diameter rubyallows you to use a simple or martial weapon as a spell—casting focus for your spells. For this property to work,you must attach the ruby to the weapon by pressing theruby against it for at least 10 minutes. Thereafter, theruby can’t be removed unless you detach it as an actionor the weapon is destroyed. Not even an antimagic fieidcauses it to fall off. The ruby does fall off the weapon ifyour attunement to the ruby ends.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Рубин боевого мага",
   "attunement": "(требуется настройка заклинателем)",
   "text": "Испещрённый магическими рунами, этот рубин диаметром 1 дюйм позволяет использовать простое или воинское оружие в качестве магической фокусировки. Чтобы это сделать, вы должны прикрепить рубин к оружию, прижимая его к оружию не менее 10 минут. После этого удалить рубин можно будет только действием или уничтожив оружие. Даже преград амагии не заставит его отсоединиться. Рубин падает с оружия, если ваша настройка на него оканчивается."
  }
 },
 {
  "en": {
   "name": "SHIELD OF EXPRESSION",
	 "img": "SHIELD_OF_EXPRESSION.jpg",
   "type": "Armor",
   "typeAdditions": "(shie1d)",
   "rarity": 1,
   "text": "The front of this shield is shaped in the likeness of aface. While bearing the shield, you can use a bonus ac—tion to alter the faces expression.",
	 "source": "XGTE"
  },
	"ru": {
		"name": "Щит экспрессии",
		"text": "Передняя сторона щита имеет форму лица. Когда вы носите щит, вы можете бонусным действием поменять выражение лица."
	}
 },
 {
  "en": {
   "name": "SMOLDERING ARMOR",
	 "img": "PERFUME_OF_BEWITCHING.jpg",
	 "img": "SMOLDERING_ARMOR.jpg",
   "type": "Armor",
   "typeAdditions": "(any)",
   "rarity": 1,
   "text": "Wisps of harmless, odorless smoke rise from this armorwhile it is worn.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Дымящий доспех",
   "text": "Когда этот доспех надет, он источает клубы не имеющего запаха безвредного дыма."
  }
 },
 {
  "en": {
   "name": "STAFF OF ADORNMENT",
	 "img": "STAFF_OF_ADORNMENT.jpg",
   "type": "Staff",
   "rarity": 1,
   "text": "If you place an object weighing no more than 1 pound(such as a shard of crystal, an egg, or a stone) abovethe tip of the staff while holding it, the object floats aninch from the staff’s tip and remains there until it isremoved or until the staff is no longer in your possession.<br>The staff can have up to three such objects floatingover its tip at any given time. While holding the staff,you can make one or more of the objects slowly spin orturn in place.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Посох украшения",
   "text": "Если вы размещаете объект, весящий не более 1 фунта (такой как осколок кристалла, яйцо или камень)выше навершия посоха, пока держите его, объект поднимается на дюйм от навершия посоха и остаётсятам до тех пор, пока не будет перемещён или пока посох находится у вас. Посох может одновременно удерживать до трёх таких объектов плавающими надего навершием. Пока вы держите посох, вы можете заставить один из объектов медленно вращаться или изменить своё местоположение."
  }
 },
 {
  "en": {
   "name": "STAFF OF BIRDCALLS",
	 "img": "STAFF_OF_BIRDCALLS.jpg",
   "type": "Staff",
   "rarity": 1,
   "text": "This wooden staff is decorated with bird carvings. It has10 charges. While holding it, you can use an action toexpend 1 charge from the staff and cause it to create oneof the following sounds out to a range of 60 feet: a finch’schirp, a raven's caw, a duck’s quack, a chicken’s cluck, agoose‘s book, a loon’s call, a turkey’s gobble, a seagull’scry, an owl’s hoot, or an eagle’s shriek.<br>The staff regains 1d6 + 4 expended charges daily atdawn. If you expend the last charge, roll a d20. On a 1,the staff explodes in a harmless cloud of bird feathersand is lost forever.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Посох птичьего щебета",
   "text": "Этот деревянный посох украшен резьбой в видептиц. У него 10 зарядов. Держа посох, вы можете действием потратить один заряд и создать на расстоянии до 60 футов один из следующих звуков: чириканье вьюрка, карканье ворона, кряканье утки, кудахтанье курицы, гогот гуся, клич гагары, кулдыканье индюка, плач чайки, уханье совы или крик орла.<br>Посох ежедневно восстанавливает 1к6 +4 зарядана рассвете. Если вы потратили последний заряд,бросьте к20. Если выпадет 1, посох взрывается безвредным облаком птичьих перьев и пропадает навсегда."
  }
 },
 {
  "en": {
   "name": "STAFF OF FLOWERS",
	 "img": "STAFF_OF_FLOWERS.jpg",
   "type": "Sraflf commo",
   "rarity": 1,
   "text": "This wooden staff has 10 charges. While holding it, youcan use an action to expend 1 charge from the staff andcause a flower to sprout from a patch of earth or soilwithin 5 feet of you, or from the staff itself. Unless youchoose a specific kind of flower, the staff creates a mildscenteddaisy. The flower is harmless and nonmagical,and it grows or withers as a normal flower would.<br>The staff regains 1d6 + 4 expended charges daily atdawn. Ifyou expend the last charge, roll a d20. On a 1,the staff turns into flower petals and is lost forever.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Посох цветов",
   "text": "У этого деревянного посоха 10 зарядов. Держа посох, вы можете действием потратить один заряд. Пробуждённый силой посоха цветок вырастет на почве или грязи в пределах 5 футов от вас или на самом посохе. Если вы не выбрали тип цветка, посох создаёт маргаритку с лёгким запахом. Цветок безвредный и немагический. Он растёт и увядает как обычныйцветок.<br>Посох ежедневно восстанавливает 1к6 +4 зарядана рассвете. Если вы потратили последний заряд, бросьте к20. Если выпадет 1, посох превращается в лепестки цветов и пропадает навсегда."
  }
 },
 {
  "en": {
   "name": "TALKING DOLL",
	 "img": "TALKING_DOLL.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "attunement": "(requires attunement)",
   "text": "While this stuffed doll is within 5 feet of you, you canspend a short rest telling it to say up to six phrases, noneof which can be more than six words long, and set a con—dition under which the doll speaks each phrase. You canalso replace old phrases with new ones. Whatever thecondition, it must occur within 5 feet of the doll to makeit speak. For example, whenever someone picks up thedoll, it might say, “I want a piece of candy.” The doll’sphrases are lost when your attunement to the doll ends.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Говорящая кукла",
   "attunement": "(требуется настройка)",
   "text": "Пока кукла находится в пределах 5 футов от вас, вы можете во время короткого отдыха сказать ей до шести фраз, ни одна из которых не может быть длиннее шести слов, и установить условия, при которых кукла будет говорить каждую фразу. Каким бы ни было условие, оно должно совершиться в пределах 5 футов от куклы, чтобы она заговорила. Например, когда кто-то поднимет куклу, она может сказать: «Я хочу конфетку». Фразы куклы теряются, когда ваша настройка на неё заканчивается."
  }
 },
 {
  "en": {
   "name": "TANKARD OF SOBRIETY",
	 "img": "TANKARD_OF_SOBRIETY.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "This tankard has a stern face sculpted into one side. Youcan drink ale, wine, or any other nonmagical alcoholicbeverage poured into it without becoming inebriated.<br>The tankard has no effect on magical liquids or harmfulsubstances such as poison.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Кружка трезвости",
   "text": "На одной стороне этой кружки изображено суровое лицо. Вы можете пить из этой кружки эль, вино или любой другой немагический алкоголь и не пьянеть.<br>Кружка не оказывает никакого эффекта на магический алкоголь и вредные вещества, такие как яд."
  }
 },
 {
  "en": {
   "name": "UNBREAKABLE ARROW",
	 "img": "UNBREAKABLE_ARROW.jpg",
   "type": "Weapon",
   "typeAdditions": "(arrow)",
   "rarity": 1,
   "text": "This arrow can’t be broken, except when it is within anantjmag'ic‘ field.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Несломимая стрела",
   "text": "Эта стрела не может быть сломана, кроме как в области антимагии."
  }
 },
 {
  "en": {
   "name": "VETERAN’S CANE",
	 "img": "VETERANS_CANE.jpg",
   "type": "Wondrous item",
   "rarity": 1,
   "text": "When you grasp this walking cane and use a bonus actionto speak the command word, it transforms into anordinary longsword and ceases to be magical.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Трость ветерана",
   "text": "Когда вы перехватываете эту трость и бонусным действием произносите командное слово, трость превращается в обычный длинный меч и перестаёт быть магической."
  }
 },
 {
  "en": {
   "name": "WALLOPING AMMUNITION",
	 "img": "WALLOPING_AMMUNITION.jpg",
   "type": "Weapon",
   "typeAdditions": "(any ammunition)",
   "rarity": 1,
   "text": "This ammunition packs a wallop. A creature hit by theammunition must succeed on a DC 10 Strength savingthrow or be knocked prone.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Опрокидывающий боеприпас",
   "text": "Существо, в которое попал такой боеприпас, должно преуспеть в спасброске Силы со Сл 10, иначе будет сбито с ног."
  }
 },
 {
  "en": {
   "name": "WAND OF CONDUCTING",
	 "img": "WAND_OF_CONDUCTING.jpg",
   "type": "Wand",
   "rarity": 1,
   "text": "This wand has 3 charges. While holding it, you can usean action to expend 1 of its charges and create orches—tral music by waving it around. The music can be heardout to a range of 60 feet and ends when you stop wavingthe wand.<br>The wand regains all expended charges daily at dawn.<br>If you expend the wand’s last charge, roll a d20. On a1, a sad tuba sound plays as the wand crumbles to dustand is destroyed.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Дирижёрская палочка",
   "text": "У этой волшебной палочки 3 заряда. Если вы её держите, вы можете действием потратить 1 заряд,чтобы создать оркестровую музыку, размахивая ею. Музыку слышно на расстоянии 60 футов, и она заканчивается, когда вы перестанете размахивать палочкой.<br>Палочка ежедневно восстанавливает все заряды на рассвете. Если вы потратили последний заряд,бросьте к20. Если выпадет 1, играет грустный тромбон, а палочка рассыпается в пыль и уничтожается."
  }	
 },
 {
  "en": {
   "name": "WAND OF PYROTECHNICS",
	 "img": "WAND_OF_PYROTECHNICS.jpg",
   "type": "Wand",
   "rarity": 1,
   "text": "This wand has 7 charges. While holding it, you can usean action to expend 1 of its charges and create a harmlessburst of multicolored light at a point you can seeup to 60 feet away. The burst of light is accompaniedby a crackling noise that can be heard up to 300 feetaway. The light is as bright as a torch flame but lastsonly a second.<br>The wand regains 1d6 + 1 expended charges daily atdawn. Ifyou expend the wand’s last charge, roll a d20.<br>On a 1, the wand erupts in a harmless pyrotechnic displayand is destroyed.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Палочка пиротехники",
   "text": "У этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 заряд, чтобы создать безвредную разноцветную вспышку света в точке в пределах 60 футов. Эта вспышка сопровождается потрескивающим шумом, слышимымна расстоянии 300 футов. Свет такой же яркий, какпламя факела, но длится всего секунду.<br>Палочка ежедневно восстанавливает все 1к6+1 заряд на рассвете. Если вы потратили последний заряд, бросьте к20. Если выпадет 1, палочка взрывается безвредным пиротехническим всполохом и уничтожается."
  }
 },
 {
  "en": {
   "name": "WAND OF SCOWLS",
	 "img": "WAND_OF_SCOWLS.jpg",
   "type": "Wand",
   "rarity": 1,
   "text": "This wand has 3 charges. While holding it, you can usean action to expend 1 of its charges and target a human—oid you can see within 30 feet of you. The target mustsucceed on a DC 10 Charisma saving throw or be forcedto scowl for 1 minute.<br>The wand regains all expended charges daily at dawn.<br>If you expend the wand’s last charge, roll a d20. On a 1,the wand transforms into a wand of smiles.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Палочка хмурых взглядов",
   "text": "У этой волшебной палочки 3 заряда. Если вы её держите, вы можете действием потратить 1 заряд и выбрать в качестве цели гуманоида, которого видите впределах 30 футов. Цель должна преуспеть в спасброске Харизмы со Сл 10, иначе она будет хмуриться 1 минуту.<br>Палочка восстанавливает все заряды на рассвете.<br>Если вы потратили последний заряд, бросьте к20.<br>Если выпадет 1, палочка превращается в Палочку улыбок."
  }
 },
 {
  "en": {
   "name": "WAND OF SMILES",
	 "img": "WAND_OF_SMILES.jpg",
   "type": "Wand",
   "rarity": 1,
   "text": "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to smile for 1 minute. <br>The wand regains all expended charges daily at dawn. If you expend the wand’s last charge, roll a d20. On a 1, the wand transforms into a wand ofscowls.",
	 "source": "XGTE"
  },
	"ru": {
   "name": "Палочка улыбок",
   "text": "У этой волшебной палочки 3 заряда. Если вы её держите, вы можете действием потратить 1 заряд и выбрать в качестве цели гуманоида, которого видите впределах 30 футов. Цель должна преуспеть в спасброске Харизмы со Сл 10, иначе она будет улыбаться 1минуту.<br>Палочка восстанавливает все заряды на рассвете.<br>Если вы потратили последний заряд, бросьте к20.<br>Если выпадет 1, палочка превращается в Палочку хмурых взглядов."
  }
 },
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 {
	"en": {
	  "name": "AXE OF THE DWARVISH LORDS",
	  "type": "Weapon (battleaxe)",
	  "attunement": "(requires attunement)",
	  "rarity": 6,
	  "text": "Seeing the peril his people faced, a young dwarf a came to believe that his people needed something to unite them. Thus, he set out to forge a weapon that would be such a symbol.<br> Venturing deep under the mountains, deeper than any dwarf had ever delved, the young prince came to the blazing heart of a great volcano. With the aid of Moradin, the dwarven god of creation, he first crafted four great tools: the Brutal Pick, the Earthheart Forge, the Anvil of Songs, and the Shaping Hammer. With them, he forged the Axe of the Dwarvish Lords.<br> Armed with the artifact, the prince returned to the dwarf clans and brought peace. His axe ended grudges and answered slights. The clans became allies, and they threw back their enemies and enjoyed an era of prosperity. This young dwarf is remembered as the First King. When he became old, he passed the weapon, which had become his badge of office, to his heir. The rightful inheritors passed the axe on for many generations.<br> Later, in a dark era marked by treachery and wickedness, the axe was lost in a bloody civil war fomented by greed for its power and the status it bestowed. Centuries later, the dwarves still search for the axe, and many adventurers have made careers of chasing after rumors and plundering old vaults to find it. <br> <b>Magic Weapon.</b> The Axe of the Dwarvish Lords is a magic weapon that grants a +3 bonus to attack and damage rolls made with it. The axe also functions as a <a href='https://tentaculus.ru/magic-items/index.html#q=belt_of_dwarvenkind&view=text'>belt of dwarvenkind</a>, a <a href='https://tentaculus.ru/magic-items/index.html#q=dwarven_thrower&view=text'>dwarven thrower</a>, and a <a href='https://tentaculus.ru/magic-items/index.html#q=sword_of_sharpness&view=text'>sword of sharpness</a>.<br> <b>Random Properties.</b> The axe has the following randomly determined properties: <ul> <li> 2 minor beneficial properties </li> <li> 1 major beneficial property </li> <li> 2 minor detrimental properties </li> </ul> <b>Blessings of Moradin.</b> If you are a dwarf attuned to the axe, you gain the following benefits: <ul> <li> You have immunity to poison damage. </li> <li> The range of your darkvision increases by 60 feet. </li> <li> You gain proficiency with artisan's tools related to blacksmithing, brewing, and stonemasonry. </li> </ul> <b>Conjure Earth Elemental.</b> If you are holding the axe, you can use your action to cast the conjure elemental spell from it, summoning an earth elemental. You can't use this property again until the next dawn. <br> <b>Travel the Depths.</b> You can use an action to touch the axe to a fixed piece of dwarven stonework and cast the teleport spell from the axe. If your intended destination is underground, there is no chance of a mishap or arriving somewhere unexpected. You can't use this property again until 3 days have passed. <br> <b>Curse.</b> The axe bears a curse that affects any nondwarf that becomes attuned to it. Even if the attunement ends, the curse remains. With each passing day, the creature's physical appearance and stature become more dwarflike. After seven days, the creature looks like a typical dwarf, but the creature neither loses its racial traits nor gains the racial traits of a dwarf. The physical changes wrought by the axe aren't considered magical in nature (and therefore can't be dispelled), but they can be undone by any effect that removes a curse, such as a greater restoration or remove curse spell. <br> <b>Destroying the Axe.</b> The only way to destroy the axe is to melt it down in the Earthheart Forge, where it was created. It must remain in the burning forge for fifty years before it finally succumbs to the fire and is consumed. ",
	  "source": "DMG",
	  "img": "AXE_OF_THE_DWARVISH_LORDS.jpg"
	},
	"ru": {
	  "name": "Топор Владык Дварфов",
	  "attunement": "(требует настройки)",
	  "text": "Увидев проблемы, с которыми столкнулся его народ, молодой принц дварфов понял, что его народу нужно что-то, что его объединило бы. Так он выковал оружие, которое стало бы таким символом.<br> Уйдя глубоко в горы, глубже, чем когда-либо копали дварфы, он дошёл до пылающего сердца огромного вулкана. С помощью Морадина, дварфского бога творения, он создал четыре инструмента: Жестокую кирку, Горн сердца земли, Наковальню песен и Формирующий молот. С их помощью он выковал Топор Владык Дварфов. <br> Вооружившись этим артефактом, принц вернулся к кланам дварфов и принёс им мир. Его топор покончил с взаимными обидами и презрением. Кланы стали союзниками, отбросили врагов, и настала эра благополучия. Этого дварфа помнят как Первого Короля. Когда он постарел, он передал это оружие, ставшее символом власти, своему наследнику. Его преемники передавали топор много поколений подряд. <br> Позже, в тёмную эру, ознаменовавшуюся предательствами и пороками, топор был утрачен в кровавой гражданской войне, которая как раз возникла из-за стремления заполучить топор вместе с силой и статусом, который он даёт. Прошло много веков, и дварфы всё ещё ищут топор, и многие искатели приключений гонялись за слухами и разоряли старые склепы в его поисках. <br><b>Магическое оружие.</b> Топор Владык Дварфов это магическое оружие, дающее бонус +3 к броскам атаки и урона им. Этот топор также функционирует как <a href='https://tentaculus.ru/magic-items/index.html#q=belt_of_dwarvenkind&view=text'>пояс дварфов</a>, <a href='https://tentaculus.ru/magic-items/index.html#q=dwarven_thrower&view=text'>дварфский метатель</a> и <a href='https://tentaculus.ru/magic-items/index.html#q=sword_of_sharpness&view=text'>меч остроты</a>.<br> <b>Случайные свойства.</b> Этот топор обладает несколькими свойствами, определяемыми случайным образом: <ul> <li> 2 малых положительных свойства </li> <li> 1 основное положительное свойство </li> <li> 2 малых отрицательных свойства </li> </ul> <b>Благословение Морадина.</b> Если вы — дварф, настроенный на этот топор, вы получаете следующие преимущества: <ul> <li>Вы получаете иммунитет к урону ядом. </li> <li>Дистанция вашего тёмного зрения увеличивается на 60 футов. </li> <li>Вы получаете владение инструментами ремесленника, связанными с кузнечным делом, пивоварением и каменной кладкой </li> </ul> <b>Призыв земляного элементаля.</b> Если вы держите этот топор, вы можете действием наложить им заклинание <a href='https://tentaculus.ru/spells/index.html#q=conjure_elemental'>призыв элементаля</a>, призывая земляного элементаля. Вы не сможете повторно использовать это свойство до следующего рассвета. <br><b>Путешествие в глубину.</b> Вы можете действием коснуться топором неподвижной части дварфской каменной кладки и наложить топором заклинание <a href='https://tentaculus.ru/spells/index.html#q=teleport&ls=7'>телепортация</a>. Если место назначения находится под землёй, шансы промахнуться мимо или прибыть в другое место равны нулю. Вы не можете использовать это свойство ещё раз, пока не пройдёт 3 дня <br><b>Проклятье.</b> Этот топор хранит проклятье, падающее на не-дварфов, настроенных на него. Даже если настройка окончится, проклятье останется. С каждым днём его внешность становится всё больше и больше похожей на облик дварфа. Через семь дней существо выглядит как обычный дварф, хотя и не теряет своих расовых особенностей и не приобретает расовых особенностей дварфа. Эти физические изменения не считаются магическими (и потому их нельзя рассеять), но их можно отменить эффектом, снимающим проклятья, например, заклинаниями <a href='https://tentaculus.ru/spells/index.html#q=greater_restoration'>высшее восстановление</a> и <a href='https://tentaculus.ru/spells/index.html#q=remove_curse'>снятие проклятья</a>.<br> <b>Уничтожение Топора.</b> Топор можно уничтожить только расплавив его в Горне сердца земли, в котором он и был создан. Он должен оставаться в пылающем горне пятьдесят лет, после чего, наконец, расплавится и перестанет существовать." 
	}
},
{
	"en": {
	  "name": "BOOK OF EXALTED DEEDS",
	  "type": "Wondrous item",
	  "attunement": "(requires attunement by a creature of good alignment)",
	  "rarity": 6,
	  "text": "The definitive treatise on all that is good in the multiverse, the fabled Book of Exalted Deeds figures prominently in many religions. Rather than being a scripture devoted to a particular faith, the book's various authors filled the pages with their own vision of true virtue, providing guidance for defeating evil.<br> The Book of Exalted Deeds rarely lingers in one place. As soon as the book is read, it vanishes to some other corner of the multiverse where its moral guidance can bring light to a darkened world. Although attempts have been made to copy the work, efforts to do so fail to capture its magical nature or translate the benefits it offers to those pure of heart and firm of purpose.<br> A heavy clasp, wrought to look like angel wings, . keeps the book's contents secure. Only a creature of good alignment that is attuned to the book can release the clasp that holds it shut. Once the book is opened, the attuned creature must spend 80 hours reading and studying the book to digest its contents and gain its benefits. Other creatures that peruse the book's open pages can read the text but glean no deeper meaning and reap no benefits. An evil creature that tries to read from the book takes 24d6 radiant damage. This damage ignores resistance and immunity, and can't be reduced or avoided by any means. A creature reduced to 0 hit points by this damage disappears in a blinding flash is destroyed, leaving its possessions behind.<br> Benefits granted by the Book of Exalted Deeds last only as long as you strive to do good. If you fail to perform at least one act of kindness or generosity wit the span of 10 days, or if you willingly perform an evil act, you lose all the benefits granted by the book. <br> <b>Random Properties.</b> The Book of Exalted Deeds has the following random properties: <ul> <li> 2 minor beneficial properties </li> <li> 2 major beneficial properties </li> </ul> <b>Increased Wisdom.</b> After you spend the requisite amount of time reading and studying the book, your Wisdom score increases by 2, to a maximum of 24. You can't gain this benefit from the book more than once. <br> <b>Enlightened Magic.</b> Once you've read and studied the book, any spell slot you expend to cast a cleric or paladin spell counts as a spell slot of one level higher. <br> <b>Halo.</b> Once you've read and studied the book, you gain a protective halo. This halo sheds bright light in a 10-foot radius and dim light for an additionallO feet. You can dismiss or manifest the halo as a bonus action. While present, the halo gives you advantage on Charisma (Persuasion) checks made to interact with good creatures and Charisma (Intimidation) checks made to interact with evil creatures. In addition, fiends and undead within the halo's bright light make attack rolls against you with disadvantage. <br> <b>Destroying the Book.</b> It is rumored that the Book 0: Exalted Deeds can't be destroyed as long as good exists in the multiverse. However, drowning the book in the River Styx removes all writing and imagery from its pages and renders the book powerless for ld100 years ",
	  "source": "DMG",
	  "img": "BOOK_OF_EXALTED_DEEDS.jpg"
	},
	"ru": {
	  "name": "Книга Восторженных Деяний",
	  "attunement": "(требует настройки существом с добрым мировоззрением)",
	  "text": "Прославленная Книга Восторженных Деяний, трактат о добре в мультивселенной, занимает важное место во многих религиях. Это не просто письмена о конкретной вере, разнообразные авторы заполняли её страницы своим пониманием истинной добродетели и давали советы по борьбе со злом.<br> Книга Восторженных Деяний редко надолго задерживается в одном месте. Когда её прочтут, она исчезает, чтобы появиться в другом уголке мультивселенной и нести там, в тёмный мир свои моральные нравоучения. Были попытки скопировать этот том, но они не увенчались успехом, так как не удаётся передать его магическую природу и его благословение целеустремлённым и чистым сердцем.<br> Книга запирается тяжёлой застёжкой в форме ангельских крыльев. Только существо с добрым мировоззрением, настроенное на эту книгу, может расстегнуть застёжку. Открыв книгу, настроенное существо должно потратить 80 часов на её чтение и изучение, чтобы получить преимущества от неё. Другие существа, смотрящие на открытые страницы, видят текст, но не понимают значения слов и не получают преимуществ. Злое существо, пытающееся читать эту книгу, получает урон излучением 24к6. Этот урон игнорирует сопротивления и иммунитеты, и его никак нельзя ни уменьшить, ни избежать. Существо, чьи хиты уменьшаются от этого урона до 0, исчезает в ослепительной вспышке, уничтоженное, но оставляет всё своё снаряжение.<br> Преимущества, даруемые Книгой Восторженных Деяний, длятся только пока вы стремитесь к добру. Если вы в течение 10 дней не совершаете ни одного доброго или благородного поступка, вы теряете все преимущества, даруемые книгой.<br> <b>Случайные свойства.</b> Книга Восторженных Деяний обладает несколькими свойствами, определяемыми случайным образом: <ul><li> 2 малых положительных свойства </li><li> 2 основных положительных свойства </li></ul> <b>Увеличенная Мудрость.</b> После того как вы потратите нужное время на чтение и изучение книги, ваша Мудрость увеличивается на 2, с максимумом 24. Вы не можете получить это преимущество из книги более одного раза.<br> <b>Просветлённая магия.</b> После того как вы изучите книгу, все ячейки заклинаний, которые вы тратите для накладывания заклинаний жреца или паладина, считаются ячейками с уровнем на 1 выше.<br> <b>Ореол.</b> Изучив книгу, вы начинаете излучать защитный ореол. Он испускает яркий свет в пределах 10 футов и тусклый свет в пределах ещё 10 футов. Вы можете развеять или вернуть ореол бонусным действием. Пока ореол существует, вы совершаете с преимуществом проверки Харизмы (Убеждение), совершённые для взаимодействия с добрыми существами и проверки Харизмы (Запугивание), совершённые для взаимодействия со злыми существами. Кроме того, исчадия и нежить, находящиеся в пределах яркого света ореола, совершают по вам броски атаки с помехой.<br> <b>Уничтожение Книги.</b> Ходят слухи, что Книгу Восторженных Деяний нельзя уничтожить, пока в мультивселенной есть хоть частичка добра. Однако если её бросить в реку Стикс, её письмена и иллюстрации сотрутся, и на 1к100 лет книга станет бесполезной." 
	}
},
{
	"en": {
	  "name": "BOOK OF VILE DARKNESS",
	  "type": "Wondrous item",
	  "attunement": "(requires attunement)",
	  "rarity": 6,
	  "text": "The contents of this foul manuscript of ineffable wickedness are the meat and drink of those in evil's thrall. No mortal was meant to know the secrets it contains, knowledge so horrid that to even glimpse the scrawled pages invites madness.<br> Most believe the lich-god Vecna authored the Book Vile Darkness. He recorded in its pages every diseas idea, every unhinged thought, and every example of blackest magic he came across or devised. Vecna covered every vile topic he could, making the book a gruesome catalog of all mortal wrongs.<br> Other practitioners of evil have held the book and added their own input to its catalog of vile knowledge. Their additions are clear, for the writers of later works stitched whatever they were writing into the tome or. ·- some cases, made notations and additions to existing text. There are places where pages are missing, torn. or covered so completely with ink, blood, and scratches that the original text can't be divined.<br> Nature can't abide the book's presence. Ordinary plants wither in its presence, animals are unwilling to approach it, and the book gradually destroys whatever it touches. Even stone cracks and turns to powder if th~ book rests on it long enough. <br> A creature attuned to the book must spend 80 hours reading and studying it to digest its contents and reap its benefits. The creature can then freely modify the book's contents, provided that those modifications advance evil and expand the lore already contained within.<br> Whenever a non-evil creature attunes to the Book of Vile Darkness, that creature must make a DC 17 Charisma saving throw. On a failed save, the creature's alignment changes to neutral evil.<br> The Book of Vile Darkness remains with you only as long as you strive to work evil in the world. If you fail to perform at least one evil act within the span of 10 days, or if you willingly perform a good act, the book disappears. If you die while attuned to the book, an entity of great evil claims your soul. You can't be restored to life by any means while your soul remains imprisoned. <br> <b>VILE LORE</b> The Book ofVile Darkness touches on every evil in the cosmos. A character can use the lore the book contains to unearth terrible secrets no mortal should know. Among the contents a character might fi nd are the following, plus whatever else you choose: <ul><li> <i>Vile Apotheosis.</i> The book could hold a ritual that allows a character to become a lich or death knight. </li><li> <i>True Names.</i> The true names of any number of fiends might be in the book. </li><li> <i>Dark Magic.</i> Several spells of horrific evil of the OM's design and choosing could be in the book. Spells could impose dreadful curses, disfigure others, require human sacrifice, afflict creatures with crippling pain, spread vile plagues, and so on. </li></ul> Random Properties. The Book of Vile Darkness has the following random properties: <ul><li>minor beneficial properties </li><li>1 major beneficial property </li><li>minor detrimental properties </li><li>major detrimental properties </li></ul> <b>Adjusted Ability Scores.</b> After you spend the requisite amount of time reading and studying the book, one ability score of your choice increases by 2, to a maximum of 24. Another ability score of your choice decreases by 2, to a minimum of 3. The book can't adjust your ability scores again. <br> <b>Mark of Darkness.</b> After you spend the requisite amount of time reading and studying the book, you acquire a physical disfigurement as a hideous sign of your devotion to vile darkness. An evil rune might appear on your face, your eyes might become glossy black, or horns might sprout from your forehead. Or you might become wizened and hideous, lose all facial features, gain a forked tongue, or some other feature the DM chooses. The mark of darkness grants you advantage on Charisma (Persuasion) checks made to interact with evil creatures and Charisma (Intimidation) checks made to interact with non-evil creatures. <br> <b>Command Evil.</b> While you are attuned to the book and holding it, you can use an action to cast the dominate monster spell on an evil target (save DC 18). You can't use this property again until the next dawn. <br> <b>Dark Lore.</b> You can reference the Book of Vile Darkness whenever you make an Intelligence check to recall information about some aspect of evil, such as lore about demons. When you do so, double your proficiency bonus on that check. <br> <b>Dark Speech.</b> While you carry the Book of Vile Darkness and are attuned to it, you can use an action to recite word from its pages in a foul language known as Dark S peech. Each time you do so, you take 1d12 psychic damage, and each non-evil creature within 15 feet of you takes 3d6 psychic damage. <br> <b>Destroying the Book.</b> The Book of Vile Darkness allows pages to be torn from it, but any evil lore contained on those pages finds its way back into the book eventually, usually when a new author adds pages to the tome.<br> If a solar tears the book in two, the book is destroyed for 1d100 years, after which it reforms in some dark corner of the multiverse.<br> A creature attuned to the book for one hundred years can unearth a phrase hidden in the original text that, when translated to Celestial and spoken aloud, destroys both the speaker and the book in a blinding flash of radiance. However, as long as evil exists in the multiverse, the book reforms 1d10 x 100 years later.<br> If all evil in the multiverse is wiped out, the book turns to dust and is forever destroyed.",
	  "source": "DMG",
	  "img": "BOOK_OF_VILE_DARKNESS.jpg"
	},
	"ru": {
	  "name": "Книга Мерзкой Тьмы",
	  "attunement": "(требует настройки)",
	  "text": "Содержимое этого отвратительного манускрипта — лакомый кусочек для тех, кто служит злу. Смертные не должны знать хранящиеся в нём тайны, они настолько ужасны, что один только взгляд на его страницы приводит к безумию. <br> Большинство считает, что авторство Книги Мерзкой Тьмы принадлежит богу-личу Векне. На её страницах он записал все свои больные идеи, все безумные мысли и все примеры самой чёрной магии, известные ему. Векна раскрыл все мерзкие темы, сделав книгу жутким каталогом всех смертных грехов.<br> Книга была в руках и других злодеев, и многие дополняли её своими мыслями. Эти дополнения сразу видны, так как они либо вклеивали свои страницы, либо делали пометки на полях и между строк. Есть также места, где страницы вырваны или полностью залиты чернилами или кровью, так что оригинальный текст уже не разобрать.<br> Присутствие книги уничтожает природу. Обычные растения вянут при ней, животные отказываются к ней приближаться, книга постепенно уничтожает всё, к чему прикасается. Даже камень трескается и становится прахом, если книга долго лежит на нём.<br> Существо, настроенное на эту книгу, должно потратить 80 часов на чтение и изучение её содержимого, чтобы получить преимущества от неё. После этого существо может изменять содержимое книги, при условии что эти модификации увеличивают или распространяют зло.<br> Если на Книгу Мерзкой Тьмы настраивается незлое существо, оно совершает спасбросок Харизмы со Сл 17. При провале его мировоззрение становится нейтрально-злым. <br> Книга Мерзкой Тьмы остаётся с вами только пока вы сеете зло в мире. Если вы за 10 дней не совершили ни одного злого поступка, или добровольно совершаете добрый поступок, книга исчезает. Если вы умираете, будучи настроенным на эту книгу, вашу душу забирает сущность великого зла. Вы не можете вернуться к жизни никакими средствами, пока ваша душа похищена.<br> <b>Мерзкие знания.</b> Книга Мерзкой Тьмы описывает всё зло, существующее во Вселенной. Персонаж может найти в ней такие ужасные тайны, что их не должен знать ни один смертный. Среди прочих тем встречаются следующие: <ul><li> <i>Апофеоз греховности.</i> Книга может содержать ритуал, позволяющий персонажу стать личем или рыцарем смерти. </li><li> <i>Истинные имена.</i> В книге могут быть истинные имена многочисленных исчадий. </li><li> <il>Тёмная магия.</i> В книге могут быть ужасные и злые заклинания, созданные или отобранные Мастером. В заклинаниях могут быть проклятья, которые калечат, насылают боль, распространяют болезни или требуют жертвоприношений. </li></ul> <b>Случайные свойства.</b> Книга Мерзкой Тьмы обладает несколькими свойствами, определяемыми случайным образом: <ul><li>3 малых положительных свойства </li><li>1 основное положительное свойство </li><li>3 малых отрицательных свойства </li><li>2 основных отрицательных свойства</li></ul> <b>Изменение характеристик.</b> После того как вы потратите нужное время на чтение и изучение книги, одна ваша характеристика на ваш выбор увеличивается на 2, с максимумом 24. Другая ваша характеристика на ваш выбор уменьшается на 2, с минимумом 3. Книга не может позже изменить ваши характеристики повторно. <br> <b>Метка тьмы.</b> После того как вы потратите нужное время на чтение и изучение книги, вы получаете физическое уродство, отражающее вашу преданность мерзкой тьме. На вашем лице может появиться руна. Ваши глаза могут стать абсолютно чёрными, или же на лбу могут вырасти рога. Вы можете покрыться морщинами или язвами, можете потерять часть лица, можете получить раздвоенный язык или другую особенность, выбранную Мастером. Метка тьмы позволяет вам совершать с преимуществом проверки Харизмы (Убеждение) при взаимодействии со злыми существами, а также проверки Харизмы (Запугивание) при взаимодействии с не-злыми персонажами<br> <B>Командование злом.</b> Если вы настроены на книгу и держите её в руках, вы можете действием наложить на злую цель заклинание подчинение чудовища (Сл спасброска 18). Вы не сможете использовать это свойство повторно до следующего рассвета.<br> <b>Тёмные знания.</b> Вы можете обращаться к Книге Мерзкой Тьмы, если совершаете проверку Интеллекта для вспоминания информации о чём-то злом, например, о демонах. Если вы это делаете, то ваш бонус мастерства для этой проверки удваивается.<br> <b>Тёмная Речь.</b> Если вы несёте Книгу Мерзкой Тьмы и настроены на неё, вы можете действием прочесть вслух текст с её страниц на нечистом языке, известном как Тёмная Речь. Каждый раз, когда вы это делаете, вы получаете урон психической энергией 1к12, а все не-злые существа в пределах 15 футов от вас получают урон психической энергией 3к6.<br> <b>Уничтожение книги.</b> Из Книги Мерзкой Тьмы можно вырывать страницы, но зло, содержащееся на них, в конечном счете, возвращается в неё, обычно когда новый автор добавляет туда свои знания.<br> Если солар порвёт книгу на две части, она будет уничтожена на 1к100 лет, после чего формируется заново в тёмной части мультивселенной.<br> Существо, настроенное на книгу в течение ста лет, может найти фразу, скрытую среди оригинального текста, которая, если её перевести на Небесный и произнести вслух, уничтожит и книгу и того, кто её произнесёт, в яркой вспышке света. Однако если в мультивселенной остаётся зло, книга формируется заново через 1к10 × 100 лет. Если всё зло в мультивселенной будет уничтожено, книга будет уничтожена навсегда. " 
	}
},
{
	"en": {
	  "name": "EYE AND HAND OF VECNA",
	  "type": "Wondrous item",
	  "attunement": "(requires attunement)",
	  "rarity": 6,
	  "text": "Seldom is the name of Vecna spoken except in a hushed voice. Vecna was, in his time, one of the mightiest of all wizards. Through dark magic and conquest, he forged a terrible empire. For all his power, Vecna couldn't escape his own mortality. He began to fear death and take steps to prevent his end from ever coming about.<br> Orcus, the demon prince of undeath, taught Vecna a ritual that would allow him to live on as a lich. Beyond death, he became the greatest of allliches. Even though his body gradually withered and decayed, Vecna continued to expand his evil dominion. So formidable and hideous was his temper that his subjects feared to speak his name. He was the Whispered One, the Master of the Spider Throne, the Undying King, and the Lord of the Rotted Tower.<br> Some say that Vecna's lieutenant Kas coveted the Spider Throne for himself, or that the sword his lord made for him seduced him into rebellion. Whatever the reason, Kas brought the Undying King's rule to an end in a terrible battle that left Vecna's tower a heap of ash. Of Vecna, all that remained were one hand and one eye, grisly artifacts that still seek to work the Whispered One's will in the world.<br> The Eye of Vecna and the Hand of Vecna might be found together or separately. The eye looks like a bloodshot organ torn free from the socket. The hand is a mummified and shriveled left extremity.<br> To attune to the eye, you must gouge out your own eye and press the artifact into the empty socket. The eye grafts itself to your head and remains there until you die. Once in place, the eye transforms into a golden eye with a slit for a pupil, much like that of a cat. If the eye is ever removed, you die.<br> To attune to the hand, you must lop off your left hand at the wrist and the press the artifact against the stump. The hand grafts itself to your arm and becomes a functioning appendage. If the hand is ever removed, you die. <br> <b>Random Properties.</b> The Eye of Vecna and the Hand ofVecna each have the following random properties: <ul><li> 1 minor beneficial property </li><li> 1 major beneficial property </li><li> 1 minor detrimental property </li></ul> <b>Properties of the Eye.</b> Your alignment changes to neutral evil, and you gain the following benefits: <ul><li> You have truesight. </li><li> You can use an action to see as if you were wearing a <a href='https://tentaculus.ru/magic-items/index.html#q=ring_of_x-ray_vision&view=text'>ring of X-ray vision</a>. You can end this effect as a bonus action. </li><li> The eye has 8 charges. You can use an action and expend 1 or more charges to cast one of the folio spells (save DC 18) from it: <a href='https://tentaculus.ru/spells/index.html#q=clairvoyance'>clairvoyance</a> (2 charges), <a href='https://tentaculus.ru/spells/index.html#q=crown_of_madness'> crown of madness</a> (1 charge), <a href='https://tentaculus.ru/spells/index.html#q=disintegrate'>disintegrate</a> (4 charges), <a href='https://tentaculus.ru/spells/index.html#q=dominate_monster'>dominate monster</a> (5 charges), or <a href='https://tentaculus.ru/spells/index.html#q=eyebite'>eyebite</a> (4 chares). The eye regains 1d4 + 4 expended charges dail adawn. Each time you cast a spell from the eye, there is a 5 percent chance that Vecna tears your soul your body, devours it, and then takes control of the body like a puppet. If that happens, you become ar NPC under the DM's control. </li></ul> <br> <b>Properties of the Hand.<b/> Your alignment changes to neutral evil, and you gain the following benefits: <ul><li> Your Strength score becomes 20, unless it is already 20 or higher. </li><li> Any melee spell attack you make with the hand. any melee weapon attack made with a weapon he it, deals an extra 2d8 cold damage on a hit. </li><li> The hand has 8 charges. You can use an action and expend 1 or more charges to cast one of the following spells (save DC 18) from it: <a href='https://tentaculus.ru/spells/index.html#q=finger_of_death'>finger of death</a> (5 charges), <a href='https://tentaculus.ru/spells/index.html#q=sleep'>sleep</a> (1 charge), <a href='https://tentaculus.ru/spells/index.html#q=slow'>slow</a> (2 charges), or <a href='https://tentaculus.ru/spells/index.html#q=teleport&ls=7'>teleport</a> (3 charges). The hand regains 1d4 + 4 expended charges daily at dawn. Each time you cast a spell from the hand, it casts the <a href='https://tentaculus.ru/spells/index.html#q=suggestion&le=2&view=text'>suggestion</a> spell on you (save DC 18), demanding that you commit an evil act. The might have a specific act in mind or leave it up to you</li></ul><br> <b>Properties of the Eye and Hand.</b> If you are attuned to both the hand and eye, you gain the following additional benefits: <ul><li>You are immune to disease and poison. </li><li> Using the eye's X-ray vision never causes you to suffer exhaustion. </li><li>You experience premonitions of danger and, unless you are incapacitated, can't be surprised. </li><li>If you start your turn with at least 1 hit point, you regain 1dl0 hit points. </li><li> If a creature has a skeleton, you can attempt to turn its bones to jelly with a touch of the Hand of Vecna. You can do so by using an action to make a melee attack against a creature you can reach, using your choice of your melee attack bonus for weapons or spells. On a hit, the target must succeed on a DC 18 Constitution saving throw or drop to 0 hit points. </li><li>You can use an action to cast <a href='https://tentaculus.ru/spells/index.html#q=wish'>wish</a>. This property can't be used again until 30 days have passed. </li></ul> <br> <b>Destroying the Eye and Hand.</b> If the Eye of Vecna and the Hand of Vecna are both attached to the same creature, and that creature is slain by the <a href='https://tentaculus.ru/magic-items/index.html#q=SWORD_OF_KAS&rarity=6&view=text'>Sword of Kas</a>, both the eye and the hand burst into flame, turn to ash, and are destroyed forever. Any other attempt to destroy the eye or hand seems to work, but the artifact reappears in one of Vecna's many hidden vaults, where ir waits to be rediscovered. ",
	  "source": "DMG",
	  "img": "EYE_AND_HAND_OF_VECNA.jpg"
	},
	"ru": {
	  "name": "Глаз и Рука Векны",
	  "attunement": "(требует настройки)",
	  "text": "Имя Векны почти всегда произносят шёпотом. В своё время он был одним из самых могущественных волшебников. Благодаря завоеваниям и тёмной магии он создал ужасную империю. Однако, несмотря на всю свою мощь, Векна оставался смертным. Он начал бояться смерти и предпринимать меры, чтобы максимально отдалить свой конец.<br> Оркус, демонический повелитель нежити, научил Векну ритуалу, который позволил жить в качестве лича. Совершив его, тот стал могущественнейшим из всех личей. Несмотря на иссохшее и разлагающееся тело, Векна продолжил расширять свои владения. Характер его был таким ужасным, что подчинённые боялись произнести его имя. Он был Шепчущим, Владыкой Паучьего Трона, Неумирающим Королём и Владыкой Гниющей Башни.<br> Одни говорят, что полководец Векны, Кас, сам возжелал занять Паучий Трон, другие утверждают, что поднять восстание Каса уговорил меч, созданный его же владыкой. Какова бы ни была причина, но Кас окончил правление Неумирающего Короля в ужасном сражении, которое превратило башню Векны в горстку пепла. От Векны остались лишь одна рука и один глаз, жуткие артефакты, всё ещё воплощающие волю Шепчущего.<br> Глаз Векны и Руку Векны можно найти вместе, а можно по отдельности. Глаз выглядит как обычный глаз с кровоподтёками, вырванный из глазницы. Рука высохшая и мумифицированная.<br> Для того чтобы настроится на глаз, нужно вырвать свой собственный глаз и поместить артефакт в глазницу. Он сам прирастёт и останется с вами, пока вы не умрёте. Заняв своё место, глаз становится золотистым, но с вертикальным зрачком, как у кошки. Если глаз когда-нибудь изымут, вы умрёте.<br> Для того чтобы настроиться на руку, вы должны отрубить левую руку по запястью и приложить к обрубку артефакт. Рука сама прирастёт и станет полностью функционирующей. Если руку когда-нибудь отнимут, вы умрёте.<br> <b>Случайные свойства.</b> Глаз Векны и Рука Векны обладают несколькими свойствами, определяемыми случайным образом для каждого из них: <ul><li>1 малое положительное свойство </li><li>1 основное положительное свойство </li><li>1 малое отрицательное свойство </li></ul> <br> <b>Свойства Глаза.</b> Ваше мировоззрение становится нейтрально-злым, и вы получаете следующие преимущества: <ul><li>Вы получаете истинное зрение. </li><li>Вы можете действием начать видеть так, как если бы носили <a href='https://tentaculus.ru/magic-items/index.html#q=ring_of_x-ray_vision&view=text'>кольцо проникающего зрения</a>. Вы можете окончить этот эффект бонусным действием. </li><li>У Глаза есть 8 зарядов. Вы можете действием потратить 1 или несколько зарядов, чтобы наложить им одно из следующих заклинаний (Сл спасброска 18): <a href='https://tentaculus.ru/spells/index.html#q=crown_of_madness&view=text'>корона безумия</a> (1 заряд), <a href='https://tentaculus.ru/spells/index.html#q=clairvoyance&view=text'>ясновидение</a> (2 заряда), <a href='https://tentaculus.ru/spells/index.html#q=dominate_monster&view=text'>подчинение чудовища</a> (5 зарядов), <a href='https://tentaculus.ru/spells/index.html#q=eyebite&view=text'>разящее око</a> (4 заряда) или <a href='https://tentaculus.ru/spells/index.html#q=disintegrate&view=text'>дезинтеграция</a> (4 заряда). Глаз каждый день восстанавливает 1к4 + 4 заряда на рассвете. Каждый раз, когда вы накладываете глазом заклинание, существует 5-процентный шанс, что Векна вырвет вашу душу и пожрёт её, сделав ваше тело своей марионеткой. Если это произойдёт, вы становитесь персонажем Мастера. </li></ul> <br> <b>Свойства Руки.</b> Ваше мировоззрение становится нейтрально-злым, и вы получаете следующие преимущества: <ul><li>Ваша Сила становится равной 20, если только она не была больше 20. </li><li>Все рукопашные заклинания, которые вы накладываете этой рукой, и все рукопашные атаки оружием, совершённые оружием, которое вы держите в этой руке, причиняют при попадании дополнительный урон холодом 2к8. </li><li>У руки есть 8 зарядов. Вы можете действием потратить 1 или несколько зарядов, чтобы наложить ей одно из следующих заклинаний (Сл спасброска 18): <a href='https://tentaculus.ru/spells/index.html#q=slow&view=text'>замедление</a> (2 заряда), <a href='https://tentaculus.ru/spells/index.html#q=_finger_of_death&view=text'>перст смерти</a> (5 зарядов), <a href='https://tentaculus.ru/spells/index.html#q=teleport&ls=7&view=text'>телепортация</a> (3 заряда) или <a href='https://tentaculus.ru/spells/index.html#q=sleep&view=text'>сон</a> (1 заряд). Рука каждый день восстанавливает 1к4 + 4 заряда на рассвете. Каждый раз, когда вы накладываете этой рукой заклинание, она накладывает на вас заклинание <a href='https://tentaculus.ru/spells/index.html#q=suggestion&le=2&view=text'>внушение</a> (Сл спасброска 18), требуя, чтобы вы совершили злой поступок. Она может требовать конкретное деяние, а может оставить выбор действия за вами. </li></ul> <br> <b>Свойства Глаза и Руки.</b> Если вы настроены одновременно на Глаз и на Руку, вы получаете следующие дополнительные преимущества: <ul><li>Вы получаете иммунитет к болезням и ядам. </li><li>Использование проникающего зрения Глаза не подвергает вас истощению. </li><li>Вы предчувствуете опасность, и если вы дееспособны, вы не можете быть захвачены врасплох. </li><li>Если вы начинаете ход с как минимум 1 хитом, вы восстанавливаете 1к10 хитов. </li><li>Если у существа есть скелет, вы можете попытаться превратить его кости в желе прикосновением Руки Векны. Вы совершаете действием рукопашную атаку по существу, к которому можете прикоснуться, используя на свой выбор бонус рукопашной атаки или для оружия или для заклинания. При попадании цель должна преуспеть в спасброске Телосложения со Сл 18, иначе её хиты опускаются до 0. </li><li>Вы можете действием наложить заклинание <a href='https://tentaculus.ru/spells/index.html#q=wish&view=text'>исполнение желаний</a>. Это свойство нельзя использовать повторно, пока не пройдёт 30 дней. </li></ul> <br><b>Уничтожение Глаза и Руки.</b> Если Глаз Векны и Рука Векны приросли к одному и тому же существу, и это существо убивается <a href='https://tentaculus.ru/magic-items/index.html#q=SWORD_OF_KAS&rarity=6&view=text'>Мечом Каса</a> и глаз и рука вспыхивают, превращаются в пепел и уничтожаются навсегда. Любые другие попытки уничтожить глаз и руку кажутся успешными, но артефакты восстанавливаются в одном из многочисленных тайных хранилищ Векны, где снова ждут, пока их найдут." 
	}
},
{
	"en": {
	  "name": "ORB OF DRAGONKIND",
	  "type": "Wondrous item",
	  "attunement": "(requires attunement)",
	  "rarity": 6,
	  "text": "Ages past, on the world of Krynn, elves and humans waged a terrible war against evil dragons. When the world seemed doomed, the wizards of the Towers of High Sorcery came together and worked their greatest magic, forging five Orbs of Dragonkind (or Dragon Orbs) to help them defeat the dragons. One orb was taken to each of the five towers, and there they were used to speed the war toward a victorious end. The wizards used the orbs to lure dragons to them, then destroyed the dragons with powerful magic.<br> As the Towers of High Sorcery fell in later ages, the orbs were destroyed or faded into legend, and only three are thought to survive. Their magic has been warped and twisted over the centuries, so although their primary purpose of calling dragons still functions, they also allow some measure of control over dragons.<br> Each orb contains the essence of an evil dragon, a presence that resents any attempt to coax magic from it. Those lacking in force of personality might find themselves enslaved to an orb.<br> An orb is an etched crystal globe about 10 inches in diameter. When used, it grows to about 20 inches in diameter, and mist swirls inside it.<br> While attuned to an orb, you can use an action to peer into the orb's depths and speak its command word. You must then make a DC 15 Charisma check. On a successful check, you control the orb for as long as you remain attuned to it. On a failed check, you become charmed by the orb for as long as you remain attuned to it. <br> While you are charmed by the orb, you can't voluntarily end your attunement to it, and the orb casts <a href='https://tentaculus.ru/spells/index.html#q=suggestion&le=2&view=text'>suggestion</a> on you at will (save DC 18), urging you to work toward the evil ends it desires. The dragon essence within the orb might want many things: the annihilation of a particular people, freedom from the orb, to spread suffering in the world, to advance the worship of Takhisis (Tiamat's name on Krynn), or something else the DM decides. <br> <b>Random Properties.</b> An Orb of Dragon kind has the following random properties: <ul><li>2 minor beneficial properties </li><li>1 minor detrimental property </li><li>1 major detrimental property </li></ul> <br> <b>Spells.</a> The orb has 7 charges and regains 1d4 + 3 expended charges daily at dawn. If you control the orb, you can use an action and expend 1 or more charges to cast one of the following spells (save DC 18) from it: <a href='https://tentaculus.ru/spells/index.html#q=cure_wounds&le=1&view=text'>cure wounds</a> (5th-level version, 3 charges), <a href='https://tentaculus.ru/spells/index.html#q=daylight&view=text'>daylight</a> (1 charge), <a href='https://tentaculus.ru/spells/index.html#q=death_ward&view=text'>death ward</a> (2 charges), or <a href='https://tentaculus.ru/spells/index.html#q=scrying&view=text'>scrying</a> (3 charges). <br>You can also use an action to cast the <a href='https://tentaculus.ru/spells/index.html#q=detect_magic&view=text'>detect magic</a> spell from the orb without using any charges.<br> <b>Call Dragons./b> While you control the orb, you can use an action to cause the artifact to issue a telepathic call that extends in all directions for 40 miles. Evil dragons in range feel compelled to come to the orb as soon as possible by the most direct route. Dragon deities such as Tiamat are unaffected by this call. Dragons drawn to the orb might be hostile toward you for compelling them against their will. Once you have used this property, it can't be used again for 1 hour. <br> <b>Destroying an Orb.</b> An Orb of Dragonkind appears fragile but is impervious to most damage, including the attacks and breath weapons of dragons. A disintegrate spell or one good hit from a +3 magic weapon is sufficient to destroy an orb, however.",
	  "source": "DMG",
	  "img": "ORB_OF_DRAGONKIND.jpg"
	},
	"ru": {
	  "name": "Око Дракона",
	  "nic": "Глаз Дракона, Драконья сфера",
	  "attunement": "(требует настройки)",
	  "text": "Много столетий назад, в мире Кринн эльфы и люди развязали ужасную войну со злыми драконами. Когда мир был уже практически обречён, волшебники Башен Высшего Волшебства объединились и с помощью самой могущественной магии создали пять Очей Драконов, чтобы победить своих врагов. Каждой из башен досталось своё Око, и с их помощью удалось одержать победу над драконами. Волшебники приманивали к себе драконов и уничтожали их мощной магией.<br> Когда позже Башни Высшего Волшебства пали, Очи либо были уничтожены, либо пропали, и считается, что осталось только три таких Ока. Их магия за столетия изменилась, и, несмотря на то, что они попрежнему могут приманивать драконов, теперь они могут оказывать и другое воздействие.<br> Каждое Око содержит сущность злого дракона, которая сопротивляется попыткам использовать её магию. Те, кто слабы духом, рискуют стать рабами Ока.<br> Око это гравированный хрустальный шар примерно 25 сантиметров диаметром. Когда его используют, он увеличивается диаметром до полуметра и в нём начинает клубиться туман.<br> Будучи настроенным на Око, вы можете действием заглянуть в его глубины и произнести командное слово. Затем вы совершаете проверку Харизмы со Сл 15. В случае успеха вы контролируете Око всё время, пока настроены на него. При провале вы становитесь очарованы Оком, пока вы настроены на него.<br> Пока вы очарованы Оком, вы не можете добровольно окончить настройку на него, и Око может неограниченно накладывать на вас внушение (Сл спасброска 18), побуждая вас совершать злые поступки. Сущность дракона в Оке может желать разного: уничтожения конкретного народа, освобождения из Ока, распространения страданий по миру, распространения поклонения Такхизис (имя Тиамат на Кринне), или чего-то ещё, на усмотрение Мастера.<br> <b>Случайные свойства.</b> Око Дракона обладает несколькими свойствами, определяемыми случайным образом: <ul><li>2 малых положительных свойства </li><li>1 малое отрицательное свойство </li><li>1 основное отрицательное свойство </li></ul> <br> Заклинания. У Ока есть 7 зарядов, и оно восстанавливает 1к4 + 3 заряда на рассвете. Если вы контролируете Око, вы можете действием потратить 1 или несколько зарядов, чтобы наложить им одно из следующих заклинаний (Сл спасброска 18): <a href='https://tentaculus.ru/spells/index.html#q=daylight&view=text'>дневной свет</a> (1 заряд), <a href='https://tentaculus.ru/spells/index.html#q=death_ward&view=text'>защита от смерти</a> (2 заряда), <a href='https://tentaculus.ru/spells/index.html#q=cure_wound&le=1&view=text'>лечение ран</a> (версия 5 уровня, 3 заряда) или <a href='https://tentaculus.ru/spells/index.html#q=scrying&view=text'>наблюдение</a> (3 заряда).<br> Вы также можете действием наложить Оком заклинание <a href='https://tentaculus.ru/spells/index.html#q=detect_magic&view=text'>обнаружение магии</a>, не тратя заряды.<br> <b>Зов драконов.</b> Если вы контролируете Око, вы можете действием заставить артефакт испустить телепатический зов, распространяющийся на 40 миль. Злые драконы в пределах этой дистанции вынуждены лететь к Оку кратчайшим маршрутом. Божества драконы, такие как Тиамат, не попадают под действие этого зова. Прилетевшие драконы могут быть враждебны к вам, за то, что вы принудили их. Использовав это свойство, вы не можете повторно использовать его 1 час.<br> <b>Уничтожение Ока.</b> Око Дракона выглядит хрупким, но оно не подвержено практически никакому урону, включая атаки и дыхание драконов. Однако Око можно уничтожить заклинанием распад или одним попаданием магического оружия +3." 
	}
},
{
	"en": {
	  "name": "SWORD OF KAS",
	  "type": "Wondrous item",
	  "attunement": "(requires attunement)",
	  "rarity": 6,
	  "text": "When Vecna grew in power, he appointed an evil and ruthless lieutenant, Kas the Bloody Handed, to act as his bodyguard and right hand. This despicable villain served as advisor, warlord, and assassin. His successes earned him Vecna's admiration and a reward: a sword with as dark a pedigree as the man who would wield it.<br> For a long time, Kas faithfully served the lich but as Kas's power grew, so did his hubris. His sw;rd urged him to supplant Vecna, .so that they could rule the lich's empire in Vecna's stead. Legend says Vecna's destruction came at Kas's hand, but Vecna also wrought his rebellious lieutenant's doom, leaving only Kas's sword behind. The world was made brighter thereby.<br> The Sword of Kas is a magic, sentient longsword that grants a +3 bonus to attack and damage rolls made with it. It scores a critical hit on a roll of 19 or 20, and deals an extra 2d10 slashing damage to undead.<br> If the sword isn't bathed in blood within 1 minute of being drawn from its scabbard, its wielder must make a DC 15 Charisma saving throw. On a successful save, the wielder take 3d6 psychic damage. On a failed save, the wielder is dominated by the sword, as if by the dominate monster spell, and the sword demands that it be bathed in blood. The spell effect ends when the sword's demand is met. <br> <b>Random Properties.</b> The Sword of Kas has the following random properties: <ul><li>1 minor beneficial property </li><li>1 major beneficial property </li><li>1 minor detrimental property </li><li>1 major detrimental property </li></ul> <br> <b>Spirit of Kas.</b> While the sword is on your person, you add a dlO to your initiative at the start of every combat. In addition, when you use an action to attack with the sword, you can transfer some or all of its attack bonus r your Armor Class instead. The adjusted bonuses remaiin effect until the start of your next turn. <br> <b>Spells.</b> While the sword is on your person, you can use an action to cast one of the following spells (save 18) from it: <a href='https://tentaculus.ru/spells/index.html#q=call_lightning&view=text'>call lightning</a>, < ahref='https://tentaculus.ru/spells/index.html#q=divine_word&view=text'>divine word</a>, or <a href='https://tentaculus.ru/spells/index.html#q=finger_of_death&view=text'>finger of death</a>. Once you use the sword to cast a spell, you can't cast that spell again from it until the next dawn. <br> <b>Sentience.</b> The Sword of Kas is a sentient chaotic evil weapon with an Intelligence of 15, a Wisdom of 13, and a Charisma of 16. It has hearing and darkvision out to 2 range of 120 feet.<br> The weapon communicates telepathically with its wielder and can speak, read, and understand Common.<br> <b>Personality.</b> The sword's purpose is to bring ruin to Vecna. Killing Vecna's worshipers, destroying the licb·s works, and foiling his machinations all help to fulfill this goal.<br> The Sword of Kas also seeks to destroy anyone corrupted by the <a href='https://tentaculus.ru/magic-items/index.html#q=EYE_AND_HAND_OF_VECNA&rarity=6&view=text'>Eye and Hand of Vecna<a/>. The sword's obsession with those artifacts eventually becomes a fixation for its wielder. <br> <b>Destroying the Sword.</b> A creature attuned to both the <a href='https://tentaculus.ru/magic-items/index.html#q=EYE_AND_HAND_OF_VECNA&rarity=6&view=text'>Eye of Vecna and the Hand of Vecna</a> can use the wish property of those combined artifacts to unmake the Sword of Kas. The creature must cast the <a href='https://tentaculus.ru/spells/index.html#q=wish&view=text'>wish</a> spell and make a Charisma check contested by the Charisma check of the sword. The sword must be within 30 feet of the creature, or the spell fails. If the sword wins the contest, nothing happens, and the wish spell is wasted. If the sword loses the contest, it is destroyed.",
	  "source": "DMG",
	  "img": "SWORD_OF_KAS.jpg"
	},
	"ru": {
	  "name": "Меч Каса",
	  "attunement": "(требует настройки)",
	  "text": "Когда Векна получил власть, он сделал злого и безжалостного полководца, Каса Кроваворукого, своим телохранителем и приближенным. Этот злодей был советником, военачальником и наёмным убийцей. За выдающиеся успехи он заслужил уважение Векны и награду: меч, с происхождением, таким же тёмным, как его хозяин.<br> Кас долго служил личу, но вместе с его собственной силой росла и его гордыня. Его меч убедил его уничтожить Векну, чтобы он сам мог править империей. Легенды гласят, что Векна был уничтожен рукой Каса, но и Векна уничтожил своего полководца, оставив один лишь только меч. После этого мир стал светлее.<br> Меч Каса это магический, разумный длинный меч, предоставляющий бонус +3 к броскам атаки и урона, совершённым им. Он совершает критическое попадание при выпадении «19–20», а нежити причиняет дополнительный урон 2к10.<br> Если меч не испробует крови через 1 минуту после того как его вынут из ножен, владелец совершает спасбросок Харизмы со Сл 15. В случае успеха он получает урон психической энергией 3к6. При провале владелец становится доминируемым мечом, как будто под заклинанием <a href='https://tentaculus.ru/spells/index.html#q=dominate_monster&view=text'>подчинение чудовища<a/>, и меч требует, чтобы его омыли кровью. Эффект заклинания оканчивается, когда требование меча будет выполнено.<br> <b>Случайные свойства.</b> Меч Каса обладает несколькими свойствами, определяемыми случайным образом: <ul><li>1 малое положительное свойство </li><li>1 основное положительное свойство </li><li>1 малое отрицательное свойство </li><li>1 основное отрицательное свойство </li></ul> <br> <b>Дух Каса.</b> Пока Меч находится у вас, вы добавляете к10 к инициативе в начале каждого сражения. Кроме того, когда вы действием атакуете Мечом, вы можете передать весь его бонус атаки или его часть к Классу Доспеха. Изменённые бонусы остаются действовать до начала вашего следующего хода.<br> <b>Заклинания.</b> Пока Меч находится у вас, вы можете действием наложить им одно из следующих заклинаний (Сл спасброска 18): <a href='https://tentaculus.ru/spells/index.html#q=divine_word&view=text'>божественное слово</a>, <a href='https://tentaculus.ru/spells/index.html#q=_finger_of_death&view=text'>перст смерти</a> или <a href='https://tentaculus.ru/spells/index.html#q=_call_lightning&view=text'>призыв молнии</a>. Использовав Меч для накладывания заклинания, вы до следующего рассвета не сможете повторно наложить им это же самое заклинание.<br> <b>Разум.</b> Меч Каса — разумное хаотично-злое оружие с Интеллектом 15, Мудростью 13 и Харизмой 16. Он обладает слухом и тёмным зрением в пределах 120 футов.<br> Это оружие может понимать Общий язык, а также говорить и читать на нём и телепатически общаться с владельцем.<br> <b>Индивидуальность.</b> Предназначение меча в уничтожении Векны. Для этого нужно убивать последователей Векны, уничтожать плоды его деяний и срывать планы. Меч Каса также стремится уничтожать тех, кто развращён <a href='https://tentaculus.ru/magic-items/index.html#q=EYE_AND_HAND_OF_VECNA&rarity=6&view=text'>Глазом и Рукой Векны</a>. Одержимость Меча этими артефактами, в конечном счете, передаётся и его владельцу.<br> <b>Уничтожение Меча.</b> Существо, настроенное на <a href='https://tentaculus.ru/magic-items/index.html#q=EYE_AND_HAND_OF_VECNA&rarity=6&view=text'>Глаз Векны и Руку Векны</a>, может использовать свойство объединённых артефактов накладывать заклинание исполнение желаний, чтобы уничтожить Меч Каса. Существо должно наложить заклинание <a href='https://tentaculus.ru/spells/index.html#q=wish&view=text'>исполнение желаний</a> и совершить проверку Харизмы, противопоставленную проверке Харизмы Меча. Меч при этом должен находиться в пределах 30 футов, иначе заклинание будет потрачено впустую. Если состязание выиграет Меч, ничего не произойдёт, и заклинание исполнение желаний будет потрачено впустую. Если Меч проиграет, он уничтожается." 
	}
},
{
	"en": {
	  "name": "WAND OF ORCUS",
	  "type": "Wand",
	  "attunement": "(requires attunement)",
	  "rarity": 6,
	  "text": "The ghastly Wand of Orcus rarely leaves Orcus's side. The device, as evil as its creator, shares the demon lord's aims to snuff out the lives of all living things and bind the Material Plane in the stasis of undeath. Orcus allows the wand to slip from his grasp from time to time. When it does, it magically appears wherever its master senses an opportunity to achieve some fell goal.<br> Made from bones as hard as iron, the wand is topped with a magically enlarged skull that once belonged to a human hero slain by Orcus. The wand can magically change in size to better conform to the grip of its user. Plants wither, drinks spoil, flesh rots, and vermin thrive in the wand's presence.<br> Any creature besides Orcus that tries to attune to the wand must make a DC 17 Constitution saving throw. On a successful save, the creature takes 10d6 necrotic damage. On a failed save, the creature dies and rises as a zombie.<bR> In the hands of one who is attuned to it, the wand can be wielded as a magic mace that grants a + 3 bonus to attack and damage rolls made with it. The wand deals an extra 2d12 necrotic damage on a hit. <br> <b>Random Properties.</b> The Wand of Orcus has the following random properties: <ul><li>2 minor beneficial properties </li><li>1 major beneficial property </li><li>2 minor detrimental properties </li><li>1 major detrimental property </li></ul> The detrimental properties of the Wand of Orcus are suppressed while the wand is attuned to Orcus himself. <br> <b>Protection.</b> You gain a +3 bonus to Armor Class while holding the wand. <br> <b>Spells.</b> The wand has 7 charges. While holding it, you can use an action and expend 1 or more of its charges to cast one of the following spells (save DC 18) from it: https://tentaculus.ru/spells/index.html#q=animate_deadanimate dead</a> (1 charge), <a href='https://tentaculus.ru/spells/index.html#q=blight'>blight</a> (2 charges), <a href='https://tentaculus.ru/spells/index.html#q=circle_of_death'>circle of death</a> (3 charges), <a href='https://tentaculus.ru/spells/index.html#q=finger_of_death'>finger of death</a> (3 charges), <a href='https://tentaculus.ru/spells/index.html#q=power_word_kill'>power word kill</a> (4 charges), or <a href='https://tentaculus.ru/spells/index.html#q=speak_with_dead'>speak with dead</a> (1 charge). The wand regains 1d4 + 3 expended charges daily at dawn.<br> While attuned to the wand, Orcus or a follower blessed by him can cast each of the wand's spells using 2 fewer charges (minimum of 0). <br> <b>Call Undead.</b> While you are holding the wand, you can use an action to conjure skeletons and zombies, calling forth as many of them as you can divide 500 hit points among, each undead having average hit points (see the Monster Manual for statistics). The undead magically rise up from the ground or otherwise form in unoccupied spaces within 300 feet of you and obey your commands until they are destroyed or until dawn of the next day, when they collapse into inanimate piles of bones and rotting corpses. Once you use this property of the wand, you can't use it again until the next dawn.<br> While attuned to the wand, Orcus can summon any kind of undead, not just skeletons and zombies. The undead don't perish or disappear at dawn the following day, remaining until Orcus dismisses them. <br> <b>Sentience.</b> The Wand ofOrcus is a sentient, chaotic evil item with an Intelligence of 16, a Wisdom of 12, and a Charisma of 16. It has hearing and darkvision out to a range of 120 feet.<br> The wand communicates telepathically with its wielder and can speak, read, and understand Abyssal and Common. <br> <b>Personality.</b> The wand's purpose is to help satisfy Orcus's desire to slay everything in the multiverse. The wand is cold, cruel, nihilistic, and bereft of humor. In order to further its master's goals, the wand feigns devotion to its current user and makes grandiose promises that it has no intention of fulfilling, such as vowing to help its user overthrow Orcus. <br> <b>Destroying the Wand.</b> Destroying the Wand of Orcus requires that it be taken to the Positive Energy Plane by the ancient hero whose skull surmounts it. For this to happen, the long-lost hero must first be restored to lifeno easy task, given the fact that Orcus has imprisoned the hero's soul and keeps it hidden and well guarded. Bathing the wand in positive energy causes it to crack and explode, but unless the above conditions are met, the wand instantly reforms on Orcus's layer of the Abyss.",
	  "source": "DMG",
	  "img": "WAND_OF_ORCUS.jpg"
	},
	"ru": {
	  "name": "Палочка Оркуса",
	  "attunement": "(требует настройки)",
	  "text": "Эту жуткую волшебную палочку редко можно встретить без её хозяина, Оркуса. Это устройство, такое же злое как его создатель, разделяет стремление демонического повелителя к уничтожению всего живого и превращению Материального Плана в мир нежити. Иногда Оркус позволяет Палочке покидать его. Когда это происходит, Палочка появляется в месте, в котором её настоящий хозяин чувствует возможность добиться выполнения своих планов.<br> Сделанная из костей, твёрдых как железо, Палочка увенчана увеличенным магией черепом, который когда-то принадлежал человеческому герою, убитому Оркусом. Палочка при помощи магии меняет свой размер, чтобы подходить хватке своего текущего владельца. В присутствии Палочки растения засыхают, вода портится, плоть гниёт, а паразиты наоборот, плодятся с ужасающей скоростью.<br> Все существа кроме Оркуса, пытающиеся настроиться на Палочку, должны совершить спасбросок Телосложения со Сл 17. При успехе существо получает урон некротической энергией 10к6. При провале существо умирает и становится зомби.<bR> В руках того, кто настроился на неё, Палочка может использоваться как магическая булава, предоставляющая бонус +3 к броскам атаки и урона ей. При попадании Палочка причиняет дополнительный урон некротической энергией 2к12.<br> <b>Случайные свойства.</b> Палочка Оркуса обладает несколькими свойствами, определяемыми случайным образом: <ul><li><span class='randomProp minorBenefit count2'>2 малых положительных свойства</span> </li><li>1 основное положительное свойство </li><li>2 малых отрицательных свойства </li><li>1 основное отрицательное свойство </li></ul> Отрицательные свойства Палочки Оркуса подавляются, пока она настроена на самого Оркуса. <br> <b>Защита.</b> Вы получаете бонус +3 к Классу Доспеха, пока держите Палочку.<br> <b>Заклинания.</b> У Палочки есть 7 зарядов. Держа её, вы можете действием потратить 1 или несколько зарядов, чтобы наложить ей одно из следующих заклинаний (Сл спасброска 18): <a href='https://tentaculus.ru/spells/index.html#q=animate_dead'>восставший труп</a> (1 заряд), <a href='https://tentaculus.ru/spells/index.html#q=circle_of_death'>круг смерти</a> (3 заряда), <a href='https://tentaculus.ru/spells/index.html#q=finger_of_death'>перст смерти</a> (3 заряда), <a href='https://tentaculus.ru/spells/index.html#q=speak_with_dead'>разговор с мёртвыми</a> (1 заряд), <a href='https://tentaculus.ru/spells/index.html#q=power_word_kill'>Слово Силы: смерть</a> (4 заряда) или <a href='https://tentaculus.ru/spells/index.html#q=blight'>усыхание</a> (2 заряда). Палочка ежедневно восстанавливает 1к4 + 3 заряда на рассвете. <br> Будучи настроенным на Палочку, Оркус или благословлённый им последователь может накладывать заклинания Палочки, тратя на 2 заряда меньше (минимум 0). <br> <b>Призыв нежити.</b> Если вы держите Палочку, вы можете действием призвать скелетов и зомби, в любых пропорциях, но разделяя между ними 500 хитов. У каждой нежити среднее для неё число хитов (смотрите характеристики в Бестиарии). Нежить с помощью магии восстаёт из земли или как-то иначе формируется в пределах 300 футов от вас и подчиняется вашим командам, пока не будет уничтожена, но на рассвете следующего дня они рассыпаются обычными грудами костей и гниющими трупами. Использовав это свойство Палочки, вы не можете использовать его повторно до следующего рассвета.<br> Настроенный на эту Палочку, Оркус может призывать любую нежить, не ограничиваясь скелетами и зомби. Эта нежить не погибает и не исчезает на рассвете следующего дня, она остаётся, пока Оркус не отпустит её.<br> <b>Разум.</b> Палочка Оркуса — разумный хаотично-злой предмет с Интеллектом 16, Мудростью 12 и Харизмой 16. Он обладает слухом и тёмным зрением в пределах 120 футов.<br> Это оружие может понимать языки Бездны и Общий, а также говорить и читать на них и телепатически общаться с владельцем.<br> <b>Индивидуальность.</b> Предназначение Палочки в утолении жажды Оркуса убивать всех подряд в мультивселенной. Она хладнокровна, жестока, лишена чувства юмора, и ей не чужд нигилизм.<br> Стремясь помочь своему настоящему хозяину, Палочка притворяется верной своему текущему владельцу и торжественно клянётся в этой верности, обещая, например, помогать в свержении Оркуса.<br> <b>Уничтожение Палочки.</b> Для уничтожения Палочку Оркуса должен отнести на Положительный План древний герой, чей череп и венчает её. Чтобы это произошло, этого героя нужно вначале воскресить — а это нелёгкая задача, учитывая тот факт, что Оркус заточил его душу в тайном, хорошо охраняемом месте. Окунувшись в положительную энергию, Палочка покроется трещинами и взорвётся, но если главное условие с героем не соблюдено, Палочка мгновенно формируется на слое Оркуса в Бездне." 
	}
}
]
