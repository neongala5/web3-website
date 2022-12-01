import unittest
from selenium import webdriver
import page
from selenium.webdriver.common.by import By

class PythonOrgSearch(unittest.TestCase):

	def setUp(self):
		self.driver = webdriver.Chrome("C:\Program Files (x86)\chromedriver.exe")
		#self.driver.get("http://www.python.org")
		self.driver.get("https://neongala5.github.io/web3-website/")

	# def test_example(self):
	# 	print("Test")
	# 	assert True

	# def test_title(self):
	# 	mainPage = page.MainPage(self.driver)
	# 	assert mainPage.is_title_matches()

	# def test_search_python(self):
	# 	mainPage = page.MainPage(self.driver)
	# 	assert mainPage.is_title_matches()
	# 	print(self.driver.find_element((By.ID, "languages")))
		# mainPage.search_text_element = "pycon"
		# mainPage.click_language_dropdown()
		# assert True
		# search_result_page = page.SearchResultPage(self.driver)
		# assert search_result_page.is_result_found()

	def test_is_in_document(self):
		# assert self.driver.find_element((By.ID, "languages")).isDisplayed()

		dropdown = self.driver.find_element(By.ID, "languages")
		assert dropdown.is_displayed()

	def tearDown(self):
		self.driver.close()

if __name__ == "__main__":
	unittest.main()
