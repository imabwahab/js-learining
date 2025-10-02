export const superMart = {
  martId: "SM-2025-001",
  name: "Global Super Mart",
  established: new Date("2005-03-25"),
  branches: [
    {
      branchId: "BR001",
      name: "Downtown Branch",
      openedDate: new Date("2015-05-10"),
      manager: {
        empId: "EMP001",
        name: "Alice Johnson",
        role: "General Manager",
        salary: 7500,
        joinedDate: new Date("2010-01-15")
      },
      location: {
        address: {
          street: "12 Main Avenue",
          city: "Capital City",
          postalCode: "44000",
          country: "Country Z"
        },
        geo: { lat: 33.6844, lng: 73.0479 }
      },
      departments: [
        {
          deptId: "DPT-GRO",
          name: "Groceries",
          categories: [
            {
              catId: "CAT-FRUIT",
              name: "Fruits",
              items: [
                {
                  itemId: "ITM-APPLE-01",
                  name: "Apple",
                  brand: "Fresh Farms",
                  price: 2.5,
                  stock: 150,
                  expiry: new Date("2025-10-20"),
                  discount: { type: "percentage", value: 10, validUntil: new Date("2025-10-15") }
                },
                {
                  itemId: "ITM-BANANA-01",
                  name: "Banana",
                  brand: "Tropical Harvest",
                  price: 1.1,
                  stock: 300,
                  expiry: new Date("2025-10-10"),
                  discount: null
                }
              ]
            },
            {
              catId: "CAT-VEG",
              name: "Vegetables",
              items: [
                {
                  itemId: "ITM-POTATO-01",
                  name: "Potato",
                  brand: "FarmFresh",
                  price: 0.9,
                  stock: 500,
                  expiry: new Date("2025-11-01"),
                  restockLevel: 100
                },
                {
                  itemId: "ITM-ONION-01",
                  name: "Onion",
                  brand: "VeggieKing",
                  price: 1.3,
                  stock: 400,
                  expiry: new Date("2025-12-15"),
                  restockLevel: 150
                }
              ]
            }
          ]
        },
        {
          deptId: "DPT-ELEC",
          name: "Electronics",
          categories: [
            {
              catId: "CAT-MOBILE",
              name: "Mobile Phones",
              items: [
                {
                  itemId: "ITM-IPHONE14",
                  name: "iPhone 14",
                  price: 1200,
                  stock: 12,
                  warrantyMonths: 24,
                  batch: {
                    batchNo: "BATCH-MOB-2025-01",
                    mfgDate: new Date("2025-01-15"),
                    supplier: "SUP-TECHWORLD"
                  }
                },
                {
                  itemId: "ITM-GALAXYS23",
                  name: "Samsung Galaxy S23",
                  price: 999,
                  stock: 20,
                  warrantyMonths: 18,
                  batch: {
                    batchNo: "BATCH-MOB-2025-02",
                    mfgDate: new Date("2025-02-20"),
                    supplier: "SUP-TECHWORLD"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  employees: [
    {
      empId: "EMP002",
      name: "Mark Lee",
      role: "Cashier",
      branch: "BR001",
      salary: 2200,
      joinedDate: new Date("2021-06-10"),
      shift: { start: "14:00", end: "22:00" }
    },
    {
      empId: "EMP003",
      name: "Sophia Patel",
      role: "Inventory Supervisor",
      branch: "BR001",
      salary: 3500,
      joinedDate: new Date("2019-09-05"),
      responsibilities: ["Stock Counting", "Reordering", "Supplier Liaison"]
    }
  ],

  customers: [
    {
      custId: "CUST001",
      name: "Ali Khan",
      loyaltyPoints: 350,
      membershipTier: "Gold",
      orders: [
        {
          orderId: "ORD1001",
          date: new Date("2025-09-28"),
          branch: "BR001",
          items: [
            { itemId: "ITM-APPLE-01", qty: 4, price: 2.5 },
            { itemId: "ITM-ONION-01", qty: 2, price: 1.3 }
          ],
          discountApplied: 2.0,
          total: 13.6,
          payment: { method: "Credit Card", status: "Paid", txnId: "TXN001" }
        }
      ]
    },
    {
      custId: "CUST002",
      name: "Maria Gomez",
      loyaltyPoints: 120,
      membershipTier: "Silver",
      orders: [
        {
          orderId: "ORD1002",
          date: new Date("2025-10-01"),
          branch: "BR001",
          items: [
            { itemId: "ITM-IPHONE14", qty: 1, price: 1200 }
          ],
          discountApplied: 50,
          total: 1150,
          payment: { method: "Cash", status: "Paid", txnId: "TXN002" }
        }
      ]
    }
  ],

  suppliers: [
    {
      supplierId: "SUP-FARMFRESH",
      name: "Farm Fresh Ltd",
      categories: ["Fruits", "Vegetables"],
      lastDelivery: {
        deliveryId: "DEL-FARM-2025-01",
        date: new Date("2025-09-20"),
        itemsDelivered: 1000,
        invoice: 4000
      }
    },
    {
      supplierId: "SUP-TECHWORLD",
      name: "Tech World Distributors",
      categories: ["Electronics"],
      lastDelivery: {
        deliveryId: "DEL-TECH-2025-02",
        date: new Date("2025-09-25"),
        itemsDelivered: 30,
        invoice: 25000
      }
    }
  ],

  warehouses: [
    {
      warehouseId: "WH001",
      location: "Industrial Zone A",
      capacity: 50000,
      currentStock: 35000,
      inventory: [
        {
          category: "Groceries",
          items: [
            { itemId: "ITM-APPLE-01", stock: 5000 },
            { itemId: "ITM-POTATO-01", stock: 8000 }
          ]
        },
        {
          category: "Electronics",
          items: [
            { itemId: "ITM-IPHONE14", stock: 5 },
            { itemId: "ITM-GALAXYS23", stock: 10 }
          ]
        }
      ],
      restockAlerts: [
        { itemId: "ITM-APPLE-01", level: "Low", reorderQty: 2000 },
        { itemId: "ITM-IPHONE14", level: "Critical", reorderQty: 10 }
      ]
    }
  ],

  reports: {
    sales: {
      daily: [
        { date: new Date("2025-09-30"), totalSales: 5200.45, transactions: 110 },
        { date: new Date("2025-10-01"), totalSales: 11300.75, transactions: 190 }
      ],
      monthly: [
        { month: "September 2025", totalSales: 152000.5, transactions: 3200 },
        { month: "October 2025", totalSales: 25000.75, transactions: 420 }
      ]
    },
    inventory: {
      shortages: [
        { itemId: "ITM-IPHONE14", branch: "BR001", currentStock: 12, minRequired: 20 },
        { itemId: "ITM-APPLE-01", branch: "BR001", currentStock: 150, minRequired: 300 }
      ]
    }
  },

  services: ["Home Delivery", "Online Orders", "Loyalty Program", "Gift Cards", "In-Store Pickup"]
};