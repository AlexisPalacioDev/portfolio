from pathlib import Path
import sys
from typing import List, Tuple

try:
    from pypdf import PdfReader
except Exception as e:
    sys.stderr.write(f"pypdf not available: {e}\n")
    sys.exit(2)


def extract_links(pdf_path: Path) -> List[Tuple[int, str]]:
    reader = PdfReader(str(pdf_path))
    links: List[Tuple[int, str]] = []
    for idx, page in enumerate(reader.pages, start=1):
        annots = page.get("/Annots")
        if not annots:
            continue
        for annot in annots:
            try:
                aobj = annot.get_object()
                action = aobj.get("/A")
                if action and action.get("/URI"):
                    links.append((idx, action.get("/URI")))
                else:
                    # Some PDFs store link in /Dest or /PA; skip for brevity
                    pass
            except Exception:
                continue
    return links


def main():
    if len(sys.argv) < 2:
        print("Usage: python tools/extract_pdf_links.py <pdf_path>")
        sys.exit(1)
    p = Path(sys.argv[1])
    if not p.exists():
        sys.stderr.write(f"File not found: {p}\n")
        sys.exit(1)
    links = extract_links(p)
    for page, url in links:
        print(f"p{page}: {url}")


if __name__ == "__main__":
    main()

