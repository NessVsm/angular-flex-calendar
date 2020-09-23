
export class DATA {

  public static readonly data = new Date();
  public static readonly month = DATA.data.getMonth();
  public static readonly year = DATA.data.getFullYear();

  public static readonly monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  public static readonly weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
  public static readonly  colorCodes = ["#fc0303", "#f0fc03", "#0cf514"];
  public static readonly  colorNames = ["Red", "Yellow", "Green"];
  public static readonly  timeNumbers = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", 
"13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00" ];
}