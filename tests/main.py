import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

class PythonOrgSearch(unittest.TestCase):

   def setUp(self):
        # microsoft edge driver
        self.edgeDriver = webdriver.Edge("C:\Program Files (x86)\msedgedriver.exe")
        self.edgeDriver.get("https://neongala5.github.io/web3-website/")


       # chrome driver
        self.chromeDriver = webdriver.Chrome("C:\Program Files (x86)\chromedriver.exe")
        self.chromeDriver.get("https://neongala5.github.io/web3-website/")


       # firefox driver
        options = Options()
        options.binary_location = r'C:\Program Files\Mozilla Firefox\firefox.exe'
        self.fireFoxDriver = webdriver.Firefox(executable_path=r"C:\Program Files (x86)\geckodriver.exe", options=options)
        self.fireFoxDriver.get("https://neongala5.github.io/web3-website/")



   def test_resource_dropdown_is_in_document(self):
        edgeResourceDropdown = self.edgeDriver.find_element(By.ID, "")
        assert edgeResourceDropdown.is_displayed()
        chromeResourceDropdown = self.chromeDriver.find_element(By.ID, "")
        assert chromeResourceDropdown.is_displayed()
        fireFoxResourceDropdown = self.fireFoxDriver.find_element(By.ID, "")
        assert fireFoxResourceDropdown.is_displayed()


   def test_product_features_is_in_document(self):
        edgeProductFeatures = self.edgeDriver.find_element(By.ID, "")
        assert edgeProductFeatures.is_displayed()
        chromeProductFeatures = self.chromeDriver.find_element(By.ID, "")
        assert chromeProductFeatures.is_displayed()
        fireFoxProductFeatures = self.fireFoxDriver.find_element(By.ID, "")
        assert fireFoxProductFeatures.is_displayed()


   def tearDown(self):
        self.edgeDriver.close()
        self.chromeDriver.close()
        self.fireFoxDriver.close()



if __name__ == "__main__":
    unittest.main(warnings='ignore')  
