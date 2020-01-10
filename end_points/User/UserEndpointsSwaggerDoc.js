
/**
* @swagger
* /api/user/registration:
*   post:
*     tags:
*       - Users
*     description: Users registration testing
*     produces:
*       - application/json
*     consumes:
*       - application/x-www-form-urlencoded
*     parameters:
*       - name: username
*         in: formData
*         type: string
*         required: true
*         description: Please provide unique username
*       - name: password
*         in: formData
*         type: string
*         format: password
*         required: true
*         description: Please provide password
*       - name: userType
*         in: formData
*         type: string
*         format: string
*         required: true
*         description: Please provide valid user type
*     responses:
*       201:
*         description: registered successfully
*       409:
*         description: registered successfully
*       200:
*         description: OK
*/


/**
* @swagger
* /api/user/{id}:
*   delete:
*     security:
*       - bearerAuth: []
*     tags:
*       - Users
*     description: This is for delete
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         in: path
*         type: string
*         required: true
*         description: Please provide user id
*     responses:
*       201:
*         description: registered successfully
*       409:
*         description: registered successfully
*       200:
*         description: OK
*/



/**
* @swagger
* /api/user/login:
*   post:
*     tags:
*       - Users
*     description: Users Login
*     produces:
*       - application/json
*     consumes:
*       - application/x-www-form-urlencoded
*     parameters:
*       - name: username
*         in: formData
*         type: string
*         required: true
*         description: Please provide username
*       - name: password
*         in: formData
*         type: string
*         format: password
*         required: true
*         description: Please provide password
*     responses:
*       201:
*         description: Logged in successfully
*       409:
*         description: 409 forbidden
*       200:
*         description: Logged in successfully
*/