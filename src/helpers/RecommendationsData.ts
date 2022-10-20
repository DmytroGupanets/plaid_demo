export const recommendationData = [
    {
        trigger: 'On user registration completion',
        frequency: 'One time',
        generalDescription: 'После регистрации добавляется пользователю, чтобы направить его на добавление лоана. Добавляется 1 раз и убирается после добавления хотябы одного лоана, по запросу POST /loan.',
        otherInfo: {
            type: 'LOAN',
            slug: 'LOANS_TO_ADD',
            destination: 'LOANS_PAGE',
            action: 'Link your first loan',
            message: 'Link your loans # all in one place',
            accent_text: 'to stay on top of your progress',
            explanation: [
                {
                    label: 'How does this work?',
                    content: 'You will connect your loan provider to the Lever app, and we will advise the best way to become debt-free.',
                },
                {
                    label: 'Why this recommendation?',
                    content: "It's the first step in the journey to becoming debt- free.Link your loans and get personalized recommendations.",
                },
            ],
        }
    },
    {
        trigger: 'On user registration completion',
        frequency: 'One time',
        generalDescription: 'После регистрации добавляется пользователю, чтобы направить его на enrollment и assessment plan. Добавляется 1 раз и убирается после выполнения assessment plan, по запросу POST /enrollment',
        otherInfo: {
            type: 'ASSESSMENT',
            slug: 'MAKE_ASSESSMENT_PLAN',
            destination: 'ASSESSMENT_PAGE',
            action: 'Take an Assessment',
            message: 'Check federal plans available for you #',
            accent_text: 'to see how you can save',
            explanation: [
                {
                    label: 'How does this work?',
                    content: 'Just take a 2 min assessment to identify which plans are available for you. Answer a few questions and see available options.',
                },
                {
                    label: 'Why this recommendation?',
                    content: 'Most of the loans are eligible for federal repayment programs. It could reduce the amount of the payment your monthly bill.',
                },
            ],
        }
    },
    {
        trigger: 'If new income transaction isn`t salary',
        frequency: 'Every day',
        generalDescription: 'После добавление checking account через виджет Plaid, регистрируется планировщик на беке, который каждый день в 23:45 запускается чтобы получить все сегодняшние транзакции и среди входящих на счет транзакций, если таковые есть и если это не зарплата, создается эта рекомендация, чтобы предложить пользователю отправить екстра доход на погащения долга. Эта рекомендация на паузе, т.к. возникли трудности с определением поступающих средств именно как зарплата.',
        otherInfo: {
            type: 'PAYMENT',
            slug: 'EXTRA_INCOME_PAYMENT_SUGGESTION',
            destination: 'PAYMENT_PAGE',
            amount: 'Amount in cents',
            action: 'Make one time payment',
            message: 'message #',
            accent_text: 'accent_text',
            explanation: [
                {
                    label: 'explanation label 1',
                    content: 'explanation content 1',
                },
                {
                    label: 'explanation label 2',
                    content: 'explanation content 2',
                },
            ],
        }
    },
    {
        trigger: 'Add checking account',
        frequency: '2 hours after adding checking account',
        generalDescription: 'Через два часа после добавления каждого checking account через виджет Plaid, проверяются транзакции по этой карточке. На основании истории транзакций вычисляется сумма, сколько бы пользователь сохранил средств, если бы использовал на протяжении года округление до целого доллара при каждой оплате. В рекомендации указана сумма, и период, за который удалось собрать данные по транзакциям (12, 6, 3 или 1 месяц).',
        otherInfo: {
            type: 'ROUND_UP',
            slug: 'SET_ROUND_UP',
            destination: 'ROUND_UP_PAGE',
            action: 'Setup round up',
            message: `If you were using round up feature for atleast # you would save AMOUNT$ over a #MONTHES month(-es)`,
            accent_text: '1$ for every purchase,',
            explanation: [
                {
                    label: 'explanation label 1',
                    content: 'explanation content 1',
                },
                {
                    label: 'explanation label 2',
                    content: 'explanation content 2',
                },
            ],
        }
    },
    {
        trigger: 'When current month income > average monthly income over last year',
        frequency: 'Every day',
        generalDescription: 'После добавление checking account через виджет Plaid, регистрируется планировщик на беке, который каждый день в 23:45 запускается чтобы получить все сегодняшние транзакции. По транзакциям за последний год определяется СРЕДНЯЯ СУММА ВХОДЯЩИХ транзакций ("AVERAGE MONTHLY INCOME") на счет за 12 месяцев (исключая настоящий месяц и, если первый месяц истории транзкаций входит в эти 12, его тоже исключаем) и определяется СУММА ВХОДЯЩИХ транзакций ЗА ЭТОТ МЕСЯЦ ("PRESENT MONTH INCOME"). Если сумма входящих транзакций за этот месяц превысила среднюю сумму транзакций за последний год, добавляем эту рекомендацию. Рекомендация уникальна для контректного checking account и если в последующие дни будут новые входящие транзакции, и следовательно, сумма будет расти, то сумма указанная в этой рекомендации будет каждый раз обновляться.',
        otherInfo: {
            type: 'PAYMENT',
            slug: 'AVERAGE_MONTHLY_INCOME_EXCEED',
            destination: 'PAYMENT_PAGE',
            amount: 'Amount in cents',
            action: 'Make one time payment',
            message: `Additional income comparing average monthly income over a year and this month income at # in amount of AMOUNT$`,
            accent_text: `ACCOUNT_NAME`,
            explanation: [
                {
                    label: 'explanation label 1',
                    content: 'explanation content 1',
                },
                {
                    label: 'explanation label 2',
                    content: 'explanation content 2',
                },
            ],
        }
    },
    {
        trigger: 'When current month expenses < average monthly expenses over the same period during last year',
        frequency: 'Twise a month at evening (on 15th every month and last day of the month)',
        generalDescription: 'После добавление checking account через виджет Plaid, регистрируется планировщик на беке, который каждый день в 23:45 запускается чтобы получить все сегодняшние транзакции. Если это вечер 15-го числа, либо последнее число месяца отправляется запрос на получение транзакций. По транзакциям за последний год определяется СРЕДНЯЯ СУММА ИСХОДЯЩИХ транзакций ("AVERAGE FIRST/SECOND HALF OF THE MONTH EXPENSES") за ту половину месяца, по которой происходит это событие (1ая половина месяца (1ое по 15ое число включительно), либо 2ая половина месяца (с 16го по последний день месяца)), а так же СУММА ИСХОДЯЩИХ транзакций за эту половину месяца. Если расходы за это месяц меньше, чем средние за аналогичную половину месяца в течении последнего года, то добавляется эта рекомендация.',
        otherInfo: {
            type: 'PAYMENT',
            slug: 'LESS_THEN_AVERAGE_HALF_MONTHLY_EXPENSES',
            destination: 'PAYMENT_PAGE',
            amount: 'Amount in cents',
            action: 'Make one time payment',
            message: `Less expenses then average during last two weeks #`,
            accent_text: 'pay your extra savings for loan',
            explanation: [
                {
                    label: 'explanation label 1',
                    content: 'explanation content 1',
                },
                {
                    label: 'explanation label 2',
                    content: 'explanation content 2',
                },
            ],
        }
    },
    {
        trigger: 'When income last month - expenses last month > 0',
        frequency: 'On every 1st day of month at evening',
        generalDescription: 'После добавление checking account через виджет Plaid, регистрируется планировщик на беке, который каждый день в 23:45 запускается чтобы получить все сегодняшние транзакции. По транзакциям за последний месяц определеяем баланс между ВХОДИЩИМИ и ИСХОДЯЩИМИ транзакциями, если входящих средств было больше, добавляется эта рекомендация с предложением потратить эту разницу на погашение долга.',
        otherInfo: {
            type: 'PAYMENT',
            slug: 'MORE_INCOME_THEN_EXPENSES_FOR_LAST_MONTH',
            destination: 'PAYMENT_PAGE',
            amount: 'Amount in cents',
            action: 'Make one time payment',
            message: `You saved more money then spend during last month #`,
            accent_text: 'pay your extra savings for loan',
            explanation: [
                {
                    label: 'explanation label 1',
                    content: 'explanation content 1',
                },
                {
                    label: 'explanation label 2',
                    content: 'explanation content 2',
                },
            ],
        }
    },
    {
        trigger: 'When average income per month greater then average expenses per month for the last 6 monthes',
        frequency: 'On every 1st JAN and 1st JUN at evening',
        generalDescription: 'После добавление checking account через виджет Plaid, регистрируется планировщик на беке, который каждый день в 23:45 запускается чтобы получить все сегодняшние транзакции. На 1ое января и на 1ое июня получаем все транзакции за последние пол года и определяем среднее значения INCOME и EXPENSES. Если INCOME больше, то добавляется эта рекомендация в которой предлагаем пользователю половину от суммы, которую он аккумулирует на счете создать recurring payments, для погашения долга.',
        otherInfo: {
            type: 'RECURRING_PAYMENTS',
            slug: 'SET_RECURRING_PAYMENTS_IF_AVR_INCOME_MORE_AVR_EXPENSES',
            destination: 'RECURRING_PAYMENT_PAGE',
            amount: 'Amount in cents',
            action: 'Setup recurring payments',
            message: `During a year you have saved AMOUNT$ half of that amount can be #`,
            accent_text: `set as monthly recurring payment for loan AMOUNT$/2 /mo`,
            explanation: [
                {
                    label: 'explanation label 1',
                    content: 'explanation content 1',
                },
                {
                    label: 'explanation label 2',
                    content: 'explanation content 2',
                },
            ],
        }
    }
]