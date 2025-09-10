import sys
from pathlib import Path

try:
    from pdfminer.high_level import extract_text
except Exception as e:
    sys.stderr.write(f"pdfminer not available: {e}\n")
    sys.exit(2)


def main():
    if len(sys.argv) < 2:
        print("Usage: python tools/extract_pdf_text.py <pdf_path>")
        sys.exit(1)
    pdf_path = Path(sys.argv[1])
    if not pdf_path.exists():
        sys.stderr.write(f"File not found: {pdf_path}\n")
        sys.exit(1)
    text = extract_text(str(pdf_path))
    # Limit default output length only if environment truncates aggressively
    print(text)


if __name__ == "__main__":
    main()

