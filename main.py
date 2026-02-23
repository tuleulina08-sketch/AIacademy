from fastapi import FastAPI
from pydantic import BaseModel
import sys
from io import StringIO

app = FastAPI()

# Браузерден келетін деректер құрылымы
class CodeRequest(BaseModel):
    code: str

@app.post("/run-python")
async def run_python_code(request: CodeRequest):
    # Стандартты шығысты (print) ұстап қалу үшін
    old_stdout = sys.stdout
    redirected_output = sys.stdout = StringIO()
    
    try:
        # Кодты қауіпсіз іске қосу (Бұл прототип үшін)
        exec(request.code)
        result = redirected_output.getvalue()
    except Exception as e:
        result = f"Қате: {str(e)}"
    finally:
        sys.stdout = old_stdout
        
    return {"output": result}

# Серверді іске қосу нұсқауы: uvicorn main:app --reload