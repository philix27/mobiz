import { registerEnumType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';


registerEnumType($Enums.CountryCode, {
    name: 'country',
});

registerEnumType($Enums.CredentialsStatus, {
    name: 'CredentialsStatus',
});


registerEnumType($Enums.CountryCode, {
    name: 'CountryCode',
});


registerEnumType($Enums.UserRole, {
    name: 'UserRole',
});

registerEnumType($Enums.TransactionCategory, {
    name: 'TransactionCategory',
});

registerEnumType($Enums.TransactionsMode, {
    name: 'TransactionsMode',
});

registerEnumType($Enums.TransactionStatus, {
    name: 'TransactionStatus',
});
