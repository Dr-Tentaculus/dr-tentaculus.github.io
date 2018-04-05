# -*- coding: utf-8 -*-
import configparser
config = configparser.ConfigParser()
config.read("settings.py")

from telethon import TelegramClient

# These example values won't work. You must get your own api_id and
# api_hash from https://my.telegram.org, under API Development.
api_id = config['DEFAULT']['api_id']
api_hash = config['DEFAULT']['api_hash']
channel_name = config['DEFAULT']['channel_name']
file_name = config['DEFAULT']['file_name']

print(channel_name)

client = TelegramClient('session_name', api_id, api_hash)
client.start()

# https://my.telegram.org/apps

def sprint(string, *args, **kwargs):
    """Safe Print (handle UnicodeEncodeErrors on some terminals)"""
    try:
        print(string, *args, **kwargs)
    except UnicodeEncodeError:
        string = string.encode('utf-8', errors='ignore')\
                       .decode('ascii', errors='ignore')
        print(string, *args, **kwargs)

#print(result)
import codecs
import pprint
import sys
import re

messages = client.get_messages(client.get_input_entity(channel_name), limit=100);

with codecs.open(file_name, "w", "utf-8") as stream:   # or utf-8
		stream.write(u"\n === \n")
for msg in reversed(messages):
	try:
		found_media = {}
		content = "qwer"
		name = 'noname'
		
		if getattr(msg, 'media', None):
			found_media[msg.id] = msg
			content = '<{}> {}'.format(
				type(msg.media).__name__, msg.message)
		
		elif hasattr(msg, 'message'):
			content = msg.message
		elif hasattr(msg, 'action'):
			content = str(msg.action)
		else:
			# Unknown message, simply print its class name
			content = type(msg).__name__

		# And print it to the user
		
		sprint('[{}:{}] (ID={}) {}: {}'.format(
			msg.date.hour, msg.date.minute, msg.id, name, u""+content + u"\n === \n"))
		
		# find links
		'''
		newChatLink = "";
		m = re.search('t.me/([\d\w_/-]+)', content)
		if(m.group(0)):
			newChatLink = m.group(0)
			newChatData = client.get_entity(newChatLink)
			print(newChatData.stringify())
		'''
		
		#sys.stdout.write(content);
		with codecs.open(file_name, "a", "utf-8") as stream:   # or utf-8
			stream.write(content + u"\n === \n")
	except: 
		print("Error")
sys.stdout.flush()
