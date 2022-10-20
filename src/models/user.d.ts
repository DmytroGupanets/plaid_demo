declare module 'User' {
    interface Address {
        building: string | null
        street: string | null
        city: string | null
        region: string | null
        country: string | null
        zip: string | null
        formattedAddress: string | null
        unit?: string | null
    }

    interface User {
        id: string
        dob: { day: string; month: string; year: string } | null
        email: string
        firstName: string
        isEmailConfirmed: boolean
        isPhoneConfirmed: boolean
        lastName: string
        livingAddress: Address
        middleName?: string
        phone: string
        roles: string[]
        fbId?: string
        isAttachSofp?: boolean
        isSofpComplete?: boolean
        isSofpIgnore?: boolean
        isHaveMiddleName?: boolean
        isHiddenDebtAmount?: boolean
        countOfAvailableNegotiations: number
        stripeStatus: string
        stripeId: string
        isTrial: boolean
        AnsweredQuiz: import('hooks/useQuiz').QuizProps[]
        isRecurringPaymentsEnabled: boolean
        isNotificationsEnabled?: boolean
    }
}
