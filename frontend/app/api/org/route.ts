    // app/api/users/route.js

    export async function GET(request) {
      // Handle GET requests for /api/users
      return new Response(JSON.stringify({ message: 'Get all users' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      });
    }

    export async function POST(request) {
      // Handle POST requests for /api/users
      const body = await request.json(); // Access the request body
      return new Response(JSON.stringify({ message: 'Create a new user', data: body }), {
        headers: { 'Content-Type': 'application/json' },
        status: 201,
      });
    }