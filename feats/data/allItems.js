var oSources = {
  "PHB": {
		"text": {
			"en": {
				"title": "Palyers Handbook"
			},
			"ru": {
				"title": "Книга игрока"
			}
		},
		"checked": false,
		"visible": true
	},
	"DMG": {
		"text": {
			"en": {
				"title": "Dungeon Master Guide"
			},
			"ru": {
				"title": "Книга мастера"
			}
		},
		"checked": false,
		"visible": false
	},
	"ToA": {
		"text": {
			"en": {
				"title": "Tomb of Annihilation"
			},
			"ru": {
				"title": "Гробница Аннигиляции"
			}
		},
		"checked": false,
		"visible": false
	},
	"XGTE": {
		"text": {
			"en": {
				"title": "Xanathar's Guide to Everything"
			},
			"ru": {
				"title": "Справочник Занатара Обо Всем"
			}
		},
		"checked": false,
		"visible": true
	},
	"MToF": {
		"text": {
			"en": {
				"title": "Mordenkainen's Tome of Foes"
			},
			"ru": {
				"title": "Mordenkainen's Tome of Foes"
			}
		},
		"checked": false,
		"visible": true
	},
	"WGtE": {
		"text": {
			"en": {
				"title": "Wayfinder's Guide to Eberron"
			},
			"ru": {
				"title": "Wayfinder's Guide to Eberron"
			}
		},
		"checked": false,
		"visible": true
	},
	"PSK": {
		"text": {
			"en": {
				"title": "Plane Shift: Kaladesh"
			},
			"ru": {
				"title": "Plane Shift: Kaladesh"
			}
		},
		"checked": false,
		"visible": true
	},
	"PSI": {
		"text": {
			"en": {
				"title": "Plane Shift: Ixalan"
			},
			"ru": {
				"title": "Plane Shift: Ixalan"
			}
		},
		"checked": false,
		"visible": true
	},
	"UA": {
		"text": {
			"en": {
				"title": "Unearthed Arcana"
			},
			"ru": {
				"title": "Unearthed Arcana"
			}
		},
		"checked": false,
		"visible": true
	}
}

var oTypes = {
	"General": {
		"text": {
			"en": {
				"title": "General"
			},
			"ru": {
				"title": "Общие"
			}
		},
		"checked": false,
		"visible": true
	},
	"Weapon": {
		"text": {
			"en": {
				"title": "Weapon"
			},
			"ru": {
				"title": "Оружие"
			}
		},
		"checked": false,
		"visible": true
	},
	"Armor": {
		"text": {
			"en": {
				"title": "Armor"
			},
			"ru": {
				"title": "Броня"
			}
		},
		"checked": false,
		"visible": true
	},
	"Skill Proficiency": {
		"text": {
			"en": {
				"title": "Skill Proficiency"
			},
			"ru": {
				"title": "Умения"
			}
		},
		"checked": false,
		"visible": true
	},
	"Tool Proficiency": {
		"text": {
			"en": {
				"title": "Tool Proficiency"
			},
			"ru": {
				"title": "Инструменты"
			}
		},
		"checked": false,
		"visible": true
	},
	"Racial": {
		"text": {
			"en": {
				"title": "Racial"
			},
			"ru": {
				"title": "Рассовые"
			}
		},
		"checked": false,
		"visible": true
	},
	"World-specific": {
		"text": {
			"en": {
				"title": "World-specific"
			},
			"ru": {
				"title": "Миро-зависимые"
			}
		},
		"checked": false,
		"visible": true
	}
}

var oLanguages = {
	"en": {
		"text": {
			"en": {
				"title": "English"
			},
			"ru": {
				"title": "Английский"
			}
		},
		"visible": true
	},
	"ru": {
		"text": {
			"en": {
				"title": "Russian"
			},
			"ru": {
				"title": "Русский"
			}
		},
		"checked": true,
		"visible": true
	}
}
var oSort = {
	"typeAlpha": {
		"text": {
			"en": {
				"title": "By type & alphabet"
			},
			"ru": {
				"title": "По типу и алфавиту"
			}
		},
		"checked": true,
		"visible": true
	},
	"alpha": {
		"text": {
			"en": {
				"title": "By alphabet"
			},
			"ru": {
				"title": "По алфавиту"
			}
		},
		"visible": true
	}
}

var allItems = [
	{
		"en": {
			"name": "Actor",
			"text": "<p>Skilled at mimicry and dramatics, you gain the following benefits:</p><ul><li>Increase your Charisma score by 1, to a maximum of 20.</li><li>You have an advantage on Deception and Performance checks when trying to pass yourself off as a different person.</li><li>You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Insight check contested by your Deception check allows a listener to determine that the effect is faked.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Артистичный",
			"text": "<p>Научившись театральному искусству и подражанию, вы получаете следующие преимущества:</p><ul><li>Увеличьте значение Харизмы на 1, при максимуме 20.</li><li>Вы совершаете с преимуществом проверки Харизмы (Выступление) и Харизма (Обман), когда пытаетесь выдать себя за кого-то другого.</li><li>Вы можете подражать речи кого-то другого, а также звукам, издаваемым другими существами. Перед этим вы должны как минимум в течение 1 минуты слышать чужую речь или звуки существа. Успешная проверка Мудрости (Проницательность), противопоставленная вашей проверке Харизмы (Обман), позволяет слушающему понять, что источник звука не настоящий.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Athlete",
			"text": "<p>You have undergone extensive physical training to gain the following benefits:</p><ul><li>Increase your Strength or Dexterity score by 1, to a maximum of 20.</li><li>When you are prone, standing up uses only 5 feet of your movement.</li><li>Climbing doesn't cost you extra movement.</li><li>You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Атлетичный",
			"text": "<p>Вы прошли интенсивную физическую подготовку и получаете следующие преимущества:</p><ul><li>Увеличьте значение Силы или Ловкости на 1, при максимуме 20.</li><li>Если вы лежите ничком, вставание использует только 5 футов перемещения.</li><li>Лазание не заставляет вас тратить дополнительное перемещение.</li><li>Вы можете совершать прыжок в длину или высоту с разбега, переместившись только на 5 футов, а не на 10.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Alert",
			"text": "<p>Always on the lookout for danger, you gain the following benefits:</p><ul><li>You can't be surprised while you are conscious.</li><li>You gain a +5 bonus to initiative.</li><li>Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Бдительный",
			"text": "<p>Вы всегда готовы к опасностям и получаете следующие преимущества:</p><ul><li>Вы получаете бонус +5 к проверкам инициативы.</li><li>Вас не могут застать врасплох, пока вы в сознании.</li><li>Другие существа не получают преимущество для бросков атаки по вам за то, что они скрыты от вас.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Charger",
			"text": "<p>When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature. If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed).</p>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Налётчик",
			"text": "<p>Когда вы используете действие Рывок, вы можете бонусным действием совершить одну рукопашную атаку оружием или оттолкнуть другое существо.</p><p><span>Если вы перед совершением этого бонусного действия переместились минимум на <st1:metricconverter productid=\"10 футов\" w:st=\"on\">10 футов</st1:metricconverter> по прямой линии, вы либо получаете бонус +5 к броску урона этой атаки (если вы решили совершить рукопашную атаку и попали), либо толкаете цель на <st1:metricconverter productid=\"10 футов\" w:st=\"on\">10 футов</st1:metricconverter> от себя (если решили толкать и преуспели).</span></p>"
		}
	},
	{
		"en": {
			"name": "Defensive Duelist",
			"text": "<p>When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing it to miss you.</p>",
			"source": "PHB",
			"type": "General",
			"pre": "Dexterity 13 or higher"
		},
		"ru": {
			"name": "Оборонительный дуэлянт",
			"text": "<p>Если вы используете оружие со свойством «фехтовальное», которым владеете, и другое существо попадает по вам рукопашной атакой, вы можете для этой атаки реакцией добавить бонус мастерства к КД, что потенциально может привести к промаху атаки.</p>",
			"pre": "Ловкость 13 или выше"
		}
	},
	{
		"en": {
			"name": "Dual Wielder",
			"text": "<p>You master fighting with two weapons, gaining the following benefits:</p><ul><li>You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.</li><li>You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren't light.</li><li>You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Использование двух оружий",
			"text": "<p>Вы знаете</span> как использовать сразу два оружия, и получаете следующие преимущества:</p><ul><li>Вы получаете бонус +1 к КД, когда держите в каждой руке по рукопашному оружию.</li><li>Вы можете использовать сражение с двумя оружиями даже если ни у одного из ваших одноручных оружий нет свойства «лёгкое».</li><li>Вы можете вынимать и убирать два одноручных оружия когда обычно позволяется вынуть или убрать только одно.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Dungeon Delver",
			"text": "<p>Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits:</p><ul><li>You have advantage on Perception and Investigation checks made to detect the presence of secret doors.</li><li>You have advantage on saving throws made to avoid or resist traps.</li><li>You have resistance to the damage dealt by traps.</li><li>You can search for traps while traveling at a normal pace, instead of a slow one.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Исследователь подземелий",
			"text": "<p>Научившись искать скрытые ловушки и потайные двери в подземельях, вы получаете следующие преимущества:</p><ul><li>Вы совершаете с преимуществом проверки Мудрости (Внимательность) и Интеллекта (Анализ), совершённые для обнаружения потайных дверей.</li><li>Вы совершаете с преимуществом спасброски для избегания ловушек и сопротивления их эффектам.</li><li>Вы получаете сопротивление к урону от ловушек.</li><li>Вы можете искать ловушки, идя с обычной скоростью, а не медленной.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Durable",
			"text": "<p>Hardy and resilient, you gain the following benefits:</p><ul><li>Increase your Constitution score by 1, to a maximum of 20.</li><li>When you roll a Hit Die to regain hit points, the minimum number of hit points you regain equals twice your Constitution modifier (minimum of 2).</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Стойкий",
			"text": "<p>Вы стойкий и живучий, и получаете следующие преимущества:</p><ul><li>Увеличьте значение Телосложения на 1, при максимуме 20.</li><li>Когда вы бросаете Кость Хитов для восстановления хитов, минимум равен удвоенному модификатору Телосложения (минимум 2).</li></ul>"
		}
	},
	{
		"en": {
			"name": "Elemental Adept",
			"text": "<p>When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder.</p><p>Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.</p><p>You can select this feat multiple times. Each time you do so, you must choose a different damage type.</p>",
			"source": "PHB",
			"type": "General",
			"pre": "The ability to cast at least one spell"
		},
		"ru": {
			"name": "Стихийный адепт",
			"text": "<p>Когда вы получаете эту черту, выберите один из видов урона: звук, кислота, огонь, холод или электричество.</p><p>Накладываемые вами заклинания игнорируют сопротивление к выбранному виду урона. Кроме того, когда вы определяете урон от наложенного вами заклинания, причиняющего урон этого вида, вы можете считать все выпавшие на костях «1» как «2».</p><p>Вы можете брать эту черту несколько раз. Каждый раз, когда вы это делаете, вы выбираете новый вид урона.</p>",
			"pre": "Способность накладывать хотя бы одно заклинание"
		}
	},
	{
		"en": {
			"name": "Grappler",
			"text": "<p>You've developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits:</p><ul><li> You have advantage on attack rolls against a creature you are grappling.</li><li> You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends.</li></ul>",
			"source": "PHB",
			"type": "General",
			"pre": "Strength 13 or higher"
		},
		"ru": {
			"name": "Борец",
			"text": "<p>Вы развили навыки, нужные для тесного захвата противников. Вы получаете следующие преимущества:</p><ul><li>Вы совершаете с преимуществом броски атаки по существу, которое держите в захвате.</li><li>Вы можете действием попытаться скрутить захваченное вами существо. Для этого совершите ещё одну проверку захвата. В случае успеха и вы и это существо становитесь опутанными до окончания захвата.</li></ul>",
			"pre": "Сила 13 или выше"
		}
	},
	{
		"en": {
			"name": "Great Weapon Master",
			"text": "<p>You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits:</p><ul><li>On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.</li><li>Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Мастер большого оружия",
			"text": "<p>Вы научились использовать вес своего оружия, позволяя инерции усиливать ваши атаки. Вы получаете следующие преимущества:</p><ul><li>В свой ход, когда вы совершаете критическое попадание рукопашным оружием или опускаете им хиты существа до 0, вы можете бонусным действием совершить одну атаку рукопашным оружием.</li><li>Перед совершением атаки рукопашным оружием со свойством «тяжёлое», которым вы владеете, вы можете принять штраф −5 к броску атаки. Если такая атака попадает, вы добавляете +10 к урону от этой атаки.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Healer",
			"text": "<p>You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight. You gain the following benefits:</p><ul><li>When you use a healer's kit to stabilize a dying creature, that creature also regains 1 hit point.</li><li>As an action, you can spend one use of a healer's kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature's maximum number of hit dice. The creature can't regain hit points from this feat again until it finishes a short or long rest.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Лекарь",
			"text": "<p>Вы способный медик, что позволяет быстро залечивать раны и возвращать союзников в строй. Вы получаете следующие преимущества:</p><ul><li>Когда вы используете комплект целителя для стабилизации умирающего существа, это существо также восстанавливает 1 хит.</li><li>Вы можете действием потратить одно использование комплекта целителя, чтобы позаботиться о существе и восстановить ему 1к6 + 4 хита, плюс дополнительные хиты, равные максимальному значению его Кости Хитов. Это существо не сможет повторно восстанавливать хиты от этой черты, пока не закончит короткий или продолжительный отдых.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Inspiring Leader",
			"text": "<p>You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can't gain temporary hit points from this feat again until it has finished a short or long rest.</p>",
			"source": "PHB",
			"type": "General",
			"pre": "Charisma 13 or higher"
		},
		"ru": {
			"name": "Воодушевляющий лидер",
			"text": "<p><span>Вы можете потратить 10 минут на воодушевление спутников, укрепляя их решимость. Если вы делаете это, выберите до шести дружественных существ (можете включить себя) в пределах <st1:metricconverter productid=\"30 футов\" w:st=\"on\">30 футов</st1:metricconverter> от себя, которые могут видеть или слышать вас, и которые могут вас понять. Все эти существа получают временные хиты в количестве, равном вашему уровню + ваш модификатор Харизмы. Существа больше не могут получать временные хиты от этой черты, пока не окончат короткий или продолжительный отдых.</span></p>",
			"pre": "Харизма 13 или выше"
		}
	},
	{
		"en": {
			"name": "Keen Mind",
			"text": "<p>You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits.</p><ul><li>Increase your Intelligence score by 1, to a maximum of 20.</li><li>You always know which way is north.</li><li>You always know the number of hours left before the next sunrise or sunset.</li><li>You can accurately recall anything you have seen or heard within the past month.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Отличная память",
			"text": "<p>Вы с невероятной точностью можете отслеживать время, направление и подробности. Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение Интеллекта на 1, при максимуме 20.</li><li>Вы всегда знаете, в какой стороне находится север.</li><li>Вы всегда знаете, через сколько часов наступит следующий закат или восход.</li><li>Вы можете с точностью вспомнить всё, что видели или слышали за последний месяц.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Linguist",
			"text": "<p>You have studied languages and codes, gaining the following benefits:</p><ul><li>Increase your Intelligence score by 1, to a maximum of 20.</li><li>You learn three languages of your choice.</li><li>You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Языковед",
			"text": "<p>Вы изучали языки и способы кодирования текстов, и получаете следующие преимущества:</p><ul><li>Увеличьте значение Интеллекта на 1, при максимуме 20.</li><li>Вы узнаёте три языка на свой выбор.</li><li>Вы можете писать шифрованные письма. Другие не могут расшифровать код, пока либо вы не научите их, либо они не преуспеют в проверке Интеллекта (Сл равна вашему значению Интеллекта + ваш бонус Мастерства), либо они не используют для расшифровки магию.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Lucky",
			"text": "<p>You have inexplicable luck that seems to kick in at just the right moment.</p><p>You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw.</p><p>You can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker's roll or yours.</p><p>If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled.</p><p>You regain your expended luck points when you finish a long rest.</p>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Везунчик",
			"text": "<p>Вам непонятным образом везёт как раз тогда, когда это нужно.</p><p><span>У вас есть 3 единицы удачи. Каждый раз, когда вы совершаете бросок атаки, проверку характеристики или спасбросок, вы можете потратить одну единицу удачи, чтобы бросить дополнительный к20. Вы можете решить потратить единицу удачи после обычного броска кости, но до определения последствий. После этого вы сами выбираете, какую к20 использовать для броска атаки, проверки характеристики или спасброска.</span></p><p>Вы также можете потратить одну единицу удачи, когда по вам совершается бросок атаки. Бросьте к20, а потом решите, какую из костей будет использовать атакующий, вашу или свою.</p><p>Если сразу несколько существ тратят единицы удачи для оказания влияния на один бросок, единицы отменяют друг друга и дополнительные кости никто не кидает.</p><p>Вы восстанавливаете потраченные единицы удачи в конце продолжительного отдыха.</p>"
		}
	},
	{
		"en": {
			"name": "Mage Slayer",
			"text": "<p>You have practiced techniques useful in melee combat against spell casters, gaining the following benefits:</p><ul><li>When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.</li><li>When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration.</li><li>You have advantage on saving throws against spells cast by creatures within 5 feet of you.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Убийца магов",
			"text": "<p>Вы разработали техники, полезные в рукопашном сражении с заклинателями, и получаете следующие преимущества:</p><ul><li>Если существо в пределах 5 футов от вас использует заклинание, вы можете реакцией совершить атаку рукопашным оружием по этому существу.</li><li>Когда вы причиняете урон существу, концентрирующемуся на заклинании, это существо совершает с помехой спасбросок для поддержания концентрации.</li><li>Вы совершаете с преимуществом спасброски от заклинаний, наложенных существами, находящимися в пределах 5 футов от вас.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Magic Initiate",
			"text": "<p>Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class's spell list.</p><p>In addition, choose one 1st-level spell from that same list. You learn that spell and, using this feat, can cast it at its lowest level. Once you cast it in this way, you must finish a long rest before you can cast it in this way again.</p><p>Your spellcasting ability for these spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard.</p>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Посвящённый в магию",
			"text": "<p>Выберите класс: бард, волшебник, друид, жрец, колдун или чародей. Вы узнаёте два заговора на свой выбор из списка заклинаний этого класса.</p><p>Кроме того, выберите одно заклинание 1 уровня из этого же списка. Вы узнаёте это заклинание и можете накладывать его на минимально возможном уровне. После использования заклинания вы должны закончить продолжительный отдых, прежде чем сможете снова использовать его этой чертой.</p><p>Базовая характеристика для этих заклинаний зависит от выбранного класса: Харизма для барда, колдуна и чародея; Интеллект для волшебника; Мудрость для друида и жреца.</p>"
		}
	},
	{
		"en": {
			"name": "Martial Adept",
			"text": "<p>You have martial training that allows you to perform special combat maneuvers. You gain the following benefits:</p><ul><li>You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).</li></ul><ul><li>If you already have superiority dice, you gain one more; otherwise, you have one superiority die, which is a d6. These dice are used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Воинский адепт",
			"text": "<p>Вы прошли военную подготовку, позволяющую совершать особые боевые приёмы. Вы получаете следующие преимущества:</p><ul><li>Вы узнаёте два приёма на свой выбор из списка архетипа воина Мастер боевых искусств. Если приём требует, чтобы цель совершила спасбросок для сопротивления эффекту приёма, Сл спасброска равна 8+ ваш бонус мастерства + модификатор Силы или Ловкости (на ваш выбор).</li><li>Если у вас уже есть кости превосходства, вы получаете ещё одну; в противном случае вы получаете одну кость превосходства: к6. Эта кость подпитывает ваши приёмы. Кость превосходства тратится, когда вы её используете, и восстанавливается после окончания короткого или продолжительного отдыха. Эта кость превосходства останется у вас даже если позже вы получите новые кости из другого источника.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Mobile",
			"text": "<p>You are exceptionally speedy and agile. You gain the following benefits:</p><ul><li>Your speed increases by 10 feet.</li><li>When you use the Dash action, difficult terrain doesn't cost you extra movement on that turn.</li><li>When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Подвижный",
			"text": "<p>Вы невероятно быстры и ловки. Вы получаете следующее преимущество:</p><ul><li>Ваша скорость увеличивается на 10  футов.</li><li>Когда вы используете действие Рывок, труднопроходимая местность в этом ходу не замедляет ваше перемещение.</li><li>Если вы совершаете рукопашную атак по существу, вы до конца этого хода не провоцируете от него атаки, вне зависимости от того, попадёте или нет.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Mounted Combatant",
			"text": "<p>You are a dangerous foe to face while mounted. While you are mounted and aren't incapacitated, you gain the following benefits:</p><ul><li>You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.</li><li>You can force an attack targeted at your mount to target you instead.</li><li>If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Верховой боец",
			"text": "<p>Вы — опасный враг, когда вы верхом на скакуне. Если вы находитесь верхом и не выведены из строя, вы получаете следующие преимущества:</p><ul><li>Вы совершаете с преимуществом броски рукопашных атак по существам, чей размер меньше вашего скакуна, и не находящимся при этом верхом.</li><li>Вы можете сделать так, что атака, нацеленная на вашего скакуна, будет перенацелена на вас.</li><li>Если ваш скакун попадает под эффект, позволяющий совершить спасбросок Ловкости для получения половины урона, то он не получает урон в случае успеха и получает всего половину урона при провале.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Observant",
			"text": "<p>Quick to notice details of your environment, you gain the following benefits:</p><ul><li>Increase your Intelligence or Wisdom score by 1, to a maximum of 20.</li><li>If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips.</li><li>You have a +5 bonus to your passive Perception and Investigation scores.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Внимательный",
			"text": "<p>Вы быстро улавливаете мелкие подробности и получаете следующие преимущества:</p><ul><li>Увеличьте значение Интеллекта или Мудрости на 1, при максимуме 20.</li><li>Если вы видите рот существа, когда оно говорит на языке, который вы понимаете, вы можете прочитать по его губам, что оно говорит.</li><li>Вы получаете бонус +5 к пассивной проверке Мудрости (Внимательность) и пассивной проверке Интеллекта (Анализ).</li></ul>"
		}
	},
	{
		"en": {
			"name": "Resilient",
			"text": "<p>Choose one ability score. You gain the following benefits:</p><ul><li>Increase the chosen ability score by 1, to a maximum of 20.</li><li>You gain proficiency in saving throws using the chosen ability.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Устойчивый",
			"text": "<p>Выберите одну характеристику. Вы получаете следующие преимущества:</p><p>Увеличьте значение выбранной характеристики на 1, при максимуме 20.</p><p><span>Вы получаете владение спасбросками этой характеристики.</span></p>"
		}
	},
	{
		"en": {
			"name": "Ritual Caster",
			"text": "<p>You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them.</p><p>When you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice. Choose one of the following classes: bard, cleric, druid, sorcerer, warlock, or wizard. You must choose your spells from that class's spell list, and the spells you choose must have the ritual tag. The class you choose also determines your spellcasting ability for these spells: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard.</p><p>If you come across a spell in written form, such as a magical spell scroll or a wizard's spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell's level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual book takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it.</p>",
			"source": "PHB",
			"type": "General",
			"pre": "Intelligence or Wisdom 13 or higher"
		},
		"ru": {
			"name": "Ритуальный заклинатель",
			"text": "<p>Вы узнали несколько заклинаний, которые можете накладывать как ритуалы. Эти заклинания записаны в ритуальной книге, которую вы должны держать в руке во время их использования.</p><p>Когда вы выбираете эту черту, вы получаете ритуальную книгу, содержащую два заклинания 1 уровня на ваш выбор. Выберите один из классов: бард, волшебник, друид, жрец, колдун или чародей. Вы должны выбирать заклинания из списков для этого класса, но у этих заклинаний должно быть ключевое слово «ритуал». Выбранный класс также определяет базовую характеристику для этих заклинаний: Харизма для барда, колдуна и чародея; Интеллект для волшебника; Мудрость для друида и жреца.</p>",
			"pre": "Интеллект или Мудрость 13 или выше"
		}
	},
	{
		"en": {
			"name": "Savage Attacker",
			"text": "<p>Once per turn when you roll damage for a melee weapon attack, you can reroll the damage dice and use either total.</p>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Дикий атакующий",
			"text": "<p>Один раз в ход, когда вы совершаете бросок урона для атаки рукопашным оружием, вы можете перебросить все кости урона оружия и использовать любой из вариантов.</p>"
		}
	},
	{
		"en": {
			"name": "Sentinel",
			"text": "<p>You have mastered techniques to take advantage of every drop in any enemy's guard, gaining the following benefits:</p><ul><li>When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn.</li><li>Creatures provoke opportunity attacks from you even if they take the Disengage action before leaving your reach.</li><li>When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Страж",
			"text": "<p>Вы овладели техникой, позволяющей пользоваться всеми брешами в обороне противника, и получаете следующие преимущества:</p><ul><li>Если вы попадаете по существу провоцированной атакой, скорость этого существа падает до 0 до конца текущего хода.</li><li>Существа перед выходом из вашей досягаемости провоцируют от вас атаки, даже если совершают действие Отход.</li><li>Если существо, находящееся в пределах 5 футов от вас, совершает атаку не по вам (и у цели нет этой черты), вы можете реакцией совершить атаку рукопашным оружием по атакующему.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Sharpshooter",
			"text": "<p>You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits:</p><ul><li> Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.</li><li> Your ranged weapon attacks ignore half cover and three-quarters cover.</li><li> Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.</li></ul>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Меткий стрелок",
			"text": "<p>Вы овладели дальнобойным оружием и можете совершать выстрелы, которые другие считали невозможными. Вы получаете следующие преимущества:</p><ul><li>Совершение атаки в пределах максимальной дистанции не вызывает помеху к броску атаки дальнобойным оружием.</li><li>Ваши атаки дальнобойным оружием игнорируют укрытие на половину и укрытие на три четверти.</li><li>Перед совершением атаки дальнобойным оружием, которым вы владеете, вы можете принять штраф −5 к броску атаки. Если такая атака попадает, вы добавляете +10 к урону от этой атаки.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Skilled",
			"text": "<p>You gain proficiency in any combination of 3 skills or tools of your choice.</p>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Одарённый",
			"text": "<p>Вы получаете владение любой комбинацией из трёх навыков и инструментов на ваш выбор.</p>"
		}
	},
	{
		"en": {
			"name": "Skulker",
			"text": "<p>You are expert at slinking through shadows. You gain the following benefits:</p><ul><li> You can try to hide when you are lightly obscured from the creature from which you are hiding.</li><li> When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position.</li><li> Dim light doesn't impose disadvantage on your Perception checks relying on sight.</li></ul>",
			"source": "PHB",
			"type": "General",
			"pre": "Dexterity 13 or higher"
		},
		"ru": {
			"name": "Проныра",
			"text": "<p>Вы знаете, как сливаться с тенями. Вы получаете следующие преимущества:</p><ul><li>Вы можете попытаться спрятаться даже если слабо заслонены от существа, от которого прячетесь.</li><li>Если вы прячетесь от существа и промахиваетесь по нему атакой дальнобойным оружием, эта атака не выдаёт вашу позицию.</li><li>Тусклый свет не причиняет помеху вашим проверкам Мудрости (Внимательность), полагающимся на зрение.</li></ul>",
			"pre": "Ловкость 13 или выше"
		}
	},
	{
		"en": {
			"name": "Spell Sniper",
			"text": "<p>You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits:</p><ul><li> When you cast a spell that requires you to make an attack roll, the spell's range is doubled.</li><li> Your ranged spell attacks ignore half cover and three-quarters cover.</li><li> You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you choose from.</li></ul>",
			"source": "PHB",
			"type": "General",
			"pre": "The ability to cast at least one spell"
		},
		"ru": {
			"name": "Меткие заклинания",
			"text": "<p>Вы узнали технику, улучшающую атаку некоторыми видами заклинаний, и получаете следующие преимущества:</p><ul><li>Если вы накладываете заклинание, требующее совершение броска атаки, дистанция заклинания удваивается.</li><li>Ваши дальнобойные атаки заклинаниями игнорируют укрытие на половину и укрытие на три четверти.</li><li>Вы узнаёте один заговор, требующий броска атаки. Выберите заговор из списка заклинаний барда, волшебника, друида, жреца, колдуна или чародея. Базовая характеристика для этого заговора зависит от выбранного класса: Харизма для барда, колдуна и чародея; Интеллект для волшебника; Мудрость для друида и жреца.</li></ul>",
			"pre": "Способность накладывать хотя бы одно заклинание"
		}
	},
	{
		"en": {
			"name": "Tough",
			"text": "<p>Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.</p>",
			"source": "PHB",
			"type": "General"
		},
		"ru": {
			"name": "Крепкий",
			"text": "<p>Максимум ваших хитов увеличивается на количество, равное удвоенному уровню, на котором берётся эта черта. Каждый раз, когда вы впоследствии будете получать уровень, максимум ваших хитов будет дополнительно увеличиваться на 2.</p>"
		}
	},
	{
		"en": {
			"name": "War Caster",
			"text": "<p>You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits:</p><ul><li> You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.</li><li> You can perform the somatic components of spells even when you have weapons or a shield in one or both hands.</li><li> When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.</li></ul>",
			"source": "PHB",
			"type": "Weapon",
			"pre": "The ability to cast at least one spell"
		},
		"ru": {
			"name": "Боевой заклинатель",
			"text": "<p>Вы научились накладывать заклинания в пылу сражения и узнали техники, дающие следующие преимущества:</p><ul><li>Вы совершаете с преимуществом спасброски Телосложения для поддержания концентрации на заклинании при получении урона.</li><li>Вы можете выполнять телесный компонент заклинаний даже если используете оружие или щит в одной или обеих руках.</li><li>Если перемещение враждебного существа провоцирует от вас атаку, вы можете вместо совершения провоцированной атаки реакцией наложить на это существо заклинание. Время накладывания этого заклинания должно быть «1 действие» и оно должно нацеливаться только на это существо.</li></ul>",
			"pre": "Способность накладывать хотя бы одно заклинание"
		}
	},
	{
		"en": {
			"name": "Blade Mastery",
			"text": "<p>You master the shortsword, longsword, scimitar, rapier, and greatsword. You gain the following benefits when using any of them:</p><ul><li> You gain a +1 bonus to attack rolls you make with the weapon.</li><li>On your turn, you can use your reaction to assume a parrying stance, provided you have the weapon in hand. Doing so grants a +1 bonus to your AC until the start of your next turn or until you're not holding the weapon.</li><li>When you make an opportunity attack with the weapon, you have advantage on the attack roll.</li></ul>",
			"source": "UA",
			"type": "Weapon"
		},
		"ru": {
			"name": "МАСТЕР КЛИНКА",
			"text": "<p> Вы мастер в использовании длинного, короткого и двуручного меча, а также, сабли и рапиры. Вы получаете следующие преимущества при использовании этого оружия: </p><ul><li>Вы получаете бонус +1 к броскам атаки, когда используете это оружие.</li><li>В свой ход, вы можете использовать вашу реакцию и принять парирующую стойку, при условии, что у вас есть это оружие в руке. Это дает вам +1 КД до начала вашего следующего хода или пока вы не потеряете оружие.</li><li>Вы совершаете атаку возможности этим оружием, с преимуществом.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Crossbow Expert",
			"text": "<p>Thanks to extensive practice with the crossbow, you gain the following benefits:</p><ul><li> You ignore the loading quality of crossbows with which you are proficient.</li><li> Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.</li><li> When you use the Attack action and attack with a one handed weapon, you can use a bonus action to attack with a hand crossbow you are holding.</li></ul>",
			"source": "PHB",
			"type": "Weapon"
		},
		"ru": {
			"name": "Эксперт в арбалетах",
			"text": "<p>Благодаря обширной практике с арбалетом вы получаете следующие преимущества:</p><ul><li>Вы игнорируете свойство «перезарядка» у арбалетов, которыми владеете.</li><li>Нахождение в пределах 5 футов от враждебного существа не накладывает помеху к вашим броскам дальнобойной атаки.</li><li>Когда вы используете действие Атака и атакуете одноручным оружием, вы можете бонусным действием атаковать заряженным ручным арбалетом, находящимся в руке.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Fell Handed",
			"text": "<p>You master the handaxe, battleaxe, greataxe, warhammer, and maul. You gain the following benefits when using any of them:</p><ul><li>You gain a +1 bonus to attack rolls you make with the weapon.</li><li>Whenever you have advantage on a melee attack roll you make with the weapon and hit, you can knock the target prone if the lower of the two d20 rolls would also hit the target.</li><li>Whenever you have disadvantage on a melee attack roll you make with the weapon, the target takes bludgeoning damage equal to your Strength modifier (minimum of 0) if the attack misses but if the higher of the two d20 rolls would have hit.</li><li>If you use the Help action to aid an ally's melee attack while you're wielding the weapon, you knock the target's shield aside momentarily. In addition to the ally gaining advantage on the attack roll, the ally gains a +2 bonus to the roll if the target is using a shield.</li></ul>",
			"source": "UA",
			"type": "Weapon"
		},
		"ru": {
			"name": "РАЗЯЩАЯ РУКА",
			"text": "<p> Вы мастер в использовании одноручного и боевого топора, а так же секиры, молота и боевого молота. </p><p> Вы получаете следующие преимущества при использовании любого из них: </p><ul><li>Вы получаете бонус +1 к броскам атаки, когда используете это оружие.</li><li>Всякий раз, когда вы атакуете с преимуществом в ближнем бою, вы можете сбить цель с ног, если каждое значение из двух к20 попало в цель.</li><li>Всякий раз, когда у вас помеха в ближнем бою, вы наносите цели дробящий урон, равный вашему модификатору силы (минимум 0), если вы промахиваетесь, но на втором к20 значение попало в цель.</li><li>При использовании действия Помощь, чтобы помочь в ближнем бою союзнику, то вы на мгновение можете отбросить щит противника в сторону. В дополнение к преимуществу на бросок атаки, союзник получает бонус +2 к броску, если цель использует щит.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Flail Mastery",
			"text": "<p>The flail is a tricky weapon to use, but you have spent countless hours mastering it. You gain the following benefits.</p><ul><li> You gain a +1 bonus to attack rolls you make with the weapon.</li><li>As a bonus action on your turn, you can prepare yourself to extend your flail to sweep over targets' shields. Until the end of this turn, your attack rolls with a flail gain a +2 bonus against any target using a shield.</li><li>When you hit with an opportunity attack using a flail, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone.</li></ul>",
			"source": "UA",
			"type": "Weapon"
		},
		"ru": {
			"name": "МАСТЕР ВЛАДЕНИЯ ЦЕПОМ",
			"text": "<p> Цеп является сложным оружием, в использовании, но вы потратили множество часов, мастерски овладев им. Вы получаете следующие преимущества: </p><ul><li>Вы получаете бонус +1 к броскам атаки, когда используете это оружие.</li><li>В качестве бонусного действия вы можете удлинить свой цеп и обвить вражеский щит. Если цель использует щит, то вы получаете +2 к атаке против нее.</li><li>Если вы совершаете провоцированную атаку с помощью цепа, цель должна преуспеть в спасброске Силы со Сложностю 8 + бонус владения + бонус Силы или будет сбита с ног.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Polearm Master",
			"text": "<p>You can keep your enemies at bay with reach weapons. You gain the following benefits:</p><ul><li>When you take the Attack action and attack with only a glaive, halberd, or quarterstaff, you can use a bonus action to make a melee attack with the opposite end of the weapon. This attack uses the same ability modifier as the primary weapon. The weapon's damage die for this attack is a d4, and the attack deals bludgeoning damage.</li><li>While you are wielding a glaive, halberd, pike, or quarterstaff, other creatures provoke an opportunity attack from you when they enter the reach you have with that weapon.</li></ul>",
			"source": "PHB",
			"type": "Weapon"
		},
		"ru": {
			"name": "Мастер древкового оружия",
			"text": "<p>Вы можете сдерживать врагов оружием со свойством «досягаемость». Вы получаете следующие преимущества:</p><ul><li>Если вы совершаете действие Атака и атакуете только алебардой, боевым посохом или глефой, вы можете бонусным действием совершить рукопашную атаку противоположным концом оружия. Кость урона для этой атаки равна к4, и атака причиняет дробящий урон. Бонусная атака использует модификатор той же характеристики, что и основная.</li><li>Если вы используете алебарду, боевой посох, глефу или пику, другие существа провоцируют от вас атаку, когда входят в пределы вашей досягаемости.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Shield Master",
			"text": "<p>You use shields not just for protection but also for offense. You gain the following benefits while you are wielding a shield:</p><ul><li> If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield.</li><li> If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.</li><li> If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect.</li></ul>",
			"source": "PHB",
			"type": "Weapon"
		},
		"ru": {
			"name": "Мастер щитов",
			"text": "<p>Вы используете щиты не только для обороны, но и для нападения. Вы получаете следующие преимущества, когда используете щит:</p><ul><li>Если вы в свой ход совершаете действие Атака, вы можете бонусным действием попытаться оттолкнуть щитом существо, находящееся в пределах 5 футов от вас.</li><li>Если вы не выведены из строя, вы можете добавлять бонус к КД от щита ко всем спасброскам Ловкости, совершённым от заклинаний и прочих вредоносных эффектов, нацеленных только на вас.</li><li>Если вы подвергаетесь действию эффекта, позволяющего совершить спасбросок Ловкости для получения половины урона, вы можете реакцией вообще не получить урон в случае успешного спасброска, выставив щит между собой и источником эффекта.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Spear Mastery",
			"text": "<p>Though the spear is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits.</p><ul><li>You gain a +1 bonus to attack rolls you make with a spear.</li><li>When you use a spear, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.)</li><li>You can set your spear to receive a charge. As a bonus action, choose a creature you can see that is at least 20 feet away from you. If that creature moves within your spear's reach on its next turn, you can make a melee attack against it with your spear as a reaction. If the attack hits, the target takes an extra 1d8 piercing damage, or an extra 1d10 piercing damage if you wield the spear with two hands. You can't use this ability if the creature used the Disengage action before moving.</li><li>As a bonus action on your turn, you can increase your reach with a spear by 5 feet for the rest of your turn.</li></ul>",
			"source": "UA",
			"type": "Weapon"
		},
		"ru": {
			"name": "МАСТЕР ВЛАДЕНИЯ КОПЬЕМ",
			"text": "<p> Хотя копье простое оружие, вы овладели им в совершенстве. Вы получаете следующие преимущества: </p><ul><li>Вы получаете бонус +1 к броскам атаки, когда используете это оружие.</li><li>При использовании копья, его урон меняется с 1к6 на 1к8, и с 1к8 на 1к10, если вы держите его двумя руками. (Это преимущество не суммируется с другими эффектами, изменяющими кость урона.)</li><li>В качестве бонусного действия, выберите существо в пределах вашей видимости, в 20 футах от вас. Если в следующий ход существо приблизится на расстояние удара вашего копья, вы можете совершить рукопашную атаку копьем против него в качестве реакции. Если атака попадает в цель, она получает дополнительный 1к8 колющего урона или 1к10, если вы держите копье двумя руками. Вы не можете использовать эту способность, если существо использовало действие Отход перед перемещением.</li><li>В качестве бонусного действия в свой ход, вы можете увеличить дальность урона с копьем на 5 футов до окончания этого хода.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Tavern Brawler",
			"text": "<p>Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits:</p><ul><li> Increase your Strength or Constitution score by 1, to a maximum of 20.</li><li> You are proficient with improvised weapons.</li><li> Your unarmed strikes use a d4 for damage.</li><li> When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target. A grapple check is a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check.</li></ul>",
			"source": "PHB",
			"type": "Weapon"
		},
		"ru": {
			"name": "Драчун",
			"text": "<p>Привыкнув к мордобою с использованием подручных предметов, вы получаете следующие преимущества:</p><ul><li>Увеличьте значение Силы или Телосложения на 1, при максимуме 20.</li><li>Вы получаете владение импровизированным оружием.</li><li>Ваш безоружный удар использует для урона к4.</li><li>Если вы в свой ход попадаете по существу безоружным ударом или импровизированным оружием, вы можете бонусным действием попытаться захватить цель.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Weapon Master",
			"text": "<p>You have practiced extensively with a variety of weapons, gaining the following benefits:</p><ul><li> Increase your Strength or Dexterity score by 1, to a maximum of 20.</li><li> You gain proficiency with four simple or martial weapons of your choice.</li></ul>",
			"source": "PHB",
			"type": "Weapon"
		},
		"ru": {
			"name": "Мастер оружия",
			"text": "<p>Вы знаете</span> как пользоваться множеством видов оружия и получаете следующие преимущества:</p><ul><li>Увеличьте значение Силы или Ловкости на 1, при максимуме 20.</li><li>Вы получаете владение четырьмя выбранными видами оружия. Выбранное оружие должно быть или простым или воинским.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Lightly Armored",
			"text": "<p>You have trained to master the use of light armor, gaining the following benefits:</p><ul><li>Increase your Strength or Dexterity score by 1, to a maximum of 20.</li><li>You gain proficiency with light armor.</li></ul>",
			"source": "PHB",
			"type": "Armor"
		},
		"ru": {
			"name": "Знаток лёгких доспехов",
			"text": "<p>Вы обучились ношению лёгких доспехов и получаете следующие преимущества:</p><ul><li>Увеличьте значение Силы или Ловкости на 1, при максимуме 20.</li><li>Вы получаете владение лёгкими доспехами.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Moderately Armored",
			"text": "<p>You have trained to master the use of medium armor and shields, gaining the following benefit:</p><ul><li>Increase your Strength or Dexterity score by 1, to a maximum of 20.</li><li>You gain proficiency with medium armor and shields.</li></ul>",
			"source": "PHB",
			"type": "Armor",
			"pre": "Proficiency with light armor"
		},
		"ru": {
			"name": "Знаток средних доспехов",
			"text": "<p>Вы обучились ношению средних доспехов и щитов, и получаете следующие преимущества:</p><ul><li>Увеличьте значение Силы или Ловкости на 1, при максимуме 20.</li><li>Вы получаете владение средними доспехами и щитами.</li></ul>",
			"pre": "Владение лёгкими доспехами"
		}
	},
	{
		"en": {
			"name": "Medium Armor Master",
			"text": "<p>You have practiced moving in medium armor to gain the following benefits:</p><ul><li>Wearing medium armor doesn't impose disadvantage on your Dexterity (Stealth) checks.</li><li>When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher.</li></ul>",
			"source": "PHB",
			"type": "Armor",
			"pre": "Proficiency with medium armor"
		},
		"ru": {
			"name": "Мастер средних доспехов",
			"text": "<p>Вы привыкли к перемещению в средних доспехах и получаете следующие преимущества:</p><ul><li>Ношение среднего доспеха не накладывает помеху к проверкам Ловкости (Скрытность).</li><li>Когда вы носите средний доспех, вы можете добавлять к КД 3, а 2, если ваша Ловкость 16 или выше.</li></ul>",
			"pre": "Владение средними доспехами"
		}
	},
	{
		"en": {
			"name": "Heavily Armored",
			"text": "<p>You have trained to master the use of heavy armor, gaining the following benefits:</p><ul><li>Increase your Strength score by 1, to a maximum of 20.</li><li>You gain proficiency with heavy armor.</li></ul>",
			"source": "PHB",
			"type": "Armor",
			"pre": "Proficiency with medium armor"
		},
		"ru": {
			"name": "Знаток тяжёлых доспехов",
			"text": "<p>Вы обучились ношению тяжёлых доспехов и получаете следующие преимущества:</p><ul><li>Увеличьте значение Силы на 1, при максимуме 20.</li><li>Вы получаете владение тяжёлыми доспехами.</li></ul>",
			"pre": "Владение средними доспехами"
		}
	},
	{
		"en": {
			"name": "Heavy Armor Master",
			"text": "<p>You can use your armor to deflect strikes that would kill others. You gain the following benefits:</p><ul><li>Increase your Strength score by 1, to a maximum of 20.</li><li>While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from non-magical weapons is reduced by 3.</li></ul>",
			"source": "PHB",
			"type": "Armor",
			"pre": "Proficiency with heavy armor"
		},
		"ru": {
			"name": "Мастер тяжёлых доспехов",
			"text": "<p>Вы можете своим доспехом отклонять удары, которые других убили бы. Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение Силы на 1, при максимуме 20.</li><li>Если вы носите тяжёлый доспех, дробящий, колющий и рубящий урон, получаемый вами от немагического оружия, уменьшается на 3.</li></ul>",
			"pre": "Владение тяжёлыми доспехами"
		}
	},
	{
		"en": {
			"name": "Acrobat",
			"text": "<p>You become more nimble, gaining the following benefits:</p><ul><li> Increase your Dexterity score by 1, to a maximum of 20.</li><li> You gain proficiency in the Acrobatics skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li> As a bonus action, you can make a DC 15 Acrobatics check. If you succeed, difficult terrain doesn't cost you extra movement until the end of the current turn.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "АКРОБАТ",
			"text": "<p> Вы становитесь более проворным, получая следующие преимущества: </p><ul><li>Увеличьте значение Ловкости на 1, при максимуме 20.</li><li>Вы получаете навык Акробатика. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>В качестве бонусного действия вы можете совершить проверку Акробатики (Ловкость) со Сложностью 15. Если бросок был успешным – по труднопроходимой местности вы двигаетесь без штрафов.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Animal Handler",
			"text": "<p>You master the techniques needed to train and handle animals. You gain the following benefits:</p><ul><li> Increase your Wisdom score by 1, to a maximum of 20.</li><li> You gain proficiency in the Animal Handling skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li> You can use a bonus action on your turn to command one friendly beast within 60 feet of you that can hear you and that isn't currently following the command of someone else. You decide now what action the beast will take and where it will move during its next turn, or you issue a general command that lasts for 1 minute, such as to guard a particular area.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "ДРЕССИРОВЩИК",
			"text": "<p> Вы изучили методики, которые позволяют вам приучить или управлять животными. Вы получаете следующие бонусы: </p><ul><li>Увеличьте значение Мудрость на 1, при максимуме 20.</li><li>Вы получаете навык Уход за животными. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Вы можете потратить бонусное действие на дружественного зверя, который находится в радиусе 60 футов от вас. Он должен слышать вас и не выполнять команды других. Вы решаете, какое действие совершит зверь и в каком направлении он должен будет двигаться в течение следующего хода. Вы также можете дать команду, которую зверь будет выполнять в течение 1 минуты, к примеру, охранять местность.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Arcanist",
			"text": "<p>You study the arcane arts, gaining the following benefits:</p><ul><li> Increase your Intelligence score by 1, to a maximum of 20.</li><li> You gain proficiency in the Arcana skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li> You learn the Prestidigitation and Detect Magic spells. You can cast Detect Magic once without expending a spell slot, and you regain the ability to do so when you finish a long rest.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "АРКАНИСТ",
			"text": "<p> Вы изучаете искусство магии и получаете следующие преимущества: </p><ul><li>Увеличьте значение Интеллекта на 1, при максимуме 20.</li><li>Вы получаете навык Магия. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Вы изучаете заклинания Фокусы [Prestidigitation] и Обнаружение магии [Detect magic]. Вы можете один раз применить заклинание Обнаружение магии [Detect magic] без затрат ячеек. У вас появляется возможность сделать это еще раз после длинного отдыха.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Brawny",
			"text": "<p>You become stronger, gaining the following benefits:</p><ul><li> Increase your Strength score by 1, to a maximum of 20.</li><li> You gain proficiency in the Athletics skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li> You count as if you were one size larger for the purpose of determining your carrying capacity.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "МУСКУЛИСТЫЙ",
			"text": "<p> Вы становитесь сильнее, получая следующие бонусы: </p><ul><li>Увеличьте значение Силы на 1, при максимуме 20.</li><li>Вы получаете навык Атлетика. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Вы считаетесь существом на один размер большее, чем являетесь на самом деле для определения веса, который вы способны поднимать.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Diplomat",
			"text": "<p>You master the arts of diplomacy, gaining the following benefits:</p><ul><li> Increase your Charisma score by 1, to a maximum of 20.</li><li> You gain proficiency in the Persuasion skill. If you are already proficient in this skill, you add double your proficiency bonus to checks you make with it.</li><li> If you spend 1 minute talking to someone who can understand what you say, you can make a Persuasion check contested by the creature's Insight check. If you or your companions are fighting the creature, your check automatically fails. If your check succeeds, the target is charmed by you as long as it remains within 60 feet of you and for 1 minute thereafter.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "ДИПЛОМАТ",
			"text": "<p> Вы изучили искусство дипломатии, получив следующие преимущества: </p><ul><li>Увеличьте значение Харизмы на 1, при максимуме 20.</li><li>Вы получаете навык Убеждение. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Если вы потратите 1 минуту на разговор с тем, кто вас понимает, вы можете совершить проверку Убеждения (Харизма) против броска Проницательности (Мудрость). Если ваши союзники сражаются с этим существом, ваша проверка автоматически провалена. Если ваша проверка успешна, цель очарована вами до тех пор, пока находится в радиусе 30 футов от вас или сроком до 1 минуты.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Empathic",
			"text": "<p>You possess keen insight into how other people think and feel. You gain the following benefits:</p><ul><li> Increase your Wisdom score by 1, to a maximum of 20.</li><li> You gain proficiency in the Insight skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li> You can use your action to try to get uncanny insight about one humanoid you can see within 30 feet of you. Make an Insight check contested by the target's Deception. If your check succeeds, you have advantage on attack rolls and ability checks against the target until the end of your next turn.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "ЭМПАТ",
			"text": "<p> Вы обладаете чуткой способностью понимать то, о чем думают и что чувствуют другие. Вы получаете следующие бонусы: </p><ul><li>Увеличьте значение Мудрости на 1, при максимуме 20.</li><li>Вы получаете навык Проницательность. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Вы можете потратить действие, чтобы изучить одного из гуманоидов в радиусе 30 футов, которого вы можете видеть. Совершите проверку Проницательности (Мудрость) против Обмана (Харизма) цели. При успехе вы получаете преимущество при атаках и проверках навыков против этой цели до конца следующего вашего хода.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Historian",
			"text": "<p>Your study of history rewards you with the following benefits:</p><ul><li> Increase your Intelligence score by 1, to a maximum of 20.</li><li> You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li> When you take the Help action to aid another creature's ability check, you can make a DC 15 History check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "ИСТОРИК",
			"text": "<p> Изучение истории дает вам следующие преимущества: </p><ul><li>Увеличьте значение Интеллекта на 1, при максимуме 20.</li><li>Вы получаете навык История. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Когда вы решаете помочь другому существу совершить проверку, вы можете совершить бросок Истории (Интеллект) со Сложностью 15. При успехе существо, которому вы помогаете, получает бонус к своему броску, равный вашему бонусу мастерства. Чтобы получить этот бонус, существо должно понимать вас.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Investigator",
			"text": "<p>You have an eye for detail and can pick out the smallest clues. You gain the following benefits:</p><ul><li> Increase your Intelligence score by 1, to a maximum of 20.</li><li> You gain proficiency in the Investigation skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li> You can take the Search action as a bonus action.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "СЫЩИК",
			"text": "<p> Ваш глаз натренирован выделять значимые детали и находить зацепки. Вы получаете следующие бонусы: </p><ul><li>Увеличьте значение Интеллекта на 1, при максимуме 20.</li><li>Вы получаете навык Анализ. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Вы можете использовать Поиск в качестве бонусного действия.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Medic",
			"text": "<p>You master the physician's arts, gaining the following benefits:</p><ul><li> Increase your Wisdom score by 1, to a maximum of 20.</li><li> You gain proficiency in the Medicine skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li> During a short rest, you can clean and bind the wounds of up to six willing beasts and humanoids. Make a DC 15 Medicine check for each creature. On a success, if a creature spends a Hit Die during this rest, that creature can forgo the roll and instead regain the maximum number of hit points the die can restore. A creature can do so only once per rest, regardless of how many Hit Dice it spends.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "МЕДИК",
			"text": "<p> Ваши познания в физиологии дают вам следующие преимущества: </p><ul><li>Увеличьте значение Мудрости на 1, при максимуме 20.</li><li>Вы получаете навык Медицина. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Во время короткого отдыха, вы можете очистить и забинтовать раны у не более, чем шести согласных зверей или гуманоидов. Совершите бросок Медицины (Мудрость) со сложностью 15. При успехе, если существо тратит кости здоровья в течение этого отдыха, это существо может взамен получить максимальное число здоровья, которое может принести эта кость. Существо может сделать это только один раз за отдых, вне зависимости от доступного числа кубов здоровья.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Menacing",
			"text": "<p>You become fearsome to others, gaining the following benefits:</p><ul><li> Increase your Charisma score by 1, to a maximum of 20.</li><li> You gain proficiency in the Intimidation skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li> When you take the Attack action on your turn, you can replace one attack with an attempt to demoralize one humanoid you can see within 30 feet of you that can see and hear you. Make a Intimidation check contested by the target's Insight. If your check succeeds, the target is frightened until the end of your next turn. If your check fails, the target can't be frightened by you in this way for 1 hour.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "УГРОЖАЮЩИЙ",
			"text": "<p> Вы становитесь угрозой для каждого, получая следующие преимущества: </p><ul><li>Увеличьте значение Харизмы на 1, при максимуме 20.</li><li>Вы получаете навык Запугивание. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверках этого навыка.</li><li>Когда вы, в качестве действия, совершаете атаку, то вы можете заменить эту атаку на снижение морали одной цели в радиусе 30 футов, которая может видеть и слышать вас и которую видите вы. Совершите бросок Запугивания (Харизма) против Проницательности (Мудрость) цели. При успехе ваша цель испугана до конца вашего следующего хода. Если бросок провален, то цель не может быть напугана в течение 1 часа.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Naturalist",
			"text": "<p>Your extensive study of nature rewards you with the following benefits:</p><ul><li>Increase your Intelligence score by 1, to a maximum of 20.</li><li>You gain proficiency in the Nature skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li>You learn the Druidcraft and Detect Poison and Disease spells. You can cast Detect Poison and Disease once without expending a spell slot, and you regain the ability to do so when you finish a long rest.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "НАТУРАЛИСТ",
			"text": "<p> Ваши познания природы дают вам следующие бонусы: </p><ul><li>Увеличьте значение Интеллекта на 1, при максимуме 20.</li><li>Вы получаете навык Природа. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Вы изучаете заклинания Искусство друидов [Druidcraft] и Обнаружение болезней и яда [Detect poison and disease]. Вы можете использовать Обнаружение болезней и ядов один раз без затрат ячеек заклинаний. У вас появляется возможность сделать это еще раз после длинного отдыха.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Perceptive",
			"text": "<p>You hone your senses until they become razor sharp. You gain the following benefits:</p><ul><li>Increase your Wisdom score by 1, to a maximum of 20.</li><li>You gain proficiency in the Perception skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li>Being in a lightly obscured area doesn't impose disadvantage on your Perception checks if you can both see and hear.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "ВОСПРИИМЧИВЫЙ",
			"text": "<p> Вы развили свои чувства до предела, получив следующие бонусы: </p><ul><li>Увеличьте значение Мудрости на 1, при максимуме 20.</li><li>Вы получаете навык Внимательность. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Находясь в затененной области, вы не получаете помех при совершении броска Внимательность (Мудрость), если можете слышать и видеть.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Performer",
			"text": "<p>You master performance so that you can command any stage. You gain the following benefits:</p><ul><li>Increase your Charisma score by 1, to a maximum of 20.</li><li>You gain proficiency in the Performance skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li>While performing, you can try to distract one humanoid you can see. The humanoid must see and hear you. Make a Performance check contested by the humanoid's Insight check. If your check succeeds, you grab the humanoid's attention enough that it makes Perception and Investigation checks with disadvantage until you stop performing.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "ЗНАТОК СЦЕНЫ",
			"text": "<p> Вы неподражаемы на сцене и можете завладеть сердцами зрителей. Вы получаете следующие преимущества: </p><ul><li>Увеличьте значение Харизмы на 1, при максимуме 20.</li><li>Вы получаете навык Выступление. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Выступая перед людьми, вы можете отвлечь одно существо, которое можете видеть вы и которое может видеть и слышать вас. Совершите проверку Выступления (Харизма) против броска Проницательности (Мудрость) цели. Если бросок был успешным, то ваша цель отвлечена, а все проверки Внимательности (Мудрость) и Анализа (Интеллект) совершаются ею с помехой.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Quick-Fingered",
			"text": "<p>Your nimble fingers and agility let you perform sleight of hand. You gain the following benefits:</p><ul><li> Increase your Dexterity score by 1, to a maximum of 20.</li><li> You gain proficiency in the Sleight of Hand skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li> As a bonus action, you can make a Sleight of Hand check to plant something on someone else, conceal an object on a creature, lift a purse, or take something from a pocket.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "ЛОВКИЕ ПАЛЬЦЫ",
			"text": "<p> Ваши ловкие пальцы позволяют вам творить разнообразные трюки. Вы получаете следующие бонусы: </p><ul><li>Увеличьте значение Ловкости на 1, при максимуме 20.</li><li>Вы получаете навык Ловкость рук. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>В качестве бонусного действия вы можете совершить проверку Ловкости рук (Ловкость), чтобы разместить что-то на ком-то, спрятать какой-то объект от существа, поднять что-либо или украсть что-то из кармана.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Silver-Tongued",
			"text": "<p>You develop your conversational skill to better deceive others. You gain the following benefits:</p><ul><li> Increase your Charisma score by 1, to a maximum of 20.</li><li> You gain proficiency in the Deception skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li> When you take the Attack action on your turn, you can replace one attack with an attempt to deceive one humanoid you can see within 30 feet of you that can see and hear you. Make a Deception check contested by the target's Insight. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 1 hour.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "КРАСНОРЕЧИВЫЙ",
			"text": "<p> Вы используете свои навыки красноречия, чтобы обманывать других. Вы получаете следующие бонусы: </p><ul><li>Увеличьте значение Харизмы на 1, при максимуме 20.</li><li>Вы получаете навык Обман. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Когда вы атакуете в свой ход, вы можете вместо этого попытаться обмануть одного гуманоида в радиусе 30 футов, который может видеть и слышать вас. Совершите проверку Обмана (Харизма) против броска Проницательности (Мудрость) цели. При успехе ваше движение не вызывает провоцированную атаку, а ваши атаки по этой цели совершаются с преимуществом. Оба бонуса длятся до конца вашего следующего хода или до тех пор, пока вы не используете эту способность на другую цель. Если ваша проверка провалена, то цель не может быть обманута в течение 1 часа.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Stealthy",
			"text": "<p>You know how best to hide. You gain the following benefits:</p><ul><li>Increase your Dexterity score by 1, to a maximum of 20.</li><li>You gain proficiency in the Stealth skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li>If you are hidden, you can move up to 10 feet in the open without revealing yourself if you end the move in a position where you're not clearly visible.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "СКРЫТНЫЙ",
			"text": "<p> Вы знаете, где лучше всего прятаться. Вы получаете следующие преимущества: </p><ul><li>Увеличьте значение Ловкости на 1, при максимуме 20.</li><li>Вы получаете навык Скрытность. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Если вы скрыты от чужих взглядов, вы можете двигаться в пределах 10 футов по открытому пространству без возможности быть обнаруженным. Это сработает только в том случае, если вы закончите движение так, что вы не будете находиться в прямой видимости.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Survivalist",
			"text": "<p>You master wilderness lore, gaining the following benefits:</p><ul><li>Increase your Wisdom score by 1, to a maximum of 20.</li><li>You gain proficiency in the Survival skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li>You learn the a href='https://tentaculus.ru/spells/#q=alarm&view=text'>Alarm</a> spell. You can cast it once without expending a spell slot, and you regain the ability to do so when you finish a long rest.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "ВЫЖИВШИЙ",
			"text": "<p> Вы – знаток дикой природы, который получает следующие преимущества: </p><ul><li>Увеличьте вашу Мудрость на 1 очко, максимум 20.</li><li>Вы получаете навык Выживание. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Вы изучаете заклинание <a href='https://tentaculus.ru/spells/#q=alarm&view=text'>Тревога</a>. Вы можете использовать его один раз без затрат ячеек заклинаний. У вас появляется возможность сделать это еще раз после длинного отдыха.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Theologian",
			"text": "<p>Your extensive study of religion rewards you with the following benefits:</p><ul><li>Increase your Intelligence score by 1, to a maximum of 20.</li><li>You gain proficiency in the Religion skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.</li><li>You learn the Thaumaturgy cantrip and Detect Evil and Good spells. You can cast Detect Evil and Good once without expending a spell slot, and you regain the ability to do so when you finish a long rest.</li></ul>",
			"source": "UA",
			"type": "Skill Proficiency"
		},
		"ru": {
			"name": "ТЕОЛОГ",
			"text": "<p> Ваши познания в религии дают вам следующие бонусы: </p><ul><li>Увеличьте значение Интеллекта на 1, при максимуме 20.</li><li>Вы получаете навык Религия. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>Вы изучаете заклинания Чудотворство [Thaumaturgy] и Обнаружение добра и зла [Detect evil and good]. Вы можете использовать Обнаружение добра и зла [Detect evil and good] один раз без затрат ячеек заклинаний. Вы должны окончить продолжительный отдых, прежде чем сможете использовать эту способность снова.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Alchemist",
			"text": "<p>You have studied the secrets of alchemy and are an expert in its practice, gaining the following benefits:</p><ul><li>Increase your Intelligence score by 1, to a maximum of 20.</li><li>You gain proficiency with alchemist's supplies. If you are already proficient with them, you double your proficiency bonus to checks you make with them.</li><li>As an action, you can identify one potion within 5 feet of you, as if you had tasted it. You must see the liquid for this benefit to work.</li><li>Over the course of any short rest, you can temporarily improve the potency of one potion of healing of any rarity. To use this benefit, you must have alchemist's supplies with you, and the potion must be within reach. If the potion is drunk no more than 1 hour after the short rest ends, the creature drinking the potion can forgo the potion's die roll and regains the maximum number of hit points that the potion can restore.</li></ul>",
			"source": "UA",
			"type": "Tool Proficiency"
		},
		"ru": {
			"name": "АЛХИМИК",
			"text": "<p> Вы изучали секреты алхимии и, являясь экспертом в своем деле, получаете следующие преимущества: </p><ul><li>Увеличьте значение Интеллекта на 1, при максимуме 20.</li><li>Вы получаете владение набором алхимика. Если вы уже владеете этим навыком, то бонус мастерства удваивается при проверке этого навыка.</li><li>В качестве действия, вы можете идентифицировать одно видимое вами зелье в пределах 5 футов от вас, как если бы вы попробовали его.</li><li>В течение любого короткого отдыха, вы можете временно улучшить эффективность одного зелья исцеления любой редкости. Вы должны иметь набор алхимика и зелье должно быть в пределах вашей досягаемости. Если зелье выпито не более чем через 1 час после окончания короткого отдыха, существо, выпившее зелье, может восстановить максимальное количество хитов, которое зелье восстанавливает.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Burglar",
			"text": "<p>You pride yourself on your quickness and your close study of certain clandestine activities. You gain the following benefits:</p><ul><li>Increase your Dexterity score by 1, to a maximum of 20.</li><li>You gain proficiency with thieves' tools. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.</li></ul>",
			"source": "UA",
			"type": "Tool Proficiency"
		},
		"ru": {
			"name": "ВЗЛОМЩИК",
			"text": "<p> Вы гордитесь своей скоростью и обширными знаниями в области взлома замков. Вы получаете следующие преимущества: </p><ul><li>Увеличьте значение Ловкости на 1, при максимуме 20.</li><li>Вы получаете владение воровскими инструментами. Если оно у вас уже есть, то бонус мастерства удваивается при их использовании.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Gourmand",
			"text": "<p>You have mastered a variety of special recipes, allowing youto prepare exotic dishes with useful effects. You gain the following benefits:</p><ul><li> Increase your Constitution score by 1, to a maximum of 20.</li><li> You gain proficiency with cook's utensils. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.</li><li> As an action, you can inspect a drink or plate of food within 5 feet of you and determine whether it is poisoned, provided that you can see and smell it.</li><li> During a long rest, you can prepare and serve a meal that helps you and your allies recover from the rigors of adventuring, provided you have suitable food, cook's utensils, and other supplies on hand. The meal serves up to six people, and each person who eats it regains two additional Hit Dice at the end of the long rest. In addition, those who partake of the meal have advantage on Constitution saving throws against disease for the next 24 hours.</li></ul>",
			"source": "UA",
			"type": "Tool Proficiency"
		},
		"ru": {
			"name": "ГУРМАН",
			"text": "<p> Вы освоили множество специальных рецептов, что позволяет Вам готовить экзотические блюда с полезными эффектами. Вы получаете следующие преимущества: </p><ul><li>Увеличьте значение Телосложения на 1, при максимуме 20.</li><li>Вы получаете владение поварскими инструментами. Если вы уже опытный с ними, то бонус мастерства удваивается при этих проверках.</li><li>В качестве действия, вы можете проверить напиток или тарелку с едой в пределах 5 футов от вас и определить, является ли они отравленными, при условии, что вы можете увидеть и понюхать его.</li><li>Во время продолжительного отдыха, вы можете готовить и подавать еду, которая поможет вам и вашим союзникам перенести тягости путешествий, при условии, что у вас есть подходящие продукты питания, набор повара и другие материалы под рукой. Пищи хватает на шесть человек, и каждый, кто ест ее, возвращает себе две дополнительные кости хитов в конце длинного отдыха. Кроме того, получают преимущество в спасброске Телосложения против болезней в течение следующих 24 часов.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Master of Disguise",
			"text": "<p>You have honed your ability to shape your personality and to read the personalities of others. You gain the following benefits:</p><ul><li>Increase your Charisma score by 1, to a maximum of 20.</li><li>You gain proficiency with the disguise kit. If you are already proficient with it, you add double your proficiency bonus to checks you make with it.</li><li>If you spend 1 hour observing a creature, you can then spend 8 hours crafting a disguise you can quickly don to mimic that creature. Making the disguise requires a disguise kit. You must make checks as normal to disguise yourself, but you can assume the disguise as an action.</li></ul>",
			"source": "UA",
			"type": "Tool Proficiency"
		},
		"ru": {
			"name": "МАСТЕР МАСКИРОВКИ",
			"text": "<p> Вы оттачивали способность менять свою личность и копировать личности других. Вы получаете следующие преимущества: </p><ul><li>Увеличьте значение Харизмы на 1, при максимуме 20.</li><li>Вы получаете владение набором для грима. Если вы уже владеете им, то вы добавляете двойной бонус владения к проверкам.</li><li>Если вы проводите 1 час, наблюдая за существом, вы можете потратить 8 часов на создание маскировки и можете имитировать это существо. Создание маскировки требует набора для грима. Вы должны сделать проверку, как обычно, чтобы замаскировать себя, но вы можете применить маскировку в качестве действия.</li></ul>"
		}
	},
	{
		"en": {
			"name": "Barbed Hide",
			"text": "<p>One of your ancestors was a barbed devil or other spiky fiend. Barbs protrude from your head. You gain the following benefits:</p><ul><li> Increase your Constitution or Charisma score by 1, up to a maximum of 20.</li><li> You gain proficiency in the Intimidation skill. If you're already proficient in it, your proficiency bonus is doubled for any check you make with it.</li><li> As a bonus action, you can cause small barbs to protrude all over your body or cause them to retract. At the start of each of your turns while the barbs are out, you deal 1d6 piercing damage to any creature grappling you or any creature grappled by you.</li></ul>",
			"source": "UA",
			"type": "Racial",
			"pre": "Tiefling"
		},
		"ru": {
			"name": "КОЛЮЧАЯ ШКУРА",
			"text": "<p> Один из ваших предков был демоном с костяными наростами или другой «колючей» сущностью. Вы получаете следующие преимущества: </p><ul><li>Увеличьте значение Телосложения или Харизмы на 1, при максимуме 20.</li><li>В качестве бонусного действия вы можете сделать так, чтобы из вашего тела выросли (или наоборот, вросли) маленькие наросты. Каждый раз в начале вашего хода, пока колючки выпущены, вы наносите 1к6 колющего урона любой цели, которая схватила вас, или любому существу, которое схватили вы.</li><li>Вы получаете навык Запугивание. Если он уже выбран вами, то ваш бонус мастерства удваивается для проверки этого навыка.</li></ul>",
			"pre": "Тифлинг"
		}
	},
	{
		"en": {
			"name": "Bountiful Luck",
			"text": "<p>Your people have extraordinary luck, which you have learned to mystically lend to your companions whenever you see them falter. You're not sure how you do it, you just wish it, and it happens. Surely a sign of fortune's favor!</p><p>When an ally you can see within 30 feet of you rolls a 1 on the d20 for an attack roll, an ability check, or a saving throw, you can use your reaction to let the ally reroll the die. The ally must use the new roll.</p><p>When you use this ability, you can't use your Lucky racial trait before the end of your next turn.</p>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Halfling"
		},
		"ru": {
			"name": "Бездонная удача",
			"text": "<p>Ваш народ обладает исключительной удачей, которой вы научились мистическим образом делиться со своими компаньонами, когда вы видите, что они не справляются. Вы не понимаете, как это работает, вы просто хотите, и это происходит. Определенно это знак покровительства удачи!</p><p>Когда союзник, которого вы видите в пределах 30 футов от вас, выбрасывает 1 на к20 для броска атаки, проверки способности или спасброска, вы можете использовать реакцию и позволить союзнику перебросить кубик. Союзник обязан использовать новый результат.</p><p>После использования этой способности вы не можете использовать вашу расовую черту Удачливый до конца вашего следующего хода.</p>",
			"pre": "Полурослик"
		}
	},
	{
		"en": {
			"name": "Critter Friend",
			"text": "<p>Your friendship with animals mystically deepens. You gain the following benefits:</p><ul><li> You gain proficiency in the Animal Handling skill. If you're already proficient in it, your proficiency bonus is doubled for any check you make with it.</li><li> You learn the Speak with Animals spell and can cast it at will, without expending a spell slot. You also learn the Animal Friendship spell, and you can cast it once with this feat, without expending a spell slot. You regain the ability to cast it in this way when you finish a long rest. Wisdom is your spellcasting ability for these spells.</li></ul>",
			"source": "UA",
			"type": "Racial",
			"pre": "Gnome (forest)"
		},
		"ru": {
			"name": "ДРУГ ЖИВОТНЫХ",
			"text": "<p> Ваша дружба с животными усилена магией. Вы получаете следующие преимущества: </p><ul><li>Вы получаете навык Уход за животными. Если он уже выбран вами, то ваш бонус мастерства удваивается для проверки этого навыка.</li><li>Вы изучаете заклинание Разговор с животными [Speak with animals], которое можете использовать без затрат ячеек заклинаний. Вы также изучаете заклинание Дружба с животными [Animal friendship], которое вы можете использовать один раз без затрат ячейки заклинаний. Вы можете вновь использовать заклинание бесплатно после длинного отдыха. Интеллект ваша основная характеристика для этого заклинания.</li></ul>",
			"pre": "Лесной гном"
		}
	},
	{
		"en": {
			"name": "Dragon Fear",
			"text": "<p>When angered, you radiate menace. You gain the following benefits:</p><ul><li> Increase your Strength, Constitution, or Charisma score by 1, to a maximum of 20.</li><li> Instead of exhaling destructive energy, you can expend a use of your Breath Weapon trait to roar, forcing each creature of your choice within 30 feet of you to make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier). A target automatically succeeds on the save if it can't hear or see you. On a failed save, a target becomes frightened for 1 minute. If the frightened target takes any damage, it can repeat the saving throw, ending the effect on itself on a success.</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Dragonborn"
		},
		"ru": {
			"name": "Драконий страх",
			"text": "<p>Когда вы злитесь, то излучаете угрозу. Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение вашей Силы, Телосложения или Харизмы на 1 при максимуме 20.</li><li>Вместо выдоха разрушительной энергии, вы можете использовать вашу черту Оружие Дыхания, чтобы издать рык, заставляя всех выбранных вами существ в пределах 30 футов от вас сделать спасбросок Мудрости (Сл 8 + бонус мастерства + модификатор Харизмы). Цель автоматически проходит спасбросок, если она не может слышать или видеть вас. При провале броска цель становится напуганной вами на 1 минуту. Если напуганная цель получает урон, то она может повторить спасбросок, оканчивая эффект на себе при успехе.</li></ul>",
			"pre": "Драконорожденный"
		}
	},
	{
		"en": {
			"name": "Dragon Hide",
			"text": "<p>You manifest scales and claws reminiscent of your draconic ancestors. You gain the following benefits:</p><ul><li> Increase your Strength, Constitution, or Charisma score by 1, up to a maximum of 20.</li><li> Your scales harden. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.</li><li> You can grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no action. The claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the normal bludgeoning damage for an unarmed strike.</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Dragonborn"
		},
		"ru": {
			"name": "Драконья шкура",
			"text": "<p>У вас появляются чешуя и когти, напоминающие таковые у вашего драконьего предка. Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение вашей Силы, Телосложения или Харизмы на 1 при максимуме 20.</li><li>Ваша чешуя становится твёрже. Пока вы не носите броню, ваш КД равен 13 + модификатор Ловкости. Вы можете использовать щит продолжая получать это преимущество.</li><li>Вы отращиваете втягивающиеся когти на кончиках ваших пальцев. Вытягивание или втягивание их не требует траты каких-либо действий. Эти когти являются естественным оружием, которым вы можете совершать безоружные удары. Если вы попадете такой атакой, то наносите 1к4 + модификатор Силы рубящего урона вместо обычного  дробящего урона для безоружного удара.</li></ul>",
			"pre": "Драконорожденный"
		}
	},
	{
		"en": {
			"name": "Dragon Wings",
			"text": "<p>You sprout draconic wings. With your wings, you have a flying speed of 20 feet if you aren't wearing heavy armor and aren't exceeding your carrying capacity.</p>",
			"source": "UA",
			"type": "Racial",
			"pre": "Dragonborn"
		},
		"ru": {
			"name": "КРЫЛЬЯ ДРАКОНА",
			"text": "<p> Вы выпускаете драконьи крылья. Пока вы летаете, ваша скорость передвижения равна 20 футов, если вы не носите тяжелых доспехов или не превысили дозволенный вес инвентаря на персонаже. </p>",
			"pre": "Драконорожденный"
		}
	},
	{
		"en": {
			"name": "Drow High Magic",
			"text": "<p>You learn more of the magic typical of dark elves. You learn the Detect Magic spell and can cast it at will, without expending a spell slot. You also learn Levitate and Dispel Magic, each of which you can cast once without expending a spell slot. You regain the ability to cast the spell in this way when you finish a long rest. Charisma is your spellcasting ability for these spells.</p>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Elf (drow)"
		},
		"ru": {
			"name": "Высшая магия дроу",
			"text": "<p>Вы изучаете магию, присущую тёмным эльфам.</p><p>Вы изучаете заклинание обнаружение магии  и можете свободно сотворять его без затрат ячеек заклинаний. Вы также изучаете заклинания левитация  и рассеивание магии , каждое из которых вы можете сотворить один раз без затрат ячеей заклинаний. Вы восстанавливаете возможность сотворять эти два заклинания таким способом после продолжительного отдыха. Харизма – базовая характеристика для этих трёх заклинаний.</p>",
			"pre": "Эльф (дроу)"
		}
	},
	{
		"en": {
			"name": "Dwarven Fortitude",
			"text": "<p>You have the blood of dwarf heroes flowing through your veins. You gain the following benefits:</p><ul><li> Increase your Constitution score by 1, to a maximum of 20.</li><li> Whenever you take the Dodge action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1).</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Dwarf"
		},
		"ru": {
			"name": "Дварфийская стойкость",
			"text": "p>В ваших венах течет кровь героев дварфов. Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение вашего Телосложения на 1 при максимуме 20.</li><li>Когда в битве вы применяете действие Уклонение, вы можете потратить Кость Хитов чтобы вылечить себя. Бросьте кость, добавьте модификатор Телосложения и восстановите хиты в количестве, равном полученному значению (минимум 1).</li></ul>",
			"pre": "Дварф"
		}
	},
	{
		"en": {
			"name": "Elven Accuracy",
			"text": "<p>The accuracy of elves is legendary, especially that of elf archers and spellcasters. You have uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:</p><ul><li> Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20</li><li> Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once.</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Elf or half-elf"
		},
		"ru": {
			"name": "Эльфийская точность",
			"text": "<p>Точность эльфов легендарна, особенно это касается эльфийских лучников и заклинателей. Вы обладаете сверхъестественной меткостью, когда дело касается атак, требующих меткости, а не грубой силы. Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение вашей Ловкости, Интеллекта, Мудрости или Харизмы на 1 при максимуме 20.</li><li>Когда у вас есть преимущество на бросок атаки, использующей Ловкость, Интеллект, Мудрость или Харизму, вы можете перебросить один из кубов один раз.</li></ul>",
			"pre": "Эльф или полуэльф"
		}
	},
	{
		"en": {
			"name": "Everybody's Friend",
			"text": "<p>You develop your magnetic personality to ease your way through the world. You gain the following benefits:</p><ul><li> Increase your Charisma score by 1, up to a maximum of 20.</li><li> You gain proficiency in the Deception and Persuasion skills. If you're already proficient in either skill, your proficiency bonus is doubled for any check you make with that skill.</li></ul>",
			"source": "UA",
			"type": "Racial",
			"pre": "Half-elf"
		},
		"ru": {
			"name": "ДРУГ ВСЕХ ВОКРУГ",
			"text": "<p> Вы используете свою привлекательность, чтобы путешествовать по миру. Вы получаете следующие преимущества: </p><ul><li>Увеличьте значение Харизмы на 1, при максимуме 20.</li><li>Вы получаете навыки Обман и Убеждение. Если они уже выбраны вами, то ваш бонус мастерства удваивается для проверок этих навыков.</li></ul>",
			"pre": "Полуэльф"
		}
	},
	{
		"en": {
			"name": "Fade Away",
			"text": "<p>Your people are clever, with a knack for illusion magic. You have learned a magical trick for fading away when you suffer harm. You gain the following benefits:</p><ul><li> Increase your Dexterity or Intelligence score by 1, to a maximum of 20.</li><li> Immediately after you take damage, you can use a reaction to magically become invisible until the end of your next turn or until you attack, deal damage, or force someone to make a saving throw. Once you use this ability, you can't do so again until you finish a short or long rest.</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Gnome"
		},
		"ru": {
			"name": "Исчезновение",
			"text": "<p>Ваш народ искусно владеет магией иллюзий. Вы выучили магический трюк, чтобы исчезать, когда вам наносят урон. Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение вашей Ловкости или Интеллекта на 1 при максимуме 20.</li><li>Сразу же после получения урона вы можете использовать реакцию, чтобы стать невидимым до конца своего следующего хода, либо пока не совершите атаку, не нанесете урон или не заставите кого-нибудь совершать спасбросок. Использовав эту способность, вы не сможете использовать её вновь, пока не совершите короткий или продолжительный отдых.</li></ul>",
			"pre": "Гном"
		}
	},
	{
		"en": {
			"name": "Fey Teleportation",
			"text": "<p>Your study of high elven lore has unlocked fey power that few other elves possess, except your eladrin cousins. Drawing on your fey ancestry, you can momentarily stride through the Feywild to shorten your path from one place to another. You gain the following benefits:</p><ul><li> Increase your Intelligence or Charisma score by 1, to a maximum of 20.</li><li> You learn to speak, read, and write Sylvan</li><li> You learn the Misty Step spell and can cast it once without expending a spell slot. You regain the ability to cast it in this way when you finish a short or long rest. Intelligence is your spellcasting ability for this spell.</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Elf (high)"
		},
		"ru": {
			"name": "Телепортация фей",
			"text": "<p>Изучение знаний высших эльфов открыло вам силу фей, которой владеют немногие эльфы, за исключением ваших собратьев эладринов. Опираясь на свое родство с феями, вы можете на мгновение пройти через Страну Фей, сократив свой путь. Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение вашего Интеллекта или Харизмы на 1 при максимуме 20.</li><li>Вы изучаете как читать, говорить и писать на Сильване.</li><li>Вы изучаете заклинание туманный шаг и можете сотворить его один раз без использования ячейки заклинания. Вы восстанавливаете способность сотворять его таким образом, когда завершаете короткий или продолжительный отдых. Интеллект – базовая характеристика для этого Заклинания.</li></ul>",
			"pre": "Эльф (высший)"
		}
	},
	{
		"en": {
			"name": "Flames of Phlegethos",
			"text": "<p>You learn to call on hellfire to serve your commands. You gain the following benefits:</p><ul><li> Increase your Intelligence or Charisma score by 1, to a maximum of 20.</li><li> When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.</li><li> Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 fire damage.</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Tiefling"
		},
		"ru": {
			"name": "Пламя Флегетоса",
			"text": "<p>Вы научились призывать адский огонь, и он вас слушается. Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение вашего Интеллекта или Харизмы на 1 при максимуме 20.</li><li>Когда вы делаете бросок урона огнём, который наносит ваше заклинание, вы можете перебросить любые 1 на костях урона огнём, но должны использовать новые результаты, даже если они тоже будут 1.</li><li>Когда вы колдуете заклинание, которое наносит урон огнём, вы можете заставить пламя окутать вас до конца вашего следующего хода. Огонь не причиняет урон вам и вашим вещам, а также излучает яркий свет на 30 футов и тусклый свет еще на 30 футов. Пока пламя существует, все существа в радиусе 5 футов получают 1д4 урона огнём, если попадают по вам рукопашной атакой.</li></ul>",
			"pre": "Тифлинг"
		}
	},
	{
		"en": {
			"name": "Grudge-Bearer",
			"text": "<p>You have a deep hatred for a particular kind of creature. Choose your foes, a type of creature to bear the burden of your wrath: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can choose two races of humanoid (such as gnolls and orcs). You gain the following benefits:</p><ul><li> Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20.</li><li> During the first round of any combat against your chosen foes, your attack rolls against any of them have advantage.</li><li> When any of your chosen foes makes an opportunity attack against you, it makes the attack roll with disadvantage.</li><li> Whenever you make an Intelligence (Arcana, History, Nature, or Religion) check to recall information about your chosen foes, you add double your proficiency bonus to the check, even if you're not normally proficient.</li></ul>",
			"source": "UA",
			"type": "Racial",
			"pre": "Dwarf"
		},
		"ru": {
			"name": "ИЗВЕЧНЫЙ ВРАГ",
			"text": "<p> Вы глубоко ненавидите определенный вид существ. Выберите вашего противника, тип существа, который вы ненавидите всем сердцем: абберации, звери, целестиалы, конструкты, драконы, элементали, феи, твари, гиганты, монстры, растения или нежить. В качестве альтернативы вы можете выбрать две гуманоидные расы (к примеру, орков и гноллов).  </p><p> Вы получаете следующие преимущества: </p><ul><li>Увеличьте значение Силы, Телосложения или Мудрости на 1, максимум 20.</li><li>В течение первого раунда боя против существ, которых вы ненавидите, вы совершаете все атаки с преимуществом.</li><li>Каждый раз, когда выбранный вами враг совершает по вам провоцированную атаку, он совершает бросок атаки с помехой.</li><li>Каждый раз, когда вы совершаете проверку Магии, Истории, Природы или Религии чтобы собрать информацию о ваших противниках, вы добавляете двойной бонус мастерства к проверкам, даже если у вас не изучен этот навык.</li></ul>",
			"pre": "Дварф"
		}
	},
	{
		"en": {
			"name": "Human Determination",
			"text": "<p>You are filled with a determination that can draw the unreachable within your reach. You gain the following benefits:</p><ul><li> Increase one ability score of your choice by 1, to a maximum of 20.</li><li> When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a short or long rest.</li></ul>",
			"source": "UA",
			"type": "Racial",
			"pre": "Human"
		},
		"ru": {
			"name": "ЧЕЛОВЕЧЕСКАЯ РЕШИМОСТЬ",
			"text": "<p> Вы полны решимости, что можете объять необъятное и постичь непостижимое. Вы получаете следующие преимущества: </p><ul><li>Увеличьте значение одной из характеристики на 1, при максимуме 20.</li><li>Когда вы совершаете атаку, спасбросок или проверку навыка, вы можете сделать это с преимуществом. Использовав эту особенность, вы не сможете повторить ее до короткого или длинного отдыха.</li></ul>",
			"pre": "Человек"
		}
	},
	{
		"en": {
			"name": "Infernal Constitution",
			"text": "<p>Fiendish blood runs strong in you, unlocking a resilience akin to that possessed by some fiends. You gain the following benefits:</p><ul><li> Increase your Constitution score by 1, up to a maximum of 20.</li><li> You have resistance to cold damage and poison damage.</li><li> You have advantage on saving throws against being poisoned.</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Tiefling"
		},
		"ru": {
			"name": "Инфернальное телосложение",
			"text": "<p>Кровь исчадий сильна в вас и даёт вам сопротивления, которыми обладают некоторые исчадия. <span lang=\"EN\">Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение вашего Телосложения на 1 при максимуме 20.</li><li>Вы получаете сопротивление к урону холодом и ядом.</li><li>Вы получаете преимущество на спасброски против эффектов, делающих вас отравленным.</li></ul>",
			"pre": "Тифлинг"
		}
	},
	{
		"en": {
			"name": "Orcish Aggression",
			"text": "<p>As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.</p>",
			"source": "UA",
			"type": "Racial",
			"pre": "Half-orc"
		},
		"ru": {
			"name": "АГРЕССИЯ ОРКОВ",
			"text": "<p> В качестве бонусного действия, вы можете начать движение к цели, которую видите или слышите, на всю вашу скорость. Вы должны закончить это движение ближе к цели, чем были в начале хода. </p>",
			"pre": "Полуорк"
		}
	},
	{
		"en": {
			"name": "Orcish Fury",
			"text": "<p>Your fury burns tirelessly. You gain the following benefits:</p><ul><li> Increase your Strength or Constitution score by 1, up to a maximum of 20.</li><li> When you hit with an attack made with a simple or martial weapon, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.</li><li> Immediately after you use your Relentless Endurance trait, you can use your reaction to make one weapon attack.</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Half-orc"
		},
		"ru": {
			"name": "Орочье буйство",
			"text": "<p>Ваша ярость неутомимо горит внутри вас. Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение вашей Силы или Телосложения на 1 при максимуме 20.</li><li>Когда вы попадаете атакой простым или воинским оружием, вы можете кинуть одну кость оружия ещё раз и добавить результат в качестве дополнительного урона того же типа, что и у оружия. Использовав эту способность, вы не можете использовать её вновь, пока не завершите короткий или продолжительный отдых.</li><li>Сразу же после использования черты Непоколебимая Стойкость вы можете использовать реакцию для нанесения одной атаки оружием.</li></ul>",
			"pre": "Полуорк"
		}
	},
	{
		"en": {
			"name": "Prodigy",
			"text": "<p>You have a knack for learning new things. You gain the following benefits:</p><ul><li> You gain one skill proficiency of your choice, one tool proficiency of your choice, and fluency in one language of your choice.</li><li>Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it. The skill you choose must be one that isn't already benefiting from a feature, such as Expertise, that doubles your proficiency bonus.</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Half-elf, half-orc or human"
		},
		"ru": {
			"name": "Вундеркинд",
			"text": "<p>У вас дар к освоению новых знаний. Вы получаете следующие преимущества:</p><ul><li>Вы получаете владение одним навыком на выбор, владение одним набором инструментов на выбор и обучаетесь бегло говорить на одном языке по выбору.</li><li>Выберете один навык, которым уже владеете. Вы получаете компетентность в этом навыке, что удваивает ваш бонус мастерства для любой проверки характеристик с использованием этого навыка. Навык, который вы выбираете, не может быть уже удвоен от другой черты, такой как Компетентность.</li></ul>",
			"pre": "Полуэльф, Полуорк или Человек."
		}
	},
	{
		"en": {
			"name": "Second Chance",
			"text": "<p>Fortune favors you when someone tries to strike you. You gain the following benefits:</p><ul><li> Increase your Dexterity, Constitution, or Charisma score by 1, to a maximum of 20.</li><li> When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to reroll. Once you use this ability, you can't use it again until you roll initiative at the start of combat or until you finish a short or long rest.</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Halfling"
		},
		"ru": {
			"name": "Второй шанс",
			"text": "<p>Удача улыбается вам, когда кто-то пытается ударить вас. Вы получаете следующие преимущества:</p><ul><li>Увеличьте значение вашей Ловкости, Телосложения или Харизмы на 1 при максимуме 20.</li><li>Когда существо, которое вы видите, попадает по вам броском атаки, вы можете использовать реакцию, чтобы заставить врага перебросить этот бросок. После применения этой способности вы не сможете использовать её вновь до броска инициативы в начале боя либо пока не завершите короткий или продолжительный отдых.</li></ul>",
			"pre": "Полурослик"
		}
	},
	{
		"en": {
			"name": "Squat Nimbleness",
			"text": "<p>You are uncommonly nimble for your race. You gain the following benefits:</p><ul><li> Increase your Strength or Dexterity score by 1, to a maximum of 20.</li><li> Increase your walking speed by 5 feet.</li><li> You gain proficiency in the Acrobatics or Athletics skill (your choice).</li><li> You have advantage on any Strength (Athletics) or Dexterity (Acrobatics) check you make to escape from being grappled.</li></ul>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Dwarf or a Small race"
		},
		"ru": {
			"name": "Низкорослое проворство",
			"text": "<p>Вы необычайно проворны для вашей расы. Вы получаете следующие выгоды:</p><ul><li>Увеличьте значение вашей Силы или Ловкости на 1 при максимуме 20.</li><li>Ваша скорость увеличивается на 5 футов.</li><li>Вы получаете владение Акробатикой или Атлетикой (на ваш выбор).</li><li>Вы получаете преимущество на броски Силы (Атлетика) или Ловкости (Акробатика), которые делаете, чтобы выбраться из захвата.</li></ul>",
			"pre": "Дварф или Маленькая раса"
		}
	},
	{
		"en": {
			"name": "Svirfneblin Magic",
			"text": "<ul><li> You have inherited the innate spellcasting ability of your ancestors. This ability allows you to cast Nondetection on yourself at will, without needing a material component. You can also cast each of the following spells once with this ability: Blindness/Deafness, Blur, and Disguise Self. You regain the ability to cast these spells when you finish a long rest. Intelligence is your spellcasting ability for these spells, and you cast them at their lowest possible levels.</li></ul>",
			"source": "MToF",
			"type": "Racial",
			"pre": "Gnome (deep gnome)"
		},
		"ru": {
			"name": "",
			"text": "",
			"pre": ""
		}
	},
	{
		"en": {
			"name": "Vampiric Exultation",
			"text": "<p>As an action, you transform the lower half of your body into a black vapor. You can float in the air and have a flying speed of 30 feet. This effect lasts for up to 10 minutes. Once you use this ability, you can’t use it again until you finish a short or long rest.</p>",
			"source": "PSI",
			"type": "Racial",
			"pre": "Vampire (Ixalan)"
		},
		"ru": {
			"name": "",
			"text": "",
			"pre": ""
		}
	},
	{
		"en": {
			"name": "Wonder Maker",
			"text": "<p>You master the tinker techniques of your people. You gain the following benefits:</p><ul><li> Increase your Dexterity or Intelligence score by 1, to a maximum of 20.</li><li> When you make a check using your proficiency with tinker's tools, you add double your proficiency bonus to the check.</li><li> When you make a device with your Tinker trait, you have the following additional options for what you make:<ul><li> <b>Alarm:</b> This device senses when a creature moves to within 15 feet of it without speaking aloud a password chosen when you create it. One round after a creature moves into range, the alarm makes a shrill ringing that lasts for 1 minute and can be heard from up to 300 feet away.</li><li> <b>Calculator:</b> This device makes doing sums easy.</li><li> <b>Lifter:</b> This device can be used as a block and tackle, allowing its user to hoist five times the weight the user can normally lift.</li><li> <b>Timekeeper:</b> This pocket watch keeps accurate time.</li><li> <b>Weather Sensor:</b> When used as an action, this device predicts weather conditions in a 1-mile radius over the next 4 hours, showing one symbol (clouds, sun/moon, rain, or snow) for each hour.</li></ul></li></ul>",
			"source": "UA",
			"type": "Racial",
			"pre": "Gnome (rock)"
		},
		"ru": {
			"name": "СОЗДАТЕЛЬ ЧУДЕС",
			"text": "<p> Вы в мастерстве овладели техникой создания уникальных устройств вашего народа. Вы получаете следующие преимущества: </p><ul><li>Увеличьте значение Интеллекта или Ловкости на 1, при максимуме 20.</li><li>Когда вы совершаете проверку во время создания предмета при помощи ваших инструментов, вы добавляете двойной бонус мастерства.</li><li>Когда вы создаете какое-то устройство, вы можете создать следующие устройства:</li><li>Сигнализация. Устройство чувствует, когда существо подходит к нему на 15 футов без произнесения пароля, оговоренного ранее. Один раунд спустя, если существо все еще находится в радиусе, то Сигнализация издает громкий сигнал в течение 1 минуты, который слышен на расстоянии 300 футов.</li><li>Калькулятор. Это устройство делает подсчеты простыми.</li><li>Кран. Это устройство может быть использовано в качестве подъемной силы, способной поднять в пять раз больше обычного веса.</li><li>Карманные часы. Устройство позволяет следить за временем.</li><li>Датчик погоды. Когда вы тратите действие, это устройство предсказывает погоду в радиусе 1 мили от вас на следующие 4 часа, показывая один символ (облака, солнце/луну, дождь или снег) на каждый час.</li></ul>",
			"pre": "Холмовой гном"
		}
	},
	{
		"en": {
			"name": "Wood Elf Magic",
			"text": "<p>You learn the magic of the primeval woods, which are revered and protected by your people. You learn one druid cantrip of your choice. You also learn the longstrider and Pass without Trace spells, each of which you can cast once without expending a spell slot. You regain the ability to cast these two spells in this way when you finish a long rest. Wisdom is your spellcasting ability for all three spells.</p>",
			"source": "XGTE",
			"type": "Racial",
			"pre": "Elf (wood)"
		},
		"ru": {
			"name": "Магия лесных эльфов",
			"text": "<p>Вы изучаете магию первобытных лесов, которые почитаются и защищаются вашим народом. Вы изучаете один заговор друидов на ваш выбор. Вы также изучаете заклинания скороход  и бесследное передвижение, каждое из которых вы можете сотворить один раз не тратя ячейку заклинаний. Вы восстанавливаете способность сотворять их таким образом в конце продолжительного отдыха. Мудрость – базовая характеристика для этих трёх заклинаний.</p>",
			"pre": "Эльф (лесной)"
		}
	},
	{
		"en": {
			"name": "Aberrant Dragonmark",
			"text": "<p><b>Prerequisite:</b> No existing dragonmark.</p><p>You have manifested an aberrant dragonmark. Determine its appearance and the flaw associated with it. You gain the following benefits:</p><ul><li> Increase your Constitution score by 1, to a maximum of 20.</li><li> You learn a cantrip from the sorcerer spell list. In addition, choose a 1st-level spell from the sorcerer spell list. You learn that spell and can cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again. Constitution is your spellcasting ability for these spells.</li><li> You can increase the power of your aberrant spells at the risk of your own vitality. When you cast a spell with your aberrant mark, you can use one of your Hit Dice to increase the spell’s level by 1. Immediately after you cast the spell, roll the Hit Die. You take damage equal to the number rolled.</li></ul>",
			"source": "WGtE",
			"type": "World-specific"
		},
		"ru": {
			"name": "",
			"text": ""
		}
	},
	{
		"en": {
			"name": "Greater Dragonmark",
			"text": "<p>Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:</p><ul><li> The die type of your dragonmarked Intuition Die increases by one.</li><li> Increase one ability score by 1, to a maximum of 20. The abilities available to you are based on your mark, as shown on the Greater Dragonmark Benefits table.</li><li> You learn a set of spells, each of which you can cast once without expending a spell slot or using a material component. The list of spells, the spellcasting ability for them, and the type of rest you must complete to regain the use of these spells are shown on the Greater Dragonmark Benefits table.</li><li> To cast Leomund's Secret Chest using this feat and the Mark of Warding, you must have a Siberys dragonshard with a value of at least 100 gp. It serves as a focus for the spell and replaces the tiny chest's replica.</li></ul><table class=\"article-table sortable jquery-tablesorter\"><thead><tr><th class=\"headerSort\" title=\"Sort ascending\">Dragonmark<div><span class=\"chevron\"></span><span class=\"chevron\"></span></div></th><th class=\"headerSort\" title=\"Sort ascending\">Ability<div><span class=\"chevron\"></span><span class=\"chevron\"></span></div></th><th class=\"headerSort\" title=\"Sort ascending\">Spells<div><span class=\"chevron\"></span><span class=\"chevron\"></span></div></th><th class=\"headerSort\" title=\"Sort ascending\">Spellcasting Ability<div><span class=\"chevron\"></span><span class=\"chevron\"></span></div></th><th class=\"headerSort\" title=\"Sort ascending\">Rest Required<div><span class=\"chevron\"></span><span class=\"chevron\"></span></div></th></tr></thead><tbody><tr><td>Detection</td><td>Charisma or Intelligence</td><td>See Invisibility, True Seeing</td><td>Intelligence</td><td>Long</td></tr><tr><td>Finding</td><td>Dexterity, Strength, or Wisdom</td><td>Locate Creature, Find the Path</td><td>Wisdom</td><td>Long</td></tr><tr><td>Handling</td><td>Dexterity or Wisdom</td><td>Beast Sense, Dominate Beast</td><td>Wisdom</td><td>Long</td></tr><tr><td>Healing</td><td>Dexterity or Wisdom</td><td>Mass Healing Word, Greater Restoration</td><td>Wisdom</td><td>Long</td></tr><tr><td>Hospitality</td><td>Charisma or Dexterity</td><td>Sanctuary, Mordenkainen's Magnificent Mansion</td><td>Charisma</td><td>Long</td></tr><tr><td>Making</td><td>Dexterity or Intelligence</td><td>Fabricate, Creation</td><td>Intelligence</td><td>Long</td></tr><tr><td>Passage</td><td>Dexterity or Constitution</td><td>Blink, Teleportation Circle</td><td>Constitution</td><td>Long</td></tr><tr><td>Scribing</td><td>Intelligence or Charisma</td><td>Sending, Tongues</td><td>Intelligence</td><td>Long or Short</td></tr><tr><td>Sentinel</td><td>Strength or Wisdom</td><td>Compelled Duel, Warding Bond</td><td>Wisdom</td><td>Long or Short</td></tr><tr><td>Shadow</td><td>Charisma or Dexterity</td><td>Nondetection, Mislead</td><td>Charisma</td><td>Long</td></tr><tr><td>Storm</td><td>Charisma or Dexterity</td><td>Control Water, Control Winds</td><td>Charisma</td><td>Long</td></tr><tr><td>Warding</td><td>Dexterity or Intelligence</td><td>Knock, Glyph of Warding, Leomund's Secret Chest*</td><td>Intelligence</td><td>Long</td></tr></tbody><tfoot></tfoot></table>",
			"source": "WGtE",
			"type": "World-specific",
			"pre": "8th level, have a dragonmark"
		},
		"ru": {
			"name": "",
			"text": "",
			"pre": ""
		}
	},
	{
		"en": {
			"name": "Quicksmithing",
			"text": "<p>You have mastered the art of on-the-fly invention, improvement, and jury-rigging. You can use your talents to create immediate, short-term magical effects similar to spells, given time and an adequate supply of aether.</p><p>When you choose this feat, you master two magical effects, each of which recreates the effect of a 1st-level spell that has the ritual tag. These spells can come from any class list, but Intelligence is your spellcasting ability for them.</p><p>If you come across a schematic geared toward quicksmithing or study with another quicksmith, you might be able to add another spell to the effects you have mastered. The spell's level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of mastering the spell takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents aether you use as you experiment with the spell effect to master it.</p><p>In addition, you have proficiency with artisan's tools (quicksmith's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours unless you spend 1 hour repairing it to keep it functioning. You can use your action to dismantle the device, at which point you can reclaim thematerials used to create it. You can have up to three such devices active at a time.</p><p>When you create a device, choose one of the following options:</p><ul><li> <b>Clockwork Toy.</b> This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction</li><li> <b>Fire Starter.</b> This device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.</li><li> <b>Music Box.</b> When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.</li></ul>",
			"source": "PSK",
			"type": "World-specific",
			"pre": "Intelligence 13 or higher"
		},
		"ru": {
			"name": "",
			"text": "",
			"pre": ""
		}
	},
	{
		"en": {
			"name": "Revenant Blade",
			"text": "<ul><li> Increase your Dexterity or Strength score by 1, to a maximum of 20.</li><li> While wielding a double-bladed weapon with two hands, the weapon has the finesse trait for your attacks with it, and you gain +1 AC.</li><li> On your turn, when you use a bonus action to make a melee attack with the blade at the opposite end of the weapon, the weapon’s damage die for this attack increases to 2d4, instead of 1d4.</li></ul>",
			"source": "WGtE",
			"type": "World-specific",
			"pre": "Elf"
		},
		"ru": {
			"name": "",
			"text": "",
			"pre": ""
		}
	},
	{
		"en": {
			"name": "Servo Crafting",
			"text": "<p>You are skilled in the creation of servos—tiny constructs that function as personal assistants. You can cast the find familiar spell as a ritual, creating a servo to serve as your familiar instead of an animal. A servo's statistics appear in the \"Artifact Creatures\" section of this document. In every other way, a servo familiar functions as described in the find familiar spell.</p><p>You can communicate telepathically with your servo familiar and perceive through its senses as long as you are on the same plane of existence. You can speak through your servo in your own voice.</p><p>Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your servo familiar to make one attack of its own.</p>",
			"source": "PSK",
			"type": "World-specific"
		},
		"ru": {
			"name": "",
			"text": ""
		}
	}
]
