from locator import *
from element import BasePageElement

class SearchTextElement(BasePageElement):
	locator = "q"

class GoButtonElement(BasePageElement):
	locator = "go"

class BasePage(object):
	def __init__(self,driver):
		self.driver = driver


class MainPage(BasePage):

	search_text_element = SearchTextElement

	def is_title_matches(self):
		return "METASECURE" in self.driver.title

	def click_language_dropdown(self):
		element = self.driver.find_element((By.ID, "languages"))
		element.click()

# class SearchResultPage(BasePage):

# 	def is_result_found(self):
# 		return "No results found." not in self.driver.page_source