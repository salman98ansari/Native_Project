const JSON_DATA = {
  record: {
    data: {
      bank_name: 'HDFC Bank',
      type_of_loan: 'Personal Loan',
      issued_on: '25 Jan 2025',
      account_status: 'Active',
      amount_paid: '25,000',
      total_loan_amount: '50,000',
      loan_tenure: '12 Month',
      payment_percentage: '35%',
      payment_history: {
        last_updated_on: '05 May 2024',
        payment_summary: [
          {
            year: '2022',
            summary: [
              'NA',
              'NA',
              'PAID',
              'PAID',
              'PAID',
              'PAID',
              'PAID',
              'PAID',
              'DELAYED',
              'DELAYED',
              'NA',
              'NA',
            ],
          },
          {
            year: '2023',
            summary: [
              'NA',
              'NA',
              'NA',
              'NA',
              'NA',
              'PAID',
              'PAID',
              'PAID',
              'DELAYED',
              'PAID',
              'PAID',
              'NA',
            ],
          },
          {
            year: '2024',
            summary: [
              'NA',
              'PAID',
              'NA',
              'DELAYED',
              'NA',
              'PAID',
              'PAID',
              'PAID',
              'NA',
              'PAID',
              'PAID',
              'NA',
            ],
          },
        ],
      },
    },
  },
  metadata: {
    id: '6787c565ad19ca34f8ed9333',
    private: false,
    createdAt: '2025-01-15T14:25:41.899Z',
    collectionId: '6784e89ee41b4d34e476a0ee',
    name: 'Screen_two_updated.json',
  },
};

export const data = JSON_DATA?.record.data;
