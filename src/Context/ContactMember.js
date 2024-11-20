import React, { createContext, useContext, useState } from 'react';

const ContactMemberContext = createContext();
export const ContactMemberProvider = ({ children }) => {
  const [contactMembers, setContactMembers] = useState([
    {
      id: 1,
      name: "Ali",
      surname: "Yılmaz",
      phoneNumber: "0555-123-4567",
      company: "TechCorp",
      email: "ali.yilmaz@techcorp.com",
      location: {
        city: "Istanbul",
        province: "Marmara"
      }
    },
    {
      id: 2,
      name: "Ayşe",
      surname: "Kara",
      phoneNumber: "0554-234-5678",
      company: "SoftInc",
      email: "ayse.kara@softinc.com",
      location: {
        city: "Ankara",
        province: "Central Anatolia"
      }
    },
    {
		id: 3,
		name: "Mehmet",
		surname: "Demir",
		phoneNumber: "0553-345-6789",
		company: "InnoTech",
		email: "mehmet.demir@innotech.com",
		location: {
		  city: "Izmir",
		  province: "Aegean"
		},
	  },
	  {
		id: 4,
		name: "Zeynep",
		surname: "Çelik",
		phoneNumber: "0552-456-7890",
		company: "GlobalSoft",
		email: "zeynep.celik@globalsoft.com",
		location: {
		  city: "Bursa",
		  province: "Marmara"
		},
	  },
	  {
		id: 5,
		name: "Kemal",
		surname: "Öztürk",
		phoneNumber: "0551-567-8901",
		company: "NetCom",
		email: "kemal.ozturk@netcom.com",
		location: {
		  city: "Adana",
		  province: "Mediterranean"
		},
	  },
	  {
		id: 6,
		name: "Fatma",
		surname: "Balcı",
		phoneNumber: "0550-678-9012",
		company: "DevCompany",
		email: "fatma.balci@devcompany.com",
		location: {
		  city: "Konya",
		  province: "Central Anatolia"
		},
	  },
	  {
		id: 7,
		name: "Hakan",
		surname: "Kuş",
		phoneNumber: "0549-789-0123",
		company: "EcoTech",
		email: "hakan.kus@ecotech.com",
		location: {
		  city: "Trabzon",
		  province: "Black Sea"
		},
	  },
	  {
		id: 8,
		name: "Elif",
		surname: "Süleymanoğlu",
		phoneNumber: "0548-890-1234",
		company: "DigitalX",
		email: "elif.suleymanoglu@digitalx.com",
		location: {
		  city: "Gaziantep",
		  province: "Southeastern Anatolia"
		},
	  },
	  {
		id: 9,
		name: "Ozan",
		surname: "Arslan",
		phoneNumber: "0547-901-2345",
		company: "WebGen",
		email: "ozan.arslan@webgen.com",
		location: {
		  city: "Kayseri",
		  province: "Central Anatolia"
		},
	  },
	  {
		id: 10,
		name: "Nazan",
		surname: "Gül",
		phoneNumber: "0546-012-3456",
		company: "FutureTech",
		email: "nazan.gul@futuretech.com",
		location: {
		  city: "Mersin",
		  province: "Mediterranean"
		},
	  }
  ]);
  return (
    <ContactMemberContext.Provider value={{ contactMembers, setContactMembers }}>
      {children}
    </ContactMemberContext.Provider>
  );
};
export const useContactMembers = () => useContext(ContactMemberContext);
