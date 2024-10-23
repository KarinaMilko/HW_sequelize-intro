"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "preorders",
      [
        {
          phone_id: 1,
          order_date: "2024-09-19",
          status: "pending",
          quantity: 2,
          customer_phone: "+380501234560",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          phone_id: 2,
          order_date: "2024-09-20",
          status: "confirmed",
          quantity: 1,
          customer_phone: "+380502345678",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          phone_id: 3,
          order_date: "2024-09-21",
          status: "done",
          quantity: 3,
          customer_phone: "+380503456789",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          phone_id: 1,
          order_date: "2024-09-22",
          status: "pending",
          quantity: 4,
          customer_phone: "+380504567890",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          phone_id: 2,
          order_date: "2024-09-23",
          status: "confirmed",
          quantity: 5,
          customer_phone: "+380505678901",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          phone_id: 3,
          order_date: "2024-09-24",
          status: "pending",
          quantity: 2,
          customer_phone: "+380506789012",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          phone_id: 4,
          order_date: "2024-09-25",
          status: "done",
          quantity: 1,
          customer_phone: "+380507890123",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          phone_id: 5,
          order_date: "2024-09-26",
          status: "pending",
          quantity: 3,
          customer_phone: "+380508901234",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          phone_id: 4,
          order_date: "2024-09-27",
          status: "confirmed",
          quantity: 2,
          customer_phone: "+380509012345",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          phone_id: 5,
          order_date: "2024-09-28",
          status: "done",
          quantity: 1,
          customer_phone: "+380501234567",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("preorders", null, {});
  },
};
