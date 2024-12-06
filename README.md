# Galaxy Project

Whitestar internal solution for more business agility and innovation leveraged on digital transformation to enable a single and integrated asset management platform.

## Cypress Galaxy Project

UI Automation tests based on the menus and screens of the Galaxy Application. All scenarios are created according to the usability of users from different areas such as finance, real estate, etc.

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_git/Galaxy.Cypress
    cd Galaxy.Cypress
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```
   Ensure you're using Node.js version v22.1.0.
   
3. Open Cypress:
    ```bash
    npx cypress open
    ```

## VSCode Plugins

1. **Cucumber (Gherkin) Full Support (Alexander Krechik)**
   - Settings:
   ```json
   "cucumberautocomplete.steps": [
       "cypress/support/step_definitions/*.js"
   ],
   "cucumberautocomplete.strictGherkinCompletion": true,
   "cucumberautocomplete.syncfeatures": "**/*.feature"

2. Prettier - Code formatter
3. Material Icon Theme


## Additional

### Database Updates

In case the test environment database is reset (example: UAT database), execute the following SQL to ensure proper functioning of the Proposals and Payment Request tests, which require specific REPORT USER ID and DELEGATED settings.

USE ptsqldb002uat

-- REPORT TO Default User
UPDATE SECURITY.USERS SET REPORTTOUSERID = 1 WHERE ID = 2169 --Manager
UPDATE SECURITY.USERS SET REPORTTOUSERID = 4 WHERE ID = 2170
UPDATE SECURITY.USERS SET REPORTTOUSERID = 2170 WHERE ID = 1 --Head
UPDATE SECURITY.USERS SET REPORTTOUSERID = 1 WHERE ID = 2171 --Review

-- REPORT TO Amicable user
UPDATE SECURITY.USERS SET REPORTTOUSERID = 2195 WHERE ID = 2215 --Manager
UPDATE SECURITY.USERS SET REPORTTOUSERID = 4 WHERE ID = 2218
UPDATE SECURITY.USERS SET REPORTTOUSERID = 2218 WHERE ID = 2195 --Head
UPDATE SECURITY.USERS SET REPORTTOUSERID = 2195 WHERE ID = 2221 --Review

-- REPORT TO Legal Case User
UPDATE SECURITY.USERS SET REPORTTOUSERID = 2196 WHERE ID = 2216 --Manager
UPDATE SECURITY.USERS SET REPORTTOUSERID = 4 WHERE ID = 2219 
UPDATE SECURITY.USERS SET REPORTTOUSERID = 2219 WHERE ID = 2196 --Head
UPDATE SECURITY.USERS SET REPORTTOUSERID = 2196 WHERE ID = 2222 --Review

-- REPORT TO Real Estate User
UPDATE SECURITY.USERS SET REPORTTOUSERID = 2197 WHERE ID = 2217 --Manager
UPDATE SECURITY.USERS SET REPORTTOUSERID = 4 WHERE ID = 2220
UPDATE SECURITY.USERS SET REPORTTOUSERID = 2220 WHERE ID = 2197 --Head
UPDATE SECURITY.USERS SET REPORTTOUSERID = 2197 WHERE ID = 2223 --Review 

-- PROPOSAL TYPE AND STRATEGY -> MAX VALUE 999 AND MONTH
UPDATE AGREEMENTS.PROPOSALTYPEANDPROPOSALSTRATEGIES SET MAXPERIODTIMEUNITID = 6, MAXPERIODTIMEVALUE = 998

-- INSERT BUSINESS AREAS
DELETE FROM [AGREEMENTS].[PROPOSALTYPEANDPROPOSALSTRATEGIESBUSINESSAREAS]
INSERT INTO [AGREEMENTS].[PROPOSALTYPEANDPROPOSALSTRATEGIESBUSINESSAREAS]
           ([CREATED], [CREATEDBY], [CREATEDONBEHALFOF], [MODIFIED], [MODIFIEDBY], [MODIFIEDONBEHALFOF], [ISDELETED], [PROPOSALTYPEANDPROPOSALSTRATEGYID], [BUSINESSAREAID])
SELECT DISTINCT GETDATE(), 1, NULL, GETDATE(), 1, NULL, 0, PTPS.ID, 1 
FROM AGREEMENTS.PROPOSALTYPEANDPROPOSALSTRATEGIES PTPS
UNION
SELECT DISTINCT GETDATE(), 1, NULL, GETDATE(), 1, NULL, 0, PTPS.ID, 6 
FROM AGREEMENTS.PROPOSALTYPEANDPROPOSALSTRATEGIES PTPS

-- INSERT USER DELEGATES FOR GALAXY
DECLARE
    @StartDate DateTime = DATEADD(HOUR, -1, GETDATE()),
    @EndDate DateTime = DATEADD(YEAR, 1, GETDATE())

INSERT INTO [Security].[UserDelegations] ([UserId], [DelegatedUserId], [Created], [CreatedBy], [Modified], [ModifiedBy], [IsDeleted], [EndDate], [StartDate], [CreatedOnBehalfOf], [ModifiedOnBehalfOf])
SELECT 2169, 1, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2169 AND DelegatedUserId = 1) --Default Galaxy User Delegating For Manager

UNION
SELECT 2170, 1, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2170 AND DelegatedUserId = 1) --Default Galaxy User Delegating For Head

UNION
SELECT 2171, 1, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2171 AND DelegatedUserId = 1) --Default Galaxy User Delegating For Review

UNION
SELECT 2215, 2195, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2215 AND DelegatedUserId = 2195) --Amicable Galaxy User Delegating For Manager

UNION
SELECT 2218, 2195, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2218 AND DelegatedUserId = 2195) --Amicable Galaxy User Delegating For Head

UNION
SELECT 2221, 2195, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2221 AND DelegatedUserId = 2195) --Amicable Galaxy User Delegating For Review

UNION
SELECT 2216, 2196, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2216 AND DelegatedUserId = 2196) --Legal Case Galaxy User Delegating For Manager

UNION
SELECT 2219, 2196, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2219 AND DelegatedUserId = 2196) --Legal Case Galaxy User Delegating For Head

UNION
SELECT 2222, 2196, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2222 AND DelegatedUserId = 2196) --Legal Case Galaxy User Delegating For Review

UNION
SELECT 2217, 2197, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2217 AND DelegatedUserId = 2197) --Real Estate Galaxy User Delegating For Manager

UNION
SELECT 2220, 2197, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2220 AND DelegatedUserId = 2197) --Real Estate Galaxy User Delegating For Head

UNION
SELECT 2223, 2197, GETDATE(), 1, GETDATE(), 1, 0, @EndDate, @StartDate, 1, 1 
WHERE NOT EXISTS (SELECT id FROM [Security].[UserDelegations] WHERE UserId = 2223 AND DelegatedUserId = 2197) --Real Estate Galaxy User Delegating For Review



## Additional to Manual Function Tests

In test environments such as UAT DM, UAT, PP, and/or DEV, it is possible to log in with another user by setting the 'testUserId' variable in the browser's application.


It is necessary to assign the users manager3 and automation3 to the Queues LT - Pedido de Retificação Payment Request and LT - Pedido de Retificação Tax Documents to ensure proper functioning of the Payment Request, Tax Documents, and Legal Notifications tests.
