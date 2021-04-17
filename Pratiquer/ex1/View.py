
from __future__ import (absolute_import,division,print_function)

from PyQt5 import QtCore, QtGui, QtWidgets #These basic widgets (controls), e.g. buttons, comboboxes and scroll bars, are designed for direct use.

class View(QtWidgets.QWidget):
    
    # definition d'un obj
    # __init__ is one of the reserved methods in Python. In object oriented programming, it is known as a constructor. The __init__ method can be called when an object is created from the class, and access is required to initialize the attributes of the class.

    doSomethingSignal = QtCore.Signal()
    
    def __init__(self, parent=None):
               
        super(View, self).__init__(parent)

        grid = QtWidgets.QVBoxLayout(self) #Lines up widgets vertically
        
        # Construction de la table
        self.table = QtWidgets.QTableWidget(self) #Item-based table view with a default model
        self.table.setRowCount(4) #Number of rows
        self.table.setColumnCount(2) #Number of columns
        grid.addWidget(self.table)#Ajoute un widget au grid qui l'aligne verticalement en utilisant le self.table donc les proriétés définies dans self

        # Création de la box à check uncheck
        self.grid_lines = QtWidgets.QTableWidgetItem()#Table widgets provide standard table display facilities for applications
        self.grid_lines.setFlags(QtCore.Qt.ItemIsUserCheckable | QtCore.Qt.ItemIsEnabled)
        self.grid_lines.setCheckState(QtCore.Qt.Unchecked)

        # Création de la combobox
        self.colours = QtWidgets.QComboBox()#créer une combobox donc une box avec des choix qui sont dans otpions
        options = ["Blue", "Green", "Red"]
        self.colours.addItems(options)#Adds each of the strings in the given texts to the combobox. Each item is appended to the list of existing items in turn.

        # Création de phi et freq
        self.freq = QtWidgets.QTableWidgetItem("1.0")
        self.phi = QtWidgets.QTableWidgetItem("0.0")

        self.addWidgetToTable("Colour", self.colours, 0)#défini les emplacements des éléments addWidget(QWidget *widget, int row, int column)
        self.addItemToTable("Show grid lines", self.grid_lines, 1)
        self.addItemToTable("Frequency", self.freq, 2)
        self.addItemToTable("Phase", self.phi, 3)
        
        
        # Création du bouton
        self.plot = QtWidgets.QPushButton('Add', self)#Push buttons display a textual label, and optionally a small icon. self -> the parent
        self.plot.setStyleSheet("background-color:lightgrey")

        # Ajout du bouton au grid qui l'aligne verticalement
        grid.addWidget(self.plot) 

        # set the layout for the view widget
        self.setLayout(grid)


#   definition de méthodes qui sont utilisées pour créer la table au-dessus

#   sets the label for the table row
    def setTableRow(self, name, row):
        text = QtWidgets.QTableWidgetItem(name)
        text.setFlags(QtCore.Qt.ItemIsEnabled)
        col = 0
        self.table.setItem(row, col, text)
#   adds a widget to the table
    def addWidgetToTable(self, name, widget, row):
        self.setTableRow(name,row)
        col = 1
        self.table.setCellWidget(row, col, widget)
#   adds an item to the table (needed because the frequency and phase are items and not widgets)
    def addItemToTable(self, name, widget, row):
        self.setTableRow(name, row)
        col = 1
        self.table.setItem(row, col, widget)
    
    def btn_click(self):
        print("Hello world")