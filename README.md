# Reservation-App-MongoDB

# Introduction

This is a small reservation app. Please read below to check what is needed to run this app

# Installation

1) Npm : depends on your OS

npm install --save bootstrap@^4.0.0-alpha.6  react-bootstrap@^0.32.1
npm install express
npm install cors
npm i dotenv

2) MongoDB : Follow these commands

sudo dpkg --configure -a
sudo apt install build-essential
sudo apt install mongodb
sudo systemctl status mongodb
npm install --save mongoose

3) MongoCompass : A GUI needed to be able to manipulate Reservations.
   This is needed if you wish to be able to delete or manually add reservation

 Head out to https://www.mongodb.com/try/download/compass
 Download the latest version for your system

If you are on linux, remember to sudo apt install the package

# How To Run

Simply go to the api folder, then run " npm start "
Open another terminal, then go to client folder, then run " npm start "

Your default browser should open up automatically :)

# How to use

Click on book me button, then choose a date, then the desired time.
You will have a choice between 4 different time frames.
Input all the needed feilds, and boom you are finished :)

# Comments / Important Notes

- ignore the thank you page : it does not send an email (this was just for it to look professional)
- to delete a reservation, it has to be through MonogoCompass
- to list reservation dates, it has to be through MonogoCompass
